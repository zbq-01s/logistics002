package cn.controller;

import cn.pojo.news.News;
import cn.service.news.NewsService;
import cn.tool.Constrant;
import cn.tool.PageHelper;
import org.apache.commons.io.FilenameUtils;
import org.apache.commons.lang.math.RandomUtils;
import org.apache.log4j.Logger;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.multipart.MultipartFile;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;
import javax.validation.Valid;
import java.io.File;
import java.io.IOException;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;

@Controller
@RequestMapping("/news")
public class F35newsController {

    private static final Logger logger = Logger.getLogger(UserController.class);


    @Resource
    private NewsService newsService;

//    @RequestMapping("/newsShow")
//    public String news(Model model){
//        model.addAttribute("newsList",newsService.findNews());
//        return "news/newsList";
//    }

        @RequestMapping(value = "/newsview")
    public String newsview(Model model,@RequestParam(value = "newsid", required = false)String newsid) {
            int newNewsId = 0;
            if (newsid != null && newsid != "") {
                newNewsId = Integer.valueOf(newsid);
            }

            model.addAttribute("newsid", newNewsId);
            model.addAttribute("news", newsService.findById(newNewsId));
            return "news/newsview";
        }

    @RequestMapping("/newsadd")
    public String newsadd(){return "news/newsAdd";}

    @RequestMapping(value = "/add",method = RequestMethod.POST)
    public String NewsAdd() {
        return "news/newsList";
    }




    //查询
//    @RequestMapping(value = "/modify")
//    public String modify(@RequestParam("newsid")String newsid, Model model){
//        //根据userId查询user信息
//    //        System.out.println(userId);
//        if(newsid == null || newsid.equals("")){
//            logger.debug("不是合法的查询的id=============》");
//            return "redirect:/news/newsAdd";
//        }
//        model.addAttribute("news",newsService.findById(Integer.parseInt(newsid)));
//        return "news/newsList";
//    }



    //修改1--带值到修改页面
    @RequestMapping(value = "/modify1",method = RequestMethod.GET)
    public String modify1(@RequestParam("newsid")String newsid, Model model){
        //根据userId查询user信息
    //        System.out.println(userId);
        if(newsid == null || newsid.equals("")){
            logger.debug("不是合法的查询的id=============》");
            return "redirect:/news/newsList";
        }
        model.addAttribute("news",newsService.findById(Integer.parseInt(newsid)));
        return "news/newsmodify";
    }
    //修改2成功
    @RequestMapping("/update")
    public String update(@Valid News news){
    //        System.out.println(user.getUserName());
//        News currentNews = (News)session.getAttribute(Constrant.USER_SESSION);
//        news.setModifyBy(currentNews.getId());
        if(newsService.update(news)){
//            logger.debug("更新用户信息成功！=============》");
            return "redirect:/news/newslist";
        }
//        newsService.update(news);
        return "news/newsmodify";
    }

    @RequestMapping("/newslist")
    public String getNewsList(Model model,
                              @RequestParam(value = "title",required = false) String title,
                              @RequestParam(value = "pageIndex",required = false)String pageIndex){
    //增加分页的内容
    int currentPaheNo = 0;
        PageHelper ph = new PageHelper();
        if(pageIndex != null){
        currentPaheNo = Integer.parseInt(pageIndex);
        ph.setCurrentPageNo(currentPaheNo);
    }
    int pageSize = ph.getPageSize();
    //调用servce接口查询总条数
    int totalCount = newsService.getNewsCount(title);
        ph.setTotalCount(totalCount);//为了更新总页数
    currentPaheNo = ph.getCurrentPageNo();
    int totalPageCount = ph.getTotalPageCount();

        model.addAttribute("titleList",newsService.findNewsList(title,currentPaheNo,pageSize));
        model.addAttribute("title",title);
    //add by hjj ：添加分页的信息
        model.addAttribute("currentPageNo",currentPaheNo);
        model.addAttribute("totalCount",totalCount);
        model.addAttribute("totalPageCount",totalPageCount);
        return "news/newsList";
}


    /**
     * 校验的过程发生在：前端控制器分发后，到达处理方法（hanler）之前
     * ***后台校验
     */
    @RequestMapping(value = "/add2",method = RequestMethod.POST)
    public String add2(
                    @RequestParam(value = "title",required = false)String title,
                    @RequestParam(value = "content",required = false)String content,
                    @RequestParam(value = "createBy",required = false)String createBy,
                    @RequestParam(value = "createTime",required = false)String createTime,
                    @RequestParam(value = "modifyBy",required = false)String modifyBy,
                    @RequestParam(value = "modifyTime",required = false)String modifyTime,
             HttpServletRequest request,
                       @RequestParam(value = "userTx",required = false)MultipartFile upload){
        int createBy1=Integer.valueOf(createBy);
        int modifyBy1=Integer.valueOf(modifyBy);
        SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd");
        Date createTime1=null;
        Date modifyTime1=null;
        try {
            createTime1=sdf.parse(createTime);
            modifyTime1=sdf.parse(modifyTime);
        } catch (ParseException e) {
            e.printStackTrace();
        }
        String fileName = "";//上传文件名，
        //判断文件大小
        if(upload.getSize() > Constrant.UPLOAD_SIZE){
            request.setAttribute("errMsg","文件过大，请重新上传！");
            return "news/newsAdd";
        }
        //校验文件后缀名:jpg,png
        String originalFileName = upload.getOriginalFilename();//文件名
        String surfix = FilenameUtils.getExtension(originalFileName);//后缀名
        if(surfix.equals("jpg")){
            fileName = System.currentTimeMillis()+ RandomUtils.nextInt(1000000)+"_Person.jpg";
            File file = new File(Constrant.UPLOAD_ORIGIN,fileName);
            if(!file.exists()){//文件不存在
                file.mkdirs();
            }
            try {
                upload.transferTo(file);
            } catch (IOException e) {
//                e.printStackTrace();
                request.setAttribute("errMsg","上传失败，请重新上传！");
                return "news/newsAdd";
            }
        }else{
            request.setAttribute("errMsg","不支持的文件格式，请重新上传！");
            return "news/newsAdd";
        }

        //add upload FileName
        News news=new News();
        news.setTitle(title);
        news.setContent(content);
        news.setCreateBy(createBy1);
        news.setCreateTime(createTime1);
        news.setModifyBy(modifyBy1);
        news.setModifyTime(modifyTime1);
        news.setPicpath(Constrant.UPLOAD_ORIGIN_PREFIX+fileName);
        //调用保存方法
        if(newsService.addNewNews(news)){
            //重定向到用户查询列表
            return "redirect:/news/newslist";
        }
        return "news/newsAdd";
    }
    @RequestMapping(value = "/delete",method = RequestMethod.GET)
    public String delete(@RequestParam("newsid")String newsid){
//        System.out.println(userId);
        int roleId = 0;
        if(newsid != null && !newsid.equals("")){
            roleId = Integer.valueOf(newsid);
        }
        if(newsService.delete(roleId)){
            logger.debug("删除用户信息成功=================》");
        }
        return "redirect:/news/newslist";
    }


}
