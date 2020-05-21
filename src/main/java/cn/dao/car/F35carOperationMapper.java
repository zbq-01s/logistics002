package cn.dao.car;

import cn.pojo.car.F35carOperation;
import org.apache.ibatis.annotations.Param;

import java.util.List;

public interface F35carOperationMapper {

    /**
     * 查询车辆费用信息
     * @param chepaihao
     * @param jiashiyuan
     * @param from
     * @param pageSize
     * @return
     * @throws Exception
     */
    List<F35carOperation> findAll(@Param("chepaihao") String chepaihao,
                                  @Param("jiashiyuan") String jiashiyuan,
                                  @Param("from") int from,
                                  @Param("pageSize") int pageSize)throws Exception;

    /**
     * 查询车辆费用总条数
     * @param chepaihao
     * @param jiashiyuan
     * @return
     * @throws Exception
     */
    int findCount(@Param("chepaihao") String chepaihao,
                  @Param("jiashiyuan") String jiashiyuan)throws Exception;

    /**
     * 查询车辆费用详细信息
     * @param id
     * @return
     * @throws Exception
     */
    F35carOperation findById(@Param("id")int id)throws Exception;

    /**
     * 添加车辆费用记录
     * @param f35carOperation
     * @return
     * @throws Exception
     */
    int save(F35carOperation f35carOperation)throws Exception;

    /**
     * 修改车辆费用记录
     * @param f35carOperation
     * @return
     * @throws Exception
     */
    int update(F35carOperation f35carOperation)throws Exception;
}
