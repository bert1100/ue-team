import 'babel-polyfill'; //ie11兼容
import Vue from 'vue';
import VueRouter from 'vue-router';
import VueI18n from 'vue-i18n';
import Locales from './menu';
import App from './components/app.vue';
import Routers from './router';
import Util from './libs/util';
import iView from 'iview';
import zhLocale from 'iview/dist/locale/zh-CN';
import enLocale from 'iview/dist/locale/en-US';
import Env from './config/env';
import bus from './components/bus';
import 'iview/dist/styles/iview.css';
import mavonEditor from 'mavon-editor';
import 'mavon-editor/dist/css/index.css';
import moment from 'moment';
import Vuex from 'vuex';
import store from './store/index';


Vue.use(mavonEditor)
Vue.use(VueRouter);
Vue.use(VueI18n);
Vue.use(iView);
Vue.use(Vuex);

// 注册全局过滤器
Vue.filter('date-string', function (value) {// value就是日期值
  return moment(value).format('YYYY-MM-DD')
})

// 开启debug模式
Vue.config.debug = true;

// 设置语言
const navLang = navigator.language;
const localLang = (navLang === 'zh-CN' || navLang === 'en-US') ? navLang : false;
const lang = window.localStorage.getItem('language') || localLang || 'zh-CN';

Vue.config.lang = lang;
bus.lang = lang;
bus.$on('on-change-lang', (lang, path) => {
    // Vue.config.lang = lang;
    // bus.lang = lang;
    window.localStorage.setItem('language', lang);
    window.location.href = path;
});

// 多语言配置
const locales = Locales;
const mergeZH = Object.assign(zhLocale, locales['menu']);
const mergeEN = Object.assign(enLocale, locales['en-US']);
Vue.locale('zh-CN', mergeZH);
Vue.locale('en-US', mergeEN);

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
    // if (_hmt) {
    //     _hmt.push(['_trackEvent', 'page', to.path]);
    // }
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
