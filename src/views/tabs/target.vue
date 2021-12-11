<template>
	<page>
		<el-card>
			<div slot="header">
				缓存页面
			</div>
			params:{{$route.params.id}}
			<br>
			<el-input v-model="str"></el-input>
		</el-card>
	</page>
</template>

<script>
	export default{
		data(){
			return {
				str:'',
			}
		}
	}
</script>

<style>
</style>
