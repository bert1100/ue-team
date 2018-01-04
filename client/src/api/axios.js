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
	return fetch({
		url: name+'/categories/',
		method: 'get'
	})
}