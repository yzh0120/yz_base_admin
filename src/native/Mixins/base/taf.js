export default {
	methods: {
		//1 新增
		_tafAdd(data) {
			data.flag = "新增";
			data.field = true
		},
		//2 编辑
		_tafEdit(data, index) {
			//编辑 需要打开alert
			data.flag = index;
			data.formData = this.$fn.deepClone(
				data.tableData[index]
			);
			data.field = true
		},
		//3 弹窗取消 重置弹窗的表单
		_tafCancel(data) {
			data.formData = {};
			data.field = false
		},
		//4 弹窗确认
		_tafConfirm(data, DOM) {

			DOM.validate((valid) => {
				if (valid) {
					//确认 根据新增或者编辑操作
					if (data.flag == "新增") {
						/***********************************************************************/
						data.tableData.push(this.$fn.deepClone(data.formData));
					} else if (this.$fn.type(data.flag) == "num") {
						this.$set(
							data.tableData,
							data.flag,
							this.$fn.deepClone(data.formData)
						);
					}
					data.formData = {};
					data.field = false
				} else {

				}
			})

		},
		//5 删除
		_tafDel(data, index) {
			data.tableData.splice(index, 1);
			data.formData = {};
		},


	}
}
