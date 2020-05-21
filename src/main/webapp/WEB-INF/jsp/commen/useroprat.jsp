<%@ page import="cn.pojo.customer.Customer" %><%--

<%--<%@include file="/WEB-INF/jsp/login/fastLogin.jsp"%>--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<% if (request.getSession().getAttribute("currentUser") != null) {
    Customer customer = (Customer) request.getSession().getAttribute("currentUser");
    String phone = customer.getcPhone();
    String befor = phone.substring(0, 3);
    String after = phone.substring(7);
    phone = befor + "****" + after;
%>
<li style="width:150px;display: inline-block">
    <a href="javascript:;" id="user" style="color: red"><%=phone%>
    </a>
    <a href="javascript:;" id="userQuit" style="display: inline-block">退出</a>
</li>
<%}%>

<% if (request.getSession().getAttribute("currentUser") == null) {%>
<li style="width:70px;display: inline-block"><a href="javascript:;" id="fast_login">快速登录</a></li>
<li style="width:50px;display: inline-block"><a href="javascript:;" id="goSign">注册</a></li>
<%--<form style="display: none;">--%>
<input type="hidden" name="path" id="path1" value="$">
<input type="hidden" name="path" id="path2" value="{">
<input type="hidden" name="path" id="path3" value="pageContext.request.contextPath">
<input type="hidden" name="path" id="path4" value="}">

<%--</form>--%>
<%--<li id="url">${pageContext.request.contextPath }</li>--%>
<%}%>
<link href="${cssBaseUrl}index_css/main1.css" rel="stylesheet">
<script type="text/javascript" src="${layerBaseUrl}js/jquery.min.js"></script>
<script type="text/javascript" src="${layerBaseUrl}layer/layer.js"></script>
<script type="text/javascript">

    var path = $("#path1").val() + $("#path2").val() + $("#path3").val() + $("#path4").val();
    var fast_login = $("#fast_login");
    var phone = $("#phone");
    var mark = $("#mark");
    var getLoginMark = $("#getLoginMark");
    var doLogin = $("#doLogin");

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
            window.location.href = "${pageContext.request.contextPath}/sign/gosign";
        })
        fast_login.click(doUpdate);
        /*发送验证码开始*/
        $("#getLoginMark").click(function () {
            var flag = true;
            var number = $("#phone").val();
            sendMark(number);
        });

        /**
         点击登录
         */
        $("#doLogin").on('click', function () {
            var data = {};
            var flag = true;
            data.verifyCode = $.trim($("#mark").val());
            data.currentPhone = $.trim(($("#phone")).val());

            $.ajax({
                url: "${pageContext.request.contextPath}/checkMark2",
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
                        window.location.href = "${pageContext.request.contextPath}/F35Index";
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

        //用户退出
        $("#userQuit").click(function () {
//            alert($("#url").html());
            window.location.href = "${pageContext.request.contextPath}/userQuit";
        });

    })

    /*发送验证码结束*/

    //发送验证码
    function sendMark(number) {
        $.ajax({
            url: "${pageContext.request.contextPath}/sendSms",
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


</script>
