package cn.controller;


import cn.pojo.customer.Customer;
import cn.service.customer.CustomerService;
import com.alibaba.fastjson.JSON;
import com.alibaba.fastjson.JSONObject;
//import com.zhenzi.sms.ZhenziSmsClient;
//import com.zhenzi.sms.ZhenziSmsClient;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.annotation.Resource;
import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import java.util.Random;

@Controller
public class MessgeController {

    @Resource
    private CustomerService customerService;

    /**
     * 发送短信验证码
     */
    @RequestMapping("/sendSms")
    @ResponseBody
    public String sendSms(HttpServletRequest request, String number) {
        try {
            JSONObject json = null;
            //生成6位验证码:六位随机数的范围（100000~999999）,因此,随机数必须大于100000才能保证随机生成的数是六位的
            //999999-100000=899999
            //要保证随机数的范围在六位数之间
            Random random = new Random();
            String verifyCode = String.valueOf(random.nextInt(899999) + 100000);
//            String verifyCode = "123456";
            //发送短信
//            ZhenziSmsClient client = new ZhenziSmsClient("http://sms_developer.zhenzikj.com", "100008","c1543ac8-7adf-4d12-9947-733355777a58");
//            String sendVerifyCode = client.send(number, "您的验证码为：" + verifyCode);
//            String result = client.send(number, "您的验证码为:" + verifyCode + "，该码有效期为5分钟，该码只能使用一次！【F35物流】");
            String result  =  "您的验证码为:" + verifyCode + "，该码有效期为5分钟，该码只能使用一次！【F35物流】";
            System.out.println(result);
//            json = JSONObject.parseObject(result);
//            if(json.getIntValue("code") != 0){//发送短信失败
//                return "fail";
//            }
            //将验证码存到session中,同时存入创建时间
            //以json存放,这里使用的是阿里的fastjson
            HttpSession session = request.getSession();
            json = new JSONObject();
            json.put("verifyCode", verifyCode);
            json.put("createTime", System.currentTimeMillis());
            json.put("currentPhone", number);
            // 将认证码存入SESSION
            request.getSession().setAttribute("verifyCode", json);
            return "success";
        } catch (Exception e) {
            e.printStackTrace();
        }
        return null;
    }

    /**
     * 注册
     */
    @RequestMapping("/register")
    @ResponseBody
    public Object register(HttpServletRequest request,
            String userId,
            String password,
            String number,
            String verifyCode) {
        JSONObject json = (JSONObject)request.getSession().getAttribute("verifyCode");
        if(!json.getString("verifyCode").equals(verifyCode)){
            return "验证码错误";
        }
        //验证码有效期为5分钟
        if((System.currentTimeMillis() - json.getLong("createTime")) > 5 * 60 * 1000){
            return "验证码过期";
        }
        //将用户信息存入数据库

        //这里省略
        return "success";
    }

    /**
     * 校验 -注册- 短信验证码是否正确
     */
    @RequestMapping("/checkMark")
    @ResponseBody
    public String checkMark(HttpServletRequest request,String verifyCode,String currentPhone){
        JSONObject json = (JSONObject)request.getSession().getAttribute("verifyCode");
        if(null == json){
            return "系统异常";
        }
        if(!json.getString("verifyCode").equals(verifyCode)){
            return "验证码错误";
        }
        if((System.currentTimeMillis() - json.getLong("createTime")) > 1000 * 60 * 5){
            return "验证码过期";
        }
        if(!json.getString("currentPhone").equals(currentPhone)){
            return "手机与验证码不匹配";
        }
        //将用户信息存入数据库
        //这里省略
        return "success";
    }

    /**
     * 校验 -登录- 短信验证码是否正确
     */
    @RequestMapping("/checkMark2")
    @ResponseBody
    public String checkMark2(HttpServletRequest request, String verifyCode, String currentPhone ,
                             HttpServletResponse response){
        JSONObject json = (JSONObject)request.getSession().getAttribute("verifyCode");
        if(null == json){
            return "系统异常";
        }
        if(!json.getString("verifyCode").equals(verifyCode)){
            return "验证码错误";
        }
        if((System.currentTimeMillis() - json.getLong("createTime")) > 1000 * 60 * 5){
            return "验证码过期";
        }
        if(!json.getString("currentPhone").equals(currentPhone)){
            //防止A用户输入手机号获取验证码后，再使用B用户的手机号去登录
            return "手机与验证码不匹配";
        }
        Customer customer = customerService.getCurrentCustom(currentPhone);
        String phone = customer.getcPhone();
        request.setAttribute("phone",phone);
        request.getSession().setAttribute("currentUser",customer);
//        response.addCookie(new Cookie("loginUser" , JSON.toJSONString(customer)));
        //将用户信息存入数据库
        //这里省略
        return "success";
    }

    /**
     * 用户名、密码登录
     * @param request
     * @param response
     * @param currentPhone
     * @param password
     * @return
     */
    @RequestMapping("/passLogin")
    @ResponseBody
    public String passLogin(HttpServletRequest request,HttpServletResponse response, String currentPhone , String password){
        Customer customer = customerService.getCurrentCustom(currentPhone);
        if (!customer.getcPassword().equals(password)){
            return "error";
        }
        String phone = customer.getcPhone();
        request.setAttribute("phone",phone);
        //存放到session域中
        request.getSession().setAttribute("currentUser",customer);
        //customer对象转字符串
        Cookie cookie = new Cookie("loginUser",JSON.toJSONString(customer));
        response.addCookie(cookie);
//        response.addCookie(new Cookie("loginUser" , JSON.toJSONString(customer)));
        //将用户信息存入数据库
        //这里省略
        return "success";
    }
}
