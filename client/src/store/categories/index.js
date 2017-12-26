import actions from './actions.js';
import mutations from './mutations.js';
import getters from './getters.js';

const state = {
	categorieslist: [], //菜单列表
	activeKey: '' //选中的菜单
}

export default {
    state,
    getters,
    actions,
    mutations
}