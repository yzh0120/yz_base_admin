<template>
	<page>
			<!-- 新增按钮 -->
			<el-button type="primary" @click="_tAdd(confirmData)">新增</el-button>
			<!-- 表格 -->
			<base-table :data="tableData">
				<template #do="{ scope }">
					<el-button type="info" @click="_tEdit(confirmData, formInfo, tableData, scope.$index)">编辑
					</el-button>
					<el-button type="warning" @click="_tDel(formInfo, tableData, scope.$index)">删除</el-button>
				</template>
			</base-table>
			<!-- 弹出框 -->
			<confirm :data="confirmData" @event="event">
				<base-form :data="formInfo" />
			</confirm>
			

	</page>
</template>

<script>
	export default {
		/* 
		 
		 如果表格上的数据 比 表单 上 多  在赋值的时候全部赋值 只是表单上不显示字段
		 */
		
		// watch:{
		// 	"tableData.data.length":{
		// 		handler(v){
		// 			if(v){
		// 				this.tableData.data.forEach((item)=>{
		// 					item.self ="私有"
		// 				})
		// 			}
		// 		}
		// 	}
		// },
		data() {
			return {
				// 组件表单和组件列表 配合组件 弹窗 和 taf
				tableData: {
					// 配置表头
					head: [{
							title: "姓名",
							field: "name",
						},
						{
							title: "年龄",
							field: "age",
						},
						{
							title: "分数",
							field: "num",
						},
						{
							title: "私有",
							field: "self",
						},
						{
							title: "操作",
							slot: "do",
							width: 260,
						},
					],
					data: [],
					height: "",
				},
				formInfo: {
					list: [{
							title: "姓名",
							field: "name",
							type: "input",
							rules: [{
								required: true,
								message: "请输入",
								trigger: "blur"
							}],
						},
						{
							title: "年龄",
							field: "age",
							type: "input",
						},
						{
							title: "分数",
							field: "num",
							type: "input",
						},
						{
							title: "私有",
							field: "input_self",
							type: "input",
						},
					],
					dom: null,
					data: {input_self:"固定的"},
					titleWidth:"60px",
				},
				confirmData: {
					w: "800px",
					h: "600px",
					tit: "集合封装table和form的弹窗",
					field: false, //弹窗绑定的name

					taf: true,
					flag: "", //表明是新增还是编辑
				},
			};
		},
		methods: {
			event(e) {
				if (e.event == "confirm") {
					this._tConfirm(this.confirmData, this.formInfo, this.tableData);
				}
				if (e.event == "cancel") {
					this._tCancel(this.confirmData, this.formInfo, this.tableData);
				}
			},
		},
	};
</script>

<style>
</style>
