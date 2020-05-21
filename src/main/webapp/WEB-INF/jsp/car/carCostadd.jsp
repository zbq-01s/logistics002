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
                               车辆费用记录添加
            </ul>
            <div class="title_right"><strong>车辆费用记录添加</strong></div>
            <div style="width:900px; margin:auto">
                <table class="table table-bordered" >
                    <form method="post" action="${pageContext.request.contextPath }/operation/save ">
                        <tr>
                            <td width="12%" align="right" nowrap="nowrap" bgcolor="#f1f1f1">车牌号：</td>
                            <td><input type="text" name="chepaihao" id="input1" class="span1-1" value=""  /></td>
                        </tr>
                        <tr>
                            <td align="right" nowrap="nowrap" bgcolor="#f1f1f1">驾驶人：</td>
                            <td><input type="text" name="jiashiyuan" id="input2" class="span1-1" value=""  /></td>
                        </tr>
                        <tr>
                            <td align="right" nowrap="nowrap" bgcolor="#f1f1f1">过路费：</td>
                            <td><input type="text" name="guolufei" id="input3" class="span1-1" value=""  /></td>
                        </tr>
                        <tr>
                            <td align="right" nowrap="nowrap" bgcolor="#f1f1f1">洗车费：</td>
                            <td><input type="text" name="xichefei" id="input4" class="span1-1" value=""  /></td>
                        </tr>
                        <tr>
                            <td align="right" nowrap="nowrap" bgcolor="#f1f1f1">停车费：</td>
                            <td><input type="text" name="tingchefei" id="input5" class="span1-1" value=""  /></td>
                        </tr>
                        <tr>
                            <td align="right" nowrap="nowrap" bgcolor="#f1f1f1">加水费：</td>
                            <td><input type="text" name="jiashuifei" id="input6" class="span1-1" value=""  /></td>
                        </tr>
                        <tr>
                            <td align="right" nowrap="nowrap" bgcolor="#f1f1f1">加油费：</td>
                            <td><input type="text" name="jiayoufei" id="input7" class="span1-1" value=""  /></td>
                        </tr>
                        <tr>
                            <td colspan="2" align="center">
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
