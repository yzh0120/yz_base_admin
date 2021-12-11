<template>
  <div>
    <panel class="box-card">
      <div slot="header" class="clearfix">
        <h4>资料文件信息</h4>
      </div>
      <table class="table table-bordered table-striped">
        <tbody>
          <tr>
            <td>资料名称</td>
            <td>保函开函资料</td>
            <td>操作</td>
          </tr>
          <tr v-for="(item,index) in uploadList" :key="index">
            <td width="50%">{{item.name}}</td>
            <td width="30%">
              <div v-for="(file,fileIndex) in item.detail" :key="fileIndex">
                <!-- <i v-on:click="deleteFile(item)" class="fa fa-minus-circle" style="color:red;" title="删除"></i> -->
                <i class="el-icon-error" style="color:red;" @click="deleteFile(file,fileIndex)"></i>
                <el-tooltip content="Top Left 提示文字" placement="left">
                  <div slot="content">上传者：{{file.createUserName}}
                    <br />上传时间：{{file.createTime}}<br />文件大小：{{file.fileSize}}
                  </div>
                  <span class="downloadFile" v-on:click="downloadFile(file)">{{file.fileName}}</span>
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
    </panel>
  </div>
</template>

<script>
// import * as fileApi from "@/api/file";
// import { getCookie } from "@/utils/auth.js";
let fileApi = {}

let  getCookie = function(){}
export default {
  props: {
    projectId: {
      type: String,
      default: "",
    },
    uploadList: {
      type: Array,
      default: () => {
        return [];
      },
    },
  },
  data() {
    return {
      // uploadList: [
      //   {
      //     name: "1.开立保函委托合同或开立保函确认书（额度项下）",
      //     taskName: "开立保函委托合同或开立保函确认书",
      //     detail: [],
      //   },
      //   {
      //     name: "2.保证反担保合同（非必传）",
      //     taskName: "保证反担保合同",
      //     detail: [],
      //   },
      //   {
      //     name: "3.其他法律文件（非必传）",
      //     taskName: "其他法律文件",
      //     detail: [],
      //   },
      // ],
      uploaduUrl: process.env.VUE_APP_BASE_API + "/v1/base/file/upload", //上传地址
      btnDisabled: false,
      uploadHeaders: {
        //上传头
        Authorization: getCookie("token"),
      },
      taskName: "",
    };
  },
  created() {
    this.getFiles(); //获取历史文件
  },
  methods: {
    getFiles() {
      this.uploadList.forEach((item) => {
        // if (item.taskName == this.taskName) {
        fileApi
          .getFileListByFolderId({
            folderId: this.projectId,
            taskName: item.taskName,
          })
          .then((result) => {
            if (result.code == 200) {
              item.detail = result.data;
              this.$forceUpdate();
              console.log(item);
            } else {
              this.$message.error(res.info);
            }
          });
        // }
      });
    },
    // 0 设置路由
    setUploaduUrl(taskName) {
      this.taskName = taskName;
      // this.uploaduUrl =
      //   this.uploaduUrl +
      //   "?folderId=" +
      //   this.projectId +
      //   "&taskName=" +
      //   taskName;
      this.uploaduUrl =
        process.env.VUE_APP_BASE_API +
        "/v1/base/file/upload" +
        "?folderId=" +
        this.projectId +
        "&taskName=" +
        taskName;
    },

    //2 点击上传文件时的改变事件
    handleChange() {
      this.btnDisabled = !this.btnDisabled;
    },
    //3 文件上传成功
    upLoadSuccess(res) {
      if (res.code == 200) {
        this.$message.success(res.data.fileName + "上传成功！");
        this.uploadList.forEach((item) => {
          if (item.taskName == this.taskName) {
            fileApi
              .getFileListByFolderId({
                folderId: this.projectId,
                taskName: this.taskName,
              })
              .then((result) => {
                if (result.code == 200) {
                  item.detail = result.data;
                  this.$forceUpdate();
                  console.log(item);
                } else {
                  this.$message.error(res.info);
                }
              });
          }
        });
      } else {
        this.$message.error(res.info);
      }
    },
    //4 删除文件
    deleteFile(item) {
      // console.log(item, "item");
      fileApi.del([item.id]).then((res) => {
        if (res.code == 200) {
          this.$message.success("删除成功");
          this.getFiles(); //获取历史文件
        } else {
          this.$message.error(res.info);
        }
      });
    },
    //5 如何下载
    downloadFile(item) {
      //window.open("http://openlaw.cn/search/judgement/default?keyword=" + companyname, '_blank');
      fileApi.download({ fileUrl: item.fileUrl + item.filePath });
    },
  },
};
</script>

<style style="scss" scoped>
.downloadFile {
  cursor: pointer;
}
</style>





