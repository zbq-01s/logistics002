<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@include file="/WEB-INF/jsp/tag_all.jsp"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
	<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <title>F35物流管理系统</title>
    <link rel="stylesheet" href="${cssBaseUrl}bootstrap.css" />
    <link rel="stylesheet" href="${cssBaseUrl}css.css" />
    <script type="text/javascript" src="${jsBaseUrl}news/js/jquery1.9.0.min.js"></script>
    <script type="text/javascript" src="${jsBaseUrl}news/js/bootstrap.min.js"></script>
    <script type="text/javascript" src="${jsBaseUrl}news/js/sdmenu.js"></script>
    <script type="text/javascript" src="${jsBaseUrl}news/js/laydate/laydate.js"></script>
    <script type="text/javascript" src="${jsBaseUrl}news/js/newslist.js"></script>
    <script type="text/javascript" src="${jsBaseUrl}news/js/newsmodify.js"></script>
    <script type="text/javascript" src="${jsBaseUrl}news/layer/layer.js"></script>
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
  <a href="#">资讯管理</a> <span class="divider">/</span>
  <a href="#">资讯列表</a> <span class="divider">/</span>
    资讯列表
</ul>
   <div class="title_right">
       <strong>资讯信息查询</strong>
   </div>
    <div  style="width:900px; margin:auto" class="text-left">
            <form method="post" action="${pageContext.request.contextPath }/news/newslist">
                <input name="method" value="query" class="input-text" type="hidden">
                <span>标题：</span>
                <input name="title" class="input-text"	type="text" value="">

               <%-- <span>新闻查询：</span>
                <select name="queryF35news" style="width:80px;height:30px;" >

                        <option value="0">--请选择--</option>
--%>



                </select>
                <input type="hidden" name="pageIndex" value="1"/>
                <input class="btn btn-info  "	value="查 询" type="submit" id="searchbutton">
                <input type="hidden" id="qwer" value="${pageContext.request.contextPath}"/>
                <a href="${pageContext.request.contextPath}/news/newsadd" class="btn btn-info " style="margin-left: 350px" >添加资讯</a>
            </form>
    </div>
   <div style="width:900px; margin:auto">
       <table class="table table-bordered">
         <tr>
           <td align="center" nowrap="nowrap" bgcolor="#f1f1f1"><strong>新闻编号</strong></td>
           <td align="center" nowrap="nowrap" bgcolor="#f1f1f1"><strong>新闻标题</strong></td>
           <td align="center" nowrap="nowrap" bgcolor="#f1f1f1"><strong>新闻文档</strong></td>
           <td align="center" nowrap="nowrap" bgcolor="#f1f1f1"><strong>发表时间</strong></td>
           <td align="center" nowrap="nowrap" bgcolor="#f1f1f1"><strong>发布者id</strong></td>
           <td align="center" nowrap="nowrap" bgcolor="#f1f1f1"><strong>修改时间</strong></td>
           <td align="center" nowrap="nowrap" bgcolor="#f1f1f1"><strong>修改者</strong></td>
           <td align="center" nowrap="nowrap" bgcolor="#f1f1f1"><strong>图片 </strong></td>
             <td align="center" nowrap="nowrap" bgcolor="#f1f1f1"><strong>修改 </strong></td>
         </tr>
        <c:forEach var="news" items="${titleList }" varStatus="status">
         <tr>
           <td >${news.id}</td>
           <td >${news.title}</td>
           <td >${news.content}</td>
           <td ><fmt:formatDate value="${news.createTime}" pattern="yyyy-MM-dd" /></td>
           <td >${news.createBy}</td>
           <td ><fmt:formatDate value="${news.modifyTime}" pattern="yyyy-MM-dd" /></td>
           <td >${news.modifyBy}</td>
           <td >${news.picpath}</td>

           <td align="center">
               <span><a class="viewNews" href="javascript:;" newsid=${news.id} ><img src="../statics/image/img/read.png" alt="查看" title="查看"/></a></span>
               <span><a class="modifyNews" href="javascript:;" newsid=${news.id} ><img src="../statics/image/img/xiugai.png" alt="修改" title="修改"/></a></span>
               <span><a class="deleteNews" href="javascript:;" newsid=${news.id} ><img src="../statics/image/img/schu.png" alt="删除" title="删除"/></a></span>
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
       <%--<div id="ajaxView">--%>
           <%--<div class="providerView">--%>
               <%--<p><strong>新闻编号：</strong><span id="id">${news.id }</span></p>--%>
               <%--<p><strong>新闻标题：</strong><span id="title">${news.title }</span></p>--%>
               <%--<p><strong>新闻文档：</strong><span id="content">${news.content }</span></p>--%>
               <%--<p><strong>发表时间：</strong><fmt:formatDate value="${news.createTime }" pattern="yyyy-MM-dd" /><span id="createTime"></span></p>--%>
               <%--<p><strong>发布者：</strong><span id="createBy">${news.createBy }</span></p>--%>
               <%--<p><strong>修改时间：</strong><fmt:formatDate value="${news.modifyTime }" pattern="yyyy-MM-dd" /><span id="modifyTime"></span></p>--%>
               <%--<p><strong>修改者：</strong><span id="modifyBy">${news.modifyBy }</span></p>--%>
               <%--<p><strong>图片：</strong><span id="picpath">${news.picpath }</span></p>--%>
               <%--<img src="${pageContext.request.contextPath}${news.picpath }" width="100%" height="100%" id="idPicPath">--%>
           <%--</div>--%>
       <%--</div>--%>

</div>
     
     
     </div>     
     </div>
    </div>
    
<!-- 底部 -->
<%@include file="/WEB-INF/jsp/commen/foot.jsp"%>
<script src="${pageContext.request.contextPath }/statics/js/news/js/newslist.js"></script>

 <script>
!function(){
laydate.skin('molv');
laydate({elem: '#Calendar'});
}();
 
</script>
<script type="text/javascript">
    $(function () {
        $(".viewNews").on("click",function () {
            var obj = $(this);
            window.location.href = "${pageContext.request.contextPath }/news/newsview?newsid="+obj.attr("newsid");
        });

        $(".deleteNews").on("click",function () {
                var obj = $(this);
            window.location.href = "${pageContext.request.contextPath }/news/delete?newsid="+obj.attr("newsid");
        });

    });




</script>


 
</body>
</html>
