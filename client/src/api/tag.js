var Mock = require('mockjs'); //生成随机数据
// var Random = Mock.Random;
// Random.title();
// var icon_tag_list = Mock.mock({
// 	'activeKey': 1,
// 	'icons|10': [
// 		{ 
// 		'id|+1': 1,
// 		'title': '@title(1)',
// 		'titleEn': '@title(1)',
// 		'path': '/docs/icons/introduce'
// 	}]
// })
var icon_tag_list = {
	icons: [
		{
			id: 1,
			title: '标签1',
			titleEn: '标签1',
			path: '/docs/icons/introduce'
		},
		{
			id: 2,
			title: '标签2',
			titleEn: '标签2',
			path: '/docs/icons/introduce1'
		},
		{
			id: 3,
			title: '标签3',
			titleEn: '标签3',
			path: '/docs/icons/introduce2'
		},
		{
			id: 4,
			title: '标签4',
			titleEn: '标签4',
			path: '/docs/icons/introduce3'
		}
	]
}

export default icon_tag_list;