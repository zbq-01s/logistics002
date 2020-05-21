package cn.dao.staffRole;

import cn.pojo.staff.StaffRole;
import org.apache.ibatis.annotations.Param;

import java.util.List;

public interface StaffRoleMapper {
    int deleteByPrimaryKey(Integer id);

    int insert(StaffRole record);

    int insertSelective(StaffRole record);

    StaffRole selectByPrimaryKey(Integer id);

    int updateByPrimaryKeySelective(StaffRole record);

    int updateByPrimaryKey(StaffRole record);

    /**
     * 根据员工账号获取对应角色
     * @param staffCode
     * @return
     */
    List<StaffRole> loadRoleIdByStaffCode(@Param("staffCode") String staffCode) throws Exception;

    /**
     * 查询角色列表
     */
    List<StaffRole> getRoleList() throws Exception;

    /**
     * 查询角色对应员工数
     * @param staffId
     * @return
     * @throws Exception
     */
    int getRoleStaffCount(@Param("staffId") int staffId) throws Exception;
}