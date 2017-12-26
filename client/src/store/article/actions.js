export default {
	addevent: ({commit}, param) => commit('ADDEVENT', {items: param}),
	editevent: ({commit},param) => commit('EDITEVENT', {items: param})
}