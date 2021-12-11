<template>
	<page>

		  <el-select v-model="guaranteetype" placeholder="请选择反担保类别">
			<el-option value="个人" label="个人"></el-option>
			<el-option value="企业" label="企业"></el-option>
		  </el-select>
		  <el-button type="primary" @click="AddGuaranteeType(guaranteetype)">新增</el-button>
		  <!-- 展示 -->
		  <panel  v-for="(item,index) in arr" :key="index">
			<div slot="head" >
			  <span>第{{index+1}}个反担保措施（{{item.type}}反担保）</span>
			  <div>
				<el-button type="danger" icon="el-icon-delete" @click.stop="edit(index,item)">编辑</el-button>
				<el-button type="danger" icon="el-icon-delete" @click.stop="remove(index,item)">移除</el-button>
			  </div>
			</div>
			<div>
			  <one v-show="item.type == '个人'" :item="item" :index="index" :dis="true" />
			  <two v-show="item.type == '企业'" :item="item" :index="index" :dis="true" />
			</div>
		  </panel>
			<!-- 弹窗 -->
			<confirm :data="confirmData" @event="event">
				<one v-if="type == '个人'"  ref="comForm" />
				<two v-if="type == '企业'"  ref="comForm" />
			</confirm>
	</page>
</template>

<script>
	import one from "./one.vue"
	import two from "./two.vue"
	export default{
		data(){
			return {
				guaranteetype:"个人",
				arr:[],
				confirmData: {
					field: false,
					w: "1066px",
					h: "800px",
					title: "基础弹窗",
					
				},
				status:"",//新增 数字(编辑)
				type:"",//个人 企业
			}
		},
		components:{
			one,
			two
		},
		methods:{
			AddGuaranteeType(type){
				this.status = "新增"
				this.type = type
				this.confirmData.field = true
			},
			edit(index,item){
				this.status = index
				// this._setdata(this.$refs.comForm.formData,item)
				this.$refs.comForm.formData.data = item
				this.confirmData.field = true
			},
			remove(){
				
			},
			event(e) {
				if (e.event == "confirm") {
					if(this.$refs.comForm.$refs.form.check()){
						if( this.status == "新增" ){
							this.arr.push(this.$fn.deepClone(this.$refs.comForm.formData.data))
						}else if( this.$fn.type(this.status) == "num" ){
							this.$set(this.arr,this.status,this.$fn.deepClone(this.$refs.comForm.formData.data))
						}
						this.$refs.comForm.$refs.form.reset()
						this.confirmData.field = false
					}
				}
				if (e.event == "cancel") {
					this.$refs.comForm.$refs.form.reset()
					this.confirmData.field = false
				}
			},
		}
	}
</script>

<style lang="scss" scoped>
</style>
