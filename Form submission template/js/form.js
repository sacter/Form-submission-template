window.onload=function(){
	document.getElementById('uid').addEventListener('blur',function(){
		validateUid();
	},false);
	document.getElementById('password').addEventListener('blur',function(){
		validatePassword();
	},false);
	document.getElementById('conf').addEventListener('blur',function(){
		validateConf();
	},false);
	document.getElementById('loginForm').addEventListener('submit',function(e){
		if(validateUid()&&validatePassword()){
			this.submit();  //可以提交
		}else{
			formStop(e);
		}
	},false);
}
function validateUid(){  //专门验证uid数据
	return validateEmail('uid');
}
function validatePassword(){  //专门验证password数据
	return validateEmpty('password');
}
function validateConf(){  //专门验证conf数据
	return validateRepeat('password','conf');
}