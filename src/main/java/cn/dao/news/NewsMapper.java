package cn.dao.news;

import cn.pojo.news.News;
import org.apache.ibatis.annotations.Param;

import java.util.Date;
import java.util.List;

public interface NewsMapper {
    List<News> findNews() throws Exception;

    //根据id获取user
    News findById(@Param("id") int id) throws Exception;

    //查询所有的角色信息
    List<News> findNewsList(@Param("title") String title,
                            @Param("from") int from,
                            @Param("pageSize") int pageSize) throws Exception;

    //查询所有的角色信息
    int findNewsCount(@Param("title") String title)throws Exception;
    //保存方法
     int save(News news) throws Exception;

    //删除用户信息
    int delete(@Param("id") int id) throws Exception;

    //修改用户信息
    int update(News news) throws Exception;
}
