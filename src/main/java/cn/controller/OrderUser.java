package cn.controller;

import cn.constant.OrderStateEnum;
import cn.pojo.order.Order;
import cn.service.order.OrderService;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.concurrent.atomic.AtomicInteger;

@Controller
public class OrderUser {

    private static AtomicInteger afterNo = new AtomicInteger(0);
    @Resource
    private OrderService orderService;

    @RequestMapping("/addOrder")
    public String order(){
        return "order/addOrder";
    }

    @RequestMapping("/basicOrder")
    public String insertOrder(Order order , HttpServletRequest request){
        SimpleDateFormat dateFormat = new SimpleDateFormat("MMddHHmmssSSS");
        Date currentDate = new Date();
        String tradeNo = dateFormat.format(currentDate) + afterNo.getAndIncrement();
        order.setTradeNo(tradeNo);
        order.setOrderState(OrderStateEnum.APPLY.getStateId());
        order.setOrderCreateTime(currentDate);
        orderService.insertOrder(order);

        return "order/queryOrder";
    }
}
