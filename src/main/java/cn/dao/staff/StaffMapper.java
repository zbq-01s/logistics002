package cn.dao.staff;

import cn.pojo.staff.Staff;
import org.apache.ibatis.annotations.Param;

public interface StaffMapper {
    int deleteByPrimaryKey(Integer s_id);

    int insert(Staff record);

    int insertSelective(Staff record);

    Staff selectByPrimaryKey(Integer s_id);

    int updateByPrimaryKeySelective(Staff record);

    int updateByPrimaryKey(Staff record);


    /**
     * 根据员工账户获取用户信息
     * @param StaffCode
     * @return
     * @throws Exception
     */
    Staff getStaffByCode(@Param("staffCode")String StaffCode)throws Exception;
}