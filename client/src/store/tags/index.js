import actions from './actions.js';
import mutations from './mutations.js';
import getters from './getters.js';

const state = {
	tagsList: [], //标签列表
	selectTag: [] //选中的标签列表
}

export default {
    state,
    getters,
    actions,
    mutations
}