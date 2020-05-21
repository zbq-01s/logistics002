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
                                车辆信息查询
			</ul>
		     <div class="title_right"><strong>车辆信息查询</strong></div>
		     <div style="width:900px; margin:auto" class="text-left">
	            <form method="post" action="${pageContext.request.contextPath }/car/carList">
	                <input name="method" value="query" class="input-text" type="hidden">
	                <span>车牌号：</span>
	                <input name="queryname" class="input-text"	type="text" value="${queryname }">	
	                <span>车辆当前状态：</span>
	                <select name="queryF35car" style="width:80px;height:30px;" >
	                    <c:if test="${carTypelist != null }">
	                        <option value="0">--请选择--</option>
	                        <c:forEach var="f35carType" items="${carTypelist}">
	                            <option <c:if test="${queryF35car eq f35carType.id}">selected</c:if> value="${f35carType.id }">${f35carType.zhuangtai }</option>
	                        </c:forEach>
	                    </c:if>
	                </select>
		                <input type="hidden" name="pageIndex" value="1"/>
		                <input 	value="查 询" type="submit" id="searchbutton">
		
		                <a href="carAdd" class="btn btn-info" style="margin-left: 200px" >添加车辆</a>
		            </form>
		     </div>
	         <div style="width:900px; margin:auto">
		       <table class="table table-bordered">
		         <tr>
		           <td align="center" nowrap="nowrap" bgcolor="#f1f1f1"><strong>序号</strong></td>
		           <td align="center" nowrap="nowrap" bgcolor="#f1f1f1"><strong>车牌号</strong></td>
		           <td align="center" nowrap="nowrap" bgcolor="#f1f1f1"><strong>载重</strong></td>
		           <td align="center" nowrap="nowrap" bgcolor="#f1f1f1"><strong>车辆类型</strong></td>
		           <td align="center" nowrap="nowrap" bgcolor="#f1f1f1"><strong>车辆颜色</strong></td>
		           <td align="center" nowrap="nowrap" bgcolor="#f1f1f1"><strong>车辆购入价格</strong></td>
		           <td align="center" nowrap="nowrap" bgcolor="#f1f1f1"><strong>车辆购入日期</strong></td>
		           <td align="center" nowrap="nowrap" bgcolor="#f1f1f1"><strong>车辆当前状态 </strong></td>
		           <td align="center" nowrap="nowrap" bgcolor="#f1f1f1"><strong>备注</strong></td>
		           <td align="center" nowrap="nowrap" bgcolor="#f1f1f1"><strong>操作</strong></td>
		         </tr>
		         <c:forEach var="f35car" items="${carlist }" varStatus="status">
		         <tr>
		           <td align="center">${f35car.id}</td>
		           <td align="center">${f35car.chepaihao}</td>
		           <td align="center">${f35car.zaizhong}</td>
		           <td align="center">${f35car.leixing}</td>
		           <td align="center">${f35car.yanse}</td>
		           <td align="center">${f35car.gourujiage}</td>
		           <td align="center"><fmt:formatDate value="${f35car.goururiqi}" pattern="yyyy-MM-dd" /></td>
		           <td align="center">${f35car.carType}</td>
		           <td align="center">${f35car.beizhu}</td>
		           <td align="center">
		               <span><a class="carView" href="javascript:;" carid=${f35car.id} ><img src="../statics/image/img/read.png" alt="查看" title="查看"/></a></span>
		               <span><a class="carModify" href="javascript:;" carid=${f35car.id} ><img src="../statics/image/img/xiugai.png" alt="修改" title="修改"/></a></span>
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
 
</script>
<script type="text/javascript">
    $(".carView").on("click",function () {
        var obj = $(this);
        window.location.href = "${pageContext.request.contextPath }/car/view?carid="+obj.attr("carid");
    })
    $(".carModify").on("click",function () {
        var obj = $(this);
        window.location.href = "${pageContext.request.contextPath }/car/update?carid="+obj.attr("carid");
    })

</script>


 
</body>
</html>
