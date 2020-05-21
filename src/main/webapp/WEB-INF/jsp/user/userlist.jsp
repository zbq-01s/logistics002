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
  <a href="#">系统管理</a> <span class="divider">/</span>
    用户管理
</ul>
   <div class="title_right">
       <strong>用户信息查询</strong>
   </div>
    <div  style="width:900px; margin:auto" class="text-left">
            <form method="post" action="/user/userlist">
                <input name="method" value="query" class="input-text" type="hidden">
                <span>会员名：</span>
                <input name="cName" class="input-text"	type="text" value="${queryName}">

                <span>性别：</span>
                <select name="cSex" style="width:80px;height:30px;" >
                        <option value="">--请选择--</option>
                        <option value="男"<c:if test="${querySex eq '男'}">selected</c:if>>男</option>
                        <option value="女"<c:if test="${querySex eq '女'}">selected</c:if>>女</option>
                </select>
                <input type="hidden" name="pageIndex" value="1"/>
                <input class="btn btn-info  "	value="查 询" type="submit" id="searchbutton">

                <!-- <a href="carAdd" class="btn btn-info " style="margin-left: 350px" >添加用户</a> -->
            </form>

    </div>
   <div style="width:900px; margin:auto">
       <table class="table table-bordered">
         <tr>
           <td align="center" nowrap="nowrap" bgcolor="#f1f1f1"><strong>序号</strong></td>
           <td align="center" nowrap="nowrap" bgcolor="#f1f1f1"><strong>会员名</strong></td>
           <td align="center" nowrap="nowrap" bgcolor="#f1f1f1"><strong>会员密码</strong></td>
           <td align="center" nowrap="nowrap" bgcolor="#f1f1f1"><strong>邮箱</strong></td>
           <td align="center" nowrap="nowrap" bgcolor="#f1f1f1"><strong>性别</strong></td>
           <td align="center" nowrap="nowrap" bgcolor="#f1f1f1"><strong>电话</strong></td>
           <td align="center" nowrap="nowrap" bgcolor="#f1f1f1"><strong>注册时间</strong></td>
           <!-- <td align="center" nowrap="nowrap" bgcolor="#f1f1f1"><strong>备注</strong></td>
           <td align="center" nowrap="nowrap" bgcolor="#f1f1f1"><strong>操作</strong></td> -->
         </tr>
           <c:forEach var="cusList" items="${cusList}" varStatus="status">
               <tr>
                   <td align="center">${cusList.cId}</td>
                   <td align="center">${cusList.cName}</td>
                   <td align="center">${cusList.cPassword}</td>
                   <c:if test="${cusList.cEmail == ''}"><td align="center">未填</td></c:if>
                   <c:if test="${cusList.cEmail != ''}"><td align="center">${cusList.cEmail}</td></c:if>
                   <td align="center">${cusList.cSex}</td>
                   <td align="center">${cusList.cPhone}</td>
                   <td align="center"><fmt:formatDate type="both" value="${cusList.cCreatedate}" pattern="yyyy-MM-dd" /></td>
                   <%-- <td align="center">&nbsp;</td>
                   <td align="center">
                       <span><a class="viewUser" href="javascript:;" userid=${user.id } username=${user.userName }><img src="../statics/image/img/read.png" alt="查看" title="查看"/></a></span>
                       <span><a class="viewUser" href="javascript:;" userid=${user.id } username=${user.userName }><img src="../statics/image/img/xiugai.png" alt="修改" title="修改"/></a></span>
                       <span><a class="viewUser" href="javascript:;" userid=${user.id } username=${user.userName }><img src="../statics/image/img/schu.png" alt="删除" title="删除"/></a></span>
                   </td> --%>
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



 
</body>
</html>
