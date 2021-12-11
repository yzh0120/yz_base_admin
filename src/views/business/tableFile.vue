<template>
  <page>
    <table class="table bgc">
      <tbody>
        <tr>
          <td>资料名称</td>
          <td>详情</td>
          <td>操作</td>
        </tr>
        <tr v-for="(item,index) in uploadList" :key="index">
          <td width="50%">{{item.name}}</td>
          <td width="30%">
            <div v-for="(file,fileIndex) in item.detail" :key="fileIndex">
              <i v-on:click="deleteFile" class="fa fa-minus-circle" style="color:red;" title="删除"></i>
              <el-tooltip content="Top Left 提示文字" placement="left">
                <div slot="content">上传者：{{file.F_CreateUserName}}
                  <br />上传时间：{{file.F_CreateDate}}<br />文件大小：{{file.F_FileSize}}
                </div>
                <span class="downloadFile" v-on:click="downloadFile">{{file.F_FileName}}</span>
              </el-tooltip>
            </div>
          </td>
          <td width="20%" class="text-center">
            <el-upload :disabled="btnDisabled" class="i-upload" :action="uploaduUrl" :show-file-list="false" multiple :on-success="upLoadSuccess" :on-change="handleChange" :headers="uploadHeaders">
              <el-button :disabled="btnDisabled" size="mini" type="primary" v-on:click="setUploaduUrl(item.taskName)">上传资料</el-button>
            </el-upload>
          </td>
        </tr>

      </tbody>
    </table>
  </page>
</template>

<script>
	/*  必填校验
	 let checkOK = true
	         try {
	             vm.$refs.form.uploadList.forEach((item) => {
	                 if (item.required) {
	                     if (!item.detail[0]) {
	                         vm.$message.error(`请上传${item.name}`);
	                         checkOK = false
	                         throw new Error("EndIterative");
	                     }
	                 }
	             })
	         } catch (e) {
	             if (e.message != "EndIterative") throw e;
	         }
	         if (!checkOK) return;
	 */
export default {
  data() {
    return {
      uploadList: [
        {
          name: "总体人员表（姓名+身份证）",
          taskName: "人员名单",
		  required: 1,
          detail: [
            {
              F_CreateUserName: "张三",
              F_CreateDate: "2018",
              F_FileSize: "10000",
              F_FileName: "文件名",
            },
          ],
        },
      ],
      uploaduUrl: "www.xxxx.com", //上传地址
      btnDisabled: false,
      uploadHeaders: {
        //上传头
        Authorization: "bearer ", //+ top.$.accessToken
      },
      fileType: ["jpg"],
    };
  },
  methods: {
    // 0 设置路由
    setUploaduUrl(flag) {
      this.uploaduUrl = this.uploaduUrl + flag; //拼接 唯一 凭证 和flag
    },
    // 1 上传图片之前
    beforeUpload(file) {
      let activeFileType = file.name.split(".").pop();
      return new Promise((resolve, reject) => {
        if (this.CaiWuserverUrlObj[0]) {
          this.btnDisabled = !this.btnDisabled;
          this.$message.error("只能上传一个");
          reject();
        } else if (!this.fileType.includes(activeFileType)) {
          this.$message.error(`请上传正确的文件类型`);
          this.btnDisabled = !this.btnDisabled;
          reject();
        } else {
          resolve();
        }
      });
    },
    //2 点击上传文件时的改变事件
    handleChange() {
      this.btnDisabled = !this.btnDisabled;
    },
    //3 文件上传成功
    upLoadSuccess() {
      //get 请求 获取文件
    },
    //4 删除文件
    deleteFile() {},
    //5 如何下载
    downloadFile() {
      //window.open("http://openlaw.cn/search/judgement/default?keyword=" + companyname, '_blank');
    },
  },
};
</script>

<style style="scss" scoped>
</style>





