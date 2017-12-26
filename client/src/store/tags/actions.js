import { getLabels,addLabel } from '../../api/axios';

export default {
	addtagevent: ({commit}, param) => commit('ADDTAGEVENT', {items: param}),
	uploadtagevent: ({commit}) => {
		getLabels().then((res) => {
            commit('UPLOADTAGEVENT', {items: res.data.labels })
        });
	}
}