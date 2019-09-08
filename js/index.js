var IMOOC=document.querySelector(".IMOOC"),
    IMOOCtext=document.querySelector(".IMOOCtext"),
    navbox=document.querySelector(".navbox"),
    header=document.querySelector(".header"),
    right=document.querySelectorAll(".right"),
    rule=document.querySelector(".rule"),
    btn=document.querySelector(".btn"),
    username=byID('username'),
    pwd=byID('pwd'),
    againpwd=byID('againpwd'),
    Name=byID('Name'),
    uesrnumber=byID('uesrnumber'),
    email=byID('email'),
    phonenumber=byID('phonenumber');
    










var input1=false;
var input2=false;
var input3=false;
var input4=false;
var input5=false;
var input6=false;
var input7=false;





//封装getelementbyid
function byID(id){
	return typeof(id) === "string" ? document.getElementById(id):id;
}



//封装通用的跨浏览器处理事件
function addhandler(element,type,handler){
	if(element.addEventListener){
		element.addEventListener(type,handler,false);
	}else if (element.attachEvent) {
		element.attachEvent("on"+ type,handler);
	} else{
		element["on"+type] = handler;
		var input1=true;
	}
}






// var IMOOCtextover=function(){
// 	IMOOC.onmouseover=function(){
// 		IMOOCtext.style.display="block";
// 	}
// }();


// var IMOOCtextout=function(){
// 	header.onmouseout=function(){
// 		IMOOCtext.style.display="none"
// 	}
// }();

var IMOOCtextover=function(){
	IMOOCtext.style.display="block";
}

var IMOOCtextout=function(){
	IMOOCtext.style.display="none";
}
addhandler(IMOOC,"mouseover",IMOOCtextover);
addhandler(IMOOCtext,"mouseout",IMOOCtextout);



var ruleover=function(){
		rule.style.display="block";
	}


var ruleout=function(){
		rule.style.display="none";
}


addhandler(right[3],"mouseover",ruleover);
addhandler(right[3],"mouseout",ruleout);




username.onblur=function(){
	var reg=/^[a-zA-Z]+\w{5,30}$/;
	if (!reg.exec(username.value)) {
		right[0].innerHTML="6-30为字母，数字或'_',字母开头";
		right[0].style.color="red";
	}else{
		right[0].innerHTML="用户输入正确";
		right[0].style.color="green";
		input1=true;
	}
}

pwd.onblur=function(){
	var reg=/^\w{6,20}$/;
	if (!reg.exec(pwd.value)) {
		right[1].innerHTML="6-20位字母，数字或符号";
		right[1].style.color="red";
	}else{
		var number=/^[0-9]{6,20}$/;
		var english=/^[a-zA-Z]$/;
		var fuhao=/^[\W\D]{5,20}$/;
		var middle=/^[a-zA-Z0-9]{6,20}$/;
		if (number.exec(pwd.value)||english.exec(pwd.value)||fuhao.exec(pwd.value)) {
			right[1].innerHTML="密码强度低";
			right[1].style.color="green";
		}else if (middle.exec(pwd.value)) {
			right[1].innerHTML="密码强度中";
			right[1].style.color="green";
		}else{
			right[1].innerHTML="密码强度高";
			right[1].style.color="green";
		}
		input2=true;
	}
}


againpwd.onblur=function(){
	if (againpwd.value=="") {
		right[2].innerHTML="输入为空";
		right[2].style.color="red";
	}else{
		if (againpwd.value==pwd.value) {
			right[2].innerHTML="两次输入一致";
			right[2].style.color="green";
		}else{
			right[2].innerHTML="两次输入不一致";
			right[2].style.color="red";
		}
		input3=true;
	}
}

Name.onblur=function(){
	var reg=/^[\u4e00-\u9fa5]{2,15}$/;
	if (!reg.exec(Name.value)) {
		right[3].innerHTML="姓名只能包含中文或者英文,且字符在3-30个之间";
		right[3].style.color="red";
	}else{
		right[3].innerHTML="姓名输入正确";
		right[3].style.color="green";
		input4=true;
	}
}


uesrnumber.onblur=function(){
	var reg=/^[0-9]{17}[x]*$/i;
	if (!reg.exec(uesrnumber.value)) {
		right[4].innerHTML="请输入18位身份证号码";
		right[4].style.color="red";
	}else{
		right[4].innerHTML="号码输入正确";
		right[4].style.color="green";
		input5=true;
	}
}

email.onblur=function(){
	var reg=/^\w+@\w{2,8}\.\w{2,8}$/;
	if (!reg.exec(email.value)) {
		right[5].innerHTML="请输入正确的邮箱";
		right[5].style.color="red";
	}else{
		right[5].innerHTML="邮箱格式正确";
		right[5].style.color="green";
		input6=true;
	}
}


phonenumber.onblur=function(){
	var reg=/^[0-9]{11}$/;
	if (!reg.exec(phonenumber.value)) {
		right[6].innerHTML="您输入的手机号码不是有效的格式";
		right[6].style.color="red";
	}else{
		right[6].innerHTML="手机格式正确";
		right[6].style.color="green";
		input7=true;
	}
}

var btn=function(){
	btn.onclick=function(){
	if (input1==false||input2==false||input3==false||input3==false||input5==false||input6==false||input7==false) {
		alert("未填写正确");
	}else{
		window.open("http://www.imooc.com");
	}
}
}();





