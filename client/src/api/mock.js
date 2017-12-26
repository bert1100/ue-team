var Mock = require('mockjs'); //生成随机数据
var Random = Mock.Random;
Random.title();
Random.paragraph(20);
var icon_list = Mock.mock({
	'list|5': [{ // 属性 list 的值是一个数组，其中含有 1 到 10 个元素
		// 属性 id 是一个自增数，起始值为 1，每次增 1
		'id|+1': 1,
		'title': '@title',
		'paragraph': '@paragraph',
		 'label': [
		 	{
		 		'name': "标签1",
		 		'color': "#2d8cf0"
		 	},
		 	{
		 		'name': "标签2",
		 		'color': "#19be6b"
		 	},
		 	{
		 		'name': "标签3",
		 		'color': "#ed3f14"
		 	},
		 	{
		 		'name': "标签4",
		 		'color': "#f90"
		 	},
		 	{
		 		'name': "标签5",
		 		'color': "#1c2438"
		 	}
		 ]
	}]
})

export default icon_list;