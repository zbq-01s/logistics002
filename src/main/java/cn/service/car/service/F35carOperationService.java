package cn.service.car.service;

import cn.pojo.car.F35carOperation;

import java.util.List;

public interface F35carOperationService {
    /**
     *  查询车辆费用信息
     * @param chepaihao
     * @param jiashiyuan
     * @param from
     * @param pageSize
     * @return
     */
    List<F35carOperation> findAll( String chepaihao, String jiashiyuan, int from, int pageSize);

    /**
     * 查询车辆费用总条数
     * @param chepaihao
     * @param jiashiyuan
     * @return
     */
    int findCount(String chepaihao,String jiashiyuan);

    /**
     * 查询车辆费用详细信息
     * @param id
     * @return
     */
    F35carOperation findById(int id);

    /**
     * 添加车辆费用记录
     * @param f35carOperation
     * @return
     */
    boolean save(F35carOperation f35carOperation);

    /**
     * 修改车辆费用记录
     * @param f35carOperation
     * @return
     */
    boolean modify(F35carOperation f35carOperation);
}
