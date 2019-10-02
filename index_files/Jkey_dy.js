$(function () {
    setMaxDigits(129);
    var key_to_encode;
    $.ajax({
        url: "InformationFlow.php?action=actionA", //actionA
        data: {},
        datatype: "json",
        //async: false,
        type: "post",
        success: function (json) {
            //console.log(json);
            var obj = json.split(",");
            key_to_encode = new RSAKeyPair(obj[0], "", obj[1]);
        }
    });
    $("#hozeName").keyup(function () {
        $(this).val($(this).val().replace(/[^\u4E00-\u9FA5]/g, ''));
    });

    $("#submit").click(function () {
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
        if (document.getElementById('applyAmount').value == '' || document.getElementById('applyAmount').value =='贷款额度(万元)') {
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
        var hozeNameV = document.getElementById(clientName").value;
        var hozeName = encodeURIComponent(hozeNameV);
        var hozeTel = $("#hozeTel").val();
        var dked = $("#dked").val();
        var url = encodeURIComponent("Mortgage");
        var timestamp = Date.parse(new Date());
        timestamp = timestamp / 1000;

        var thisURL = document.URL;
        if (thisURL != "") {
            var getval = thisURL.split('&')[1];
        }
		 /*20180518*/
        var getval_two = "";
        var setval = "";
        var showval = "0";
        if (thisURL.indexOf("f=") > -1) {
            getval_two = thisURL.split('?')[1];
            setval = getval_two.split("f=")[1];
            showval = setval.split("&")[0];
            console.log(showval)
        } else {
            showval = "35";
        }
        var getId = '';
        var setId = '';
        var showId = '';
        if (thisURL.indexOf("id=") > -1) {
            getid = thisURL.split('?')[1];
            setid = getid.split("id=")[1];
            showid = setid.split("&")[0];
            console.log(showid)
        } else {
            showid = "";

        }
        // var FormData = "hozeName=" + hozeName + "&hozeTel=" + hozeTel + "&dked=" + dked + "&f=35&timestamp=" + timestamp + "&url=" + url;
        //var FormData = "hN=" + hozeName + "&Tel=" + hozeTel + "&ed=" + dked + "&f=35&tp=" + timestamp + "&url=" + getval;
		var FormData = "hN=" + hozeName + "&Tel=" + hozeTel + "&ed=" + dked + "&f=" + showval + "&tp=" + timestamp + "&url=" + showid;
        FormData = encryptedString(key_to_encode, FormData);
        //console.log(FormData);
        $.ajax({
            url: "InformationFlow.php?action=actionB",
            data: {
                "p": FormData
            },
            datatype: "json",
            type: "post",
            async: false,
            success: function (jsonstr) {
                console.log(jsonstr);
                //var jsstr = $.parseJSON(jsonstr)[0]['httpcode'].split('/')[0];
                var jsstr = jsonstr.split('/');
                if (jsstr[0] == "1") {
                    alert(jsstr[1]);
                    $('.con2_c form').submit();
                } else {
                    alert(jsstr[1]);
                }
            }
        });
    });



});
