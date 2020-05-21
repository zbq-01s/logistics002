package cn.service.car.service;

import cn.pojo.ResponseResult;
import cn.pojo.car.F35Distribution;
import org.apache.ibatis.annotations.Param;

import java.util.List;
import java.util.Map;

public interface F35DistributionService {
    /**
     * 查询配送信息
     * @param from
     * @param pageSize
     * @return
     * @throws Exception
     */
    List<F35Distribution> findAll(@Param("from") int from,
                                  @Param("pageSize") int pageSize);

    /**
     * 查询配送信息总条数
     * @return
     * @throws Exception
     */
    int findCount();

    boolean save(F35Distribution f35Distribution);

    ResponseResult arrived(String distributeId);
}
