<template>
	<page>
		<!-- <approve #default="{node}"> -->
		<approve >	
			
			<!-- <template #history="{historyNode}">
			        <div>
			          <financialAudit v-if="historyNode.nodeName == '财务审核'" :history="true" />
			        </div>
			      </template> -->
			
			  <template #default="{node}">
				<div>
				  <div v-if="node.nodeName == '经理'">456</div>
				</div>
			  </template>
		</approve>
	</page>
</template>

<script>
	import approve from "./approve.vue"
	export default{
		components:{
			approve
		},
		mounted() {
			console.log()
		}
	}
</script>

<style lang="scss" scoped>
</style>
