<template>
	<detail-link :nav="nav">
		<div id="demo1">demo1</div>
		<div id="demo2">demo2</div>
	</detail-link>


</template>

<script>
	export default {
		data() {
			return {
				nav:[
					{
						id:"demo1",
						text:"demo1"
					},
					{
						id:"demo2",
						text:"demo2"
					},
				]
			}
		},
		methods: {


		},
		mounted() {
	

		},
		beforeDestroy() {
			
		},
	}
</script>

<style lang="scss" scoped>


			#demo1 {
				margin: 1000px 0;
				border: 2px solid green;
			}

			#demo2 {
				margin-bottom: 1000px;
				height: 2000px;
				border: 2px solid green;
			}
		


</style>
