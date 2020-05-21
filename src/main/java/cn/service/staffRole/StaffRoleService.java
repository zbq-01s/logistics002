package cn.service.staffRole;

import cn.pojo.staff.StaffRole;

import java.util.List;

public interface StaffRoleService {

   /**
    * 查询用户对应角色
    * @param StaffCode
    * @return
    */
   List<StaffRole> getRoleByStaffCode(String StaffCode);
   /**
    * 查询角色列表
    */
   List<StaffRole> getRoleList();

   /**
    * 查询角色对应员工数
    * @param staffId
    * @return
    */
   int getRoleStaffCount(int staffId);
}
