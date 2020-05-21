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
                车辆信息修改
            </ul>

            <div class="title_right"><strong>车辆信息修改</strong></div>
            <div style="width:900px; margin:auto">
                <table class="table table-bordered" >
                    <form method="post" action="${pageContext.request.contextPath }/car/modify">
                        <tr>
                            <input type="hidden" name="id" value="${F35car.id}" />
                            <td width="12%" align="right" nowrap="nowrap" bgcolor="#f1f1f1">车牌号：</td>
                            <td width="38%"><input type="text" name="chepaihao" id="input" class="span1-1" value="${F35car.chepaihao}"  /></td>
                            <td width="12%" align="right" bgcolor="#f1f1f1">车辆购入日期：</td>
                            <td><input type="text" name="goururiqi"  class="laydate-icon span1-1" id="Calendar" value="<fmt:formatDate value='${F35car.goururiqi}' pattern='yyyy-MM-dd' />"  /></td>
                        </tr>
                        <tr>
                            <td align="right" nowrap="nowrap" bgcolor="#f1f1f1">车辆类型：</td>
                            <td><input type="text" name="leixing" id="input3" class="span1-1" value="${F35car.leixing}"  /></td>
                            <td align="right" bgcolor="#f1f1f1">车辆购入价格：</td>
                            <td><input type="text" name="gourujiage" id="input4" class="span1-1" value="${F35car.gourujiage}"  /></td>
                        </tr>
                        <tr>
                            <td align="right" nowrap="nowrap" bgcolor="#f1f1f1">颜色：</td>
                            <td><input type="text" name="yanse" id="input2" class="span1-1" value="${F35car.yanse}"  /></td>
                            <td align="right" bgcolor="#f1f1f1">载重：</td>
                            <td><input type="text" name="zaizhong" id="input5" class="span1-1" value="${F35car.zaizhong}"  /></td>
                        </tr>
                        <tr>
                            <td  align="right" nowrap="nowrap"  bgcolor="#f1f1f1">车辆当前状态：</td>
                            <td colspan="3">
                                <select name="zhuangtai" style="width:80px;height:30px;" >
                                    <option value="1" <c:if test="${F35car.zhuangtai eq 1}">selected</c:if>>运货中</option>
                                    <option value="2" <c:if test="${F35car.zhuangtai eq 2}">selected</c:if>>空闲</option>
                                    <option value="3" <c:if test="${F35car.zhuangtai eq 3}">selected</c:if>>维修</option>
                                    <option value="4" <c:if test="${F35car.zhuangtai eq 4}">selected</c:if>>停用</option>
                                </select>
                            </td>
                        </tr>
                        <tr>
                            <td align="right" nowrap="nowrap" bgcolor="#f1f1f1">备注：</td>
                            <td colspan="3"><textarea name="beizhu" id="input12" class="span10"></textarea>${F35car.beizhu}</td>
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
