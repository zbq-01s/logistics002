<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@include file="/WEB-INF/jsp/tag_all.jsp"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <title>f35物流管理系统</title>
    <link rel="stylesheet" href="${cssBaseUrl}bootstrap.css" />
    <link rel="stylesheet" href="${cssBaseUrl}css.css" />
    <script type="text/javascript" src="${jsBaseUrl}news/js/jquery1.9.0.min.js"></script>
    <script type="text/javascript" src="${jsBaseUrl}news/js/bootstrap.min.js"></script>
    <script type="text/javascript" src="${jsBaseUrl}news/js/sdmenu.js"></script>
    <script type="text/javascript" src="${jsBaseUrl}news/js/laydate/laydate.js"></script>
    <link rel="shortcut icon" href="${imgBaseUrl}index_img/timg.png" type="image/x-icon" />
</head>>
<body>
<%@include file="/WEB-INF/jsp/commen/head.jsp"%>
<!-- 顶部 -->

<div id="middle">


    <%@include file="/WEB-INF/jsp/commen/left.jsp"%>

 <div class="right">
        <div class="location">
            <p><strong>新闻编号：</strong><span id="id">${news.id }</span></p>
            <p><strong>新闻标题：</strong><span id="title">${news.title }</span></p>
            <p><strong>新闻文档：</strong><span id="content">${news.content }</span></p>
            <p><strong>发表时间：</strong><fmt:formatDate value="${news.createTime }" pattern="yyyy-MM-dd" /><span id="createTime"></span></p>
            <p><strong>发布者：</strong><span id="createBy">${news.createBy }</span></p>
            <p><strong>修改时间：</strong><fmt:formatDate value="${news.modifyTime }" pattern="yyyy-MM-dd" /><span id="modifyTime"></span></p>
            <p><strong>修改者：</strong><span id="modifyBy">${news.modifyBy }</span></p>
            <%--<p><strong>图片：</strong><span id="picpath">${news.picpath }</span></p>--%>
            <img src="${pageContext.request.contextPath}${news.picpath }" width="20%" height="20%" id="picpath">
			<div class="providerAddBtn">
            	<input type="button" id="back" name="back" onclick="javascript:history.go(-1);" value="返回" >
            </div>
        </div>
        <div style="width: 100px;float: left">
            <%--<img src="${pageContext.request.contextPath }${news.picpath }" width="100%" height="100%">--%>
            <%--<img src="${pageContext.request.contextPath }/statics/upload/1537515905270_Person.jpg">--%>
        </div>
    </div>
</div>
</section>
<%@include file="/WEB-INF/jsp/commen/foot.jsp" %>
<script>
    !function(){
        laydate.skin('molv');
        laydate({elem: '#Calendar'});
    }();

</script>
</body>
</html>
