package cn.dao.car;

import cn.pojo.car.F35car;
import org.apache.ibatis.annotations.Param;

import java.util.List;

public interface F35carMapper {
    //查询车辆信息
    List<F35car> findAll(@Param("chepaihao") String chepaihao,
                         @Param("zhuangtai") int zhuangtai,
                         @Param("from") int from,
                         @Param("pageSize") int pageSize)throws Exception;
    //查询总条数
    int findCount(@Param("chepaihao") String chepaihao,
                  @Param("zhuangtai") int zhuangtai)throws Exception;

    /**
     * 查询车辆详情
     * @param id
     * @return
     * @throws Exception
     */
    F35car findById(@Param("id")int id)throws Exception;

    /**
     * 添加车辆
     */
    int carAdd(F35car f35car)throws Exception;

    /**
     * 修改车辆信息
     */
    int carUpdate(F35car f35car)throws Exception;

    //查询空闲中的车辆
    List<F35car> carByType()throws Exception;
    //修改车辆状态
    int carByzt(@Param("id")int id)throws Exception;

    int updateCarStatusByCarNo (@Param("carNo") String carNo , @Param("status") int status);
}
