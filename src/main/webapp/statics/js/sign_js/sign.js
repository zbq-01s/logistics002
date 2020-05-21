var phone;
var getPassMark;
var surePhone;
var password;
var surePassword;
var mail;
var ch_checkbox;
var sign_a;
var form;

$(function () {
    phone = $("#phone");
    getPassMark = $("#getMark");
    surePhone = $("#surePhone");
    password = $("#password");
    surePassword = $("#surePassword");
    mail = $("#mail");
    ch_checkbox = $("#ch_checkbox");
    sign_a = $("#sign_a");
    form = $("#main_form");

    $("#header_left").click(function () {
        window.location.href = getRootPath() + "/login";
    })

    sign_a.click(function () {

        if (!mobileByPost()) return;
        if (!markByPost()) return;
        if (!passByPost()) return;
        if (!surePassByPost()) return;
        if (!mailByPost()) return;
        if (!ch_checkbox.prop('checked')) {
            alert("请阅读用户协议");
            return;
        }

        var data = {};
        var flag = true;
        data.verifyCode = $.trim($("#surePhone").val());
        data.currentPhone = $.trim(($("#phone")).val());
        $.ajax({
            url: getRootPath() + "/checkMark",
            async: true,
            type: "post",
            dataType: "json",
            data: data,
            success: function (data) {
                if (data.responseText == "success") {
                    $("#getMark").next().css("display", "block");
                    $("#main_form").submit();
                } else if (data.responseText == "验证码错误") {
                    $("#surePhone").prev().html("请输入正确验证码!");
                    $("#surePhone").prev().show().delay(2500).hide(500);
                    $("#getMark").next().css("display", "none");
                    flag = false;
                } else if (data.responseText == "验证码过期") {
                    $("#getMark").next().css("display", "none");
                    alert("验证码过期");
                    flag = false;
                } else if (data.responseText == "手机与验证码不匹配") {
                    $("#getMark").next().css("display", "none");
                    alert("手机与验证码不匹配");
                    flag = false;
                }
            },
            error: function (data) {
                if (data.responseText == "success") {
                    $("#getMark").next().css("display", "block");
                    $("#main_form").submit();
                } else if (data.responseText == "验证码错误") {
                    $("#surePhone").prev().html("请输入正确验证码!");
                    $("#surePhone").prev().show().delay(2500).hide(500);
                    $("#getMark").next().css("display", "none");
                    flag = false;
                } else if (data.responseText == "验证码过期") {
                    $("#getMark").next().css("display", "none");
                    alert("验证码过期");
                    flag = false;
                } else if (data.responseText == "手机与验证码不匹配") {
                    $("#getMark").next().css("display", "none");
                    alert("手机与验证码不匹配");
                    flag = false;
                } else if (data.responseText == "系统异常") {
                    $("#getMark").next().css("display", "none");
                    alert("系统异常");
                    flag = false;
                }
            }

        });
        return flag;


        // $.ajax({
        //     url: path+"/register",
        //     async : true,
        //     type: "post",
        //     dataType: "text",
        //     data: data,
        //     success: function (data) {
        //         if(data == 'success'){
        //             alert("注册成功");
        //             return ;
        //         }
        //         alert(data);
        //     }
        // });
    })


    /*发送验证码开始*/
    getPassMark.on("click", function () {
        var flag = true;
        var number = phone.val();
        if ($.trim(number) == '') {
            $("#phone").prev().html("请输入手机号");
            $("#phone").prev().show().delay(2500).hide(500);
            return false;
        }
        var reg = /^1\d{10}$/;
        if (!reg.test($.trim(number))) {
            $("#phone").prev().html("请输入正确手机号");
            $("#phone").prev().show().delay(3000).hide(500);
            return false;
        }
        $.ajax({
            url: getRootPath() + "/sign/isExistSign",
            type: "post",
            dataType: "json",
            data: {phone: number},
            success: function (data) {
                if (data.phone == "yes") {
                    $("#phone").next().css("display", "block");
                    sendMark(number);
                } else {
                    $("#phone").prev().html("手机号已注册");
                    $("#phone").prev().show().delay(2500).hide(500);
                    $("#phone").next().css("display", "none");
                    flag = false;
                }
            },
            error: function (data) {
                if (data.responseText == "yes") {
                    $("#phone").next().css("display", "block");
                    sendMark(number);
                } else if (data.responseText == "no") {
                    $("#phone").prev().html("手机号已注册");
                    $("#phone").prev().show().delay(2500).hide(500);
                    $("#phone").next().css("display", "none");
                    flag = false;
                } else {
                    alert("号码异常！！");
                    flag = false;
                }
            }
        })
        return flag;

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


    //1、手机
    phone.on('blur', mobileByPost);
    //2、验证手机验证码
    surePhone.on('blur', markByPost);
    //3、密码
    password.on('blur', passByPost);
    //4、确认密码
    surePassword.on('blur', surePassByPost);
    //5、邮箱
    mail.on('blur', mailByPost);


})

/*1、手机*/
function mobileByPost() {
    var mobile = $("#phone").val();
    var regx = /^((13[0-9])|(14[5|7])|(15([0-3]|[5-9]))|(18[0,5-9])|(17[0-9]))\d{8}$/;
    if (mobile == null || mobile == '') {
        $("#phone").prev().html("请输入手机号");
        $("#phone").prev().show().delay(2500).hide(500);
        $("#phone").next().css("display", "none");
        return false;
    } else if (!(regx.test(mobile))) {
        $("#phone").prev().html("请输入正确手机号");
        $("#phone").prev().show().delay(2500).hide(500);
        $("#phone").next().css("display", "none");
        return false;
    }
    $.ajax({
        url: getRootPath() + "/sign/isExistSign",
        type: "post",
        dataType: "json",
        data: {phone: mobile},
        success: function (data) {
            if (data.phone == "yes") {
                $("#phone").next().css("display", "block");
            } else {
                $("#phone").prev().html("手机号已注册");
                $("#phone").prev().show().delay(2500).hide(500);
                $("#phone").next().css("display", "none");
            }
        },
        error: function (data) {
            if (data.responseText == "yes") {
                $("#phone").next().css("display", "block");
            } else if (data.responseText == "no") {
                $("#phone").prev().html("手机号已注册");
                $("#phone").prev().show().delay(2500).hide(500);
                $("#phone").next().css("display", "none");
            } else {
                alert("号码异常！！");
            }
        }
    })
    return true;


}

/*2、验证码*/
function markByPost() {
    var flag = true;
    var mark = $("#surePhone").val();
    var regx = /^\d{6}$/;
    if (mark == null || mark == '') {
        $("#surePhone").prev().html("请输入验证码!");
        $("#surePhone").prev().show().delay(2500).hide(500);
        $("#getMark").next().css("display", "none");
        return false;
    }
    /*else if(!(regx.test(mark))){
            $("#surePhone").prev().html("请输入正确验证码!");
            $("#surePhone").prev().show().delay(2500).hide(500);
            return false;
        }else{
            $("#getMark").next().css("display","block");
            return true;
        }*/
    var data = {};
    data.verifyCode = $.trim($("#surePhone").val());
    data.currentPhone = $.trim(($("#phone")).val());
    $.ajax({
        url: getRootPath() + "/checkMark",
        async: true,
        type: "post",
        dataType: "json",
        data: data,
        success: function (data) {
            if (data.responseText == "success") {
                $("#getMark").next().css("display", "block");
            } else if (data.responseText == "验证码错误") {
                $("#surePhone").prev().html("请输入正确验证码!");
                $("#surePhone").prev().show().delay(2500).hide(500);
                $("#getMark").next().css("display", "none");
                flag = false;
            } else if (data.responseText == "验证码过期") {
                $("#getMark").next().css("display", "none");
                alert("验证码过期");
                flag = false;
            } else if (data.responseText == "手机与验证码不匹配") {
                $("#getMark").next().css("display", "none");
                alert("手机与验证码不匹配");
                flag = false;
            }
        },
        error: function (data) {
            if (data.responseText == "success") {
                $("#getMark").next().css("display", "block");
            } else if (data.responseText == "验证码错误") {
                $("#surePhone").prev().html("请输入正确验证码!");
                $("#surePhone").prev().show().delay(2500).hide(500);
                $("#getMark").next().css("display", "none");
                flag = false;
            } else if (data.responseText == "验证码过期") {
                $("#getMark").next().css("display", "none");
                alert("验证码过期");
                flag = false;
            } else if (data.responseText == "手机与验证码不匹配") {
                $("#getMark").next().css("display", "none");
                alert("手机与验证码不匹配");
                flag = false;
            } else if (data.responseText == "系统异常") {
                $("#getMark").next().css("display", "none");
                alert("系统异常");
                flag = false;
            }
        }

    });
    return flag;


}

/*3、密码*/
function passByPost() {
    var password = $("#password").val();
    var passwordLv = $("#passwordLv");
    //密码强度正则，最少8位，包括至少1个大写字母，1个小写字母，1个数字，1个特殊字符
    var regx = /^(?=.*[A-Z])(?=.*[0-9])(?!.*([~!@&%$^\\(\\)#_]).*\\1.*\\1)[A-Z0-9~!@&%$^\\(\\)#_]{8,16}$/;

    /*密码为8位及以上并且字母数字特殊字符三项都包括,强度最强 */
    var strongRegex = new RegExp("^(?=.{8,})(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*\\W).*$", "g");
    //密码为七位及以上并且字母、数字、特殊字符三项中有两项，强度是中等
    var mediumRegex = new RegExp("^(?=.{8,})(((?=.*[A-Z])(?=.*[a-z]))|((?=.*[A-Z])(?=.*[0-9]))|((?=.*[a-z])(?=.*[0-9]))).*$", "g");
    //密码小于10位的时候，
    var enoughRegex = new RegExp("(?=.{10,}).*", "g");

    //
    if (password == null || password == '') {
        $("#password").prev().html("请填入信息！");
        $("#password").prev().show().delay(2500).hide(500);
        $("#password").next().css("display", "none");
        passwordLv.css("background", "url('../../../f35logistics/statics/image/sign_img/passwordSecureLevel.png') ");
        return false;
    } else if (password.length < 8 || password.length > 16) {
        $("#password").prev().html("密码为8-16位");
        $("#password").prev().show().delay(2500).hide(500);
        $("#password").next().css("display", "none");
        passwordLv.css("background", "url('../../../f35logistics/statics/image/sign_img/passwordSecureLevel.png')");
        return false;
    }/*else if(!(regx.test(password))){
        $("#password").prev().html("不能包含重复字符、顺序和倒序的字母或数字");
        $("#password").prev().show().delay(2500).hide(500);
        $("#password").next().css("display","none");
        passwordLv.css("background","'../../image/sign_img/passwordSecureLevel.png'");
        return false;

        statics/image/sign_img/passwordSecureLevel.png
    }*/ else {
        if (false == enoughRegex.test(password)) {
            passwordLv.css("background", "url('../../../f35logistics/statics/image/sign_img/passwordSecureLevel.png') 0 -32px");
        } else if (strongRegex.test(password)) {
            passwordLv.css("background", "url('../../../f35logistics/statics/image/sign_img/passwordSecureLevel.png') 0 -96px");
        } else if (mediumRegex.test(password)) {
            passwordLv.css("background", "url('../../../f35logistics/statics/image/sign_img/passwordSecureLevel.png') 0 -64px");
        }
        $("#password").next().css("display", "block");
        return true;
    }
}

/*4、确认密码*/
function surePassByPost() {
    var surePassword = $("#surePassword").val();
    var password = $("#password").val();
    var regx = /^[a-z0-9]{8,16}$/;
    if (surePassword == null || surePassword == '') {
        $("#surePassword").prev().html("请再输入一次密码");
        $("#surePassword").prev().show().delay(2500).hide(500);
        $("#surePassword").next().css("display", "none");
        return false;
    } else if (surePassword != password) {
        $("#surePassword").prev().html("您两次输入的密码不一致");
        $("#surePassword").prev().show().delay(2500).hide(500);
        $("#surePassword").next().css("display", "none");
        return false;
    } else {
        $("#surePassword").next().css("display", "block");
        return true;
    }
}

/*5、邮箱*/
function mailByPost() {
    var email = $("#mail").val();
    var regx = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    if (email == null || email == '') {
        /*current.next().css("display","block");*/
        return true;
    } else if (!(regx.test(email))) {
        $("#mail").prev().html("请输入正确的邮箱");
        $("#mail").prev().show().delay(2500).hide(500);
        $("#mail").next().css("display", "none");
        return false;
    } else {
        $("#mail").next().css("display", "block");
        return true;
    }
}

/*短信验证码倒计时开始*/
var countdownHandler = function () {
    var $button = $("#getMark");
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






