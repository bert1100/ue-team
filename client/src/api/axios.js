import fetch from '../config/axios_config';

export function uploadImgs(imgs) {
	return fetch({
		header: {'Content-Type': 'multipart/form-data' },
		url: '/uploads/',
		method: 'post',
		data: imgs
	});
}

/*
标签管理
 */
//新增
export function addLabel(label) {
	return fetch({
		url: '/labels/',
		method: 'post',
		data: label
	});
}
//请求标签列表
export function getLabels() {
	return fetch({
		url: '/labels/',
		method: 'get'
	});
}

/*
作者列表
 */
export function getUsers() {
	return fetch({
		url: '/users/',
		method: 'get',
	});
}

/*
发布文章
 */

//发布资源
export function postResources(article) {
	return fetch({
		header: {'Content-Type': 'application/x-www-form-urlencoded'},
		url: '/resources/',
		method: 'post',
		data: article
	});
}
//修改文章
export function putResources(id,data) {
	return fetch({
		url: '/resources/'+id,
		method: 'put',
		data: data
	})
}

/*
字体图标
 */

//文章列表
export function getArticle(name,params = {}) {
	return  fetch({
		url: name+'/resources/',
		method: 'get',
		params: params
	})
}

//获取文章详细
export function getArticleDetail(id) {
	return fetch({
		url: '/resources/'+id,
		method: 'get'
	})
}

//获取左边菜单
export function getLeftMenuList(name) {
	return new Promise((resolve,reject) => {
		fetch({
			url: name+'/categories/',
			method: 'get'
		}).then(response=>resolve(response))
		.catch(()=>reject)
	})
	
}
export function postCategories(obj) { //{name: '',des: '',parent: 'parentid',id: ''}
	return new Promise((resolve,reject) => {
		fetch({
			url: '/categories/',
			method: 'post',
			data: obj
		}).then(response=>resolve(response))
		.catch(()=>reject)
	})
	
}
export function putCategories(obj) { //{name: '',des: '', id: '',parent: 'parentid'}
	return new Promise((resolve,reject) => {
		fetch({
			url: '/categories/'+obj.id,
			method: 'put',
			data: obj
		}).then(response=>resolve(response))
		.catch(()=>reject)
	})
	
}
export function deleteCategories(obj) { //{name: '',des: '', id: '',parent: 'parentid'}
	return new Promise((resolve,reject) => {
		fetch({
			url: '/categories/'+obj.id,
			method: 'delete'
		}).then(response=>resolve(response))
		.catch(()=>reject)
	})
	
}
