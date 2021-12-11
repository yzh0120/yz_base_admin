<template>
	<page>
		<el-card>
			<div slot="header">
				socket
			</div>
			<el-button @click="go">提醒后台发送一个socket</el-button>
		</el-card>
	</page>
</template>

<script>
	export default{
		methods:{
			go(){
				this.$api.request.socket().then(res=>{
					
				})
			}
		}
	}
</script>

<style>
</style>
