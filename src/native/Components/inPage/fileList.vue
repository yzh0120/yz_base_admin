<template>
	<div>
		<el-tooltip class="fuJian" placement="right" v-for="(singleFile, singleFileIndex) in arr" :key="singleFileIndex + 'fujian'">
			<!-- 悬浮 -->
			<div slot="content">
				上传用户：{{ singleFile.createUserName }}<br />上传时间：{{ singleFile.createTime }}<br />下载次数：{{singleFile.downloadCount }}
			</div>
			<!-- 永远展示 -->
			<span>
				<!-- <i class="el-icon-delete" style="color: red;cursor: pointer;"></i>&nbsp; -->
				<el-button type="text" @click="downloadFile">{{ singleFile.fileName }}</el-button>
				<i class="el-icon-error" style="color:red;" @click="fileRemove(file.id,index)" v-if="del"></i>
			</span>
		</el-tooltip>
	</div>
</template>

<script>
	
	export default{
		props:["arr","del"],
		methods:{
			downloadFile(){
				
			},
			fileRemove(){
				
			}
		}
	}
</script>

<style lang="scss" scoped>
</style>
