package cn.service.staffRole.impl;

import cn.dao.staffRole.StaffRoleMapper;
import cn.pojo.staff.StaffRole;
import cn.service.staffRole.StaffRoleService;
import org.apache.log4j.Logger;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;
import java.util.ArrayList;
import java.util.List;

@Service
public class StaffRoleServiceImpl implements StaffRoleService{

    private final static Logger logger = Logger.getLogger(StaffRoleServiceImpl.class);

    @Resource
    private StaffRoleMapper staffRoleMapper;

    /**
     * 查询用户对应角色
     * @param StaffCode
     * @return
     */
    public List<StaffRole> getRoleByStaffCode(String StaffCode) {
        List<StaffRole> staffRoleList = null;
        if(!"".equals(StaffCode)){
            try {
                staffRoleList = staffRoleMapper.loadRoleIdByStaffCode(StaffCode);
                logger.debug("<========= StaffRoleServiceImpl.getRoleByStaffCode 根据员工账号获取角色成功！！！========>");
                return staffRoleList;
            } catch (Exception e) {
                logger.error("<========= StaffRoleServiceImpl.getRoleByStaffCode 根据员工账号获取角色异常？？？========>"+e.getMessage());
            }
        }
        return null;
    }

    /**
     * 查询角色列表
     */
    public List<StaffRole> getRoleList() {
        List<StaffRole> staffRoleList = null;
        try {
            staffRoleList = staffRoleMapper.getRoleList();
            if(staffRoleList.isEmpty()){
                logger.debug("<========= StaffRoleServiceImpl.getRoleList 获取用户角色列表为空！！！========>");
                return new ArrayList<StaffRole>();
            }
            logger.debug("<========= StaffRoleServiceImpl.getRoleList 获取用户角色列表成功！！！========>");
        } catch (Exception e) {
            logger.error("<========= StaffRoleServiceImpl.getRoleList 获取用户角色列表异常！！！========>"+e.getMessage());
            return new ArrayList<StaffRole>();
        }
        return staffRoleList;
    }

    /**
     * 查询角色对应员工数
     * @param staffId
     * @return
     */
    public int getRoleStaffCount(int staffId) {

        int staffCount = 0;
        try {
            staffCount = staffRoleMapper.getRoleStaffCount(staffId);
            if(staffCount == 0){
                logger.debug("<========= StaffRoleServiceImpl.getRoleStaffCount 获取用员工数为空！！！========>");
            }
            logger.debug("<========= StaffRoleServiceImpl.getRoleStaffCount 获取用员工数成功！！！========>");
        } catch (Exception e) {
            logger.error("<========= StaffRoleServiceImpl.getRoleStaffCount 获取用员工数异常！！！========>"+e.getMessage());
            return 0;
        }
        return staffCount;
    }
}
