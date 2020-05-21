<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@include file="/WEB-INF/jsp/tag_all.jsp"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
    <link rel="shortcut icon" href="${imgBaseUrl}index_img/timg.png" type="image/x-icon" />
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <title>F35物流管理系统</title>
    <link rel="stylesheet" href="${cssBaseUrl}bootstrap.css" />
    <link rel="stylesheet" href="${cssBaseUrl}css.css" />
    <script type="text/javascript" src="${jsBaseUrl}car/js/jquery1.9.0.min.js"></script>
    <script type="text/javascript" src="${jsBaseUrl}car/js/bootstrap.min.js"></script>
    <script type="text/javascript" src="${jsBaseUrl}car/js/sdmenu.js"></script>
    <script type="text/javascript" src="${jsBaseUrl}car/js/laydate/laydate.js"></script>

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
                <a href="#">订单管理</a> <span class="divider">/</span>
                订单信息修改
            </ul>

            <div class="title_right"><strong>订单信息修改</strong></div>
            <div style="width:900px; margin:auto">
                <table class="table table-bordered" >
                    <form method="post" action="${pageContext.request.contextPath }/order/modify">
                        <tr>
                            <input type="hidden" name="orderId" value="${Order.orderId}" />
                            <td width="12%" align="right" nowrap="nowrap" bgcolor="#f1f1f1">订单重量：</td>
                            <td width="38%"><input type="text" name="orderWeight" id="input1" class="span1-1" value="${Order.orderWeight}"  /></td>
                            <td width="12%" align="right" bgcolor="#f1f1f1">订单金额：</td>
                            <td><input type="text" name="orderMoney" id="input2" class="span1-1" value="${Order.orderMoney}"  /></td>
                        </tr>


                        <%--<p><h1><strong>寄件人信息</strong></h1></p>--%>
                        <tr>
                            <td align="right" nowrap="nowrap" bgcolor="#f1f1f1">寄件人：</td>
                            <td><input type="text" name="sender" id="input3" class="span1-1" value="${Order.sender}"  /></td>
                            <td align="right" bgcolor="#f1f1f1">寄件人地址：</td>
                            <td><input type="text" name="sendAdd" id="input4" class="span1-1" value="${Order.sendAdd}"  /></td>
                        </tr>
                        <tr>
                            <td align="right" nowrap="nowrap" bgcolor="#f1f1f1">寄件人详细地址：</td>
                            <td><input type="text" name="sendDetailAdd" id="input5" class="span1-1" value="${Order.sendDetailAdd}"  /></td>
                            <td align="right" bgcolor="#f1f1f1">寄件人联系方式：</td>
                            <td><input type="text" name="sendPhone" id="input6" class="span1-1" value="${Order.sendPhone}"  /></td>
                        </tr>


                        <%--<p><h1><strong>收件人信息</strong></h1></p>--%>
                        <tr>
                            <td align="right" nowrap="nowrap" bgcolor="#f1f1f1">收件人：</td>
                            <td><input type="text" name="getter" id="input7" class="span1-1" value="${Order.getter}"  /></td>
                            <td align="right" bgcolor="#f1f1f1">收件人地址：</td>
                            <td><input type="text" name="getAdd" id="input8" class="span1-1" value="${Order.getAdd}"  /></td>
                        </tr>
                        <tr>
                            <td align="right" nowrap="nowrap" bgcolor="#f1f1f1">收件人详细地址：</td>
                            <td><input type="text" name="getDetailAdd" id="input9" class="span1-1" value="${Order.getDetailAdd}"  /></td>
                            <td align="right" bgcolor="#f1f1f1">收件人联系方式：</td>
                            <td><input type="text" name="getPhone" id="input10" class="span1-1" value="${Order.getPhone}"  /></td>
                        </tr>

                        <tr>
                            <td align="right" nowrap="nowrap" bgcolor="#f1f1f1">备注：</td>
                            <td colspan="3"><textarea name="comment" id="input11" class="span10"></textarea>${Order.comment}</td>
                        </tr>
                        <tr>
                            <td colspan="4" align="center">
                                <input type="submit" value="确定" class="btn btn-info " style="width:80px;" />
                                <a href="${pageContext.request.contextPath }/order/orderList" class="btn btn-info " style="width:56px;">返回</a>
                            </td>
                        </tr>
                    </form>
                </table>
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
        laydate.skin('molv');
        laydate({elem: '#Calendar2'});
    }();

</script>




</body>
</html>
