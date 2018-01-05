import { getLeftMenuList, postCategories, putCategories, deleteCategories} from '../../api/axios';
export default {
	postCategoriesList: ({commit, state},param) => {
		getLeftMenuList(param).then( (res) => {
			let categories = [];
			res.data.categories.map((item) => {
                categories.push(item)
            });
            commit('POSTCATEGORIESLIST', {items: categories });
        });
	},
	postCategories: ({dispatch, commit, state},param) => {
		postCategories(param).then( (res) => {
			return dispatch('postCategoriesList','');
        });
	},
	putCategories: ({dispatch, commit, state},param) => {
		putCategories(param).then( (res) => {
			return dispatch('postCategoriesList','');
        });
	},
	deleteCategories: ({dispatch, commit, state},param) => {
		deleteCategories(param).then( (res) => {
			return dispatch('postCategoriesList','');
        });
	}
}