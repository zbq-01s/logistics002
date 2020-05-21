package cn.controller;

import cn.pojo.car.F35car;
import cn.service.car.service.F35carService;
import cn.service.car.service.F35carTypeService;
import cn.tool.PageHelper;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;

import javax.annotation.Resource;
import javax.validation.Valid;


@Controller
@RequestMapping("/car")
public class F35carController {

    @Resource
    private F35carService f35carService;

    @Resource
    private F35carTypeService f35carTypeService;

    @RequestMapping("/carList")
    public String show(Model model,
                       @RequestParam(value = "queryname", required = false) String queryname,
                       @RequestParam(value = "queryF35car", required = false) String queryF35car,
                       @RequestParam(value = "pageIndex", required = false) String pageIndex){

        int zhuangtai = 0;
        if (queryF35car != null && !queryF35car.equals("")) {
            zhuangtai = Integer.valueOf(queryF35car);
        }

        //增加分页的内容
        int currentPaheNo = 0;
        PageHelper ph = new PageHelper();
        if (pageIndex != null) {
            currentPaheNo = Integer.parseInt(pageIndex);
            ph.setCurrentPageNo(currentPaheNo);
        }
        int pageSize = ph.getPageSize();
        //调用servce接口查询总条数
        int totalCount = f35carService.findCount(queryname,zhuangtai);
        ph.setTotalCount(totalCount);//为了更新总页数
        currentPaheNo = ph.getCurrentPageNo();
        int totalPageCount = ph.getTotalPageCount();
        int from=(currentPaheNo-1)*pageSize;
        model.addAttribute("carTypelist",f35carTypeService.findAll());

        model.addAttribute("carlist",f35carService.findAll(queryname,zhuangtai,from,pageSize));
        model.addAttribute("queryname",queryname);
        model.addAttribute("queryF35car",queryF35car);

        //add by hjj ：添加分页的信息
        model.addAttribute("currentPageNo", currentPaheNo);
        model.addAttribute("totalCount", totalCount);
        model.addAttribute("totalPageCount", totalPageCount);

        return "car/carList";
    }

    /**
     * 进入添加页面
     * @return
     */
    @RequestMapping(value = "/carAdd",method = RequestMethod.GET)
    public String goadd(Model model){
        F35car f35car = new F35car();
        model.addAttribute("f35car",f35car);
        return "car/carAdd";
    }

    /**
     * 添加新车辆
     * @param f35car
     * @return
     */
    @RequestMapping("/add")
    public String carSave(@Valid F35car f35car){
    	
        if(f35carService.carAdd(f35car)){

            return "redirect:/car/carList";
        }
        return "car/carAdd";
    }

    /**
     * 查询车辆详情
     */
    @RequestMapping("/view")
    public String carById(@RequestParam("carid")String carid,Model model){
        int id = 0;
        if(carid != null && !carid.equals("")){
            id = Integer.valueOf(carid);
        }

        model.addAttribute("F35car",f35carService.findById(id));
        model.addAttribute("id",id);
        return "car/carView";
    }

    /**
     * 将参数带入修改页面
     */
    @RequestMapping("/update")
    public String update(@RequestParam("carid")String carid,Model model){
        int id = 0;
        if(carid != null && !carid.equals("")){
            id = Integer.valueOf(carid);
        }
        model.addAttribute("carTypelist",f35carTypeService.findAll());//车辆状态
        model.addAttribute("F35car",f35carService.findById(id));
        model.addAttribute("id",id);
        return "car/carModify";
    }
    /**
     * 修改车辆信息
     */
    @RequestMapping("/modify")
    public String modify(@Valid F35car f35car){
        if(f35carService.carUpdate(f35car)){

            return "redirect:/car/carList";
        }
        return "car/carModify";
    }



}
