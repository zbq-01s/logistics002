package cn.service.staff.impl;

import cn.dao.staff.StaffMapper;
import cn.pojo.staff.Staff;
import cn.service.staff.StaffService;
import org.apache.log4j.Logger;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;

@Service
public class StaffServiceImpl implements StaffService {

    private static final Logger logger = Logger.getLogger(StaffServiceImpl.class);

    @Resource
    private StaffMapper staffMapper;

    public Staff getStaffByCode(String StaffCode) {
        Staff staff = null;
        if(!"".equals("StaffCode")){
            try {
                staff = staffMapper.getStaffByCode(StaffCode);
                logger.debug("<=========== StaffServiceImpl.getStaffByCode 成功！！！ ==========>");
                return staff;
            } catch (Exception e) {
                logger.error("<=========== StaffServiceImpl.getStaffByCode 异常？？？ ==========>"+e.getMessage());
            }
        }
        return null;
    }
}
