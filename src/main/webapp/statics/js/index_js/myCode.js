var fast_login = $("#fast_login");
var phone = $("#phone");
var mark = $("#mark");
var getLoginMark = $("#getLoginMark");
var doLogin = $("#doLogin");
var path = $("#path").val();


function getRootPath() {
    //获取当前网址，如： http://localhost:8088/test/test.jsp
    var curPath = window.document.location.href;
    //获取主机地址之后的目录，如： test/test.jsp
    var pathName = window.document.location.pathname;
    var pos = curPath.indexOf(pathName);
    //获取主机地址，如： http://localhost:8088
    var localhostPath = curPath.substring(0, pos);
    //获取带"/"的项目名，如：/test
    var projectName = pathName.substring(0, pathName.substr(1).indexOf('/') + 1);
    return localhostPath;//发布前用此
}
function doUpdate() {

    //layer 弹框
    layer.open({
        type: 1,
        title: '选择登录方式',
        area: ['417px', '460px'],
        skin: 'layui-layer-lan',
        scrollbar: false,
        content: $("#updateFileArea"),
        offset: 'center',

    });


}

$(function () {

    //点击注册
    $("#goSign").click(function () {
        window.location.href = getRootPath() + "/sign/gosign";
    })

    fast_login.click(doUpdate);

    /*发送验证码开始*/
    $("#getLoginMark").click(function () {
        var flag = true;
        var number = $("#phone").val();


        sendMark(number);


    });

    /**
     * 点击登录
     */
    $("#doLogin").on('click', function () {
        var data = {};
        var flag = true;
        data.verifyCode = $.trim($("#mark").val());
        data.currentPhone = $.trim(($("#phone")).val());

        $.ajax({
            url: getRootPath() + "/checkMark2",
            async: true,
            type: "post",
            dataType: "json",
            data: data,
            success: function (data) {
                if (data.responseText == "success") {
                    window.location.href = $("#path").val() + "/F35Index";
                } else if (data.responseText == "验证码错误") {
                    alert("请输入正确验证码!");
                    flag = false;
                } else if (data.responseText == "验证码过期") {
                    $("#getMark").next().css("display", "none");
                    alert("验证码过期");
                    flag = false;
                } else if (data.responseText == "手机与验证码不匹配") {
                    alert("手机与验证码不匹配");
                    flag = false;
                }
            },
            error: function (data) {
                if (data.responseText == "success") {
                    var number = $("#phone").val();
                    // // window.location.href = $("#path").val()+"/userSession";
                    // // window.location.href = $("#path").val()+"/userSession";
                    // $.ajax({
                    //     url: $("#path").val()+"/userSession",
                    //     async : true,
                    //     type: "post",
                    //
                    //     data: {"number":number},
                    //     success: function (data) {
                    //
                    //     },
                    //     error:function (data) {
                    //
                    //     }
                    // });
                    window.location.href = $("#path").val() + "/F35Index";
                } else if (data.responseText == "验证码错误") {
                    alert("请输入正确验证码!");
                    flag = false;
                } else if (data.responseText == "验证码过期") {
                    alert("验证码过期");
                    flag = false;
                } else if (data.responseText == "手机与验证码不匹配") {
                    alert("手机与验证码不匹配");
                    flag = false;
                } else if (data.responseText == "系统异常") {
                    alert("系统异常");
                    flag = false;
                }
            }

        });
    });

    $("#userQuit").click(function () {
        window.location.href = getRootPath() + "/userQuit";
    });

})

/*发送验证码结束*/

//发送验证码
function sendMark(number) {
    $.ajax({
        url: getRootPath() + "/sendSms",
        async: true,
        type: "post",

        data: {"number": number},
        success: function (data) {
            if (data == 'success') {
                countdownHandler();
                return;
            }
        },
        error: function (data) {
            if (data.responseText == 'success') {
                countdownHandler();
                return true;
            } else {
                return false;
            }
        }
    });
}

/*短信验证码倒计时开始*/
var countdownHandler = function () {
    var $button = $("#getLoginMark");
    var number = 60;
    var countdown = function () {
        if (number == 0) {
            $button.attr("disabled", false);
            $button.html("发送验证码");
            number = 60;
            return;
        } else {
            $button.attr("disabled", true);
            $button.html(number + "秒 重新发送");
            number--;
        }
        setTimeout(countdown, 1000);
    }
    setTimeout(countdown, 1000);
}
/*短信验证码倒计时结束*/




