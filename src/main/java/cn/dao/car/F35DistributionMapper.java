package cn.dao.car;

import cn.pojo.car.F35Distribution;
import org.apache.ibatis.annotations.Param;

import java.util.List;

public interface F35DistributionMapper {
    /**
     * 查询配送信息
     * @param from
     * @param pageSize
     * @return
     * @throws Exception
     */
    List<F35Distribution> findAll(@Param("from") int from,
                                  @Param("pageSize") int pageSize)throws Exception;

    /**
     * 查询配送信息总条数
     * @return
     * @throws Exception
     */
    int findCount()throws Exception;

    int save(F35Distribution f35Distribution)throws Exception;

    F35Distribution findById(@Param("distributeId") String distributeId);

    int updateStatusById(@Param("distributeId") String distributeId, @Param("status") int status);
}
