package cn.dao.order;

import cn.pojo.order.GoodsMsg;

public interface GoodsMsgMapper {
    int deleteByPrimaryKey(Integer goodId);

    int insert(GoodsMsg record);

    int insertSelective(GoodsMsg record);

    GoodsMsg selectByPrimaryKey(Integer goodId);

    int updateByPrimaryKeySelective(GoodsMsg record);

    int updateByPrimaryKey(GoodsMsg record);
}