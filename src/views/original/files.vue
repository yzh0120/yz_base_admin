<template>
  <page>
	  <span class="label">基本的element文件上传:</span>
    <el-upload
      class="upload-demo"
      action="https://jsonplaceholder.typicode.com/posts/"
	  :before-upload="beforeUpload"
      :on-preview="handlePreview"
      :on-remove="handleRemove"
      :before-remove="beforeRemove"
	  :on-change="handleChange"
      multiple
      :limit="3"
      :on-exceed="handleExceed"
      :file-list="fileList">
      <el-button size="small" type="primary">点击上传</el-button>
      <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
    </el-upload>
  </page>
</template>

<script>
	let data = {
		// [{name:'',url:''}]
		fileList:[]
	}
export default {
	
  data() {
    return data
  },
  computed:{
  	data(){//因为模板中的变量都是在this.xx来访问的,所以为了注入到子组件,使用此写法 ,this.data === data 返回true  ,
  		return data
  	}
  },
  /* files对象里面包含了文件自带的信息
  lastModified: 1616635700912                                                        最后修改事件
  lastModifiedDate: Thu Mar 25 2021 09:28:20 GMT+0800 (中国标准时间) {}
  name: "mxh.png"                                                                     文件名
  size: 75731                                                                          大小 字节为单位
  type: "image/png"                                                                    文件类型
  uid: 1620634821966
  webkitRelativePath: ""
  
  */
  methods: {
	  /* 
	  上传文件之前的钩子，参数为上传的文件，若返回 false 或者返回 Promise 且被 reject，则停止上传。
	  多个文件同时上传,其实是多文件同步调用上传的方法,微秒级别,人眼感受不到
	  */
	beforeUpload(file, fileList){
		console.log(file,fileList,'文件上传之前的钩子')
		
		const isJPG = file.type === 'image/jpeg';//文件类型
		const isLt2M = (file.size / 1024 / 1024) < 2;//文件大小

		if (!isJPG) {
		  this.$message.error('上传头像图片只能是 JPG 格式!');
		}
		if (!isLt2M) {
		  this.$message.error('上传头像图片大小不能超过 2MB!');
		}
		return isJPG && isLt2M;
	  
	},
	//文件状态改变时的钩子，添加文件、上传成功和上传失败时都会被调用
	handleChange(file, fileList) {
	        this.fileList = fileList.slice(-3);
	      },
	//点击文件列表中已上传的文件时的钩子
	handlePreview(file) {
		console.log(file,file.length,'点击文件列表中已上传的文件时的钩子');
	},
	//文件列表移除文件后的钩子
	handleRemove(file, fileList) {
		console.log(file, fileList,'文件列表移除文件时的钩子');
	},
	//文件超出个数限制时的钩子
	handleExceed(files, fileList) {//在这个钩子 files不是对而是数组
		this.$message.warning(`当前限制选择 3 个文件，本次选择了 ${files.length} 个文件，共选择了 ${files.length + fileList.length} 个文件`);
	},
	/* 
	 删除文件之前的钩子，参数为上传的文件和文件列表，若返回 false 或者返回 Promise 且被 reject，则停止删除
	 */
	beforeRemove(file, fileList) {
		return this.$confirm(`确定移除 ${ file.name }？`);
	}
  },
  mounted() {
    
  },
};
</script>

<style>
</style>
