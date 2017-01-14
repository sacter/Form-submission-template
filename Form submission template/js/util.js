/*本文件是一个JS工具文件，里面提供一系列的属性、函数、类*/
/*本方法主要验证指定元素的内容是否为空*/
function validateEmpty(eleId){
	var obj=document.getElementById(eleId);  //取得表单元素
	if(obj!=null){
		if(obj.value==""){  //数据错误
			setFailureStyle(obj);
			return false;  //验证失败
		}else{
			setSuccessStyle(obj);
			return true;  //验证成功
		}	
	}
	return false;
}
/*本方法主要通过正则表达式验证用户输入格式是否正确*/
function validateRegex(eleId,regex){  //从外部传入正则
	if(validateEmpty(eleId)){  //进行是否为空的验证
		var obj=document.getElementById(eleId);  //取得表单元素
		if(!regex.test(obj.value)){  //数据错误	
			setFailureStyle(obj);	
			return false;  //验证失败
		}else{
			setSuccessStyle(obj);
			return true;  //验证成功
		}
	}
	return false;
}
function validateEmail(eleId){   //用户名为Email地址验证
	return validateRegex(eleId,/^\w+@\w+|\.\w+$/);
}
function validateNumber(eleId){   //密码验证
	return validateRegex(eleId,/^\d+(\.\d+)?$/);
}
//src要比较的原始数据，dist要设置比较的字段ID
function validateRepeat(srcId,distId){   //密码验证
	if(validateEmpty(srcId)&&validateEmpty(distId)){
		var srcObj=document.getElementById(srcId);
		var distObj=document.getElementById(distId);
		if(srcObj.value!=distObj.value){
			setFailureStyle(distObj);	
			return false;  //验证失败
		}else{
			setSuccessStyle(distObj);
			return true;  //验证成功
		}
	}
	return false;
}
function setSuccessStyle(obj){  //设置成功
	var spanObj=document.getElementById(obj.id+'Span');  //取得提示信息元素
	obj.className='success';  //设置正确样式
	if(spanObj!=null){
		spanObj.innerHTML='<font color="green">√</font>';
	}
}
function setFailureStyle(obj){  //设置失败
	var spanObj=document.getElementById(obj.id+'Span');
	obj.className='failure';  //设置错误样式
	if(spanObj!=null){
		spanObj.innerHTML='<font color="red">×</font>';
	} 
}
/*阻止表单在出现问题时提交*/
function formStop(e){
	if(e&&e.preventDefault){  //现在是W3C下执行
		e.preventDefault();  //阻止浏览器的动作
	}else{  //专门针对IE浏览器的处理
		window.event.returnValue=false;
	}
}