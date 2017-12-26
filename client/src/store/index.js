import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

import article from './article';
import tags from './tags';
import user from './user';
import categories from './categories';

const store = new Vuex.Store({
    modules: {
        article,
        tags,
        user,
        categories
    }
});

export default store;