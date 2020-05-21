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
		  车辆添加
		</ul>   
   <div class="title_right"><strong>车辆添加</strong></div>
   <div style="width:900px; margin:auto">
   <table class="table table-bordered" >
	<form method="GET" action="${pageContext.request.contextPath }/car/add ">
     <tr>
       <td width="12%" align="right" nowrap="nowrap" bgcolor="#f1f1f1">车牌号：</td>
       <td width="38%"><input type="text" name="chepaihao" id="chepaihao" value=""  /></td>
       <td width="12%" align="right" bgcolor="#f1f1f1">车辆购入日期：</td>
       <td><input type="text" class="laydate-icon span1-1" name="goururiqi" id="Calendar" value=""  /></td>
     </tr>
     <tr>
       <td align="right" nowrap="nowrap" bgcolor="#f1f1f1">车辆类型：</td>
       <td><input type="text" name="leixing" id="leixing" value=""  /></td>
       <td align="right" bgcolor="#f1f1f1">车辆购入价格：</td>
       <td><input type="text" name="gourujiage" id="gourujiage" value=""  /></td>
     </tr>
     <tr>
       <td align="right" nowrap="nowrap" bgcolor="#f1f1f1">颜色：</td>
       <td><input type="text" name="yanse" id="yanse" value=""  /></td>
       <td align="right" bgcolor="#f1f1f1">载重：</td>
       <td><input type="text" name="zaizhong" id="zaizhong" value=""  /></td>
     </tr>
   	 <tr>
		 <td align="right" nowrap="nowrap"  bgcolor="#f1f1f1">车辆当前状态：</td>
		 <td colspan="3">
			 <select name="zhuangtai" style="width:80px;height:30px;" >
				 <option value="0">--请选择--</option>
				 <option value="1">运货中</option>
				 <option value="2">空闲</option>
				 <option value="3">维修</option>
				 <option value="4">报废</option>
			 </select>
		 </td>
	 </tr>
     <tr>
       <td align="right" nowrap="nowrap" bgcolor="#f1f1f1">备注：</td>
       <td colspan="3"><textarea name="beizhu"></textarea></td>
	 </tr>
     <tr>
        <td colspan="4" align="center">
            <input type="submit" value="确定" class="btn btn-info " style="width:80px;" />
            <a href="${pageContext.request.contextPath }/car/carList" class="btn btn-info " style="width:56px;">返回</a>
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
</script>



 
</body>
</html>
