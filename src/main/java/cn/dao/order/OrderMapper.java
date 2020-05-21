package cn.dao.order;

import cn.pojo.order.Order;
import org.apache.ibatis.annotations.Param;

import java.util.List;

public interface OrderMapper {
    int deleteByPrimaryKey(Integer orderId);

    int insert(Order record);

    int insertSelective(Order record);

    Order selectByPrimaryKey(Integer orderId);

    int updateByPrimaryKeySelective(Order record);

    int updateByPrimaryKey(Order record);

    List<Order> findAllOrder() throws Exception;
    //查询总记录数
    int totalCount() throws Exception;
    //查询用户列表
    List<Order> getOrderList(@Param("orderNo") String orderNo,@Param("status") int status,@Param("from") Integer from, @Param("pageSize") Integer pageSize) throws Exception;
    //发货修改订单,订单状态、发货车牌号、发货时间。
    int updateFromCar(Order order) throws Exception;
    //按id查找订单
    Order findByOrderId(@Param("orderId") int orderId) throws Exception;

    //查询未发货的订单
    List<Order> orderById(@Param("from") int from, @Param("pageSize") int pageSize)throws Exception;
    //查询未发货的订单总数
    int orderCount()throws Exception;

    //前台插入订单的基本信息
    void insertOrder(Order order)throws Exception;

    //修改订单
    int updateOrder(Order order)throws Exception;

    //修改订单支付状态，插入订单号。
    int updateOrderPay(Order order)throws Exception;

    Order findByOrderNo(@Param("tradeNo") String tradeNo);

    int updateOrderSendEndTime(@Param("orderId") int orderId);

    int updateGetTime(@Param("orderId") Integer orderId);
}