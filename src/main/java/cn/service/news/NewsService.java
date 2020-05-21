package cn.service.news;

import cn.pojo.news.News;

import java.util.List;

public interface NewsService {
    List<News> findNews();

    //保存方法
    boolean addNewNews(News news);

    //查询所有的角色信息
    List<News> findNewsList(String title, int currentPageNo, int pageSize);

    int getNewsCount(String title);

    //根据id获取news
    News findById(int id);

    //删除用户信息
    boolean delete(int id);

    //修改用户信息
    boolean update(News news);
}
