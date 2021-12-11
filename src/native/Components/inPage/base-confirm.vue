<!-- 
data：{
	field:""                                 控制弹窗显示隐藏字段
	width:'100px' 
	height:'100px' 
	title:'标题'                              标题
	mes：false                                是否只是信息弹窗
	
	taf: true,                                是否是taf
	flag: "",                                 表明是新增还是编辑
}
 -->
<!-- :show-close="false" -->
<template>
	<vxe-modal v-model="field" :width="w" :height="h" showFooter @close="close" :title="title" @click="cancel" :show-zoom="true">

		<slot></slot>

		<template #footer>
			<el-button  @click="cancel" v-if="!mes" plain>取消</el-button>
			<el-button type="primary" @click="confirm">确认</el-button>
		</template>
	</vxe-modal>
</template>

<script>
	export default {
		props: ['data'],
		methods: {
			cancel() {
				// this.data.field = false
				this.$emit("event", {
					event: 'cancel'
				})
			},
			confirm() {

				// if (!this.data.taf) { //防止表单校验失败，但弹窗依然能有隐藏
				// 	this.data.field = false
				// }
				this.$emit("event", {
					event: 'confirm'
				})
			},
			close() {
				// this.data.field = false
				this.$emit("event", {
					event: 'close'
				})
			}
		},
		computed: {
			field: {
				get() {
					return this.data.field
				},
				set(val) {
					this.data.field = val
				}
			},
			w() {
				return this.data.width ? this.data.width : "1066px"
			},
			h() {
				return this.data.height ? this.data.height : "600px"
			},
			title() {
				return this.data.title ? this.data.title : "标题"
			},
			mes() {
				return this.data.mes
			},
		}
	}
</script>

<style>
</style>
<!-- 
正常使用:
fieldData:{
	field:false,
	w:'800px',
	h:'600px',
	title:"标题"
},
<confirm :data="fieldData" @close="" @cancel="" @confirm="">

</confirm>

搭配taf:
fieldData:{
	w:'800px',
	h:'600px',
	title:"标题",

	tableData: [],//表格数据
	field:false,//弹窗绑定的name
	formData: {},//表单数据
	flag: "",//表明是新增还是编辑 
},
*******************************************************************************************
<el-button type="primary" @click="tafAdd(fieldData)">新增</el-button >

<confirm :data="fieldData" @close="tafCancel(fieldData)" @cancel="tafCancel(fieldData)" @confirm="tafConfirm(fieldData,$refs.form3)">
	<el-form ref="form3" :model="fieldData.formData" label-width="80px">
	  <el-form-item label="活动名称" :rules="[ { required: true, message: '必填', trigger: 'blur' }]" prop="name">
		<el-input v-model="fieldData.formData.name"></el-input>
	  </el-form-item>
	</el-form>
</confirm>

<el-table :data="fieldData.tableData" style="width: 100%">
  <el-table-column prop="name" label="姓名"> </el-table-column>
		  
  <el-table-column prop="name" label="操作">
	<template slot-scope="scope">
	  <el-button
		type="info"
		@click="tafEdit(fieldData,scope.$index,) "
		>编辑</el-button
	  >
	  <el-button
		type="warning"
		@click="tafDel(fieldData,scope.$index)"
		>删除</el-button
	  >
	</template>
  </el-table-column>
</el-table>
 -->
