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
            <form method="post" action="${pageContext.request.contextPath }/distribution/distributionlist">
                <input type="hidden" name="pageIndex" value="1"/>
            </form>
    </div>
   <div style="width:900px; margin:auto">
       <table class="table table-bordered">
         <tr>
           <td align="center" nowrap="nowrap" bgcolor="#f1f1f1"><strong>序号</strong></td>
           <td align="center" nowrap="nowrap" bgcolor="#f1f1f1"><strong>车牌号</strong></td>
           <td align="center" nowrap="nowrap" bgcolor="#f1f1f1"><strong>订单号</strong></td>
           <td align="center" nowrap="nowrap" bgcolor="#f1f1f1"><strong>订单状态</strong></td>
           <td align="center" nowrap="nowrap" bgcolor="#f1f1f1"><strong>订单总重</strong></td>
           <td align="center" nowrap="nowrap" bgcolor="#f1f1f1"><strong>始发地</strong></td>
           <td align="center" nowrap="nowrap" bgcolor="#f1f1f1"><strong>目的地</strong></td>
           <td align="center" nowrap="nowrap" bgcolor="#f1f1f1"><strong>操作</strong></td>
         </tr>
        <c:forEach var="F35Distribution" items="${distributionlist }" varStatus="status">
         <tr>
           <td align="center">${F35Distribution.id}</td>
           <td align="center">${F35Distribution.chepaihao}</td>
            <td align="center">${F35Distribution.orderNo}</td>
           <td align="center">${F35Distribution.orderStateStr}
                     
           </td>
           <td align="center">${F35Distribution.orderweight}</td>
           <td align="center">${F35Distribution.sendadd}</td>
           <td align="center">${F35Distribution.getadd}</td>
             <td align="center">
                 <c:if test="${F35Distribution.orderstate eq 3}" >
                     <a class="sureArrived" href="javascript:void(0)" onclick="sureArrived(${F35Distribution.id})">
                         确认到达
                     </a>
                 </c:if>
             </td>
         </tr>
        </c:forEach>
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

var sureArrived = function (distributionId) {
    $.post("/distribution/arrived/" + distributionId , null , function(){
    	alert("配送已成功到达");
    	setTimeout(function(){
    	loaction.reload();
    	} , 3000)
    } )
}
 
</script>

</body>
</html>
