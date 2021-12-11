<template>
	<table-Page>
		<!-- 表单 -->
		<base-form :data="formInfo">
			<template #button>
				<el-button type="primary" @click="getData(true)" native-type="submit">搜索</el-button>
				<el-button type="primary" @click="add">新增</el-button>
			</template>
		</base-form>

		<!-- 表格 -->
		<base-table :data="table" :pager="pagerData">
			<template  #do="{scope}">
			  <el-button type="text" @click="edit(scope.row,scope.$index)">编辑</el-button>
			</template>
		</base-table>

		<!-- 分页 -->
		<base-pager :data="pagerData" @pageChange="getData()" @sizeChange="getData()" />

		<confirm :data="confirmData" @event="event">
			<base-form :data="alertForm" ref="alertForm"></base-form>
		</confirm>
	</table-Page>
</template>

<script>
	import * as config from "@/tools/config.js"
	export default {
		data() {
			let self = this;
			return {
				alertForm: {
					list: [{
							title: " 开户行",
							field: "Bank_of_deposit",
							type: "input"
						},
						{
							title: "账号",
							field: "account",
							type: "input"
						},
						{
								title: " 总金额",
								field: "Total_amount",
								type: "input"
							},
							{
								title: "备注",
								field: "remark",
								type: "input"
							},
						{
							slot: "button"
						},
					],
					// formDOM: null, //表单DOM对象
					data: {},
					titleWidth: "50px", //form的title宽度
					inline: true,
				},
				formInfo: {
					list: [{
							title: "日期",
							field: "__date",
							type: "date"
						},
						{
							title: "姓名",
							field: "__input",
							type: "input"
						},
						{
							slot: "button"
						},
					],
					// formDOM: null, //表单DOM对象
					data: {},
					titleWidth: "50px", //form的title宽度
					inline: true,
				},

				table: {
					head: [{
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
						{
							slot: "do",
							title: "操作",
						},
					],
					data: [],
					height: config.tablePage,
					loading: true,
					index: true,
				},
				pagerData: {
					pageNo: 1, //第一页
					pageSize: 20, //每页显示20张
					total: 0, //总数
				},
				confirmData: {
					field: false,
					w: "1066px",
					h: "800px",
					title: "基础弹窗",
				},
			};
		},
		mounted() {
			this.getData(true);
		},
		methods: {
			//新增
			add() {
				this.confirmData.field = true
			},
			//编辑
			edit(item, index) {
			      this.confirmData.field = true;
			      this.alertForm.data = this.$fn.deepClone(item);
			    },
			event(e) {
				if (e.event == "confirm") {
					if(this.$refs.alertForm.check()){
						if(this.addApplyForm.id){//更新
							
						}else{//新增
							// api.save(this.addApplyForm.data).then((res) => {
							//             this.$refs.form.reset();//1
							//             if (res.code == 200) {
							//               this.getData();//2
							//               this.$message.success("成功");
							//               this.confirmData.field = false;//3
							//             } else {
							//               this.$message.error(res.info);
							//             }
							//           }); 
						}
					}
				}
				if (e.event == "cancel") {
					
					this.$refs.alertForm.reset()
					this.confirmData.field = false
				}
			},
			getData(isSearch) {
				isSearch && (this.pagerData.pageNo = 1);
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

				// 1 isSearch 是true,表明用户点击了搜索,所以
				// pageNo 重置1     isSearch && (this.pagerData.pageNo = 1);

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
</style>
