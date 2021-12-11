<template>
  <page>
	  多级菜单
  </page>
</template>

<script>
export default {
  data() {
    let self = this;
    return {
      formInfo: {
        list: [
          { label: "日期", field: "__date", type: "date" },
          { label: "姓名", field: "__input", type: "input" },
          // { label: '地址', model: '__adress', type: 'input'},
          { slot: "button", label: "" },
        ],
        formDOM: null, //表单DOM对象
        data: {},
        labelWidth: "50px", //form的label宽度
        inline: true,
      },

      table: {
        head: [
          {
            field: "Bank_of_deposit",
            label: "开户行",
          },
          {
            field: "account",
            label: "账号",
            format: (row) => {
              return self.$fn.split(row.account);
            },
          },
          {
            field: "Total_amount",
            label: "总金额",
            format: (row) => {
              return self.$fn.moneyFormat(row.Total_amount);
            },
          },
          {
            field: "remark",
            label: "备注",
          },
        ],
        data: [],
        height: "600px",
        align: "center",
		loading:false,
      },

      pagerData: {
        pageNo: 1, //第一页
        pageSize: 20, //每页显示20张
        total: 0, //总数
      },
    };
  },
  mounted() {
    this.getData();
  },
  methods: {
    getData(isClickSearch) {
      let other = {
        load: {
          obj: this.table,
          // loading : 'loading',   //默认的值就是 "loading",
          // text:'自定义'
        },
      };
      this.$api.table.pager({ pagerData: this.pagerData },other).then((res) => {
        this.table.data = res.data;
        this.pagerData.total = res.total;
      });

      console.log(this.pagerData.pageNo, "当前页面数");
      console.log(this.pagerData.pageSize, "页面显示条数");

      // 1 isClickSearch 是true,表明用户点击了搜索,所以
      // pageNo 重置1     isClickSearch && (this.pagerData.pageNo = 1);

      // 2 如果用户在有搜索条件下点击了下一页   主要看后台如何接收值
      // 判断搜索条件是否有值,有就添加条件,没有就不添加,如果搜索条件有多个 则判断多次 postData.push()
      // let postData = {
      // 	filters :[]
      // }
      // if(this.filtersForm.xxx){
      // 	postData.filters.push(
      // 		{
      // 			member: "itemName",
      // 			value: this.filtersForm.xxx,
      // 		}
      // 	)
      // }
    },
  },
};
</script>

<style lang="scss" scoped>
	.aaa{
		background-color: blue;
		font-size:300px;
		color: red;
	}
</style>

