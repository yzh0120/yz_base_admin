<!-- 增加一个表单 步骤
	1 在alert.vue 加 form  (ref(为了重置)                ))
	2 在 左侧 数据流 加 对象
	3 在 nodeFormData 对象 加对象
 -->


<template>	
	<confirm :data="alertFormConfig" @event="event">
		
		<el-tabs type="border-card" v-show="alertFormConfig.type === 'node'">
		  <el-tab-pane label="用户管理">
			  <el-form  @submit.native.prevent ref="nodeFormData" :model="nodeFormData">
			    <el-form-item label="节点名称" prop="name">
			      <el-input v-model="nodeFormData.obj.name" placeholder="请输入节点名称" maxlength="30">
			      </el-input>
			    </el-form-item>
			    <el-form-item label="节点描述" prop="desc">
			      <el-input v-model="nodeFormData.obj.desc" placeholder="请输入节点描述" maxlength="30">
			      </el-input>
			    </el-form-item>
			  </el-form>
		  </el-tab-pane>
		  <el-tab-pane label="角色管理">
			  <el-form  @submit.native.prevent ref="nodeFormData" :model="nodeFormData">
			    <el-form-item label="节点名称" prop="a">
			      <el-input v-model="nodeFormData.other.a" placeholder="请输入节点名称" maxlength="30">
			      </el-input>
			    </el-form-item>
			    <el-form-item label="节点描述" prop="b">
			      <el-input v-model="nodeFormData.other.b" placeholder="请输入节点描述" maxlength="30">
			      </el-input>
			    </el-form-item>
			  </el-form>
		  </el-tab-pane>
		</el-tabs>
		
		<!-- <el-form  @submit.native.prevent v-show="alertFormConfig.type === 'node'" ref="nodeFormData" :model="nodeFormData">
		  <el-form-item label="节点名称" prop="name">
		    <el-input v-model="nodeFormData.obj.name" placeholder="请输入节点名称" maxlength="30">
		    </el-input>
		  </el-form-item>
		  <el-form-item label="节点描述" prop="desc">
		    <el-input v-model="nodeFormData.obj.desc" placeholder="请输入节点描述" maxlength="30">
		    </el-input>
		  </el-form-item>
		</el-form> -->
		
		
		<el-form  @submit.native.prevent v-show="alertFormConfig.type === 'link'" ref="linkFormData" :model="linkFormData">
		  <el-form-item label="连线描述" prop="desc">
		    <el-input v-model="linkFormData.desc" placeholder="请输入连线描述">
		    </el-input>
		  </el-form-item>
		</el-form>
	</confirm>
</template>

<script>
	export default{
		props:{
			drawerType:{
				default:()=>{}
			},
			alertFormConfig:{
				default:()=>{}
			},
			nodeFormData:{
				default:()=>{
					obj:{//弹窗tabs表单,obj里面没写属性名 ,在弹窗表单里写属性名依然同步
						
					}
				}
			},
			linkFormData:{
				default:()=>{}
			}
			
		},
		methods:{
			event(e) {
			  if(e.event == "confirm"){
			    this.alertFormConfig.settingSubmit()
			  }
			  if(e.event == "cancel"){
				  this.alertFormConfig.cancel()
			  }
			}
		}
	}
</script>

<style lang="scss" scoped>
</style>
