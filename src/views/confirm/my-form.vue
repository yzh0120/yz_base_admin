<template>
	<page>
			<!-- 新增按钮 -->
			<el-button type="primary" @click="_tfAdd(confirmData)">新增</el-button>
			<!-- 表格 -->
			<el-table :data="confirmData.tableData" style="width: 100%">
				<el-table-column prop="name" label="姓名"> </el-table-column>
			
				<el-table-column prop="name" label="操作">
					<template slot-scope="scope">
						<el-button type="info" @click="_tfEdit(confirmData, formInfo,scope.$index)">编辑</el-button>
						<el-button type="warning" @click="_tfDel(confirmData, formInfo, scope.$index)">删除</el-button>
					</template>
				</el-table-column>
			</el-table>
			<!-- 弹出框 -->
			<confirm :data="confirmData" @event="event">
				<base-form :data="formInfo" />
			</confirm>
			

	</page>
</template>

<script>
	export default {
		data() {
			return {
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
						}
					],
					dom: null,
					data: {},
					titleWidth:"60px",
				},
				confirmData: {
					w: "800px",
					h: "600px",
					tit: "集合封装table和form的弹窗",
					field: false, //弹窗绑定的name
					tableData:[],

					taf: true,
					flag: "", //表明是新增还是编辑
				},
			};
		},
		methods: {
			event(e) {
				if (e.event == "confirm") {
					this._tfConfirm(this.confirmData, this.formInfo);
				}
				if (e.event == "cancel") {
					this._tfCancel(this.confirmData, this.formInfo);
				}
			},
		},
	};
</script>

<style>
</style>
