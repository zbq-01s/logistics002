package cn.controller;

import cn.service.staff.StaffService;
import cn.service.staffPermission.StaffPermissionService;
import cn.service.staffRole.StaffRoleService;
import cn.tool.MyShiroRealm;
import com.alibaba.fastjson.JSON;
import org.apache.log4j.Logger;
import org.apache.shiro.SecurityUtils;
import org.apache.shiro.authc.*;
import org.apache.shiro.subject.Subject;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;
import java.util.HashMap;
import java.util.Map;

@Controller
public class ShiroController {

    private final static Logger logger = Logger.getLogger(ShiroController.class);

    @Resource
    private StaffService staffService;

    @Resource
    private StaffPermissionService staffPermissionService;

    @Resource
    private StaffRoleService staffRoleService;



    @RequestMapping("/loginBack")
    @ResponseBody
    public Object login(HttpServletRequest request,String username, String password, Model model) {
        Map<String,String> resultMap = new HashMap<String, String>();
        resultMap.put("phone","yes");
        UsernamePasswordToken token = new UsernamePasswordToken(username,password);
        token.setRememberMe(true);
        Subject subject = SecurityUtils.getSubject();
        String error = null;

        try {
            subject.login(token);
        } catch (UnknownAccountException e) {
            error = "用户名/密码错误";
        } catch (LockedAccountException lae) {
            error = "用户被锁定了 ";
        } catch (IncorrectCredentialsException e) {
            error = "用户名/密码错误";
        } catch (AuthenticationException e) {
            //其他错误，比如锁定，如果想单独处理请单独catch处理
            error = "其他错误：" + e.getMessage();
        }
        logger.error("error"+error);

        //出错了，返回登录页面
        if(error != null) {
            model.addAttribute("error", error);
            return "login/index";
        } else {//登录成功
            return JSON.toJSONString(resultMap);
        }

    }

    @RequestMapping("/logout.html")
    public String logout() {
        Subject currentUser = SecurityUtils.getSubject();
        currentUser.logout();
        return "login";
    }

    /**
     *      * 模拟不同的请求，在配置文件中对请求进行权限拦截
     *     
     */
    @RequestMapping("/do{act}.html")
    public String get(@PathVariable String act,Model model) {
        //简化代码，省略数据库操作
        //通过页面上显示的信息查看请求是否被拦截
        model.addAttribute("page", act);
        return "page";
    }
}
