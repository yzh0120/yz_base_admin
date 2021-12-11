let layout = () => import("@/layout/index.vue")


export default { 
    path: '/confirm',//修改
    name: 'confirm',//修改
    redirect: {name:"confirm-base"},//修改
    component:  layout,
    meta: {
        title: '封装弹窗',//修改
        icon: 'e63c;',
    },
    children: [
        {
            path: 'base',//修改
            name: 'confirm-base',//修改
            component: () => import(/* webpackChunkName: "confirm-base" */ "@/views/confirm/base.vue"),//修改
            meta: {
                title: '基础弹窗',//修改
                icon: 'e63c;',
            }
        },
        {
            path: 'tableConfirm',//修改
            name: 'confirm-tableConfirm',//修改
            component: () => import(/* webpackChunkName: "confirm-tableConfirm" */ "@/views/confirm/table-confirm.vue"),//修改
            meta: {
                title: 'table和form的弹窗封装',//修改
                icon: 'e63c;',
            }
        },
		{
		    path: 'myForm',//修改
		    name: 'confirm-myForm',//修改
		    component: () => import(/* webpackChunkName: "confirm-myForm" */ "@/views/confirm/my-form.vue"),//修改
		    meta: {
		        title: '和表单组件搭配的弹窗',//修改
		        icon: 'e63c;',
		    }
		},
        {
            path: 'myTableConfirm',//修改
            name: 'confirm-myTableConfirm',//修改
            component: () => import(/* webpackChunkName: "confirm-myTableConfirm" */ "@/views/confirm/my-table-confirm.vue"),//修改
            meta: {
                title: '和组件搭配的弹窗',//修改
                icon: 'e63c;',
            }
        }
    ]
}