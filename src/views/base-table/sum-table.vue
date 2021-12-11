<template>
  <table-page>
	  <!-- 表单 -->
	  <base-form :data="formInfo">
	  	<template #button>
	  			<el-button  type="primary" @click="getData" native-type="submit">搜索</el-button>
	  	</template>
	  </base-form>
	  
	  <!-- 表格 -->
	  <base-table :data="table" :pager="pagerData"></base-table>
	  
	  <!-- 分页 -->
	  <base-pager
	  :data="pagerData"
	  @pageChange="getData()"
	  @sizeChange="getData()"
	  />
    
  </table-page>
</template>

<script>
	import * as config from "@/tools/config.js"
	export default{
		data(){
			let self = this;
			return {
				formInfo: {
					list: [
					{ title: "日期", field: "__date", type: "date" },
					{ title: "姓名", field: "__input", type: "input" },
					{ slot: "button" },
					],
					data: {},
					titleWidth: "50px", //form的title宽度
					inline: true,
				},
				table: {
				  head: [
				    {
				      field: "Bank_of_deposit",
				      title: "开户行",
				    },
				    {
				      field: "account",
				      title: "账号",
				    },
				    {
				      field: "Total_amount",
				      title: "总金额",
				    },
				    {
				      field: "remark",
				      title: "备注",
				    },
				  ],
				  data: [],
				  dom:null,
				  height:config.tablePage,
				  loading:true,
				  index:true,
				  sum:true,
				  sumfn:(param)=>{
				  	const { columns, data } = param;
				  	const sums = [];
				  	columns.forEach((column, index) => {
				  		if (index === 0) {//第一行一般是合计
				  			sums[index] = '合计';
				  			return;
				  		}
				  		if (index === 1) {//设置某一行是 固定
				  			sums[index] = 'N/A';
				  			return;
				  		}
				  		const values = data.map(item => {//value就是整列的数据
				  			if (column.property == "ChannelNames" && item[column.property] ) {//特殊操作
				  				return item["ChannelNames"].split(",").length
				  			}
				  			else if (column.property == "UserName") {
				  				return NaN
				  			}
				  			else {
				  				return Number(item[column.property])
				  			}
				  			
				  		});
				  		if (values.every(value => isNaN(value))) {//列里面有一个数据不是数字则显示N/A
				  			sums[index] = 'N/A';
				  		}  else {
				  			sums[index] = values.reduce((prev, curr) => {
				  				const value = Number(curr);
				  				if (!isNaN(value)) {
				  					return prev + curr; //prev + curr;
				  				} else {
				  					return prev;
				  				}
				  			}, 0);
				  			sums[index] = sums[index].toFixed(2)
				  		}
				  	});	
				  	return sums;   
				  }
				},
				
				pagerData: {
					pageNo: 1, //第一页
					pageSize: 20, //每页显示20张
					total: 0, //总数
				},
			}
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
				this.$api.table.pager({
					pagerData: this.pagerData
				}, other).then((res) => {
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
	}
</script>