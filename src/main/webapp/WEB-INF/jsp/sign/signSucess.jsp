<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@include file="/WEB-INF/jsp/tag_all.jsp"%>
<!DOCTYPE html>
<html>
<head lang="en">
    <meta charset="UTF-8">
    <title>会员注册</title>
    <link href="${cssBaseUrl}sign_css/sign.css" rel="stylesheet">
    <style type="text/css">
        .a_left{
            display: inline-block;
            width: 160px;  height: 40px;  float: left;  line-height: 40px;  text-align: center;
            color: white;font-weight: bold;background-color: red;
        }
        .a_right{
            display: inline-block;  width: 160px;
            height: 40px;  float: right;line-height: 40px;text-align: center;
            color: white;font-weight: bold;background-color: red;
        }
    </style>
</head>
<body>
    <header>
        <div class="header_1">
            <div class="div_main_1">
                <ul style="font-size: 12px">
                    <li class="header_li"><a href="${pageContext.request.contextPath}/F35Index" class="header_a">F35官网</a></li> |
                    <li class="header_li"><a href="#" class="header_a">在线客服</a></li> |
                    <li class="header_li"><a href="#" class="header_a">意见反馈</a></li> |
                    <li class="header_li"><a href="#" class="header_a">操作指引</a></li> |
                    <li class="header_li"><a href="#" class="header_a">登录</a></li>
                    <li class="header_li header_li_right"><a href="#" class="header_a">中国大陆 Mainland China</a></li>
                </ul>
            </div>
        </div>
        <div class="header_2">
            <div class="div_main_2">
                <div class="header_left">
                    <%--<img src="aaa.jsp" width="160px" height="47px" class="f35_logo">--%>
                    F35
                </div>
                <div class="header_right">
                    <ul class="menu_ul">
                        <li class="menu_li"><a href="#" class="menu_a">首页</a></li>
                        <li class="menu_li"><a href="${pageContext.request.contextPath}/addOrder" class="menu_a">在线下单</a></li>
                        <li class="menu_li"><a href="#" class="menu_a">快件管理</a></li>
                        <li class="menu_li"><a href="#" class="menu_a">积分权益</a></li>
                        <li class="menu_li"><a href="#" class="menu_a">查询服务</a></li>
                    </ul>
                </div>
            </div>
        </div>
    </header>
    <main >
            <div class="main_div" style="width:600px;">
            <div class="main_div_2">
                <div>
                    <div style="height: 450px;margin: 0px auto;">
                        <div style="width: 300px; margin: 0px auto;height: 300px;text-align: center;line-height: 300px;font-size: 50px">注册成功</div>
                        <div style="width: 400px;height: 50px; margin:0px auto ">
                            <a class="a_left" href="${pageContext.request.contextPath }/F35Index">返回首页</a>
                            <a class="a_right" href="${pageContext.request.contextPath }/addOrder">去下单</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </main>
    <footer>
        <div class="footer_div">
            <div style="text-align: center;margin: 30px 0px">© 2015 F35物流 版权所有 鄂ICP备8888888号</div>
        </div>
    </footer>
</body>
</html>
<script src="${jsBaseUrl}sign_js/jquery-2.1.1.min.js" type="text/javascript"></script>
<script src="${jsBaseUrl}sign_js/sign.js" type="text/javascript"></script>