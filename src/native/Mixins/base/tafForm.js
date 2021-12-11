export default {
	methods: {
		//1 新增
		_tfAdd(alertData) {
			
			alertData.flag = "新增";
			alertData.field = true
		},
		//2 编辑
		_tfEdit(alertData, formObj, index) {
			//编辑 需要打开alert
			alertData.flag = index;
			formObj.data = this.$fn.deepClone(
				alertData.tableData[index]
			);
			alertData.field = true
		},
		//3 弹窗取消 重置弹窗的表单
		_tfCancel(alertData, formObj) {
			// formObj.data = {};
			this._delPropsform(formObj.data)
			alertData.field = false
		},
		//4 弹窗确认
		_tfConfirm(alertData, formObj) {
			formObj.dom.validate((valid) => {
				if (valid) {
					//确认 根据新增或者编辑操作
					if (alertData.flag == "新增") {
						/***********************************************************************/
						alertData.tableData.push(this.$fn.deepClone(formObj.data));
					} else if (this.$fn.type(alertData.flag) == "num") {
						this.$set(
							alertData.tableData,
							alertData.flag,
							this.$fn.deepClone(formObj.data)
						);
					}
					// formObj.data = {};	
					this._delPropsform(formObj.data)
					alertData.field = false
				} else {

				}
			})

		},
		//5 删除
		_tfDel(alertData,formObj, index) {
			alertData.tableData.splice(index, 1);
			// formObj.data = {};
			this._delPropsform(formObj.data)
		},


		_delPropsform(obj) {
			for (let key of Object.keys(obj)) {
				obj[key] = ''
			}
			// console.log(obj, "obj")
		}
	}
}
