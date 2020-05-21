package cn.controller;

import cn.pojo.staff.Staff;
import cn.pojo.staff.StaffRole;
import cn.service.staffRole.StaffRoleService;
import org.apache.log4j.Logger;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

import javax.annotation.Resource;
import java.util.List;

@Controller
@RequestMapping("/role")
public class RoleController {

    private final static Logger logger = Logger.getLogger(ShiroController.class);

    @Resource
    private StaffRoleService staffRoleService;

    @RequestMapping("/goRole")
    public String goRole(Model model){

        List<StaffRole> staffRoleList =  staffRoleService.getRoleList();
        for(int i = 0; i < staffRoleList.size(); i++){
            StaffRole staffRole = staffRoleList.get(i);
            int roleId = staffRole.getId();
            int staffCount = staffRoleService.getRoleStaffCount(roleId);
            staffRole.setRoleStaffNum(staffCount);

        }
        model.addAttribute("roleList",staffRoleList);
        return "role/roleList";
    }
}
