<template>
	<div>
		<!-- for存在当前审批流的历史信息 -->
		<div v-if="activeFlowHistoryList.length">
			<panel  type="primary" v-for="(oneRoleHistory, oneRoleHistoryIndex) in activeFlowHistoryList" :key="oneRoleHistoryIndex + 'history'" >
				<div slot="head">
				  <div>{{oneRoleHistory.nodeName}}</div>
				</div>
				<div class="body">
					<!-- for展示附件 -->
					<fileList :arr="oneRoleHistory.fileList"></fileList>
					
					<div class="title">审核结论：</div>
					<div class="content" v-html="oneRoleHistory.content.replace(/\n|\r\n/gi,'<br/>')"></div>
					<div class="div-right">
						<div class="people">
							<div>审核人: {{ oneRoleHistory.createUserName }}</div>
							<div>审核时间：{{ oneRoleHistory.createTime }}</div>
						</div>
					</div>
					
					<!-- for展示追加意见 -->
					<panel type="warning" v-for="(singleAddContent, singleAddContentIndex) in oneRoleHistory.addContentList" 
					:key="singleAddContentIndex + 'addcontent'" style="padding: 40px 40px 0px 40px;">
						<div slot="head" >
							<span >第{{singleAddContentIndex+1}}次历史补充意见</span>
						</div>
						<div>
							<!-- for展示附件 -->
							<fileList :arr="singleAddContent.fileList"></fileList>
							
							<!-- <el-tooltip class="fuJian" placement="right" v-for="(singleFile, singleFileIndex) in singleAddContent.fileList" :key="singleFileIndex + 'fujian'">
								
								<div slot="content">
									上传用户：{{ singleFile.createUserName }}<br />上传时间：{{ singleFile.createTime }}<br />下载次数：{{singleFile.downloadCount }}
								</div>
								
								<span>
									<i class="el-icon-delete" style="color: red;cursor: pointer;"></i>&nbsp;
									<el-button type="text" @click="downloadFile">{{ singleFile.fileName }}</el-button>
								</span>
							</el-tooltip> -->
							<!-- <div class="title">审核结论：</div> -->
							<div class="content" v-html="singleAddContent.content.replace(/\n|\r\n/gi,'<br/>')"></div>
							<div class="div-right">
								<div class="people">
									<div>补充人: {{ singleAddContent.createUserName }}</div>
									<div>补充时间：{{ singleAddContent.createTime }}</div>
								</div>
							</div>
						</div>
					</panel>
					<!-- 追加意见 -->
					<div class="addContent" v-if="oneRoleHistory.creator">
						<el-checkbox v-model="oneRoleHistory.addContent_checkBox_self">追加内容：</el-checkbox>
						<br>
						<el-form v-if="oneRoleHistory.addContent_checkBox_self" label-width="120px" :model="oneRoleHistory" ref="approveForm">
							<el-form-item label="补充意见：" prop="addContent_self" :rules='{ required: true, message: "补充意见不能为空", trigger: "blur" }'>
							    <el-input type="textarea" :rows="5" placeholder="请输入内容" v-model="oneRoleHistory.addContent_self" ></el-input>              
							</el-form-item>
							
							<el-checkbox v-model="oneRoleHistory.addFile_checkBox_self">是否上传附件：</el-checkbox>
							<br>
							<el-form-item label="" class="div-center" label-width="0px">
							  <div @click="seturl(oneRoleHistory.nodeName)" class="">
								<el-upload v-if="oneRoleHistory.addFile_checkBox_self"  drag :action="uploadUrl"  :limit="10"  :before-remove="beforeRemove"
								:on-success="uploadSuccess" :headers="uploadHeaders">
								  <i class="el-icon-upload"></i>
								  <div class="el-upload__text"><em>点击上传</em></div>
								  <div class="el-upload__tip" slot="tip">最多可上传10个文件，文件总大小不得超过1GB</div>
								</el-upload>
							  </div>
							</el-form-item>
							
							<el-form-item class="text-center" label-width="0px">
							    <el-button type="primary"  icon="el-icon-tickets" size="large" @click="push(oneRoleHistory,oneRoleHistoryIndex)">提交补充内容</el-button>
							</el-form-item>
						</el-form>
						
					</div>
				</div>
			</panel>
		</div>
		
		<!-- 当前审核 -->
		<div v-if="activeFlow.length">
			<!-- for -->
			<panel  type="primary" v-for="(item, index) in activeFlow" :key="index" >
				<div slot="head">
				  <div>{{item.nodeName}}</div>
				</div>
				<div class="body">
					<slot :node="item"></slot>
					<el-form  label-width="120px" :model="item" ref="approveForm">
						<el-form-item label="审批结论：" prop="content" :rules='{ required: true, message: "补充意见不能为空", trigger: "blur" }'>
						    <el-input v-model="item.content" type="textarea" :rows="5" placeholder="请输入内容"  ></el-input>              
						</el-form-item>
						<el-checkbox v-model="item.addFile_checkBox_self">是否上传附件：</el-checkbox>
						<br>
						<el-form-item label="" class="div-center" label-width="0px">
							
						  <div @click="seturl(item.nodeName)" class="">
							<el-upload v-if="item.addFile_checkBox_self"  drag :action="uploadUrl"  :limit="10"  :before-remove="beforeRemove"
							:on-success="uploadSuccess" :headers="uploadHeaders">
							  <i class="el-icon-upload"></i>
							  <div class="el-upload__text"><em>点击上传</em></div>
							  <div class="el-upload__tip" slot="tip">最多可上传10个文件，文件总大小不得超过1GB</div>
							</el-upload>
						  </div>
						  
						</el-form-item>
						<el-form-item class="text-center" label-width="0px">
						    <el-button type="warning">驳回</el-button>
							<el-button type="success">保存审核</el-button>
							<el-button type="primary" @click="save">提交审核</el-button>
						</el-form-item>
					</el-form>
					<!-- for展示附件 -->
					<fileList :arr="item.fileList"></fileList>
				
					<!-- <el-tooltip class="fuJian" placement="right" v-for="(activeSingelFile, activeSingelFileIndex) in item.fileList" :key="activeSingelFileIndex + 'activeSingelFileIndex'">
				
						<div slot="content">
							上传用户：{{ activeSingelFile.createUserName }}<br />上传时间：{{ activeSingelFile.createTime }}
							<br />下载次数：{{activeSingelFile.downloadCount }}
						</div>
		
						<span>
							<i class="el-icon-delete" style="color: red;cursor: pointer;"></i>&nbsp;
							<el-button type="text" @click="downloadFile">{{ activeSingelFile.fileName }}</el-button>
						</span>
					</el-tooltip> -->
				</div>
			</panel>
		</div>
	</div>
</template>

<script>
	export default{
		data(){
			return {
				activeFlowHistoryList:[
					{
						nodeName:"开始",content:"同意",createUserName:"张三",createTime:"2021-10-20 11:54:55",creator:true,
						fileList:[{fileName:"文件0.png",createUserName:"张三",createTime:"2021-10-20 11:54:55",downloadCount:"3"}],
						addContentList:[
							{
								content:"同意",createUserName:"张三",createTime:"2021-10-20 11:54:55",
								fileList:[{fileName:"文件1.png",createUserName:"张三",createTime:"2021-10-20 11:54:55",downloadCount:"3"}],
							},
						]
					},
					{
						nodeName:"项目A角",content:"同意",createUserName:"张三",createTime:"2021-10-20 11:54:55",creator:true,
						addContentList:[{content:"同意",createUserName:"张三",createTime:"2021-10-20 11:54:55",
						fileList:[{fileName:"文件2.png",createUserName:"张三",createTime:"2021-10-20 11:54:55",downloadCount:"3"}]}]
					}
				],
				activeFlow:[
					{
						nodeName:"经理",content:"",createUserName:"张三",createTime:"2021-10-20 11:54:55",creator:true,
						fileList:[{fileName:"文件.png",createUserName:"张三",createTime:"2021-10-20 11:54:55",downloadCount:"3"}],
					},
				],
				uploadUrl:"www.baidu.com",
				uploadHeaders: {
				     Authorization: "Bearer " //+ Cookies.get("token"),
				},
			}
		},
		created() {
			// this.activeFlowHistoryList.forEach(())
			let arr = this.$fn.deepClone(this.activeFlowHistoryList)
			arr.forEach((item)=>{
				item.addContent_checkBox_self = false
				item.addContent_self = ""//{content:""}
				item.addFile_checkBox_self = false
			})
			this.activeFlowHistoryList = arr
			
			let arr1 = this.$fn.deepClone(this.activeFlow)
			arr1.forEach((item)=>{
				item.addFile_checkBox_self = false
			})
			this.activeFlow = arr1
		},
		methods:{
			//提交审核的时候 吧文件的ids 放到 fileIds
			//文件删除成功
			handleRemove(fileList, item) {
			  item.fileIds = fileList.map((item) => {
				return item.response.data.id;
			  });
			  console.log(item.fileIds, "123");
			},
			// upload的文件删除前
			async beforeRemove(file, fileList) {
			  let id = file.response.data.id;
			  let con = await this.$confirm(`确定移除 ？`);
			  if (con == "confirm") {
				let res = await fileApi.del([id]);
				if (res.code == 200) {
				  this.$message.success("删除成功!");
				  return true;
				} else {
				  this.$message.error(res.info);
				  return false;
				}
			  } else {
				return false;
			  }
			},
			//文件上传成功
			uploadSuccess(res, item) {
			      if (res.code == 200) {
			        this.$message.success("附件上传成功！");
			        if (!item.fileIds) {
			          this.$set(item, "fileIds", []);
			        }
			        item.fileIds.push(res.data.id);
			      } else {
			        this.$message.error(res.info);
			      }
			},
			
			
			
			
			push(item,index){
				let obj = {
					    content:item.addContent_self,createUserName:"张三",createTime:"2021-10-20 11:54:55",
						fileList:[{fileName:"文件1.png",createUserName:"张三",createTime:"2021-10-20 11:54:55",downloadCount:"3"}],
						}
				this.activeFlowHistoryList[index].addContentList.push(obj)
				//清空输入框
				item.addContent_self = ""
				item.addContent_checkBox_self = false
				item.addFile_checkBox_self = false
			},

			save(){
				console.log(this.$refs["approveForm"],"-----------")
				this.$refs["approveForm"][0].validate((valid) => {
				          if (valid) {
				            alert('submit!');
				          } else {
				            console.log('error submit!!');
				            return false;
				          }
				        });
			},
			downloadFile(){
				
			},
			seturl(taskName) {
			      this.serverUrl =
			        process.env.VUE_APP_BASE_API +
			        `/v1/base/file/upload?folderId=${this.projectId}&taskName=${taskName}`;
			},
			
		}
	}
</script>

<style lang="scss" scoped>
	.body{
		.title{
			margin-top: 20px;
			font-size: 18px;
		}
		.content{
			    padding: 20px 0 0 40px;
			    font-size: 16px;
			    color: #888888;
		}
		.people{
			margin-top: 20px;
			color: #888888;
		}
	}
</style>
