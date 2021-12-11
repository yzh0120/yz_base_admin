<template>
	<page >
		<el-button @click="check">提交</el-button><el-button @click="reset">重置</el-button>
		<base-form :data="formData" ref="form" @event="event" :dis="dis"></base-form>
	</page>
</template>

<script>
	export default{
		props:["dis","item"],
		watch:{
			item:{
				handler(){
					if(this.$fn.type(this.item) == "obj"){
						// this._setdata(this.formData,this.item)
						this.formData.data = this.item
						// this.$refs.form && this.$refs.form.sync()
					}
					
				},
				deep:true,
				immediate: true,
			}
		},
		data(){
			let self = this
			return {
				formData:{
					// titleWidth:"200px",
					list:[
						{ type:"input",field:"__input",title:"输入框",rules:[
							{ required: true, message: "请输入", trigger: "blur" },
							{ validator: self.$check.demo, trigger: "blur" },
					      ]
						},
						{ type:"treeselect",field:"__treeselect",title:"树选择",opt:[], 
						props :(node) =>{return { id: node.key,label: node.name,children: node.subOptions,}}},
						{ type:"input",field:"__input1",title:"输入框",btn:"搜索"},
						{type:"password",field:"__password",title:"密码框"},
						{type:"textarea",field:"__textarea",title:"文本域",row:4},
						{type:"select",field:"__select",title:"下拉框",opt:[{text1:"选项一",value1:1},{text1:"选项二",value1:2}],text:"text1",value:"value1"},
						{type:"select",field:"__selectFilter",title:"过滤下拉框",opt:[{text1:"选项一",value1:1},{text1:"选项二",value1:2}],text:"text1",value:"value1",filter:true},
						{type:"select",field:"__selectFilter",title:"远程过滤下拉框",opt:[{text1:"选项一",value1:1},{text1:"选项二",value1:2}],text:"text1",value:"value1",remote:self.remote},
						{type:"select",field:"__selectCrate",title:"多选下拉框",opt:[{text:"选项一",value:1},{text:"选项二",value:2}],create:true},
						{type:"radio",field:"__radio",title:"单选框",opt:[{text1:"单选一",value1:1},{text1:"单选二",value1:2}],text:"text1",value:"value1"},
						{type:"checkbox",field:"__checkbox",title:"多选框",opt:[{text1:"多选一",value1:1},{text1:"多选二",value1:2}],text:"text1",value:"value1"},
						{type:"date",field:"__date",title:"日期选择器"},
						{type:"daterange",field:"__daterange",title:"日期段选择器"},
						{type:"switch",field:"__switch",title:"开关",av:1,iav:0,avText:"同意",iavText:"否决"},
						{type:"auto",field:"__auto",title:"自动补全",filter: self.auto_filter,key:"value1"}
					],
					data:{type:"企业"},
					// dom:null,
				}
			}
		},
		created() {
		},
		mounted() {
				let arr  =[ {
						key: 'a',
						name: 'a',
						subOptions: [ {
							key: 'aa',
							name: 'aa',
						}, {
							key: 'ab',
							name: 'ab',
						} ],
						}, {
						key: 'b',
						name: 'b',
						}, {
						key: 'c',
						name: 'c',
						} ]
						this._set(this.formData, "__treeselect",{opt:arr});
			
		},
		methods:{
			event(e){
				console.log(e)
			},
			remote(query){
				let arr = [{text1:query+"选项一",value1:1},{text1:query+"选项二",value1:2}]
				this._set(this.formData, "__selectFilter",{opt:arr});
			},
			auto_filter(queryStr, cd) { //自动补全 
				let res = [{
						value1: "三全鲜食（北新泾店）",
						address: "长宁区新渔路144号"
					},
					{
						value1: "Hot honey 首尔炸鸡（仙霞路）",
						address: "上海市长宁区淞虹路661号",
					},
				];
				cd(res);
			},
			check(){
				console.log(this.formData.data)
				if(this.$refs.form.check()){
					this.$message.success("成功")
					
				}else{
					this.$message.error("失败")
				}
			},
			reset(){
				this.$refs.form.reset()
			}
		}
	}
</script>

<style lang="scsss" scoped>
	
</style>