package cn.controller;

import cn.pojo.car.F35carOperation;
import cn.service.car.service.F35carOperationService;
import cn.tool.PageHelper;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;

import javax.annotation.Resource;
import javax.validation.Valid;

@Controller
@RequestMapping("/operation")
public class F35carOperationController {

    @Resource
    private F35carOperationService f35carOperationService;

    @RequestMapping("/carCostlist")
    public String feiyong(Model model,
                          @RequestParam(value = "querychepaihao" , required = false)String querychepaihao,
                          @RequestParam(value = "queryname" ,required = false)String queryname,
                          @RequestParam(value = "pageIndex" ,required = false)String pageIndex){
        //增加分页的内容
        int currentPageNo = 0;
        PageHelper ph = new PageHelper();
        if (pageIndex != null) {
            currentPageNo = Integer.parseInt(pageIndex);
            ph.setCurrentPageNo(currentPageNo);
        }
        int pageSize = ph.getPageSize();
        //调用servce接口查询总条数
        int totalCount = f35carOperationService.findCount(querychepaihao,queryname);
        ph.setTotalCount(totalCount);//为了更新总页数
        currentPageNo = ph.getCurrentPageNo();
        int totalPageCount = ph.getTotalPageCount();
        int from=(currentPageNo-1)*pageSize;

        model.addAttribute("f35carOperationList",f35carOperationService.findAll(querychepaihao,queryname,from,pageSize));

        //add by hjj ：添加分页的信息
        model.addAttribute("currentPageNo", currentPageNo);
        model.addAttribute("totalCount", totalCount);
        model.addAttribute("totalPageCount", totalPageCount);

        return "car/carCostlist";
    }
    //费用详情
    @RequestMapping("/view")
    public String findByid(@RequestParam("operationid")String operationid, Model model){
        int id = 0;
        if(operationid != null && !operationid.equals("")){
            id = Integer.valueOf(operationid);
        }

        model.addAttribute("f35carOperation",f35carOperationService.findById(id));
        model.addAttribute("id",id);
        return "car/carCostview";
    }
    //进入添加页面
    @RequestMapping(value = "/carCostadd",method = RequestMethod.GET)
    public String add(Model model){
        F35carOperation f35carOperation = new F35carOperation();
        model.addAttribute("f35carOperation",f35carOperation);

        return "car/carCostadd";
    }
    //执行添加方法
    @RequestMapping(value = "/save",method = RequestMethod.POST)
    public String save(F35carOperation f35carOperation){
        if(f35carOperationService.save(f35carOperation)){
            return "redirect:/operation/carCostlist";
        }
        return "car/carCostadd";
    }
    //进入修改页面
    @RequestMapping(value = "/update",method = RequestMethod.GET)
    public String update(@RequestParam("operationid")String operationid,Model model){
        int id = 0;
        if(operationid != null && !operationid.equals("")){
            id = Integer.valueOf(operationid);
        }
        model.addAttribute("f35carOperation",f35carOperationService.findById(id));
        model.addAttribute("id",id);
        return "car/carCostmodify";
    }
    //执行修改方法
    @RequestMapping(value = "/modify",method = RequestMethod.POST)
    public String modify(@Valid F35carOperation f35carOperation){
        if(f35carOperationService.modify(f35carOperation)){
            return "redirect:/operation/carCostlist";
        }
        return "car/carCostmodify";
    }
}
