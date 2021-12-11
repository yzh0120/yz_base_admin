<template>
	<page>
		<el-divider content-position="left">
		    
		</el-divider>
		
		
		
		<el-card>
		  <div slot="header">
			  角色是权限的基本单位,一个人员可以同时拥有多种角色
		  </div>
		  <el-button type="primary" v-scope.system>只有system才能看到这个按钮</el-button>
		  <br>
		  <el-button type="primary" v-scope.system.test>system和test才能看到这个按钮</el-button>
		</el-card>
	</page>
</template>

<script>
	export default{
		
	}
</script>

<style lang="scss" scoped>
</style>
