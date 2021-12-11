let layout = () => import("@/layout/index.vue")


export default { 
    path: '/fn',//修改
    name: 'fn',//修改
    redirect: {name:"fn-base"},//修改
    component:  layout,
	meta:{
		title: '-----',
		icon: 'e623;',
	},
    children: [
        {
            path: 'base',//修改
            name: 'fn-base',//修改
            component: () => import(/* webpackChunkName: "fn-base" */ "@/views/fn/base.vue"),//修改
            meta: {
                title: '常用函数类',//修改
                icon: 'e64f;',
            }
        }
    ]
}