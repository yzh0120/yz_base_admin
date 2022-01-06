<template>
	<up :uploadObj="uploadList" projectId="123123123"></up>
</template>

<script>
	export default{
		data(){
			return {
				uploadList: 
				  {
				    name: "xxx",
				    taskName: "xxx",
				    detail: [],
				  }
				
			}
		}
	}
</script>

<style>
</style>
