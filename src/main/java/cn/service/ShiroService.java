package cn.service;

import org.apache.shiro.SecurityUtils;
import org.apache.shiro.authc.*;
import org.apache.shiro.subject.Subject;
import org.springframework.stereotype.Service;

import java.util.List;
public class ShiroService {

    /*
    登录
     */
    public void doLogin(String username, String password) throws Exception {
        Subject currentUser = SecurityUtils.getSubject();
        if (!currentUser.isAuthenticated()) {
            UsernamePasswordToken token = new UsernamePasswordToken(username, password);
            token.setRememberMe(true);//是否记住用户
            try {
                currentUser.login(token);//执行登录
            } catch (UnknownAccountException uae) {
                throw new Exception("账户不存在");
            } catch (IncorrectCredentialsException ice) {
                throw new Exception("密码不正确");
            } catch (LockedAccountException lae) {
                throw new Exception("用户被锁定了 ");
            } catch (AuthenticationException ae) {
                ae.printStackTrace();
                throw new Exception("未知错误");
            }
        }
    }


}
