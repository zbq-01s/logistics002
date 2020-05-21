package cn.dao.customer;

import cn.pojo.customer.Customer;
import org.apache.ibatis.annotations.Param;

import java.util.List;

public interface CustomerMapper {
    int deleteByPrimaryKey(Integer cId);

    /**
     * 用户注册
     * @param record
     * @return
     * @throws Exception
     */
    int insert(Customer record) throws Exception;

    int insertSelective(Customer record);

    /**
     * 手机号是否注册
     * @param phone
     * @return
     */
    Customer selectByPrimaryKey(String phone) throws Exception;

    /**
     * 查询所有用户
     * @return
     */
    List<Customer> getAllCustomer(@Param("cName") String cName,
                                  @Param("cSex") String cSex,
                                  @Param("from") int from,
                                  @Param("pageSize") int pageSize) throws Exception;

    /**
     * 查询用户数
     * @param cName
     * @param cSex
     * @return
     * @throws Exception
     */
    int getCusCount(@Param("cName") String cName,
                    @Param("cSex") String cSex) throws Exception;

    /**
     * 根据号码查询用户
     * @param
     * @return
     */
    Customer getCurrentCustom(@Param("number") String number)throws Exception;

    int updateByPrimaryKeySelective(Customer record);

    int updateByPrimaryKey(Customer record);

}