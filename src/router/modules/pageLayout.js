let layout = () => import("@/layout/index.vue")
export default { 
    path: '/layout',//修改
    name: 'layout',//修改
    redirect: {name:"layout-openTable"},//修改
    component:  layout,
    meta: {
        title: '页面布局',//修改
        icon: 'e62a;',
    },
    children: [
        {
            path: 'tablePage',//修改
            name: 'layout-tablePage',//修改
            component: () => import(/* webpackChunkName: "layout-tablePage" */ "@/views/layout/tablePage.vue"),//修改
            meta: {
                title: '表格页面',//修改
                icon: 'e627;',
            }
        },
        {
            path: 'tablePageAlert',//修改
            name: 'layout-tablePageAlert',//修改
            component: () => import(/* webpackChunkName: "layout-tablePageAlert" */ "@/views/layout/tablePageAlert.vue"),//修改
            meta: {
                title: '表格页面带弹窗',//修改
                icon: 'e627;',
            }
        },
        {
            path: 'openTable',//修改
            name: 'layout-openTable',//修改
            component: () => import(/* webpackChunkName: "layout-openTable" */ "@/views/layout/openTable.vue"),//修改
            meta: {
                title: '展开表格',//修改
                icon: 'e627;',
            }
        },
        {
            path: 'clearCheckbox',//修改
            name: 'layout-clearCheckbox',//修改
            component: () => import(/* webpackChunkName: "layout-clearCheckbox" */ "@/views/layout/clearCheckbox.vue"),//修改
            meta: {
                title: '清空多选',//修改
                icon: 'e627;',
            }
        }
    ]
}