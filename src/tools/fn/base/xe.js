

import XEUtils from 'xe-utils'
//https://x-extends.github.io/xe-utils/#/

//分组
function groupBy(data, key){
	 if (data && key) {
	    return XEUtils.groupBy(data, key)
	  } else {
	    return "参数错误"
	  }
}

//数组去重
function uniq (array){
	 if (array) {
	    return XEUtils.uniq(array)
	  } else {
	    return "参数错误"
	  }
}

//将数组进行排序
function orderBy(array,props){
	 if (array) {
		 if(props){
			  return XEUtils.uniq(array,props)
		 }else{
			  return XEUtils.uniq(array)
		 }
	   
	  } else {
	    return "参数错误"
	  }
}

//获取一个指定范围内随机数
function random (min, max){
	 if (min, max) {
		return XEUtils.random(min, max)
	  } else {
	    return "参数错误"
	  }
}

export default{
	groupBy,
	uniq,
	orderBy,
	random
}
