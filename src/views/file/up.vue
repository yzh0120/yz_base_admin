<template>
	<div>
		<up :uploadObj="uploadObj" projectId="123123123"  @success="(e)=>upLoadSuccess(e.res)"></up>
		<file-List :arr="uploadObj.detail" :del="true"/>
	</div>
</template>

<script>
	export default{
		data(){
			return {
				uploadObj: 
				  {
				    name: "xxx",
				    taskName: "xxx",
				    detail: [],
				  }
				
			}
		},
		methods:{
			upLoadSuccess(){
				
			},
		}
	}
</script>

<style>
</style>
