<template>
	<page>
		<el-card>
			<div slot="header">
				<div>想用有限的位来表示无穷的数字，显然是不可能的，因此会出现一些精度问题</div>
				<div>和金额有关的数字不允许出现这种情况,因此引入bigNumber.js并封装方便使用</div>
			</div>
			<div>原生 &nbsp; 0.1 + 0.2 &nbsp;导致精度丢失 : {{0.1 + 0.2}}</div>
			<div>使用bigNumber.js : {{$fn.num.add(0.1,0.2)}}</div>
		</el-card>
	</page>
</template>

<script>
	export default{
		
	}
	
</script>

<style scoped lang="scss">
</style>
