package cn.dao.order;

import cn.pojo.order.OrderDistribution;

import java.util.List;

public interface OrderDistributionMapper {
    int insertData(OrderDistribution orderDistribution);

    int deleteByPrimaryKey(OrderDistribution orderDistribution);

    List<OrderDistribution> selectByOrderNo(String orderNo);
}
