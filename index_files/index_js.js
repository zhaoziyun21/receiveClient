

var code;
function createCode() {
    code = "";
    var codeLength = 4; //验证码的长度
    var checkCode = document.getElementById("checkCode");
    var codeChars = new Array(0, 1, 2, 3, 4, 5, 6, 7, 8, 9,
    'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z',
    'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'); //所有候选组成验证码的字符，当然也可以用中文的
    for (var i = 0; i < codeLength; i++) {
        var charNum = Math.floor(Math.random() * 52);
        code += codeChars[charNum];
    }
    if (checkCode) {
        checkCode.className = "code";
        checkCode.innerHTML = code;
    }
}
/*var thisURL = document.URL;
if (thisURL != "") {
var getval = thisURL.split('?')[1];
var setval = getval.split("=")[1];
var showval = setval.split("&")[0];
function showvalf() {
document.getElementById('ff').value = showval;
var domain_value = document.getElementById("ff");
domain_value.value = showval;

var wh = document.documentElement.clientWidth;
var odiv = document.getElementById("qw");
var zw = odiv.offsetWidth;
qw.style.marginLeft = (wh - zw) / 2 + "px";
}
}

var domain_value = document.getElementById("ff");
domain_value.value = showval;


function Check() {
if (document.getElementById('hozeName').value == '' || document.getElementById('hozeName').value == '请输入您的姓名') {
alert('姓名不能为空！');
document.getElementById('hozeName').focus();
return false;
}
if (!/^[\u4e00-\u9fa5]+$/gi.test(document.getElementById("hozeName").value)) {
alert("只能输入汉字");
return false;
}
    
if (document.getElementById('hozeTel').value == '' || document.getElementById('hozeTel').value == '请输入手机号码') {
alert('手机号码不能为空！');
document.getElementById('hozeTel').focus();
return false;
}
if (!(/^1[34578]\d{9}$/.test(document.getElementById('hozeTel').value))) {
alert("手机号码有误,请重填");
return false;
}
var inputCode = document.getElementById("inputCode").value;
if (inputCode == '' || inputCode == '请输入验证码') {
alert('验证码不能为空！');
document.getElementById('inputCode').focus();
return false;
} 
if (inputCode.toUpperCase() != code.toUpperCase() || inputCode.length <= 0) {
alert("验证码输入有误！");
return false;
}
}*/