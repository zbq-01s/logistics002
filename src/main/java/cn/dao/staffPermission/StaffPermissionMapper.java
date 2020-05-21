package cn.dao.staffPermission;

import cn.pojo.staff.StaffPermission;
import org.apache.ibatis.annotations.Param;

import java.util.List;

public interface StaffPermissionMapper {
    int deleteByPrimaryKey(Integer id);

    int insert(StaffPermission record);

    int insertSelective(StaffPermission record);

    StaffPermission selectByPrimaryKey(Integer id);

    int updateByPrimaryKeySelective(StaffPermission record);

    int updateByPrimaryKey(StaffPermission record);

    /**
     * 根据员工账号获取对应权限
     * @param StaffCode
     * @return
     */
    List<StaffPermission> loadPermissionByStaffCode(@Param("staffCode") String StaffCode) throws Exception;
}