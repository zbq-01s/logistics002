package cn.tool;

import java.io.FileWriter;
import java.io.IOException;

/* *
 *类名：AlipayConfig
 *功能：基础配置类
 *详细：设置帐户有关信息及返回路径
 *修改日期：2017-04-05
 *说明：
 *以下代码只是为了方便商户测试而提供的样例代码，商户可以根据自己网站的需要，按照技术文档编写,并非一定要使用该代码。
 *该代码仅供学习和研究支付宝接口使用，只是提供一个参考。
 */

public class AlipayConfig {

	// ↓↓↓↓↓↓↓↓↓↓请在这里配置您的基本信息↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓

	// 应用ID,您的APPID，收款账号既是您的APPID对应支付宝账号
	public static String app_id = "2016092200569200";

	// 商户私钥，您的PKCS8格式RSA2私钥
	public static String merchant_private_key = "MIIEvAIBADANBgkqhkiG9w0BAQEFAASCBKYwggSiAgEAAoIBAQCYhU8B2GUH+qVRYtRCz2TgtTaTccjwdWq1UFNrR1L38YPISX3IbLMZf4xSNMQfk/Iql6qHnFPh9g0qokr57shv0PcwFQpbW3gHw0KYUkQ987vwh8vG3IeRGWM4O/j1fVezGlsSfCuxlswk8BI1381zvZzQfgPEG92M1ppDXLGSRVLyyTyz4vpEJ5ptbL/CFiNYf/E7uiOnl36KsIvWi7+VnEia2dqx7zIHfD7cXXJFZurMp0UQkvmh17GKs+w1EBpvnotRGj45fqU65scad0Zags8hy5cywfeLq2DmJyCgWayghcUUbCRrGy2pbmtU1UPW79UDgBoEJn+OSKh+miXpAgMBAAECggEADtHlO2iraHsSVTYlKdi9FJiHFQyZWcQO+k8zy9jCVxVAmNWLQ05MmM2r9NDrvaXCgiD6kPK/s9UUsm/SmTZ6g2LqoeFpgDcDEr4GWoaj2uE0AcswIcKL6a1t1qj9J91mCCEneERYeokMjQpGurVkYTqrYhbchtGuVWEE3EbFelDbmuOrDkdAs03A4vv/S1S/y99J00ikRpWxmVa/lKxunMY8gEvrol9OJphz7c/1pAf2PweH/RfOizcp2LwonnsdMjEUgPRMFK7L+HpGjW6LyieBnLJOhucBSBwXXCoqWqlHtslWYIBU+w2BhGAvtoJlne/ze6li0wzUhGJbGvpZgQKBgQDVYpXcOjSf37aNk2vPRKuEy2OMFU8tm+nsEL7596sEMXHuAHq1ZYUpq8aLy+mX4IKI7Ypo9Sw8DIYRZiztUYWmqrsgqeZRvcIyn1oBxDzzVTX+zsm5TzUcMJJJl4Ve6GxImif1YFUPS+HRHjXxHo/mcVZMvT59GDbtr4Di0OLY3wKBgQC2+wD3jYcocLmQrmPnMLYSThzPLWTeRxipBx2X1/Z4IG7OHokeSrAfRtyDNuOiRh03I2ILhOWhKQdzw82x6xv+Kzqf9VJGLC7p9BAGopDJqnldqa8VenvN4kdsheMaScqPwslXq3VqNkemcCMWPoxGOkfJamb6+XUN9k2U5r4yNwKBgD0OOFMLVINqP5HC3NYxj+IvUAyFDGLAee5R3FMpyoUooLC48mN06OVDgUv+zJfoZXFIhpIBlOaZrsLLuY8uBE/sCh8Ofhhlc2uIrPhUbhwyBYEjKhUb1NZ8D19/O2osls8vTL+pEK2PyM1NF6ImXIZTZ54NiBPDGfRogzhjDIWBAoGAZ1rcLvhYMbWKe3iloX7YOPq6NyPy58LM4RzN0GkCJNRdAjwpQ1z4opIKGGu2pIBqHCz2Qn9snV1pgjBFTYv5odWVJakSMeTfEvLy4myMz/xk1Uz1QnKO37pCkcAGiWDI8+8Yf1av2bCTRCXvC6+E2F4vEkvxoy2oupw3MjYrlH0CgYB8QkqqCXRack5JNI5NPFCrHOoi0UNYfSmOj4tNufF/E1/EQdXtGw02Ai1uE3cFziqXLRZ2mU1xjdyqc+t/+ZGneEu41MPuo6joiw+qH8if69H+iQKgZAkq6OeMUzncYnUBWuVxaUtgzY4AGFySCuhR09jp8qHwBsgsrXnQRylyyg==";

	// 支付宝公钥,查看地址：https://openhome.alipay.com/platform/keyManage.htm
	// 对应APPID下的支付宝公钥。
	public static String alipay_public_key = "MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAt+c6u6f1WIoD4q54xUdDtVGai+1n4IN99uInOwktYCfSEe0vBuYEziYqOkHtzFslt8p6qyM0D/laKE7o43R1zDBSFO85d8OTldolPcRQugViu4rAj9HqSak17g7h1G2YOSZR1SL0nXl+NJ924dIm54o9T7kWTI1eSaE8BAximcokopzedgt0wQW74MQTvgyU6V9As0Dhiv6CXVpWgKFTpVkn6M86DQAak22qAbgDtPYsch+Z+n0/bWX+Y93HoBIj3gk0b/NWwTGbLHJUE3zALUcV/s0IIvwRdVuKNRXAkGz3jQK3vUvXPbPUwKhgc4e8gJxomiliVI0sfYav6JKy6wIDAQAB";

	// 服务器异步通知页面路径 需http://格式的完整路径，不能加?id=123这类自定义参数，必须外网可以正常访问,http://47.107.76.97:8080/f35logistics  http://alipaytest.ngrok.xiaomiqiu.cn
	public static String notify_url = "http://47.107.76.97:80/order/aliPayReturn";

	// 页面跳转同步通知页面路径 需http://格式的完整路径，不能加?id=123这类自定义参数，必须外网可以正常访问
	public static String return_url = "http://47.107.76.97:80/order/aliPayReturn";

	// 签名方式
	public static String sign_type = "RSA2";

	// 字符编码格式
	public static String charset = "utf-8";

	// 支付宝网关
	public static String gatewayUrl = "https://openapi.alipaydev.com/gateway.do";

	// 支付宝网关
	public static String log_path = "C:\\";

	// ↑↑↑↑↑↑↑↑↑↑请在这里配置您的基本信息↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑

	/**
	 * 写日志，方便测试（看网站需求，也可以改成把记录存入数据库）
	 * 
	 * @param sWord
	 *            要写入日志里的文本内容
	 */
	public static void logResult(String sWord) {
		FileWriter writer = null;
		try {
			writer = new FileWriter(log_path + "alipay_log_" + System.currentTimeMillis() + ".txt");
			writer.write(sWord);
		} catch (Exception e) {
			e.printStackTrace();
		} finally {
			if (writer != null) {
				try {
					writer.close();
				} catch (IOException e) {
					e.printStackTrace();
				}
			}
		}
	}
}
