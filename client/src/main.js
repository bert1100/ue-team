import 'babel-polyfill'; //ie11兼容
import Vue from 'vue';

import VueRouter from 'vue-router';
import Routers from './router';

import Util from './libs/util';

import iView from 'iview';
import 'iview/dist/styles/iview.css';

import Env from './config/env';

import bus from './components/bus';

import mavonEditor from 'mavon-editor';
import 'mavon-editor/dist/css/index.css';

import moment from 'moment';

import Vuex from 'vuex';
import store from './store/index';

import App from './components/app.vue';

import fetch from './config/axios_config';


Vue.use(mavonEditor)
Vue.use(VueRouter);
Vue.use(iView);
Vue.use(Vuex);

// 注册全局过滤器
Vue.filter('date-string', function (value) {// value就是日期值
  return moment(value).format('YYYY-MM-DD')
})
Vue.filter('selectColor', function (value,o) {// value就是日期值
    let color = '';
    for(let i = 0;i<o.length;i++){
        if(value==o[i]._id){
           color =  o[i].color;
           break;
        }
    }
    return color;
})
Vue.filter('selectName', function (value,o) {// value就是日期值
    let name = '';
    for(let i = 0;i<o.length;i++){
        if(value===o[i]._id){
           name = o[i].name;
           break;
        }
    }
    return name;
})

// 开启debug模式
Vue.config.debug = true;

// 路由配置
const RouterConfig = {
    routes: Routers
};
if (Env != 'local') {
    RouterConfig.mode = 'history';
}
const router = new VueRouter(RouterConfig);

router.beforeEach((to, from, next) => {
    iView.LoadingBar.start();
    bus.loading = true;
    Util.title(to.meta.title);
    next();
});

router.afterEach((to, from, next) => {
    iView.LoadingBar.finish();
    bus.loading = false;
    window.scrollTo(0, 0);
});
store.dispatch('postCategoriesList', '');
store.dispatch('uploadtagevent');
store.dispatch('postuserlist');
new Vue({
    el: '#app',
    router: router,
    store: store,
    render: h => h(App),
    created() {
        // 自定义的 axios 响应拦截器
        fetch.interceptors.response.use((response) => {
            // 判断一下响应中是否有 token，如果有就直接使用此 token 替换掉本地的 token。你可以根据你的业务需求自己编写更新 token 的逻辑
            var token = response.headers.authorization
            if (token) {
                // 如果 header 中存在 token，那么触发 refreshToken 方法，替换本地的 token
                this.$store.dispatch('refreshToken', token)
            }
            return response;
        }, (error) => {
            switch (error.response.status) {
                // 如果响应中的 http code 为 401，那么则此用户可能 token 失效了之类的，我会触发 logout 方法，清除本地的数据并将用户重定向至登录页面
                case 401:
                    return this.$store.dispatch('logout')
                    break
                // 如果响应中的 http code 为 400，那么就弹出一条错误提示给用户
                case 400:
                    return this.$Message.error(error.response.data.error)
                    break
                 // 如果响应中的 http code 为 400，那么就弹出一条错误提示给用户
                case 403:
                    return this.$Message.error(error.response.data.error)
                    break
            }
            return Promise.reject(error)
        })
    }
});
