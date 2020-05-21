package cn.tool;

import cn.pojo.staff.Staff;
import cn.pojo.staff.StaffPermission;
import cn.pojo.staff.StaffRole;
import cn.service.staff.StaffService;
import cn.service.staffPermission.StaffPermissionService;
import cn.service.staffRole.StaffRoleService;
import org.apache.log4j.Logger;
import org.apache.shiro.authc.*;
import org.apache.shiro.authz.AuthorizationInfo;
import org.apache.shiro.authz.SimpleAuthorizationInfo;
import org.apache.shiro.realm.AuthorizingRealm;
import org.apache.shiro.subject.PrincipalCollection;
import org.springframework.beans.factory.annotation.Autowired;

import javax.annotation.Resource;
import java.util.List;

/**
 * 自定义Realm
 */
public class MyShiroRealm extends AuthorizingRealm {

    private final static Logger logger = Logger.getLogger(MyShiroRealm.class);

    @Resource
    private StaffService staffService;

    @Resource
    private StaffRoleService staffRoleService;

    @Resource
    private StaffPermissionService staffPermissionService;



    /**
     *
     * @param principalCollection
     * @return
     */
    @Override
    protected AuthorizationInfo doGetAuthorizationInfo(PrincipalCollection principalCollection) {
        //获取登录时输入的用户名
        String username =(String)principalCollection.getPrimaryPrincipal();
        if (username != null) {
            //获取用户信息
            Staff staff = staffService.getStaffByCode(username);
            //获取用户角色
            List<StaffRole> staffRoleList = staffRoleService.getRoleByStaffCode(username);
            //获取权限列表
            List<StaffPermission> staffPermissionList = staffPermissionService.getPerByStaffCode(username);

            SimpleAuthorizationInfo info=new SimpleAuthorizationInfo();

            if(null!=staffPermissionList && !staffPermissionList.isEmpty()){
                for(StaffPermission perm:staffPermissionList){
                    //加入权限
                    info.addStringPermission(perm.getPercode());
                }
            }
            if(null != staffRoleList && !staffRoleList.isEmpty()){
                for(StaffRole role:staffRoleList){
                    //加入角色
                    info.addRole(role.getRole());
                }
            }
            return info;

        }
        return null;
    }

    /**
     *
     * @param authenticationToken
     * @return
     * @throws AuthenticationException
     */
    @Override
    protected AuthenticationInfo doGetAuthenticationInfo(AuthenticationToken authenticationToken) throws AuthenticationException {
        //UsernamePasswordToken令牌，用来验证用户名和密码类的登录
        UsernamePasswordToken token = (UsernamePasswordToken) authenticationToken;
        // 通过表单接收的用户名，调用currentUser.login的时候执行
        String username = token.getUsername();
        logger.debug("staffCode:"+username);
        if (!"".equals(username) && username != null ) {
            //查询密码
            Staff staff = staffService.getStaffByCode(username);
            if (staff != null) {
                return new SimpleAuthenticationInfo(staff.getS_code(), staff.getS_password(), getName());
            }
        }
        logger.error("认证失败！！！");
        return null;
    }
}
