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
                <a href="#">资讯管理</a> <span class="divider">/</span>
                资讯信息修改
            </ul>

            <div class="title_right"><strong>资讯信息修改</strong></div>
            <div style="width:900px; margin:auto">
                <table class="table table-bordered" >
                    <form method="post" action="${pageContext.request.contextPath }/news/update">
                        <tr>
                            <input type="hidden" name="id" value="${news.id}" />
                            <td width="12%" align="right" nowrap="nowrap" bgcolor="#f1f1f1">新闻标题：</td>
                            <td width="38%"><input type="text" name="title" id="input" class="span1-1" value="${news.title}"  /></td>
                            <td width="12%" align="right" bgcolor="#f1f1f1">发表时间：</td>
                            <td><input type="text" name="createTime"  class="laydate-icon span1-1" id="Calendar" value="<fmt:formatDate value='${news.createTime}' pattern='yyyy-MM-dd' />"  /></td>
                        </tr>
                        <tr>
                            <td align="right" bgcolor="#f1f1f1">发布者：</td>
                            <td><input type="text" name="createBy" id="input4" class="span1-1" value="${news.createBy}"  /></td>
                        </tr>
                        <tr>
                            <td align="right" nowrap="nowrap" bgcolor="#f1f1f1">新闻文档：</td>
                            <td colspan="3"><textarea name="content" id="input12" class="span10">${news.content}</textarea></td>
                        </tr>
                        <tr>
                            <td colspan="4" align="center">
                                <input type="submit" value="确定" class="btn btn-info " style="width:80px;" />
                                <a href="${pageContext.request.contextPath }/news/newslist" class="btn btn-info " style="width:56px;">返回</a>
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
