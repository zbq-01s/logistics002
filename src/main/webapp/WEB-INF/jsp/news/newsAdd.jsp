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
  添加资讯
</ul>
   
   <div class="title_right"><strong>添加资讯</strong></div>
   <div style="width:900px; margin:auto">
   <table class="table table-bordered" >
	<form id="tianjia" method="POST" action="${pageContext.request.contextPath }/news/add2" enctype="multipart/form-data" >
     <tr>
       <td width="12%" align="right" nowrap="nowrap" bgcolor="#f1f1f1">新闻标题：</td>
       <td width="38%"><input type="text" name="title" id="chepaihao" value=""  /></td>
     </tr>
     <tr>
       <td align="right" nowrap="nowrap" bgcolor="#f1f1f1">新闻文档：</td>
       <td><input type="text" name="content" id="leixing" value=""  /></td>
       <td align="right" bgcolor="#f1f1f1">发布者：</td>
       <td><input type="text" name="createBy" id="gourujiage" value=""  /></td>
         <td width="12%" align="right" bgcolor="#f1f1f1">发表时间：</td>
         <td><input type="text" class="laydate-icon span1-1" name="createTime" id="Calendar" value="2018-08-25"  /></td>
     </tr>
     <tr>
       <td align="right" nowrap="nowrap" bgcolor="#f1f1f1">修改者：</td>
       <td><input type="text" name="modifyBy" id="yanse" value=""  /></td>
         <td width="12%" align="right" bgcolor="#f1f1f1">修改时间：</td>
         <td><input type="text" class="laydate-icon span1-1" name="modifyTime" id="Calendar1" value="2018-08-25"  /></td>
     </tr>
   	 <tr>
		<td align="right" nowrap="nowrap"  bgcolor="#f1f1f1">照片上传：</td>
		 <td><input type="file" class="carTx" id="carTx" name="userTx"/></td>
	 </tr>
     <tr>
       <td align="right" nowrap="nowrap" bgcolor="#f1f1f1">备注：</td>
       <td colspan="3"><textarea name="beizhu"></textarea></td>
	 </tr>
     <tr>
        <td colspan="4" align="center">
            <input id="tijiao" type="submit" value="确定" class="btn btn-info " style="width:80px;" />
            <a id="back" href="javascript:" class="btn btn-info " style="width:56px;">返回</a>
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

 <script type="text/javascript">
!function(){
laydate.skin('molv');
laydate({elem: '#Calendar'});
laydate.skin('molv');
laydate({elem: '#Calendar2'});
}();
 $(function () {

     $("#back").on("click",function(){

             history.back(-1);

     });
$("tijiao").bind("click",function () {
    var title = $("#chepaihao").val();
    $("#tianjia").submit();
});


 })
</script>



 
</body>
</html>
