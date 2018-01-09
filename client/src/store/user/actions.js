import axios from '../../config/axios_config';
import { getUsers,login,register } from '../../api/axios';
export default {
	postuserlist: ({commit}) => {
		getUsers().then((res) => {
            commit('POSTUSERLIST', {items: res.data.users })
        });
	},
	login: ({dispatch, commit}, userinfo) => {
        return new Promise((resolve, reject) => {
            login(userinfo).then(response => {
                axios.defaults.headers.common['Authorization'] = response.data.token;
                commit('login',response.data);
                resolve();
            }).catch(error => {
               reject(error.response)
            })
        });
    },
	register: ({dispatch, commit}, userinfo) => {
        register(userinfo).then(response => {
        	console.log(response.data)
        });
	}

}