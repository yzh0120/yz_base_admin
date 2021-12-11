export default {
	methods: {
		//1 新增
		_tAdd(alertData) {
			
			alertData.flag = "新增";
			alertData.field = true
		},
		//2 编辑
		_tEdit(alertData, formObj, tableObj, index) {
			//编辑 需要打开alert
			alertData.flag = index;
			formObj.data = this.$fn.deepClone(
				tableObj.data[index]
			);
			alertData.field = true
		},
		//3 弹窗取消 重置弹窗的表单
		_tCancel(alertData, formObj) {
			// formObj.data = {};
			this._delProps(formObj.data)
			alertData.field = false
		},
		//4 弹窗确认
		_tConfirm(alertData, formObj, tableObj) {
			formObj.dom.validate((valid) => {
				if (valid) {
					//确认 根据新增或者编辑操作
					if (alertData.flag == "新增") {
						/***********************************************************************/
						tableObj.data.push(this.$fn.deepClone(formObj.data));
					} else if (this.$fn.type(alertData.flag) == "num") {
						this.$set(
							tableObj.data,
							alertData.flag,
							this.$fn.deepClone(formObj.data)
						);
					}
					// formObj.data = {};	
					this._delProps(formObj.data)
					alertData.field = false
				} else {

				}
			})

		},
		//5 删除
		_tDel(formObj, tableObj, index) {
			tableObj.data.splice(index, 1);
			// formObj.data = {};
			this._delProps(formObj.data)
		},




		_delProps(obj) {
			for (let key of Object.keys(obj)) {
				obj[key] = ''
			}
			// console.log(obj, "obj")
		}
	}
}
