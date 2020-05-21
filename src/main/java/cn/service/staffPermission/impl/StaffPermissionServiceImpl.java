package cn.service.staffPermission.impl;

import cn.dao.staffPermission.StaffPermissionMapper;
import cn.pojo.staff.StaffPermission;
import cn.service.staffPermission.StaffPermissionService;
import org.apache.log4j.Logger;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;
import java.util.List;

@Service
public class StaffPermissionServiceImpl implements StaffPermissionService {

    private final static Logger logger = Logger.getLogger(StaffPermissionServiceImpl.class);

    @Resource
    private StaffPermissionMapper staffPermissionMapper;

    public List<StaffPermission> getPerByStaffCode(String StaffCode) {
        List<StaffPermission> staffPermissionList = null;
        if(!"".equals(StaffCode)){
            try {
                staffPermissionList = staffPermissionMapper.loadPermissionByStaffCode(StaffCode);
                logger.debug("<========= StaffPermissionServiceImpl.getPerByStaffCode 根据员工账号获取权限成功！！！ ========>");
                return staffPermissionList;
            } catch (Exception e) {
                logger.error("<========= StaffPermissionServiceImpl.getPerByStaffCode 根据员工账号获取权限异常？？？ ========>"+e.getMessage());
            }
        }
        return null;
    }
}
