<template>

		  <div :class="['table-page',padding?`padding`:``]" id="table-page">
		    <slot></slot>
		  </div>
 
</template>

<script>
	export default{
		props:["padding"],
	}
</script>

<style lang="scss" scoped>
	.padding{
		padding-top: 20px !important;
	}

</style>
