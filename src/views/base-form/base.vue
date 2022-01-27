<template>
	<page>
		
		<base-form :data="formData" ref="form" @event="event"></base-form>
		
		<el-button type="text" @click="go">数据</el-button>
	</page>
</template>

<script>
	export default{
		data(){
			let self = this
			return {
				formData:{
					
					list:[
						/*******************************************************输入框*/ 
						{ type:"input",field:"__input",title:"输入框",rules:[
							{ required: true, message: "请输入", trigger: "blur" },
							{ validator: self.$check.demo, trigger: "blur" },
					      ]
						},
						{ type:"input",field:"__input1",title:"输入框",btn:"搜索"},

						{ type:"input",field:"__input11",title:"输入框",append:"元"},
						
						{ type:"inputrange",field:"__inputrange",title:"输入框"},
						/*******************************************************treeselect*/ 
						{ type:"treeselect",field:"__treeselect",title:"树选择",opt:[], 
						// props :(node) =>{return { id: node.key,label: node.name,children: node.subOptions,}},
						// id:'id',label:"label",
						// create:true,
						children:"subOptions",
						rules:[
							{ required: true, message: "请输入", trigger: "blur" },
						  ]
						},
						{ type:"treeselect",field:"__treeselectCreate",title:"多选树选择",opt:[],
						mult:true,
						children:"subOptions",
						rules:[
							{ required: true, message: "请输入", trigger: "blur" },
						  ]
						},
						
						/*******************************************************密码框*/ 
						{type:"password",field:"__password",title:"密码框"},

						/*******************************************************文本域*/ 

						{type:"textarea",field:"__textarea",title:"文本域",row:4},

						/*******************************************************下拉框*/ 

						{type:"select",field:"__select",title:"下拉框",opt:[{text1:"选项一",value1:1},{text1:"选项二",value1:2}],text:"text1",value:"value1"},

						{type:"select",field:"__selectFilter",title:"过滤下拉框",opt:[{text1:"选项一",value1:1},{text1:"选项二",value1:2}],text:"text1",value:"value1",filter:true},

						{type:"select",field:"__selectFilter",title:"远程过滤下拉框",opt:[{text1:"选项一",value1:1},{text1:"选项二",value1:2}],text:"text1",value:"value1",remote:self.remote},

						{type:"select",field:"__selectCrate",title:"多选下拉框",opt:[{text:"选项一",value:1},{text:"选项二",value:2}],mult:true},

						
						/*******************************************************单选框*/ 
						
						{type:"radio",field:"__radio",title:"单选框",opt:[{text1:"单选一",value1:1},{text1:"单选二",value1:2}],text:"text1",value:"value1"},

						/*******************************************************多选框*/ 
						
						{type:"checkbox",field:"__checkbox",title:"多选框",opt:[{text1:"多选一",value1:1},{text1:"多选二",value1:2}],text:"text1",value:"value1"},

						/*******************************************************日期*/ 
						
						{type:"date",field:"__date",title:"日期选择器"},
						{type:"date",field:"__date_scoped",title:"日期时间限制选择器", pickerOpt:{
								onPick: (obj) => {
									// this.pickerMinDate = new Date(obj.minDate).getTime();
									// console.log(obj)
								},
								disabledDate:(time)=> {
									// console.log(time,"----",this.pickerMinDate)
									// if (this.pickerMinDate) {
									// 	const day1 =  366 * 24 * 3600 * 1000
									// 	let maxTime = this.pickerMinDate + day1
									// 	let minTime = this.pickerMinDate - day1
									// 	return time.getTime() > maxTime || time.getTime()<minTime || time.getTime() > Date.now()-1 * 24 * 3600 * 1000
									// }else{
									// 	return time.getTime() > Date.now()-1 * 24 * 3600 * 1000
									// }
									return time.getTime() < Date.now()- 730 * 24 * 3600 * 1000
								}
							},
						},
						{type:"daterange",field:"__daterange",title:"日期段选择器"},
						
						/*******************************************************时间*/ 
						
						{type:"time",field:"__time",title:"时间选择器"},

						/*******************************************************开关*/ 
						
						{type:"switch",field:"__switch",title:"开关",av:1,iav:0,avText:"同意",iavText:"否决"},

						/*******************************************************自动补全*/ 
						
						{type:"auto",field:"__auto",title:"自动补全",filter: self.auto_filter,key:"value1"}
					],
					data:{__input:"初始值"},
					// titleWidth:"200px",
				}
			}
		},
		created() {
		},
		mounted() {
			let arr  =[ {
				id: 'a',
				label: 'a',
				subOptions: [ {
					id: 'aa',
					label: 'aa',
				}, {
					id: 'ab',
					label: 'ab',
				} ],
				}, {
				id: 'b',
				label: 'b',
				}, {
				id: 'c',
				label: 'c',
				} ]
				this._set(this.formData, "__treeselect",{opt:arr});
				
				this._set(this.formData, "__treeselectCreate",{opt:arr});
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
			go(){
				console.log(this.formData.data)
			}
		}
	}
</script>

<style lang="scsss" scoped>
	
</style>