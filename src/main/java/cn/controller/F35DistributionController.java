package cn.controller;

import cn.service.car.service.F35DistributionService;
import cn.tool.PageHelper;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import javax.annotation.Resource;

@Controller
@RequestMapping("distribution")
public class F35DistributionController {

    @Resource
    private F35DistributionService f35DistributionService;
    
    @RequestMapping("distributionlist")
    public String peisong(@RequestParam(value = "pageIndex", required = false) String pageIndex, Model model){
        //增加分页的内容
        int currentPageNo = 0;
        PageHelper ph = new PageHelper();
        if (pageIndex != null) {
            currentPageNo = Integer.parseInt(pageIndex);
            ph.setCurrentPageNo(currentPageNo);
        }
        int pageSize = ph.getPageSize();
        //调用servce接口查询总条数
        int totalCount = f35DistributionService.findCount();
        ph.setTotalCount(totalCount);//为了更新总页数
        currentPageNo = ph.getCurrentPageNo();
        int totalPageCount = ph.getTotalPageCount();
        int from=(currentPageNo-1)*pageSize;

        model.addAttribute("distributionlist",f35DistributionService.findAll(from,pageSize));

        //add by hjj ：添加分页的信息
        model.addAttribute("currentPageNo", currentPageNo);
        model.addAttribute("totalCount", totalCount);
        model.addAttribute("totalPageCount", totalPageCount);

        return "car/carDistribution";
    }
    @ResponseBody
    @RequestMapping("arrived/{distributeId}")
    public Object arrived(@PathVariable String distributeId){
        f35DistributionService.arrived(distributeId);
        return null;
    }
}
