<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@include file="/WEB-INF/jsp/tag_all.jsp"%>
<html>
<head>
	<title>您无权访问</title>
	<link rel="shortcut icon" href="${imgBaseUrl}index_img/timg.png" type="image/x-icon" />
</head>
<body style="background-color: #E3CEAB">
<div style="max-width: 1920px;min-width: 1200px;margin: 0px auto">
<img src="${imgBaseUrl}img/fangwen.png" style="display: block;margin: 0px auto;width: 1000px;height: 600px"/>
	<input type="button" id="back" name="back" onclick="javascript:history.go(-1);" value="返回" style="display: block;margin:30px auto;width: 100px;height: 50px;background-color: red">
</div>
</body>
</html>
