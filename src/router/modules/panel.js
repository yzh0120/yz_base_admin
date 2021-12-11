let layout = () => import("@/layout/index.vue")


export default { 
    path: '/panel',//修改
    name: 'panel',//修改
    redirect: {name:"panel-base"},//修改
    component:  layout,
	meta:{
		title: 'panel封装',
		icon: 'e623;',
	},
    children: [
        {
            path: 'base',//修改
            name: 'panel-base',//修改
            component: () => import(/* webpackChunkName: "panel-base" */ "@/views/panel/base.vue"),//修改
            meta: {
                title: 'panel封装',//修改
                icon: 'e64f;',
            }
        }
    ]
}