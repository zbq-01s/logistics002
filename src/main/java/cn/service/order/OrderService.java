package cn.service.order;

import cn.pojo.order.Order;

import java.util.List;

public interface OrderService {
    List<Order> getAllOrder();
    List<Order> getOrderList(String orderNo, int status,Integer from, Integer pageSize);
    //总记录数
    int totalCount();
    //发货后，更新订单数据。
    int updateOrderFromCar(Order order);

    //查询未发货的订单
    List<Order> orderById(int from, int pageSize);
    //查询未发货的订单总数
    int orderCount();
    //按订单编号查询
    Order findByOrderId(int orderId);
    //从前台插入订单
    void insertOrder(Order order);
    //修改订单
    int updateOrder(Order order);
    //修改订单支付状态，插入订单号
    int updateOrderPay(Order order);

    Order findByTradeNo(String orderNo);

    int updateGetTime(Integer orderId);
}
