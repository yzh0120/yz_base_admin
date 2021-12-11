<template>
	<page>
		<panel  >
		  <template #head>
		    <div >primary</div>
		  </template>
		  primary
		</panel>
		
		<panel type="default" >
		  <template #head>
		    <div >default</div>
		  </template>
		  default
		</panel>
		
		<panel type="success" >
		  <template #head>
		    <div >success</div>
		  </template>
		  success
		</panel>
		
		<panel type="info" >
		  <template #head>
		    <div >info</div>
		  </template>
		  info
		</panel>
		
		<panel type="warning" >
		  <template #head>
		    <div >warning</div>
		  </template>
		  warning
		</panel>
		
		<panel type="danger" >
		  <template #head>
		    <div >danger</div>
		  </template>
		  danger
		</panel>
		
  </page>
</template>

<script>
  export default {
    
	mounted() {
		setTimeout(()=>{
			this.arr = [1,2,3,4,5,6,7,8,9]
		},1000)
	},
    data() {
      return {
		  arr:[1]
      }
    }
  }
</script>