import { getUsers } from '../../api/axios';
export default {
	postuserlist: ({commit}) => {
		getUsers().then((res) => {
            commit('POSTUSERLIST', {items: res.data.users })
        });
	}
}