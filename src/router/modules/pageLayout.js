let layout = () => import("@/layout/index.vue")

export default { 
    path: '/layout',//修改
    name: 'layout',//修改
    redirect: {name:"layout-page"},//修改
    component:  layout,
    meta: {
        title: '页面布局',//修改
        icon: 'e631;',
    },
    children: [
        {
            path: 'page',//修改
            name: 'layout-page',//修改
            component: () => import(/* webpackChunkName: "layout-page" */ "@/views/pageLayout/page.vue"),//修改
            meta: {
                title: '基础页面',//修改
                icon: 'e631;',
            }
        },
		
		
        {
            path: 'tablePage',//修改
            name: 'layout-tablePage',//修改
            component: () => import(/* webpackChunkName: "ayout-tablePage" */ "@/views/pageLayout/table-page.vue"),//修改
            meta: {
                title: '表格页面',//修改
                icon: 'e631;',
            }
        },
		{
		    path: 'addTablePage',//修改
		    name: 'layout-addTablePage',//修改
		    component: () => import(/* webpackChunkName: "ayout-addTablePage" */ "@/views/pageLayout/add-table-page.vue"),//修改
		    meta: {
		        title: '带新增的表格页面',//修改
		        icon: 'e631;',
		    }
		},
        {
            path: 'navTablePage',//修改
            name: 'layout-navTablePage',//修改
            component: () => import(/* webpackChunkName: "layout-navTablePage" */ "@/views/pageLayout/nav-table-page.vue"),//修改
            meta: {
                title: '目录表格页面1',//修改
                icon: 'e631;',
            }
        },
		{
		    path: 'navTablePage2',//修改
		    name: 'layout-navTablePage2',//修改
		    component: () => import(/* webpackChunkName: "layout-navTablePage" */ "@/views/pageLayout/nav-table-page2.vue"),//修改
		    meta: {
		        title: '目录表格页面2',//修改
		        icon: 'e631;',
		    }
		},
        {
		    path: 'search',//修改
		    name: 'layout-search',//修改
		    component: () => import(/* webpackChunkName: "layout-search" */ "@/views/pageLayout/search.vue"),//修改
		    meta: {
		        title: 'search页面',//修改
		        icon: 'e631;',
		    }
		},
  //       {
		//     path: 'detail',//修改
		//     name: 'layout-detail',//修改
		//     component: () => import(/* webpackChunkName: "layout-detail" */ "@/views/pageLayout/detail.vue"),//修改
		//     meta: {
		//         title: 'detail页面',//修改
		//         icon: 'e631;',
		//     }
		// },
		// {
		//     path: 'detail2',//修改
		//     name: 'layout-detail2',//修改
		//     component: () => import(/* webpackChunkName: "layout-detail" */ "@/views/pageLayout/detail2.vue"),//修改
		//     meta: {
		//         title: 'detail2页面',//修改
		//         icon: 'e631;',
		//     }
		// },
    ]
}