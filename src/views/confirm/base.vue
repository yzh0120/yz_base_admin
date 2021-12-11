<template>
	<page>
		<el-card>
			<div slot="header">
				基本的弹窗-有确认和取消按钮
			</div>
			<el-button type="success" @click="confirmData.field = true">点我</el-button>
			<confirm :data="confirmData" @event="event">内容</confirm>
		</el-card>



		<el-card>
			<div slot="header">
				信息弹窗-只有确认按钮
			</div>
			<el-button type="success" @click="confirmData2.field = true">点我</el-button>
			<confirm :data="confirmData2" @event="event2">内容</confirm>
		</el-card>

	</page>
</template>

<script>
	export default {
		name: "",
		data() {
			return {
				value10:true,
				confirmData: {
					field: false,
					w: "1066px",
					h: "800px",
					title: "基础弹窗",
				},
				confirmData2: {
					field: false,
					w: "1000px",
					h: "800px",
					title: "基础弹窗",
					mes: true,
				},
			};
		},
		methods: {
			event(e) {
				if (e.event == "confirm") {
					this.confirmData.field = false
					console.log("点击了确认按钮");
				}
				if (e.event == "cancel") {
					this.confirmData.field = false
					console.log("点击了取消按钮");
				}
			},
			event2(e) {
				if (e.event == "confirm") {
					this.confirmData2.field = false
					console.log("点击了确认按钮");
				}
				if (e.event == "cancel") {
					this.confirmData2.field = false
					console.log("点击了取消按钮");
				}
			},
		},
	};
</script>

<style lang="scss" scoped>
</style>
