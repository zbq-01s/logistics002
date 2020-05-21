package cn.service.customer;

import cn.pojo.customer.Customer;
import org.apache.ibatis.annotations.Param;

import java.util.List;

public interface CustomerService {

    /**
     * 用户注册
     */
    boolean insert(Customer customer);

    /**
     * 手机号是否注册
     */
    Boolean selectByPrimaryKey(String phone);

    /**
     * 查询所有用户
     * @param cName
     * @param cSex
     * @param currentPageNo
     * @param pageSize
     * @return
     */
    List<Customer> getAllCustomer( String cName, String cSex, int currentPageNo,int pageSize);

    /**
     * 查询用户数
     * @param cName
     * @param cSex
     * @return
     */
    int getCusCount(String cName, String cSex);

    /**
     * 根据号码查询用户，验证是否登录成功
     * @param
     * @return
     */
    Customer getCurrentCustom(String number);
}
