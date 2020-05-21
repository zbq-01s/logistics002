<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ include file="/WEB-INF/jsp/tag_all.jsp"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <link rel="shortcut icon" href="${imgBaseUrl}index_img/timg.png" type="image/x-icon" />
    <title>F35物流管理系统</title>
    <link rel="stylesheet" href="${cssBaseUrl}bootstrap.css" />
    <link rel="stylesheet" href="${cssBaseUrl}css.css" />
    <script type="text/javascript" src="${jsBaseUrl}car/js/jquery1.9.0.min.js"></script>
    <script type="text/javascript" src="${jsBaseUrl}car/js/bootstrap.min.js"></script>
    <script type="text/javascript" src="${jsBaseUrl}car/js/sdmenu.js"></script>
    <script type="text/javascript" src="${jsBaseUrl}car/js/laydate/laydate.js"></script>
    <style type="text/css" rel="stylesheet">
        .right{
            width: 85%;
        }
        .wColck {
            width: 88px;
            height: 108px;
            margin: 50px;
            float: left;
        }
        .wFont {
            float: left;
            margin-top: 50px;
        }

        .wFont h2 {
            font-size: 30px;
            line-height: 50px;
            color: #0a5eb6;
        }

        .wFont p {
            font-size: 14px;
            line-height: 30px;
            color: #5a656c;
        }
    </style>

</head>

<body>
<%@include file="/WEB-INF/jsp/commen/head.jsp"%>
<!-- 顶部 -->

<div id="middle">

    <%@include file="/WEB-INF/jsp/commen/left.jsp"%>

    <div class="right"  id="mainFrame">

        <div class="right_cont">
            <ul class="breadcrumb">当前位置：
                <a href="#">首页</a>
            </ul>
        </div>
        <div>
            <img class="wColck" src="${imgBaseUrl}login_img/clock.jpg" alt=""/>
            <div class="wFont">
                <h2></h2>
                <p>欢迎来到物流管理系统!${phone}</p>
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
