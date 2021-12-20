let layout = () => import("@/layout/index.vue")
let blank = () => import("@/views/blank.vue")//二级菜单专属

export default { 
    path: '/element',//修改
    name: 'element',//修改
    redirect: {name:"element/file"},//修改
    component:  layout,
	meta:{
		title: 'element',//修改
		icon: 'e64f;',
	},
    children: [
        {
            path: 'file',//修改
            name: 'element/file',//修改
            component: blank,//修改
			redirect: {name:"element/file/fileTable"},//修改
            meta: {
                title: '文件上传',//修改
                icon: 'e64f;',
            },
			children:[
				{
					path: 'fileTable',//修改
					name: 'element/file/fileTable',//修改
					component: () => import(/* webpackChunkName: "element/file/fileTable" */ "@/views/element/file/fileTable.vue"),//修改
					meta: {
					    title: '列表文件',//修改
					    icon: 'e64f;',
					},
				},
				// {
				// 	path: 'loading',//修改
				// 	name: 'element-tree-loading',//修改
				// 	component: () => import(/* webpackChunkName: "element-tree-loading" */ "@/views/element/tree/loading.vue"),//修改
				// 	meta: {
				// 	    title: '动态加载tree',//修改
				// 	    icon: 'e64f;',
				// 	},
				// },
			]
        },
		{
		    path: 'elTree',//修改
		    name: 'element/elTree',//修改
		    component: blank,//修改
			redirect: {name:"element/elTree/base"},//修改
		    meta: {
		        title: '树形结构',//修改
		        icon: 'e64f;',
		    },
			children:[
				{
					path: 'base',//修改
					name: 'element/elTree/base',//修改
					component: () => import(/* webpackChunkName: "element/elTree/base" */ "@/views/element/elTree/base.vue"),//修改
					meta: {
					    title: '基础',//修改
					    icon: 'e64f;',
					},
				},
				{
					path: 'checkbox',//修改
					name: 'element/elTree/checkbox',//修改
					component: () => import(/* webpackChunkName: "element/elTree/checkbox" */ "@/views/element/elTree/checkbox.vue"),//修改
					meta: {
					    title: '多选的树形结构',//修改
					    icon: 'e64f;',
					},
				},
				{
					path: 'loading',//修改
					name: 'element/elTree/loading',//修改
					component: () => import(/* webpackChunkName: "element/elTree/loading" */ "@/views/element/elTree/loading.vue"),//修改
					meta: {
					    title: '加载的树形结构',//修改
					    icon: 'e64f;',
					},
				},
			]
		}
    ]
}