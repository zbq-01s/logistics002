package cn.controller;

import cn.pojo.car.F35Distribution;
import cn.pojo.car.F35car;
import cn.pojo.order.Order;
import cn.service.car.service.F35DistributionService;
import cn.service.car.service.F35carService;
import cn.service.car.service.F35carTypeService;
import cn.service.order.OrderService;
import cn.tool.PageHelper;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

import javax.annotation.Resource;
import java.util.List;

@Controller
@RequestMapping("/fache")
public class F35FaChe {

    @Resource
    private F35carService f35carService;

    @Resource
    private F35DistributionService f35DistributionService;

    @Resource
    private OrderService orderService;

    @RequestMapping("/peisong")
    public String peisong(Model model,
                          @RequestParam(value = "pageIndex", required = false) String pageIndex){
        //增加分页的内容
        int currentPaheNo = 0;
        PageHelper ph = new PageHelper();
        if (pageIndex != null) {
            currentPaheNo = Integer.parseInt(pageIndex);
            ph.setCurrentPageNo(currentPaheNo);
        }
        int pageSize = ph.getPageSize();
        //调用servce接口查询总条数
        int totalCount = orderService.orderCount();
        ph.setTotalCount(totalCount);//为了更新总页数
        currentPaheNo = ph.getCurrentPageNo();
        int totalPageCount = ph.getTotalPageCount();
        int from=(currentPaheNo-1)*pageSize;
        List<Order> orderList = null;

        model.addAttribute("orderlist",orderService.orderById(from,pageSize));
        model.addAttribute("f35carlist",f35carService.carByType());

        //add by hjj ：添加分页的信息
        model.addAttribute("currentPageNo", currentPaheNo);
        model.addAttribute("totalCount", totalCount);
        model.addAttribute("totalPageCount", totalPageCount);

		return "car/carPeiSong";
    }

    @RequestMapping("/fasong")
    public String fache(@RequestParam("orderids")String orderids,@RequestParam("carid") String carid){
        String[] orderId = orderids.split(",");
        Order[] orders = new Order[orderId.length];
        //查询订单表记录
        for(int i=0;i<orderId.length;i++){
            orders[i] = orderService.findByOrderId(Integer.valueOf(orderId[i]));
        }
        //修改订单状态
        for(int i=0;i<orders.length;i++){
            orderService.updateOrderFromCar(orders[i]);
        }
        //查询订单表记录
        for(int i=0;i<orderId.length;i++){
            orders[i] = orderService.findByOrderId(Integer.valueOf(orderId[i]));
        }
        F35Distribution f35Distribution = new F35Distribution();
        int id = 0;
        if(carid != null && !carid.equals("")){
            id = Integer.valueOf(carid);
        }
        //查询车辆基本信息
        F35car f35car = f35carService.findById(id);
        //执行修改车辆状态方法
        f35carService.carByzt(f35car.getId());
        f35Distribution.setChepaihao(f35car.getChepaihao());
        //向配送表插入数据
        for(int i=0;i<orderId.length;i++){
            f35Distribution.setOrderstate(orders[i].getOrderState());
            f35Distribution.setOrderweight(orders[i].getOrderWeight());
            f35Distribution.setSendadd(orders[i].getSendAdd());
            f35Distribution.setGetadd(orders[i].getGetAdd());
            f35Distribution.setOrderId(orders[i].getOrderId());
            //执行插入方法
            f35DistributionService.save(f35Distribution);
        }
        return "redirect:/fache/peisong";//间接请求转发
    }
}
