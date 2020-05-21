<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@include file="/WEB-INF/jsp/tag_all.jsp"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <title>F35物流管理系统</title>
    <link rel="stylesheet" href="${cssBaseUrl}bootstrap.css" />
    <link rel="stylesheet" href="${cssBaseUrl}css.css" />
    <script type="text/javascript" src="${jsBaseUrl}car/js/jquery1.9.0.min.js"></script>
    <script type="text/javascript" src="${jsBaseUrl}car/js/bootstrap.min.js"></script>
    <script type="text/javascript" src="${jsBaseUrl}car/js/sdmenu.js"></script>
    <script type="text/javascript" src="${jsBaseUrl}car/js/laydate/laydate.js"></script>
    <link rel="shortcut icon" href="${imgBaseUrl}index_img/timg.png" type="image/x-icon" />

</head>

<body>
<%@include file="/WEB-INF/jsp/commen/head.jsp"%>
<!-- 顶部 -->

<div id="middle">


        <%@include file="/WEB-INF/jsp/commen/left.jsp"%>


    <div class="right"  id="mainFrame">

        <div class="right_cont">
            <ul class="breadcrumb">当前位置：
                <a href="#">首页</a> <span class="divider">/</span>
                <a href="#">车辆管理</a> <span class="divider">/</span>
                车辆详情
            </ul>
            <div class="title_right">
                <strong>订单详情</strong>
            </div>
            <div  style="width:900px; margin:auto" class="text-left">
                <div class="providerView" style="width: 50%;float: left;">
                <p><strong>订单编号：</strong><span>${Order.orderId}</span></p>
                <p><strong>订单号：</strong><span>${Order.tradeNo}</span></p>
                <p><strong>用户Id：</strong><span>${Order.userId}</span></p>
                <p><strong>订单状态：</strong>
                    <span>
                        <c:choose>
                            <c:when test="${Order.orderState==0}">
                                待发货
                            </c:when>
                            <c:when test="${Order.orderState==1}">
                                运送中
                            </c:when>
                            <c:when test="${Order.orderState==2}">
                                配送中
                            </c:when>
                            <c:when test="${Order.orderState==3}">
                                已达目的地
                            </c:when>
                        </c:choose>
                    </span>
                </p>
                <p><strong>订单创建时间：</strong><span><fmt:formatDate value="${Order.orderCreateTime}" pattern="yyyy-MM-dd hh:mm:ss" /></span></p>
                <p><strong>订单金额（元）：</strong><span>${Order.orderMoney}</span></p>
                <p><strong>是否已支付：</strong>
                    <span>
                        <c:choose>
                            <c:when test="${Order.orderIsPay==0}">未支付</c:when>
                            <c:when test="${Order.orderIsPay==1}">已支付</c:when>
                            <c:otherwise>
                                待核实
                            </c:otherwise>
                        </c:choose>
                    </span>

                    <form name=alipayment id="alipayment" action="${pageContext.request.contextPath }/order/alipay" method=post
                          target="_blank">
                        <div id="body1" class="show" name="divcontent">
                            <dl class="content">
                                <div style="display: none">
                                    <input id="WIDout_trade_no" name="WIDout_trade_no"/>
                                    <input id="WIDsubject" name="WIDsubject" value="F35快递" />
                                    <input id="WIDtotal_amount" name="WIDtotal_amount" value="${Order.orderMoney}" />
                                    <input id="WIDbody" name="WIDbody" value="${Order.orderId}"/>
                                </div>

                                <c:choose>
                                    <c:when test="${Order.orderIsPay==0}">
                                        <span class="new-btn-login-sp">
                                         <button class="new-btn-login" onclick="GetDateNow(this)">付 款</button>
                                        </span>
                                    </c:when>

                                    <c:when test="${Order.orderIsPay==1}">
                                 <span class="new-btn-login-sp">
                                         <button class="new-btn-login" disabled>已 付 款</button>
                                 </span>
                                    </c:when>

                                </c:choose>


                                </dd>
                            </dl>
                        </div>
                    </form>

                    <script type="text/javascript">

                        function GetDateNow(button) {
                            var vNow = new Date();
                            var sNow = "";
                            sNow += String(vNow.getFullYear());
                            sNow += String(vNow.getMonth() + 1);
                            sNow += String(vNow.getDate());
                            sNow += String(vNow.getHours());
                            sNow += String(vNow.getMinutes());
                            sNow += String(vNow.getSeconds());
                            sNow += String(vNow.getMilliseconds());
                            document.getElementById("WIDout_trade_no").value =  sNow;
                            document.getElementById("WIDsubject").value = "F35快递";
                            $(button).parents("#alipayment").submit();
                        }
                        GetDateNow();


                    </script>






                </p>
                <p><strong>货物总重（kg）：</strong><span>${Order.orderWeight}</span></p>
                <p><strong>发货车牌：</strong><span>${Order.carNumber}</span></p>
                <p><strong>上门收货时间：</strong><span><fmt:formatDate value="${Order.orderPickTime}" pattern="yyyy-MM-dd hh:mm:ss" /></span></p>
                <p><strong>发货人姓名：</strong><span>${Order.sender}</span></p>
                <p><strong>发货人地址：</strong><span>${Order.sendAdd}</span></p>
                <p><strong>发货人详细地址：</strong><span>${Order.sendDetailAdd}</span></p>
                <p><strong>发货方式：</strong>
                    <span>
                        <c:choose>
                        <c:when test="${Order.sendManner==0}">陆运</c:when>
                        <c:when test="${Order.sendManner==1}">空运</c:when>
                        </c:choose>
                    </span>
                </p>
                <p><strong>发货人电话：</strong><span>${Order.sendPhone}</span></p>
                <p><strong>发货时间：</strong><span><fmt:formatDate value="${Order.sendTime}" pattern="yyyy-MM-dd hh:mm:ss" /></span></p>
                <p><strong>收货人姓名：</strong><span>${Order.getter}</span></p>
                <p><strong>收货人地址：</strong><span>${Order.getAdd}</span></p>
                    <p><strong>收货人详细地址：</strong><span>${Order.getDetailAdd}</span></p>
                <p><strong>收货时间：</strong><span><fmt:formatDate value="${Order.getTime}" pattern="yyyy-MM-dd hh:mm:ss" /></span></p>
                <p><strong>备注：</strong><span>${Order.comment}</span></p>
                    <div class="providerAddBtn">
                        <input type="button" id="back" name="back" onclick="javascript:history.go(-1);" value="返回" >
                    </div>
                </div>
                <div style="width: 100px;float: left">
                    <img src="" width="100%" height="100%">
                </div>
            </div>
        </div>
    </div>
</div>
<!-- 底部 -->
<%@include file="/WEB-INF/jsp/commen/foot.jsp"%>
<script>
    !function(){
        laydate.skin('molv');
        laydate({elem: '#Calendar'});
    }();

</script>
</body>
</html>