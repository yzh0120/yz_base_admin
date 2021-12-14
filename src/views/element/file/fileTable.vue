<template>
	<page>
		<!-- 文件列表 -->
		<file-table :projectId="id" :upload-list="uploadList" v-if="id"></file-table>
	</page>
</template>

<script>
	export default{
		data(){
			return {
				uploadList: [
					{
					  name: "1.保函额度合同",
					  taskName: "保函额度合同",
					  detail: [],
					  type:['pdf'],
					  num:1
					},
					{
					  name: "2.额度保证反担保文件",
					  taskName: "额度保证反担保文件",
					  detail: [],
					},
				],
				id:"",
			}
		},
		mounted() {
			this.id = "123456"
			
		}
	}
</script>

<style>
</style>
