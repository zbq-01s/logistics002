<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
	<link rel="shortcut icon" href="${imgBaseUrl}index_img/timg.png" type="image/x-icon" />
<title>付款</title>
</head>
<%@ page language="java" contentType="text/html; charset=utf-8" pageEncoding="utf-8"%>

<%@ page import="com.alipay.api.*"%>
<%@ page import="com.alipay.api.request.*"%>
<%@ page import="cn.tool.AlipayConfig" %>
<%
	//获得初始化的AlipayClient
	AlipayClient alipayClient = new DefaultAlipayClient(AlipayConfig.gatewayUrl, AlipayConfig.app_id, AlipayConfig.merchant_private_key, "json", AlipayConfig.charset, AlipayConfig.alipay_public_key, AlipayConfig.sign_type);
	
	//设置请求参数
	AlipayTradePagePayRequest alipayRequest = new AlipayTradePagePayRequest();
	alipayRequest.setReturnUrl(AlipayConfig.return_url);
	alipayRequest.setNotifyUrl(AlipayConfig.notify_url);

	//商户订单号，商户网站订单系统中唯一订单号，必填
	String out_trade_no = new String(request.getParameter("WIDout_trade_no").getBytes("ISO-8859-1"),"UTF-8");
	//付款金额，必填
	String total_amount = new String(request.getParameter("WIDtotal_amount").getBytes("ISO-8859-1"),"UTF-8");
	//订单名称，必填
	String subject = new String(request.getParameter("WIDsubject").getBytes("ISO-8859-1"),"UTF-8");
	//商品描述，可空
	String WIDbody = new String(request.getParameter("WIDbody").getBytes("ISO-8859-1"),"UTF-8");

	/*//订单编号orderId
	String orderId = new String(request.getParameter("orderId").getBytes("ISO-8859-1"),"UTF-8");*/

	alipayRequest.setBizContent("{\"out_trade_no\":\""+ out_trade_no +"\"," 
			+ "\"total_amount\":\""+ total_amount +"\"," 
			+ "\"subject\":\""+ subject +"\","
			+ "\"WIDbody\":\""+ WIDbody +"\","
			+ "\"product_code\":\"FAST_INSTANT_TRADE_PAY\"}");
	
	//若想给BizContent增加其他可选请求参数，以增加自定义超时时间参数timeout_express来举例说明
	//alipayRequest.setBizContent("{\"out_trade_no\":\""+ out_trade_no +"\"," 
	//		+ "\"total_amount\":\""+ total_amount +"\"," 
	//		+ "\"subject\":\""+ subject +"\"," 
	//		+ "\"body\":\""+ body +"\"," 
	//		+ "\"timeout_express\":\"10m\"," 
	//		+ "\"product_code\":\"FAST_INSTANT_TRADE_PAY\"}");
	//请求参数可查阅【电脑网站支付的API文档-alipay.trade.page.pay-请求参数】章节
	
	//请求
	String result = alipayClient.pageExecute(alipayRequest).getBody();
	
	//输出
	out.println(result);
%>
<%--<form name="punchout_form" method="post" action="https://openapi.alipaydev.com/gateway.do?charset=utf-8&method=alipay.trade.page.pay&sign=ODg0rcuIxNEcC5EkYQD%2BAVwpeJl2OOT%2FfaN9M4ehs9YfedDV44MWgcdpIEdaGyjbTg0QLVIcVUOMh7%2FzUXLDN9XA3ZX%2B3PA%2B5tBQPVQqXrzR47%2Fyw%2BWo%2BnqLJL4MIulTECximcsZEj%2BX%2FbMJTYMXbN1vk3rqsPhY8TuNsIdknKH5dztA%2FghElbs2v8nuEjJLmOo8IvIq8sg8h0XI0jxsT7hRFCl1wb%2BSzXBtMts1VSsg4ztQPTraRBkHkrjuzPusqEYFFFJSf6LoVjqbb196SS1tenrNkG89YUjMnm7Nu890Ycyn9tlk4qZPhMV3mldd2eZgQ%2FVxeWvt2%2B%2FYUrFyLw%3D%3D&return_url=http%3A%2F%2F47.107.76.97%3A8080%2Ff35logistics%2Forder%2FaliPayReturn&notify_url=http%3A%2F%2F47.107.76.97%3A8080%2Ff35logistics%2Forder%2FaliPayReturn&version=1.0&app_id=2016092200569200&sign_type=RSA2&timestamp=2018-10-31+20%3A15%3A46&alipay_sdk=alipay-sdk-java-3.3.49.ALL&format=json">
	<input type="hidden" name="biz_content" value="{&quot;out_trade_no&quot;:&quot;201810312015740&quot;,&quot;total_amount&quot;:&quot;10000.0&quot;,&quot;subject&quot;:&quot;F35??&quot;,&quot;body&quot;:&quot;2&quot;,&quot;product_code&quot;:&quot;FAST_INSTANT_TRADE_PAY&quot;}">
	<input type="submit" value="立即支付" style="display:none" >
</form>
<script>document.forms[0].submit();</script>

<form name="punchout_form" method="post" action="https://openapi.alipaydev.com/gateway.do?charset=utf-8&method=alipay.trade.page.pay&sign=eFQgkgiFh3zqI1H%2B6eRRXEyqO%2BwG5TykIN%2B3gxjb7DU4gZR%2BzZvQV9%2FjpdVc8WIpuSEZZ6%2FVe5HM3ekDMxhhPqiKW9hynMKLvCv7CZsKY5zA%2FfMeAdpip%2BN7aEI9j%2BMZ5DN4zxQD3RwrXPDTNFxPmGAZn9xN97FjkKRgg1v92czIvxLe%2FDSI1Eoz%2FDHeSMp5Qkml3a%2FPfRyh%2FeAePmtm%2FLHdv3EtMGlqcIPqhsZlNr%2B%2FgIE30q1zC9PB6X3ycG0iXS1YqXeJGS6dHkGhEi1rU3JjOLCnsT7whRlerTm6pGE3bFVQ%2FBK2t7YoAyEaYM6mRStQf%2BAnppo9vxC5k6lfYg%3D%3D&return_url=http%3A%2F%2F47.107.76.97%3A8080%2Ff35logistics%2Forder%2FaliPayReturn&notify_url=http%3A%2F%2F47.107.76.97%3A8080%2Ff35logistics%2Forder%2FaliPayReturn&version=1.0&app_id=2016092200569200&sign_type=RSA2&timestamp=2018-10-31+20%3A23%3A51&alipay_sdk=alipay-sdk-java-3.3.49.ALL&format=json">
	<input type="hidden" name="biz_content" value="{&quot;out_trade_no&quot;:&quot;2018103120236528&quot;,&quot;total_amount&quot;:&quot;10000.0&quot;,&quot;subject&quot;:&quot;F35??&quot;,&quot;WIDbody&quot;:&quot;2&quot;,&quot;product_code&quot;:&quot;FAST_INSTANT_TRADE_PAY&quot;}">
	<input type="submit" value="立即支付" style="display:none" >
</form>
<script>document.forms[0].submit();</script>



http://47.107.76.97:8080/f35logistics/order/aliPayReturn?charset=utf-8&
out_trade_no=20181031202521120&
method=alipay.trade.page.pay.return&
total_amount=10000.00&
sign=XgZR6Q3B4BPFqm%2Fh3x%2Ba%2BytUicdlWrYqJbATwN8t0DWN%2FGF8195mtQ7NnNZ%2FwjSqEBTBEG7UNx9%2BXIMIi40uXX%2Bq01dZ%2FE1oxEaac22Lj9lohBYPNIN9FzuorCKpwTEtWK6auvXh%2FmnALsgTaDhwh5SfhDx9vv4OTRTQCvMq%2FO08oAQsfgvoIJQxvqUAe5sGdpWFtBAmFyMw903uafotaZTC%2B7FRoDLvG%2BtFmk9c%2FhuI2baJl2ET0N6uBeidiN%2Fkf6Mf7UHEUEk4sIJ%2F95tGc7UfRn9KJ%2BXQwKab%2FtbC4S5BS%2B6oPouepautEuj24etohDZunDetsQZN4WwyiO0YiA%3D%3D&
trade_no=2018103122001495720500716388&
auth_app_id=2016092200569200&version=1.0&
app_id=2016092200569200&
sign_type=RSA2&
seller_id=2088102176747092&
timestamp=2018-10-31+20%3A25%3A45--%>


http://alipaytest.ngrok.xiaomiqiu.cn/order/aliPayReturn?
charset=utf-8&
out_trade_no=201811118826286&
method=alipay.trade.page.pay.return&
total_amount=10000.00&
sign=U%2BrkYyj4OKxcJxuo5Iw75JPFMdIyiJaJqPilh2gzwyUZHEykYvuLXV7%2B4e9u%2BI1H8g7R8IUStu%2BlknCwa4ITIzuf3AXj9l2i0b9bY7AbeczRHR14rp6n0dlJ%2FTzzBwqebLJBGvMW0S5Kx05rie6uuGYB%2BL1YmG4gOkbCZwMl8bPMdsNl9u3Fx%2FR3kkY6hO%2FwvouL0p1NoeckYhVRcRw1upkCuvDh1mrPIhTg8vVnFnSw6MzHUPp%2Bxac1fjo9yQY3VFhPBGazgGAKY9C%2FL5FqjelSJgwAYtvMR%2Bbs5eJRzNX7ASqJ0pE90xIwD0EzsilDtRsM0d3uj9Q21bWliw8YEg%3D%3D&
trade_no=2018110122001495720500718990&
auth_app_id=2016092200569200&
version=1.0&
app_id=2016092200569200&
sign_type=RSA2&
seller_id=2088102176747092&
timestamp=2018-11-01+18%3A08%3A46




<body>
</body>
</html>