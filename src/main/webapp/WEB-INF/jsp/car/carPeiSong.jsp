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
                订单配送
            </ul>
            <div class="title_right">
                <strong>订单配送</strong>
            </div>
            <div  style="width:900px; margin:auto" class="text-left">
                <form method="post" action="">
                    <input type="hidden" name="pageIndex" value="1"/>
                </form>

            </div>
            <div style="width:900px; margin:auto">
                <table class="table table-bordered">
                    <%--<form action="${pageContext.request.contextPath }/fache/fasong " method="post">--%>
                    <tr>
                        <td align="center" nowrap="nowrap" bgcolor="#f1f1f1"><strong>选择发货订单</strong></td>
                        <td align="center" nowrap="nowrap" bgcolor="#f1f1f1"><strong>订单号</strong></td>
                        <td align="center" nowrap="nowrap" bgcolor="#f1f1f1"><strong>订单重量</strong></td>
                        <td align="center" nowrap="nowrap" bgcolor="#f1f1f1"><strong>订单状态</strong></td>
                        <td align="center" nowrap="nowrap" bgcolor="#f1f1f1"><strong>始发地</strong></td>
                        <td align="center" nowrap="nowrap" bgcolor="#f1f1f1"><strong>目的地</strong></td>
                        <td align="center" nowrap="nowrap" bgcolor="#f1f1f1"><strong>下单日期</strong></td>
                    </tr>
                <c:forEach var="order" items="${orderlist}"  varStatus="row">
                    <tr>
                        <td align="center"><input class="order" type="checkbox" name="order"/></td>
                        <td align="center">${order.tradeNo}</td>
                        <td align="center" class="tradeNo">${order.orderWeight}</td>
                        <td align="center"><c:if test="${order.orderState eq 0}">待发货</c:if></td>
                        <td align="center">${order.sendAdd}</td>
                        <td align="center">${order.getAdd}</td>
                        <td align="center"><fmt:formatDate value="${order.orderCreateTime}" pattern="yyyy-MM-dd" /></td>
                        <input type="hidden" class="orderId" name="orderId" value="${order.orderId}" />


                    </tr>
                </c:forEach>
                    <tr>
                        <td align="center">
                            <select name="carid" id="ss">
                                <option value="0">选择车辆</option>
                                <c:forEach items="${f35carlist }" var="f35car" varStatus="status">
                                    <option hh="${f35car.zaizhong}" value="${f35car.id}">${f35car.chepaihao}</option>
                                </c:forEach>
                            </select>
                        </td>
                        <td colspan="2" align="center">
                            <input type="submit" id="peisong" value="发车" class="btn btn-info " style="width:80px;" />
                        </td>
                        <td colspan="2" align="center">
                            车辆载重：<span id="zz"></span>
                        </td>
                        <td colspan="2" align="center">
                            订单总重：<span id="trades"></span>
                        </td>
                    </tr>
                <%--</form>--%>
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
    $(".order").on("click",function () {
      var t1=  $('input[type="checkbox"]:checked')
        var totle=0;
        t1.each(function () {
            var tt=parseFloat( $(this).parent().parent().find(".tradeNo").html());
                  totle=totle+tt;
        })
        var trades = $("#trades").html(totle);
    })

</script>

<script>
    $("#ss").bind("change",function () {
        var a
       a= $("option:selected").attr("hh")
        $("#zz").html(a);
    })
    $("#peisong").on("click",function () {
        var che = parseInt($("#zz").html());
        var dingdan = parseInt($("#trades").html());
        if(dingdan > che*0.5 ){
            if(che > dingdan){

                alert("发车成功");
                var t1=  $('input[type="checkbox"]:checked');
                var temp='';
                var all=''
                t1.each(function () {
                    var tt=parseFloat( $(this).parent().parent().find(".orderId").val());
                    temp=tt+","
                    all=all+temp;
                })

                alert(all);
                window.location.href = "${pageContext.request.contextPath }/fache/fasong?orderids="+all+"&carid="+$("#ss").val();
            }else {
                alert("请选择合理的车辆载重");
                return false;
            }
        }else {
            alert("请选择合理的车辆载重");
            return false;
        }
    })
</script>

</body>
</html>
