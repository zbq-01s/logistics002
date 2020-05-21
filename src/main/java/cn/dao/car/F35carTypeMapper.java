package cn.dao.car;

import cn.pojo.car.F35carType;

import java.util.List;

public interface F35carTypeMapper {
    //查询车辆状态
    List<F35carType> find()throws Exception;
}
