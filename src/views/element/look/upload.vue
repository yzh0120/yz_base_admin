<template>
	<div>
		<div v-if="mode == 1">
			<el-upload :action="url" :headers="head" :before-upload="(file)=>{beforeUpload(file)}" :on-success="(res)=>{successUpload(res)}" 
				:before-remove="(file)=>{beforeRemove(file)}" :on-remove="(file,fileList)=>{remove(fileList)}" >
				<el-button size="mini" type="primary" @click="setUrl">上传发票</el-button>
				<!-- 允许上传的文件提示 -->
				<el-tooltip class="item" effect="dark" placement="right">
					<div v-html="`只允许上传以下扩展名的文件：<br/>.gif,.jpeg,.jpg,.png,.rar,.zip,.bmp`" slot="content"></div>
					<i class="el-icon-question"></i>
				</el-tooltip>
			</el-upload>
		</div>



		<div @click="setUrl" v-if="mode == 2">
			<el-upload :action="url" :headers="head" :before-upload="(file)=>{beforeUpload(file)}" :on-success="(res)=>{successUpload(res)}" 
				:before-remove="(file)=>{beforeRemove(file)}"  :on-remove="(file,fileList)=>{remove(fileList)}"  drag>
				<i class="el-icon-upload"></i>
				<div class="el-upload__text"><em>点击上传</em></div>
				<div class="el-upload__tip" slot="tip">最多可上传10个文件，文件总大小不得超过1GB</div>
			</el-upload>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				head: {
					Authorization: "Bearer " //+ Cookies.get("token"),
				},
			}
		},
		props:["url","mode"],
		methods:{
			setUrl(){
				this.$emit("setUrl")
			},
			beforeUpload(file){
				this.$emit("beforeUpload",{file:file})
			},
			successUpload(res){
				this.$emit("successUpload",{res:res})
			},
			beforeRemove(file){
				this.$emit("beforeRemove",{file:file})
			},
			remove(fileList){
				this.$emit("remove",{fileList:fileList})
			}
		}
	}
</script>

<style>
</style>
