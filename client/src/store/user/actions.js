import { getUsers,login } from '../../api/axios';
export default {
	postuserlist: ({commit}) => {
		getUsers().then((res) => {
            commit('POSTUSERLIST', {items: res.data.users })
        });
	},
	login:({dispatch, commit}, userinfo) => {
        login(userinfo).then(response => {
        	console.log(response.status)
        })
	}
}