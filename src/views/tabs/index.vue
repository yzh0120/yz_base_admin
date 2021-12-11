<template>
	<page>
		<el-card>
			<div slot="header">
				tabs动态传参并缓存组件
				<div>keep-alive组件的include只能缓存组件而不能缓存路由</div>
				<div>但是一个组件被多个路由引用的话,一个路由改变了组件的数据,会同步到其他的路由,</div>
				<div>所以不使用include,而是通过手动删除组件缓存的实例来实现一个组件被多个路由引用且数据不同步</div>
			</div>
			<el-input v-model="str" placeholder="请输入params"></el-input>
			<el-button @click="go">多tabs页面</el-button>
		</el-card>
	</page>
</template>

<script>
	export default{
		data(){
			return {
				str:""
			}
		},
		methods:{
		    go(){
							this.$router.push({
								name: 'tabs-target',
								params: {
									id: this.str,
								},
							});
			}
		},
	}
</script>

<style>
</style>
