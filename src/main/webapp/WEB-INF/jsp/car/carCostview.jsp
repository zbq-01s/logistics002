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
                车辆费用详情
            </ul>
            <div class="title_right">
                <strong>车辆费用详情</strong>
            </div>
            <div  style="width:900px; margin:auto" class="text-left">
                <div class="providerView" style="width: 50%;float: left;">
                <p><strong>车牌号：</strong><span>${f35carOperation.chepaihao}</span></p>
                <p><strong>驾驶员：</strong><span>${f35carOperation.jiashiyuan }</span></p>
                <p><strong>过路费：</strong><span>${f35carOperation.guolufei}</span></p>
                <p><strong>洗车费：</strong><span>${f35carOperation.xichefei}</span></p>
                <p><strong>停车费：</strong><span>${f35carOperation.tingchefei }</span></p>
                <p><strong>加水费：</strong><span>${f35carOperation.jiashuifei }</span></p>
                <p><strong>加油费：</strong><span>${f35carOperation.jiayoufei }</span></p>
                <p><strong>报销日期：</strong><span><fmt:formatDate value="${f35carOperation.baoxiaoriqi }" pattern="yyyy-MM-dd" /></span></p>
                    <div class="providerAddBtn">
                        <input type="button" id="back" name="back" onclick="javascript:history.go(-1);" value="返回" >
                    </div>
                </div>
                <div style="width: 100px;float: left">
                    <img src="" width="100%" height="100%">
                </div>
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