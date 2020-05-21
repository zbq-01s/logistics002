package cn.controller;

import cn.service.customer.CustomerService;
import cn.tool.PageHelper;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;

@Controller
@RequestMapping("/user")
public class UserController {

    @Resource
    private CustomerService customerService;

    @RequestMapping("/userlist")
    public String showUserList(Model model,
                               @RequestParam(value = "cName",required = false) String cName,
                               @RequestParam(value="cSex",required = false) String cSex,
                               @RequestParam(value = "pageIndex",required = false)String pageIndex){

        //查询所有的角色信息


        //增加分页的内容
        int currentPaheNo = 0;
        PageHelper ph = new PageHelper();
        if(pageIndex != null){
            currentPaheNo = Integer.parseInt(pageIndex);
            ph.setCurrentPageNo(currentPaheNo);
        }
        int pageSize = ph.getPageSize();
        //调用servce接口查询总条数
        int totalCount = customerService.getCusCount(cName,cSex);
        //为了更新总页数
        ph.setTotalCount(totalCount);
        currentPaheNo = ph.getCurrentPageNo();
        int totalPageCount = ph.getTotalPageCount();

        model.addAttribute("cusList",customerService.getAllCustomer(cName,cSex,currentPaheNo,pageSize));
        model.addAttribute("queryName",cName);
        model.addAttribute("querySex",cSex);
        //add by tj ：添加分页的信息
        model.addAttribute("currentPageNo",currentPaheNo);
        model.addAttribute("totalCount",totalCount);
        model.addAttribute("totalPageCount",totalPageCount);
        return "user/userlist";
    }



}
