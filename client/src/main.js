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


Vue.use(mavonEditor)
Vue.use(VueRouter);
Vue.use(iView);
Vue.use(Vuex);

// 注册全局过滤器
Vue.filter('date-string', function (value) {// value就是日期值
  return moment(value).format('YYYY-MM-DD')
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
    render: h => h(App)
});
