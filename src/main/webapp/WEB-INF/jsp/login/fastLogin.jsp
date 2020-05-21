<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<div id="updateFileArea" style="display:none;">
    <div style=" width:355px;height: 50px;margin: 0px auto">
        <ul>
            <li id="tj_mess"
                style="display: inline-block;line-height: 50px;width: 175px;text-align: center;border-radius: 10px;font-size: 16px;color: white;background-color: #333">
                短信验证
            </li>
            <li id="tj_pass"
                style="display: inline-block;line-height: 50px;width: 175px;text-align: center;font-size: 16px;border-radius: 10px">
                密码登录
            </li>
        </ul>
        <div id="phone_input" style="width: 350px;margin: 0px auto;height: 300px;">
            <form action="" method="">
                <p style="margin: 20px 0px 10px 0px">登录后即可免验证快速下单与查件</p>
                <div style="margin: 20px auto;"><input autocomplete="off" id="phone" type="text" name="phone"
                                                       placeholder="请输入手机号" maxlength="20"
                                                       style="width: 295px;height: 35px;margin-left: 30px;border-bottom: 1px solid grey;outline:none;">
                </div>
                <p class="tj_error" id="phoneErr"></p>
                <div style="margin: 20px auto;">
                    <%--<input type="hidden" name="path" id="path" value="${pageContext.request.contextPath }">--%>
                    <input type="text" name="mark" id="mark" maxlength="6" placeholder="请输入验证码"
                           style="width: 200px;height: 35px;margin-left: 30px;border-bottom: 1px solid grey">
                    <button type="button" disabled class="getLoginMark" id="getLoginMark" name="getLoginMark"
                            style="height: 35px;line-height: 35px;cursor: not-allowed;">获取验证码
                    </button>
                </div>
                <p class="tj_error" id="markErr"></p>
                <button disabled type="button"
                        style="height: 50px;cursor: not-allowed;border-radius: 50px; margin: 0px 70px;width: 200px;background-color: grey;color: white;line-height: 50px;text-align: center"
                        id="doLogin">快速登录
                </button>
            </form>
        </div>
        <div id="pass_input" style="width: 350px;margin: 0px auto;height: 300px;display: none">
            <form action="" method="">
                <p style="margin: 20px 0px 10px 0px">登录后即可免验证快速下单与查件</p>
                <div style="margin: 20px auto;"><input id="username" type="text" name="phone" placeholder="请输入账号"
                                                       maxlength="20"
                                                       style="width: 200px;height: 35px;margin-left: 30px"></div>
                <div style="margin: 20px auto;">
                    <%--<input type="hidden" name="path" id="path" value="${pageContext.request.contextPath }">--%>
                    <input type="password" name="mark" id="password" maxlength="20" placeholder="请输入密码"
                           style="width: 200px;height: 35px;margin-left: 30px">
                    <%--<button type="button" class="getLoginMark" id="getLoginMark" name="getLoginMark">获取验证码</button>--%>
                </div>
                <div style="height: 50px;border-radius: 50px; margin: 0px auto;width: 200px;background-color: grey;color: white;line-height: 50px;text-align: center;cursor: not-allowed;"
                     id="doPassLogin">快速登录
                </div>
            </form>
        </div>
    </div>
</div>
<style type="text/css">
    #tj_mess {
        cursor: pointer;
    }

    #tj_pass {
        cursor: pointer;
    }

    .tj_error {
        margin-left: 30px;
        color: red;
        size: 10px;
        height: 20px;
        line-height: 20px;
    }


</style>

<script type="text/javascript">
    var markErr = $("#markErr");
    var phoneErr = $("#phoneErr");
    var phone = $("#phone");
    var getLoginMark = $("#getLoginMark");
    var doLogin = $("#doLogin");
    var mark = $("#phone");
    $(function () {

        $(".layui-layer-close").click(function () {
            phone.value("");
            mark.value("");
        })

        $("#tj_mess").click(function () {
            $("#tj_mess").css({"background-color": "#333", "color": "white"});
            $("#tj_pass").css({"background-color": "white", "color": "black"});

            $("#phone_input").show();
            $("#pass_input").hide();
        });
        $("#tj_pass").click(function () {
            $("#tj_pass").css({"background-color": "#333", "color": "white"});
            $("#tj_mess").css({"background-color": "white", "color": "black"});
            $("#phone_input").hide();
            $("#pass_input").show();
        });

        //手机校验
        $("#phone").blur(mobileByPost);
        //短信校验
        $("#mark").blur(markByPost);
        $("#password").blur(function () {
            if ($("#password").val().length >= 8) {
                $("#doPassLogin").css({"background-color": "green"});
                $("#doPassLogin").attr("disabled", true);
                $("#doPassLogin").css("cursor", "pointer");
            } else {
                $("#doPassLogin").attr("disabled", false);
                $("#doPassLogin").css("cursor", "not-allowed");
                $("#doPassLogin").css({"background-color": "grey"})
            }
        })
        $("#doPassLogin").bind("click", function () {
            var data = {};
            data.password = $.trim($("#password").val());
            data.currentPhone = $.trim(($("#username")).val());

            jQuery.ajax({
                url: "${pageContext.request.contextPath}/passLogin",
                async: true,
                type: "post",
                dataType: "text",
                data: data,
                success: function (data) {
                    console.log("登录接口返回数据", data);
                    if (data == "success") {
                        window.location.href = window.location.origin + "/F35Index"
                    } else {
                        alert("用户名或密码错误")
                    }
                },
                error: function (request, data, msg) {
                    console.log(request, data, msg);
                    alert("未知原因登录失败")
                }
            });

        })
    })


    /*1、手机*/
    function mobileByPost() {
        var mobile = phone.val();
        var regx = /^((13[0-9])|(14[5|7])|(15([0-3]|[5-9]))|(18[0,5-9])|(17[0-9]))\d{8}$/;
        if (mobile == null || mobile == '') {
            phoneErr.html("请输入手机号");
            $("#getLoginMark").attr("disabled", false);
            $("#getLoginMark").css("background-color", "buttonface");
            $("#getLoginMark").css("color", "graytext");
            $("#getLoginMark").css("cursor", "not-allowed");
            $("#getLoginMark").css("border", "none");
            $("#doLogin").css("background-color", "grey");
            return false;
        } else if (!(regx.test(mobile))) {
            phoneErr.html("请输入正确手机号");
            $("#getLoginMark").attr("disabled", false);
            $("#getLoginMark").css("cursor", "not-allowed");
            $("#getLoginMark").css("background-color", "buttonface");
            $("#getLoginMark").css("color", "graytext");
            $("#getLoginMark").css("border", "none");
            $("#doLogin").css("background-color", "grey");
            return false;
        }

        $.ajax({
            url: "${pageContext.request.contextPath}/sign/isExistSign",
            type: "post",
            dataType: "json",
            data: {phone: mobile},
            success: function (data) {
                if (data.phone == "yes") {
                    phoneErr.html("手机号未注册");
                    $("#getLoginMark").attr("disabled", false);
                    $("#getLoginMark").css("background-color", "buttonface");
                    $("#getLoginMark").css("color", "graytext");
                    $("#getLoginMark").css("cursor", "not-allowed");
                    $("#getLoginMark").css("border", "none");
                    $("#doLogin").css("background-color", "grey");
                } else {
//                    $("#phone").prev().html("手机号已注册");
//                    $("#phone").prev().show().delay(2500).hide(500);
//                    $("#phone").next().css("display","none");
                    $("#getLoginMark").attr("disabled", false);
                    $("#getLoginMark").css("cursor", "pointer");
                    $("#getLoginMark").css("background-color", "orange");
                    $("#getLoginMark").css("color", "white");
                    phoneErr.html("");
                }
            },
            error: function (data) {
                if (data.responseText == "yes") {
                    phoneErr.html("手机号未注册");
                    $("#getLoginMark").attr("disabled", false);
                    $("#getLoginMark").css("background-color", "buttonface");
                    $("#getLoginMark").css("color", "graytext");
                    $("#getLoginMark").css("cursor", "not-allowed");
                    $("#getLoginMark").css("border", "none");
                    $("#doLogin").css("background-color", "grey");
                } else if (data.responseText == "no") {
//                    $("#phone").prev().html("手机号已注册");
//                    $("#phone").prev().show().delay(2500).hide(500);
//                    $("#phone").next().css("display","none");
                    $("#getLoginMark").attr("disabled", false);
                    $("#getLoginMark").css("cursor", "pointer");
                    $("#getLoginMark").css("background-color", "orange");
                    $("#getLoginMark").css("color", "white");
                    phoneErr.html("");
                } else {
                    $("#getLoginMark").attr("disabled", false);
                    $("#getLoginMark").css("background-color", "buttonface");
                    $("#getLoginMark").css("color", "graytext");
                    $("#getLoginMark").css("cursor", "not-allowed");
                    $("#getLoginMark").css("border", "none");
                    $("#doLogin").css("background-color", "grey");
                    alert("号码异常！！");
                }
            }
        })
        return true;

    }


    /*2、验证码*/
    function markByPost() {
        var flag = true;
        var mark = $("#mark").val();
        var regx = /^\d{6}$/;
        if (mark == null || mark == '') {
            $("#markErr").html("请输入验证码!");
            $("#doLogin").attr("disabled", true);
            $("#doLogin").css("cursor", "not-allowed");
            $("#doLogin").css("background-color", "grey");
            return false;
        }
        var data = {};
        data.verifyCode = $.trim($("#mark").val());
        data.currentPhone = $.trim($("#phone").val());
        $.ajax({
            url: "${pageContext.request.contextPath}/checkMark",
            async: true,
            type: "post",
            dataType: "json",
            data: data,
            success: function (data) {
                if (data.responseText == "success") {

                    $("#doLogin").attr("disabled", false);
                    $("#doLogin").css("cursor", "pointer");
                    $("#doLogin").css("background-color", "green");
                    $("#markErr").html("");

                } else if (data.responseText == "验证码错误") {
                    $("#doLogin").attr("disabled", true);
                    $("#doLogin").css("cursor", "not-allowed");
                    $("#doLogin").css("background-color", "grey");
                    $("#markErr").html("请输入正确验证码!");
                    flag = false;
                } else if (data.responseText == "验证码过期") {
                    $("#doLogin").attr("disabled", true);
                    $("#doLogin").css("cursor", "not-allowed");
                    $("#doLogin").css("background-color", "grey");
                    $("#markErr").html("验证码过期");
                    flag = false;
                } else if (data.responseText == "手机与验证码不匹配") {
                    $("#doLogin").attr("disabled", true);
                    $("#doLogin").css("cursor", "not-allowed");
                    $("#doLogin").css("background-color", "grey");
                    $("#markErr").html("手机与验证码不匹配");
                    flag = false;
                } else if (data.responseText == "系统异常") {
                    $("#doLogin").attr("disabled", true);
                    $("#doLogin").css("cursor", "not-allowed");
                    $("#doLogin").css("background-color", "grey");
                    $("#markErr").html("系统异常");
                    flag = false;
                }
            },
            error: function (data) {
                if (data.responseText == "success") {
                    $("#doLogin").attr("disabled", false);
                    $("#doLogin").css("cursor", "pointer");
                    $("#doLogin").css("background-color", "green");
                    $("#markErr").html("");
                } else if (data.responseText == "验证码错误") {
                    $("#doLogin").attr("disabled", true);
                    $("#doLogin").css("cursor", "not-allowed");
                    $("#doLogin").css("background-color", "grey");
                    $("#markErr").html("请输入正确验证码!");
                    flag = false;
                } else if (data.responseText == "验证码过期") {
                    $("#doLogin").attr("disabled", true);
                    $("#doLogin").css("cursor", "not-allowed");
                    $("#doLogin").css("background-color", "grey");
                    $("#markErr").html("验证码过期");
                    flag = false;
                } else if (data.responseText == "手机与验证码不匹配") {
                    $("#doLogin").attr("disabled", true);
                    $("#doLogin").css("cursor", "not-allowed");
                    $("#doLogin").css("background-color", "grey");
                    $("#markErr").html("手机与验证码不匹配");
                    flag = false;
                } else if (data.responseText == "系统异常") {
                    $("#doLogin").attr("disabled", true);
                    $("#doLogin").css("cursor", "not-allowed");
                    $("#doLogin").css("background-color", "grey");
                    $("#markErr").html("系统异常");
                    flag = false;
                }
            }

        });
        return flag;


    }
</script>
