<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@include file="/WEB-INF/jsp/tag_all.jsp"%>


<!DOCTYPE html>
<html>
<head lang="en">
    <meta charset="UTF-8">
    <title>会员注册</title>
    <link href="${cssBaseUrl}sign_css/sign.css" rel="stylesheet">
    <link rel="shortcut icon" href="${imgBaseUrl}index_img/timg.png" type="image/x-icon" />
</head>
<body>
    <header>
        <%-- <div class="header_1">
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
        </div> --%>
        <div class="header_2">
            <div class="div_main_2">
                <div class="header_left" id="header_left">
                    <%--<img src="aaa.jsp" width="160px" height="47px" class="f35_logo">--%>
                    F35
                </div>

                <div class="header_right">
                    <ul class="menu_ul">
                        <li class="menu_li"><a href="${pageContext.request.contextPath}/F35Index" class="menu_a">首页</a></li>
                        <li class="menu_li"><a href="#" class="menu_a">在线下单</a></li>
                        <li class="menu_li"><a href="#" class="menu_a">快件管理</a></li>
                        <li class="menu_li"><a href="#" class="menu_a">积分权益</a></li>
                        <li class="menu_li"><a href="#" class="menu_a">查询服务</a></li>
                    </ul>
                </div>
            </div>
        </div>
    </header>
    <main >
            <div class="main_div">
            <div>
                <ul>
                    <li class="main_li one_li">个人用户注册</li>
                    <!-- <li class="main_li com_li">企业用户注册</li> -->
                </ul>
            </div>
            <div class="main_div_2">
                <div class="main_left">
                    <form class="main_form" action="/sign/dosign" method="post" id="main_form">
                        <ul>
                            <li><dl>
                                <dt><i>*</i>手机号</dt>
                                <dd style="position: relative">
                                    <div class="errBubble"></div>
                                    <input type="text" onpaste="return false" ondragenter="return false" style="ime-mode:disabled" class="input input_pub" name="cPhone" placeholder="请输入手机号" id="phone" maxlength="25"/>
                                    <i class="right_icon" style=""></i>
                                </dd>
                            </dl></li>
                            <li><dl>
                                <dt><i>*</i>验证手机</dt>
                                <dd style="position: relative">
                                    <div class="errBubble"></div>
                                    <input type="text" class="input" placeholder="请输入验证码" name="surePhone" id="surePhone" maxlength="6"/>
                                    <button type="button" class="sendVerifyCode" id="getMark" name="getPassMark">获取验证码</button>
                                    <i class="right_icon" style=""></i>
                                </dd>
                            </dl></li>
                            <li><dl>
                                <dt><i>*</i>密码</dt>
                                <dd style="position: relative">
                                    <div class="errBubble"></div>
                                    <input type="password" size="25" maxlength="30" onpaste="return false" ondragenter="return false" class="input input_pub" name="cPassword" id="password" placeholder="请输入8～16位数字和英文字母的组合"/>
                                    <i class="right_icon" style=""></i>
                                </dd>
                            </dl></li>
                            <!-- <li><dl>
                                <dt>密码强度</dt>
                                <dd><c id="passwordLv"></c></dd>
                            </dl></li> -->
                            <li><dl>
                                <dt><i>*</i>确认密码</dt>
                                <dd style="position: relative">
                                    <div class="errBubble"></div>
                                    <input type="password" size="25" maxlength="30" onpaste="return false" ondragenter="return false" class="input input_pub" name="surePassword" placeholder="请确认密码" id="surePassword"/>
                                    <i class="right_icon" style=""></i>
                                </dd>
                            </dl></li>
                            <li><dl>
                                <dt>绑定邮箱</dt>
                                <dd style="position: relative">
                                    <div class="errBubble"></div>
                                    <input type="text" class="input input_pub" name="cEmail" placeholder="请输入需要绑定的邮箱地址" id="mail"/>
                                    <i class="right_icon" style=""></i>
                                </dd>
                            </dl></li>
                            <li class="agree_li"><dl>
                                <dt>&nbsp;</dt>
                                <dd>
                                    <input type="hidden" name="path" id="path" value="${pageContext.request.contextPath }">
                                    <input type="checkbox" name="ch_checkbox" id="ch_checkbox">我同意<a href="#">《服务协议》</a>
                                </dd>
                            </dl></li>
                            <li><dl>
                                <dt>&nbsp;</dt>
                                <dd><a class="sign_a" id="sign_a">注册</a></dd>
                            </dl></li>
                            <!-- <li class="agree_li"><dl>
                                <dt>&nbsp;</dt>
                                <dd><a class="login_a" href="#">拥有账号，直接登录</a></dd>
                            </dl></li>
                            <li><dl>
                                <dt>或者</dt>
                                <dd><a class="login_a" href="#">QQ账号登录</a></dd>
                            </dl></li> -->
                        </ul>
                    </form>
                </div>
                <div class="main_right">
                    <div class="right_center">
                        <ul>
                            <li><dt class="right_dt">注册成为F35会员，您可以享受更多的服务!</dt></li>
                            <li><dd class="right_dd right_dd_1">积分奖励，电子运单专享特权</dd></li>
                            <li><dd class="right_dd right_dd_2">收寄件积分奖励、积分抵运费</dd></li>
                            <li><dd class="right_dd right_dd_3">生日特权、会员专享特色惠购</dd></li>
                            <li><dd class="right_dd right_dd_4">快件路由订阅、快件信息管理、批量下单</dd></li>
                        </ul>
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
