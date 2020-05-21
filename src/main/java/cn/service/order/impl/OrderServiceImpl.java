package cn.service.order.impl;

import cn.dao.order.OrderMapper;
import cn.pojo.order.Order;
import cn.service.order.OrderService;
import org.apache.log4j.Logger;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;
import java.util.List;

@Service("OrderService")
public class OrderServiceImpl implements OrderService {
    @Resource
    private OrderMapper orderMapper;

    private final static Logger logger = Logger.getLogger(OrderServiceImpl.class);


    //查询所有记录
    public List<Order> getAllOrder() {
        List<Order> orderList = null;
        try {
            orderList=orderMapper.findAllOrder();
        } catch (Exception e) {
            e.printStackTrace();
        }
        return orderList;
    }


    //查询订单列表
    public List<Order> getOrderList(String orderNo, int status,Integer from, Integer pageSize) {
        List<Order> orderList = null;
        try {
            orderList = orderMapper.getOrderList(orderNo , status , from,pageSize);
        } catch (Exception e) {
            e.printStackTrace();
        }

        return orderList;
    }


    //查询总记录数
    public int totalCount() {
        int count =0;
        try {
            count = orderMapper.totalCount();
        } catch (Exception e) {
            e.printStackTrace();
        }

        return count;
    }

    //发货后，修改订单状态、发货车牌号、发货时间

    public int updateOrderFromCar(Order order) {
        int count =0;
        try {
            count=orderMapper.updateFromCar(order);
        } catch (Exception e) {
            e.printStackTrace();
        }
        return count;
    }

    public List<Order> orderById(int from, int pageSize) {
        List<Order> orderList = null;
        try {
            orderList = orderMapper.orderById(from,pageSize);
        } catch (Exception e) {
            e.printStackTrace();
        }
        return orderList;
    }

    public int orderCount() {
        int count = 0;
        try {
            count = orderMapper.orderCount();
        } catch (Exception e) {
            e.printStackTrace();
        }
        return count;
    }

//    @Override
    public Order findByOrderId(int orderId) {
        Order order = new Order();
        try {
            order = orderMapper.findByOrderId(orderId);
        } catch (Exception e) {
            e.printStackTrace();
        }

        return order;
    }
//    @Override
    public  void insertOrder(Order order){
        try {
            orderMapper.insertOrder(order);
        } catch (Exception e) {
            e.printStackTrace();
        }

    }
    //订单修改
//    @Override
    public int updateOrder(Order order){
        int row = 0;
        try {
            row = orderMapper.updateOrder(order);
            if (row<=0){
                logger.debug("订单修改失败");
            }
        } catch (Exception e) {
            e.printStackTrace();
            logger.debug("订单修改异常！！！");
        }


        return row;
    }

    //修改订单支付状态，插入订单号
//    @Override
    public int updateOrderPay(Order order){
        int row =0;
        try {
            row = orderMapper.updateOrderPay(order);
            if (row<=0){
                logger.debug("订单支付失败");
            }

        } catch (Exception e) {
            e.printStackTrace();
            logger.debug("订单支付异常！！！");
        }
        return row;
    }

    public Order findByTradeNo(String orderNo) {
        return orderMapper.findByOrderNo(orderNo);
    }

    public int updateGetTime(Integer orderId) {
        return orderMapper.updateGetTime(orderId);
    }

}
