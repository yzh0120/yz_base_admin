<template>
	<page>

			<!-- 新增 -->
			<el-button type="primary" @click="_tafAdd(alertData)">新增</el-button>
			
			
			<!-- 表格 -->
			<el-table :data="alertData.tableData" style="width: 100%">
				<el-table-column prop="name" label="姓名"> </el-table-column>

				<el-table-column prop="name" label="操作">
					<template slot-scope="scope">
						<el-button type="info" @click="_tafEdit(alertData, scope.$index)">编辑</el-button>
						<el-button type="warning" @click="_tafDel(alertData, scope.$index)">删除</el-button>
					</template>
				</el-table-column>
			</el-table>
			<!-- 弹窗 -->
			<confirm :data="alertData" @event="event">
				<el-form ref="form3" :model="alertData.formData" label-width="80px">
					<el-form-item label="姓名" :rules="[{ required: true, message: '必填', trigger: 'blur' }]" prop="name">
						<el-input v-model="alertData.formData.name"></el-input>
					</el-form-item>
				</el-form>
			</confirm>



	</page>
</template>

<script>
	export default {
		data() {
			return {
				alertData: {
					w: "800px",
					h: "600px",
					tit: "标题",
					field: false, //弹窗绑定的name
					tableData: [], //表格数据
					formData: {}, //表单数据

					taf: true,
					flag: "", //表明是新增还是编辑
				},
			};
		},
		computed: {},
		methods: {
			event(e) {
				if (e.event == "confirm") {
					this._tafConfirm(this.alertData, this.$refs.form3);
				}
				if (e.event == "cancel") {
					this._tafCancel(this.alertData);
				}
			},
		},
		mounted() {},
	};
</script>

<style>
</style>
