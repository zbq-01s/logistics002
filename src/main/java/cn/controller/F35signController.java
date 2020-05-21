package cn.controller;

import cn.pojo.customer.Customer;
import cn.service.customer.CustomerService;
import com.alibaba.fastjson.JSON;
import org.apache.log4j.Logger;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import javax.annotation.Resource;
import javax.validation.Valid;
import java.util.HashMap;
import java.util.Map;


@Controller
@RequestMapping("/sign")
public class F35signController {

    private final static Logger logger = Logger.getLogger(F35signController.class);

    @Resource
    private CustomerService customerService;


    /**
     * 进入注册页面
     */
    @RequestMapping("/gosign")
    public String show1(Model model){
        Customer customer = new Customer();
        model.addAttribute("customer",customer);
        return "sign/sign";
    }

    /**
     * 用户注册
     * @return
     */
    @RequestMapping("/dosign")
    public String doSign(@Valid Customer customer){
        if(customerService.insert(customer)){
            return "redirect:/sign/signSucess";
        }
        return "sign/gosign";
    }

    /**
     * 注册成功页面
     */
    @RequestMapping("/signSucess")
    public String SignSucess(){
        return "sign/signSucess";
    }

    /**
     * 在登录时验证账号是否已经注册
     */
    @RequestMapping("/isExistSign")
    @ResponseBody
    public Object isExistSign(@RequestParam String phone){
        Map<String,String> resultMap = new HashMap<String, String>();
        resultMap.put("phone","yes");
        if(customerService.selectByPrimaryKey(phone)){
            resultMap.put("phone","yes");
        }else{
            resultMap.put("phone","no");
        }
        return JSON.toJSONString(resultMap);
    }
}
