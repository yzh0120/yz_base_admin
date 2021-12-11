<template>
	<page>
			<el-button @click="go">测试</el-button>
			<div >工具函数类</div>
			
			<el-card>
			  <div slot="header">
				  <el-button @click="accSpace">银行账号四位分割</el-button>
			  </div>
			  银行账号:{{acc}}
			</el-card>
			
			
			
			<el-card>
			  <div slot="header">
				  <el-button @click="addDateFn">给某个时间增加一天</el-button>
			  </div>
			  {{addDate}}
			</el-card>
			

			
			
			<el-card>
			  <div slot="header">
				  <el-button @click="diffDateFn">两个时间的差值</el-button>
			  </div>
			  2018-10-05 2018-10-04
			  <br>
			  {{diffDate}}
			</el-card>
			
			<el-divider content-position="left"></el-divider>
			
			<el-card>
			  <div slot="header">
				  <el-button @click="num4Fn">金额千分位,小数点后保留小数位</el-button>
			  </div>
			  {{num4}}
			</el-card>
			
			
			<el-card>
			  <div slot="header">
				  <el-button @click="typeFn">判断数据的类型</el-button>
			  </div>
			  {{type}}
			</el-card>
			
			
			<el-card>
			  <div slot="header">
				  <el-button @click="getSimpleText">过滤富文本</el-button>
			  </div>
			  {{SimpleText}}
			</el-card>
			

			
			<el-card>
			  <div slot="header">
				  <el-button @click="bubbleFn">冒泡排序</el-button>
			  </div>
			  {{bubble}}
			</el-card>
		
	</page>
</template>

<script>
	export default{
		data(){
			return {
				acc:"5102100219000258489",
				addDate:"2018-10-05",
				diffDate:'',
				num4:'123456789',
				type:"这是字符串",
				SimpleText:"<div>文字</div>",
				bubble:[1,9,4,2,5]
			}
		},
		methods:{
			go(){
				this.$router.push({
					name:"tagsView",
					params:{
						a:1
					},
					query:{
						b:'b'
					}
				})
			},
			accSpace(){
				this.acc = this.$fn.split(this.acc)
			},
			addDateFn(){
				this.addDate = this.$fn.date.add(this.addDate,"天",1)
				this.addDate = this.$fn.date.toStr(this.addDate)
			},
			diffDateFn(){
				let date1 = '2018-10-05'
				let date2 = '2018-10-04'
				this.diffDate = this.$fn.date.diff(date1,date2)
			},
			num4Fn(){
				this.num4 = this.$fn.moneyFormat(this.num4)
			},
			typeFn(){
				this.type = this.$fn.type(this.type)
			},
			getSimpleText(){
				this.SimpleText = this.$fn.getSimpleText(this.SimpleText)
			},
			bubbleFn(){
				this.bubble = this.$fn.bubble(this.bubble)
				
			}
		}
	}
</script>

<style lang="scss" scoped>
</style>
