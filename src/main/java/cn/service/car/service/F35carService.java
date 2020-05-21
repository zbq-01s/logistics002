package cn.service.car.service;

import cn.pojo.car.F35car;

import java.util.List;

public interface F35carService {
    //查询车辆信息
    List<F35car> findAll(String chepaihao, int zhuangtai, int from, int pageSize);
    //查询总条数
    int findCount(String chepaihao, int zhuangtai);

    /**
     * 查询车辆详情
     * @param id
     * @return
     */
    F35car findById(int id);

    /**
     * 添加车辆
     */
    boolean carAdd(F35car f35car);

    /**
     * 修改车辆信息
     */
    boolean carUpdate(F35car f35car);

    //查询空闲中的车辆
    List<F35car> carByType();
    //修改车辆状态
    int carByzt(int id);
}
