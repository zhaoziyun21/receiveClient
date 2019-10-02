
$(document).ready(function(){
    $("#clientSubmit").click(function(){
        if (document.getElementById('clientName').value == '' || document.getElementById('clientName').value =='您的姓名') {
            alert('姓名不能为空！');
            document.getElementById('clientName').focus();
            return false;
        }
        var uphone = document.getElementById('clientTel');
        if (uphone.value == '' || uphone.value =='联系方式') {
            alert('手机号码不能为空！');
            uphone.focus();
            return false;
        }
        if (!(/^1[3|4|5|7|8][0-9]{9}$/.test(uphone.value))) {
            alert("手机号码有误，请重填");
            return false;
        }
        if (document.getElementById('applyAmount').value == '' || document.getElementById('applyAmount').value =='申请额度（万元）') {
            alert('请输所需贷款额度(万元)！');
            document.getElementById('applyAmount').focus();
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
        $.fn.serializeObject = function() {
            var o = {};
            var a = this.serializeArray();
            $.each(a, function() {
                if (o[this.name]) {
                    if (!o[this.name].push) {
                        o[this.name] = [ o[this.name] ];
                    }
                    o[this.name].push(this.value || '');
                } else {
                    o[this.name] = this.value || '';
                }
            });
            return o;
        };
        var jsonData = $("form").serializeObject();
        $.ajax({
            type: "post",
            contentType:"application/json",
            dataType:"json",
            url: "http://localhost:8110/receiveClient/saveClient.ajax",
            data: JSON.stringify(jsonData),
            success: function(data){
                if(data.code == 200){
                    alert("提交成功，客户经理稍后联系您")
                }else{
                    alert("提交失败，请检查填写信息是否正确")
                }
            }
        })


    });
});
