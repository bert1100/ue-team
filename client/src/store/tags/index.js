import actions from './actions.js';
import mutations from './mutations.js';
import getters from './getters.js';

const state = {
	tagsList: [], //标签列表
	newTag: {} //新增标签
}

export default {
    state,
    getters,
    actions,
    mutations
}