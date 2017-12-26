import { getLeftMenuList } from '../../api/axios';
export default {
	postCategoriesList: ({commit, state},param) => {
		getLeftMenuList(param).then((res) => {
			let categories = [];
			res.data.categories.map((item) => {
                categories.push(item)
            });
            commit('POSTCATEGORIESLIST', {items: categories });
        });
	},
	setmenuactive: ({commit},param) => commit('MENUACTIVE', {items: param})
}