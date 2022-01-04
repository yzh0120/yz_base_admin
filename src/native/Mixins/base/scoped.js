

/*
https://blog.csdn.net/weixin_44038264/article/details/107858680
vue filters和directives访问this的问题
*/
export default {
  data() {
    return {
      btnArr: [],
      tableArr: [],
    }
  },
  mounted() {
	if (this.btnPower) {
	      this.getAuthorizeButtonColumnList()
	}
  },
  methods: {
    // getAuthorizeButtonColumnList() {
    //   let params = {
    //     enCode: this.$route.name
    //   }
    //   this.$api.scoped.col(params).then((res) => {
    //     if (res.code == 200) {
    //       this.btnArr = res.data.moduleButtons//按钮权限

    //       if (res.data.moduleEntity.isPermVerification) {//判断这个table启用了 col权限
    //         if (this.table && this.table.head) {//判断本地代码有么有this.table && this.table.head
    //           this.table.head.forEach((item) => {//循环表格的所有列

    //             res.data.moduleColumns.forEach((item2) => {
    //               // if (item.type == "checkbox" || item.type == "radio" || item.type == "index") {
    //               //   this.tableArr.push(item)
    //               // }
    //               if (item.field == item2.enCode) {//字段相同则显示
    //                 this.tableArr.push(item)
    //               }
    //             })
    //           })
    //           this.table.head = this.tableArr
    //         }
    //       }

    //     } else {
    //       this.$message.error(res.info)
    //     }
    //   })
    // },
    getAuthorizeButtonColumnList() {
      if (this.$route && this.$route.name == "scoped-col" || this.$route && this.$route.name == "scoped-btn") {

        setTimeout(() => {
          this.btnArr = [{enCode:"add"}]//按钮权限

          if (this.table && this.table.head) {
            this.table.head.forEach((item) => {//循环表格的所有列
              [{ enCode: "Bank_of_deposit", title: "开户行", }].forEach((item2) => {
                if (item.field == item2.enCode) {//字段相同则显示
                  this.tableArr.push(item)
                }
              })
            })
            this.table.head = this.tableArr
          }

        }, 2000)

      }
    },
  },
  directives: {
    // 注册一个局部的自定义指令 v-focus
    btn: {
      // 统一全部隐藏
      bind: function (el) {
        el.style.display = "none"
      },
      update: function (el, binding, vnode) {//binding.value  是后端的值[],arg是自己写的
        console.log(binding.value,binding.arg)
        // if (typeof binding.value == 'object') {
          if (Object.prototype.toString.call(binding.value).slice(8,-1) == "Array") {
          for (let i = 0; i < binding.value.length; i++) {
            if (binding.value[i].enCode == binding.arg) {
              el.style.display = "inline-block"
            }
          }
        }

      }
    }
  }
}
