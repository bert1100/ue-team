import actions from './actions.js';
import mutations from './mutations.js';
import getters from './getters.js';

const state = {
	userlist: [], //作者列表
	userinfo: {},
	token: ''
}

export default {
    state,
    getters,
    actions,
    mutations
}