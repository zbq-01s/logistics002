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
  车辆信息查询
</ul>
   <div class="title_right">
       <strong>订单信息查询</strong>
   </div>
    <div  style="width:1100px; margin:auto" class="text-left">
            <form method="" action="">
                <input name="method" value="query" class="input-text" type="hidden">
                <span>订单号：</span>
                <input name="orderNo" class="input-text"	type="text" value=" ">

                <span>订单状态：</span>
                <select name="status" style="width:80px;height:30px;" >
                    <option value="0">--请选择--</option>
                    <option value="1">已下单</option>
                    <option value="2">已取货</option>
                    <option value="3">已发货</option>
                    <option value="4">配送中</option>
                    <option value="5">已完成</option>
                    <!-- <option value="6">订单已完成</option> -->
                </select>
                <input type="hidden" name="pageIndex" value="1"/>
                <input class="btn btn-info  "	value="查 询" type="submit" id="searchbutton">

                <%--<a href="carAdd" class="btn btn-info " style="margin-left: 350px" >添加订单</a>--%>
            </form>

    </div>
   <div style="width:1100px; margin:auto">
       <table class="table table-bordered">
         <tr>
           <td align="center" nowrap="nowrap" bgcolor="#f1f1f1"><strong>订单编号</strong></td>
           <td align="center" nowrap="nowrap" bgcolor="#f1f1f1"><strong>订单号</strong></td>
           <!-- <td align="center" nowrap="nowrap" bgcolor="#f1f1f1"><strong>用户Id</strong></td> -->
           <td align="center" nowrap="nowrap" bgcolor="#f1f1f1"><strong>订单状态</strong></td>
           <td align="center" nowrap="nowrap" bgcolor="#f1f1f1"><strong>订单创建时间</strong></td>
           <td align="center" nowrap="nowrap" bgcolor="#f1f1f1"><strong>订单金额（元）</strong></td>
           <!-- <td align="center" nowrap="nowrap" bgcolor="#f1f1f1"><strong>是否已支付</strong></td> -->
           <td align="center" nowrap="nowrap" bgcolor="#f1f1f1"><strong>上门收货时间</strong></td>
           <td align="center" nowrap="nowrap" bgcolor="#f1f1f1"><strong>货物总重（kg）</strong></td>
           <!-- <td align="center" nowrap="nowrap" bgcolor="#f1f1f1"><strong>发货车牌</strong></td> -->
           <td align="center" nowrap="nowrap" bgcolor="#f1f1f1"><strong>操作</strong></td>
         </tr>
         <c:forEach items="${orderList}" var="order" varStatus="row">
             <tr>
               <td align="center">${order.orderId}</td>
               <td align="center">${order.tradeNo}</td>
               <%-- <td align="center">${order.userId}</td> --%>
               <td align="center">
                   ${order.orderStateStr}

                       </td>
               <td align="center"><fmt:formatDate value="${order.orderCreateTime}" type="both" pattern="yyyy-MM-dd hh:mm:ss" /></td>
               <td align="center">${order.orderMoney}</td> 
               <%-- <td align="center">
                   <c:choose>
                       <c:when test="${order.orderIsPay==0}">未支付</c:when>
                       <c:when test="${order.orderIsPay==1}">已支付</c:when>

                   </c:choose>
               </td> --%>
               <td align="center">${order.orderPickTime}</td>
               <td align="center">${order.orderWeight}</td>
               <%-- <td align="center">${order.carNumber}</td> --%>

               <td align="center">
                   <span><a class="orderView" href="javascript:;" orderid=${order.orderId}><img src="../statics/image/img/read.png" alt="查看" title="查看"/></a></span>
                   <span><a class="orderModify" href="javascript:;" orderId=${order.orderId}><img src="../statics/image/img/xiugai.png" alt="修改" title="修改"/></a></span>
                   <%--<span><a class="aliPay" href="javascript:;" orderId=${order.orderId}><img src="../statics/image/img/schu.png" alt="付款" title="付款"/></a></span>--%>
               </td>
                 <td align="center">
                     <%--<form name=alipayment id="alipayment" action="${pageContext.request.contextPath }/order/alipay" method=post
                           target="_blank">
                         <div id="body1" class="show" name="divcontent">
                             <dl class="content">
                                 <div style="display: none">
                                     <input id="WIDout_trade_no" name="WIDout_trade_no"/>
                                     <input id="WIDsubject" name="WIDsubject" value="F35快递" />
                                     <input id="WIDtotal_amount" name="WIDtotal_amount" value="${order.orderMoney}" />
                                     <input id="WIDbody" name="WIDbody" value="${order.orderId}"/>
                                 </div>

                                 <c:choose>
                                     <c:when test="${order.orderIsPay==0}">
                                        <span class="new-btn-login-sp">
                                         <button class="new-btn-login" onclick="GetDateNow(this)">付 款</button>
                                        </span>
                                    </c:when>

                                     <c:when test="${order.orderIsPay==1}">
                                 <span class="new-btn-login-sp">
                                         <button class="new-btn-login" disabled>已 付 款</button>
                                 </span>
                                     </c:when>

                                 </c:choose>


                                 </dd>
                             </dl>
                         </div>
                     </form>--%>
                 </td>

             </tr>




          </c:forEach>
       </table>



   <table  class="margin-bottom-20 table  no-border" >
   </table>
       <input type="hidden" value="${totalPageCount}" id="totalPageCount">
       <!-- 用C标签引入其他jsp页面 -->
       <c:import url="rollpage.jsp">
           <c:param name="currentPageNo" value="${currentPageNo}"/>
           <c:param name="totalPageCount" value="${totalPageCount}"/>
           <c:param name="totalCount" value="${totalCount}"/>
       </c:import>


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
<script type="text/javascript">
    $(".orderView").on("click",function () {
        var obj = $(this);
        window.location.href = "${pageContext.request.contextPath }/order/orderView?orderid="+obj.attr("orderid");
    })
    $(".orderModify").on("click",function () {
        var obj = $(this);
        window.location.href = "${pageContext.request.contextPath }/order/update?orderId="+obj.attr("orderId");
    })


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


 
</body>
</html>
