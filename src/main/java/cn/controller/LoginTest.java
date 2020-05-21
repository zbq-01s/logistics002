package cn.controller;


import cn.pojo.customer.Customer;
import cn.pojo.staff.Staff;
import cn.service.customer.CustomerService;
import cn.service.news.NewsService;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;

@Controller
public class LoginTest {

    @Resource
    private CustomerService customerService;

    @Resource
    private NewsService newsService;

    @RequestMapping("/login")
    public String login(){
        return "login/index";
    }

    @RequestMapping("/sucess")
    public String success(Model model,HttpServletRequest request){
//        Staff staff = (Staff) request.getSession().getAttribute("staff");
//        if(staff==null){
//            return "redirect:/login";
//        }
//        model.addAttribute("staffName",staff.getS_realName());
        return "back_index";
    }

    @RequestMapping("/F35Index")
    public String F35Index(Model model){
        model.addAttribute("news",newsService.findNews());
        return "f35_index";
    }
    @RequestMapping("/error")
    public String error(){
        return "error";
    }

//    @RequestMapping("/userSession")
//    public ModelAndView saveSession(HttpServletRequest request, String number){
//        ModelAndView mv = new ModelAndView();
////        if(number == null || number.equals("")){
////            mv.setViewName("redirect:/f35_index");
////            return mv;
////        }
////        Customer customer = customerService.getCurrentCustom(number);
////        request.getSession().setAttribute("currentUser",customer);
////        mv.addObject("phone",phone);
//        mv.addObject("phone","1234567890");
//        mv.addObject("xxx","aaa");
//        mv.setViewName("f35_index");
//        return mv;
//    }
}


