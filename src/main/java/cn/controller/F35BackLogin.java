package cn.controller;

import cn.pojo.customer.Customer;
import cn.pojo.staff.Staff;
import cn.service.staff.StaffService;
import com.alibaba.fastjson.JSON;
import com.alibaba.fastjson.JSONObject;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;
import java.util.HashMap;
import java.util.Map;

@Controller
public class F35BackLogin {

    @Resource
    private StaffService staffService;

    @RequestMapping("/dobackLogin")
    @ResponseBody
    public Object dobackLogin(HttpServletRequest request, @RequestParam String username , @RequestParam String password){
        Map<String,String> resultMap = new HashMap<String, String>();
        resultMap.put("phone","yes");
        Staff staff = staffService.getStaffByCode(username);
        if(staff == null){
            resultMap.put("phone","no");
        }
        String pass = staff.getS_password();
        if(pass.equals(password)){
            resultMap.put("phone","yes");
            request.getSession().setAttribute("staff",staff);
        }

        return JSON.toJSONString(resultMap);
    }

    @RequestMapping("/quitsystem")
    public String delSession(HttpServletRequest request){
        Object a = request.getSession().getAttribute("staff");
        if(a!=null){
            request.getSession().removeAttribute("staff");
            return "success";
        }
        return "fail";
    }
}
