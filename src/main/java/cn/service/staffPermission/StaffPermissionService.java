package cn.service.staffPermission;

import cn.pojo.staff.StaffPermission;

import java.util.List;

public interface StaffPermissionService {

    List<StaffPermission> getPerByStaffCode(String StaffCode);
}
