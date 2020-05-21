package cn.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import javax.servlet.http.HttpServletRequest;

@Controller
public class UserQuit {

    @RequestMapping("/userQuit")
    public String userQuit(HttpServletRequest request){
//        request.getSession().getAttribute("currentUser");
        if(request.getSession().getAttribute("currentUser")!=null){
            request.getSession().removeAttribute("currentUser");
            return "redirect:/F35Index";
        }
        return "/F35Index";
    }
}
