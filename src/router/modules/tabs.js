let layout = () => import("@/layout/index.vue")

		export default {
		    path: '/tabs',//修改
		    name: 'tabs',//修改
		    redirect: {name:"tabs-index"},//修改
		    component:  layout,
			meta:{
				title: '-----',
				icon: 'e623;',
			},
		    children: [
				{
				    path: 'index',//修改
				    name: 'tabs-index',//修改
				    component: () => import(/* webpackChunkName: "tabs-index" */ "@/views/tabs/index.vue"),//修改
				    meta: {
				        title: 'tabs页面传参并缓存路由',//修改
				        icon: 'e63e;',
				    }
				},
		        {
		            path: 'target/:id',//修改
		            name: 'tabs-target',//修改
		            component: () => import(/* webpackChunkName: "tabs-target" */ "@/views/tabs/target.vue"),//修改
		            meta: {
		                title: 'tabs',//修改
		                icon: 'e63e;',
						hidden:true
		            }
		        }
		    ]
		}
    


/* 
 export default {
     path: '/fn',//修改
     name: 'fn',//修改
     redirect: {name:"fnBase"},//修改
     component:  layout,
     children: [
         {
             path: 'base',//修改
             name: 'fnBase',//修改
             component: () => import( "@/views/fn/index.vue"),//修改
             meta: {
                 title: '函数',//修改
                 icon: 'el-icon-location',
             }
         }
     ]
 }
 */