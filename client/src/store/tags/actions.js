import { getLabels,addLabel } from '../../api/axios';

export default {
	addtagevent: ({commit,state}, param) => {
		addLabel(param).then((res) => {     
            state.tagsList.push(res.data.label)
            commit('ADDTAGEVENT', {items: res.data.label})
        }).catch((err)=>{
            console.log(err);
        });
	},
	uploadtagevent: ({commit}) => {
		getLabels().then((res) => {
            commit('UPLOADTAGEVENT', {items: res.data.labels })
        });
	}
}