package cn.service.customer.impl;

import cn.dao.customer.CustomerMapper;
import cn.pojo.customer.Customer;
import cn.service.customer.CustomerService;
import org.apache.log4j.Logger;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import javax.annotation.Resource;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;


@Service
public class CustomerServiceImpl implements CustomerService {

    private final static Logger logger = Logger.getLogger(CustomerServiceImpl.class);

    @Resource
    CustomerMapper customerMapper;

    public boolean insert(Customer customer) {

        if(customer.getcName() == null || customer.getcName() == ""){

            customer.setcName("F35会员"+System.currentTimeMillis());
        }
        if(customer.getcSex() == null || customer.getcSex() == ""){
            customer.setcSex("男");
        }

        int row = 0;
        try {
            row = customerMapper.insert(customer);
            if(row != 1){
                logger.error("CustomerServiceImpl.insert 保存用户失败！！！");
                return false;
            }else{
                logger.debug("CustomerServiceImpl.insert 保存用户成功！！！");
            }
        }catch (Exception e){
            logger.error("CustomerServiceImpl.insert 保存用户异常！！！"+e.getMessage());
            return false;
        }
        return true;
    }

    public Boolean selectByPrimaryKey(String phone) {

        Customer customer = null;
        try {
            customer = customerMapper.selectByPrimaryKey(phone);
            if(null == customer){
                logger.debug("CustomerServiceImpl.selectByPrimaryKey 手机号码可用！！！");
                return true;
            }else {
                logger.error("CustomerServiceImpl.selectByPrimaryKey 手机号码不可用！！！");
                return false;
            }
        } catch (Exception e) {
            logger.error("CustomerServiceImpl.selectByPrimaryKey 检查号码异常！！！"+e.getMessage());
            return false;
        }
    }

    public List<Customer> getAllCustomer(String cName, String cSex,int currentPageNo,int pageSize) {

        List<Customer> customerList = null;
        int from = 0;
        try {
            from = (currentPageNo-1)*pageSize;
            customerList = customerMapper.getAllCustomer(cName,cSex,from,pageSize);
            if(customerList == null || customerList.size() <= 0){
                logger.debug("CustomerServiceImpl.getAllCustomer 查询结果为空！");
                //避免前台报错，空指针
                return new ArrayList<Customer>();
            }
        } catch (Exception e) {
            logger.error("CustomerServiceImpl.getAllCustomer 查询结果异常！"+e.getMessage());
        }
        logger.debug("CustomerServiceImpl.getAllCustomer 查询结果成功！");
        return customerList;
    }

    public int getCusCount(String cName, String cSex) {
        int count = 0;
        try {
            count = customerMapper.getCusCount(cName,cSex);
            if(count == 0){
                logger.debug("未查询到可用的用户记录 ！");
            }
        } catch (Exception e) {
            logger.error("CustomerServiceImpl.getCusCount 查询用户总数异常"+e.getMessage());
        }

        return count;
    }


    public Customer getCurrentCustom(String number) {
        Customer customer = null;
        try {
            customer = customerMapper.getCurrentCustom(number);
            if(customer == null){
                logger.debug("CustomerServiceImpl.getCurrentCustom 获取用户失败");
            }
            logger.debug("CustomerServiceImpl.getCurrentCustom 获取用户成功！！！");
        } catch (Exception e) {
            logger.error("CustomerServiceImpl.getCurrentCustom 获取用户异常？？？",e);
        }

        return customer;
    }
}
