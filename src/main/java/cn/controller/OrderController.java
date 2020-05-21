package cn.controller;


import cn.pojo.order.Order;
import cn.service.order.OrderService;
import cn.tool.PageHelper;
import org.apache.log4j.Logger;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;
import javax.validation.Valid;
import java.util.Calendar;
import java.util.Date;
import java.util.List;

@Controller
@RequestMapping("/order")
public class OrderController {
    private final static Logger logger = Logger.getLogger(OrderController.class);

    @Resource
    private OrderService orderService;


   /* @RequestMapping("orderList")
    public String login(){
        return "order/orderList";
    }*/
//所有订单
    /*@RequestMapping("orderList")
    public String show(Model model){
        model.addAttribute("orderList",orderService.getAllOrder());
        return "order/orderList";
    }*/
    @RequestMapping("/orderList")
    public String getOrderList(Model model,
    		@RequestParam(value = "pageIndex", required = false) String pageIndex,
    		@RequestParam(value = "orderNo" , required =false) String orderNo , 
    		@RequestParam(value = "status" , required = false) String status){
        List<Order> orderList = null;
        int _status = 0;
        if(orderNo != null) {
        	orderNo = orderNo.trim();
        }
        if(status != null && status.matches("\\d+")) {
        	_status = Integer.valueOf(status);
        }
        int currentPageNo = 0;
        PageHelper pageHelper = new PageHelper();
        if(pageIndex != null){
            currentPageNo = Integer.parseInt(pageIndex);
            pageHelper.setCurrentPageNo(currentPageNo);
        }
        int pageSize = pageHelper.getPageSize();
        //调用servce接口查询总条数
        int totalCount = orderService.totalCount();
        pageHelper.setTotalCount(totalCount);//为了更新总页数

        currentPageNo = pageHelper.getCurrentPageNo();
        int totalPageCount = pageHelper.getTotalPageCount();
        int from=(currentPageNo-1)*pageSize;

        model.addAttribute("orderList",orderService.getOrderList(orderNo , _status , from,pageSize));
        //添加分页的信息
        model.addAttribute("currentPageNo",currentPageNo);
        model.addAttribute("totalCount",totalCount);
        model.addAttribute("totalPageCount",totalPageCount);

        return "order/orderList";
    }
    @RequestMapping("/orderView")
    public String findByOrderId(Model model,@RequestParam(value = "orderid", required = false)String orderid){
        int neworderId = 0 ;
        if(orderid!= null&&orderid != ""){
            neworderId = Integer.valueOf(orderid);
        }

        model.addAttribute("orderid",neworderId);
        model.addAttribute("Order",orderService.findByOrderId(neworderId));
        return "order/orderView";
    }


    @RequestMapping(value = "/queryOrder")
    public String queryOrder(){

        return "order/queryOrder";
    }
    @RequestMapping(value = "/orderFrontDetail/{orderNo}")
    public String orderFrontDetail(HttpServletRequest request , Model model , @PathVariable String orderNo){

        Order byTradeNo = orderService.findByTradeNo(orderNo);
        model.addAttribute("order" , byTradeNo);

        return "order/orderViewFront";
    }

    //将参数带入修改页面
    @RequestMapping("/update")
    public String toModify(@RequestParam("orderId")String orderId,Model model){
        int id = 0;
        if(orderId != null && !orderId.equals("")){
            id = Integer.valueOf(orderId);
        }
        model.addAttribute("Order",orderService.findByOrderId(id));
        model.addAttribute("orderId",orderId);

        return "order/orderModify";
    }



    //修改页面
    @RequestMapping("/modify")
    public String updateOrder(@Valid Order order){
        int row =0;
        row =orderService.updateOrder(order);
        if(row>0){
            return "redirect:/order/orderList";
        }

        return "order/orderModify";
    }

    //支付 阿里云地址  http://47.107.76.97:8080/
    @RequestMapping("/alipay")
    public String alipay(@RequestParam("WIDbody")String WIDbody,@RequestParam("WIDout_trade_no")String WIDout_trade_no){
        Order order = new Order();
        order.setOrderId(Integer.valueOf(WIDbody));
        order.setTradeNo(WIDout_trade_no);
        orderService.updateOrderPay(order);


        return "order/alipay.trade.page.pay";
    }
    @RequestMapping("/aliPayReturn")
    public String updateOrderPay(){
        /*Order order = new Order();
        order.setOrderId(Integer.valueOf(WIDbody));
        order.setTradeNo(out_trade_no);
        orderService.updateOrderPay(order);*/
        logger.debug("6666=================================");

        return "redirect:/order/orderList";
    }
    @RequestMapping("/customerGet/{orderId}")
    @ResponseBody
    public String customerGet(@PathVariable Integer orderId){
        orderService.updateGetTime(orderId);
        return "success";
    }

}
