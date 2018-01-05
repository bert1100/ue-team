
const routers = [
	{
		path: '/',
        meta: {
            title: '学信网前端技术看板',
            name: ''
        },
        component: (resolve) => require(['./views/index.vue'], resolve)
	},
    {
        path: '/404',
        meta: {
            title: '学信网前端技术看板',
            name: ''
        },
        component: (resolve) => require(['./views/errorpage/404.vue'], resolve)
    },
    {
        path: '/login',
        meta: {
            title: '学信网前端技术看板_登录',
            name: ''
        },
        component: (resolve) => require(['./views/login/login.vue'], resolve)
    },
    {
        path: '/register',
        meta: {
            title: '学信网前端技术看板_注册',
            name: ''
        },
        component: (resolve) => require(['./views/login/register.vue'], resolve)
    },
    {
        path: '/resetpassword',
        meta: {
            title: '学信网前端技术看板_找回密码',
            name: ''
        },
        component: (resolve) => require(['./views/login/resetpassword.vue'], resolve)
    },
    {
        path: '/post/article',
        meta: {
            title: '学信网前端技术看板_发文章',
            name: 'post'
        },
        component: (resolve) => require(['./views/post/post_article'], resolve)
    },
    {
        path: '/update/article/:id',
        meta: {
            title: '学信网前端技术看板_修改文章',
            name: 'post'
        },
        component: (resolve) => require(['./views/post/update_article'], resolve),
        props: { isEdit: true }
    },
    {
        path: '/docs/detials/:id',
        meta: {
            title: '学信网前端技术看板_技术集',
            name: 'details'
        },
        component: (resolve) => require(['./views/teccol/detials.vue'], resolve)
    },
	{
        path: '/docs/icon',
        meta: {
            title: '学信网前端技术看板_图标库',
            name: 'icon'
        },
        component: (resolve) => require(['./views/icons/introduce.vue'], resolve)
    },
    {
        path: '/docs/teccol',
        meta: {
            title: '学信网前端技术看板_技术集',
            name: 'teccol'
        },
        component: (resolve) => require(['./views/teccol/get_resources.vue'], resolve)
    },
    {
        path: '/docs/teccol/:id',
        meta: {
            title: '学信网前端技术看板_技术集',
            name: 'teccol'
        },
        component: (resolve) => require(['./views/teccol/get_resources.vue'], resolve)
    },
    {
        path: '/docs/favor',
        meta: {
            title: '学信网前端技术看板_网络资源库',
            name: 'favor'
        },
        component: (resolve) => require(['./views/favor/introduce.vue'], resolve),
    },
    {
        path: '/member',
        meta: {
            title: '学信网前端技术看板_网络资源库',
            name: 'member'
        },
        component: (resolve) => require(['./views/member/member.vue'], resolve),
    },
    {
        path: '/categories',
        name: 'categories',
        meta: {
            title: '学信网前端技术看板_网络资源库',
            name: 'categories'
        },
        component: (resolve) => require(['./views/categories/categories.vue'], resolve),
    }
];

export default routers;