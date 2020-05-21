package cn.service.news.impl;

import cn.dao.news.NewsMapper;
import cn.pojo.news.News;
import cn.service.news.NewsService;
import org.apache.log4j.Logger;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;
import java.util.ArrayList;
import java.util.List;

@Service("newsService")
public class NewsServiceImpl implements NewsService {

    private static final Logger logger = Logger.getLogger(NewsServiceImpl.class);
    @Resource
    private NewsMapper newsMapper;


//    public List<News> findNews() {
//        List<News> newsList = null;
//        try {
//            newsList = newsMapper.findNews();
//        } catch (Exception e) {
//            e.printStackTrace();
//        }
//        return newsList;
//    }

    public List<News> findNews() {
        List<News> newsList = null;
        try {
            newsList = newsMapper.findNews();
        } catch (Exception e) {
            logger.error("NewsServiceImpl.findNews 查询资讯异常"+e.getMessage());
        }
        return newsList;
    }

    public boolean addNewNews(News news) {
        int row = 0;
        try {
            row = newsMapper.save(news);
            if(row != 1){
                logger.debug("NewsServiceImpl.addNewNews 保存用户信息失败");
                return false;
            }else{
                logger.debug("NewsServiceImpl.addNewNews 保存用户信息成功");
            }
        } catch (Exception e) {
//            e.printStackTrace();
            logger.error("NewsServiceImpl.addNewNews 保存用户信息异常"+e.getMessage());
            return false;
        }
        return true;
    }

    public List<News> findNewsList(String title, int currentPageNo, int pageSize) {
        List<News> newsList = null;
        int from = 0;
        try {
            from = (currentPageNo-1)*pageSize;
            newsList = newsMapper.findNewsList(title,from,pageSize);
            if(newsList == null || newsList.size() <= 0){
                logger.debug("NewsServiceImpl.findNewsList 查询结果为空！");
                return new ArrayList<News>();//避免前台报错，空指针
            }
        } catch (Exception e) {
//            e.printStackTrace();
            logger.error("NewsServiceImpl.findNewsList 查询结果异常！"+e.getMessage());
        }
        logger.debug("NewsServiceImpl.findNewsList 查询结果成功！");
        return newsList;
    }

    public int getNewsCount(String title) {
        int count = 0;
        try {
            count = newsMapper.findNewsCount(title);
            if(count == 0){
                logger.debug("未查询到可用的标题记录 ！");
            }
        } catch (Exception e) {
//            e.printStackTrace();
            logger.error("NewsServiceImpl.getNewsCount 查询标题总数异常"+e.getMessage());
        }

        return count;
    }


    public News findById(int id) {
        News news = null;
        try {
            news = newsMapper.findById(id);
            if(news == null){
                logger.debug("NewsServiceImpl.findById 根据id查询用户信息失败");
                return news = new News();
            }
        } catch (Exception e) {
//            e.printStackTrace();
            logger.error("NewsServiceImpl.findById 根据id查询用户信息异常"+e.getMessage());
            news = new News();
        }
        return news;
    }


    public boolean delete(int id) {
        int row = 0;

        try {
            row = newsMapper.delete(id);
            if(row != 1){
                logger.debug("NewsServiceImpl.delete 根据id删除用户信息失败");
                return false;
            }
        } catch (Exception e) {
//            e.printStackTrace();
            logger.error("NewsServiceImpl.delete 根据id删除用户信息异常"+e.getMessage());
            return false;
        }

        return true;
    }

    public boolean update(News news) {
        int row = 0;

        try {
            row = newsMapper.update(news);
            if(row != 1){
                logger.debug("NewsServiceImpl.update 根据id更新用户信息失败");
                return false;
            }
        } catch (Exception e) {
//            e.printStackTrace();
            logger.error("NewsServiceImpl.update 根据id更新用户信息异常"+e.getMessage());
            return false;
        }

        return true;
    }


}
