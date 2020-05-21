package cn.service.car.service.impl;

import cn.dao.car.F35carTypeMapper;
import cn.pojo.car.F35carType;
import cn.service.car.service.F35carTypeService;
import org.apache.log4j.Logger;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;
import java.util.ArrayList;
import java.util.List;
@Service("F35carTypeService")
public class F35carTypeServiceImpl implements F35carTypeService {

    private static final Logger logger = Logger.getLogger(F35carTypeService.class);

    @Resource
    private F35carTypeMapper f35carTypeMapper;

    public List<F35carType> findAll() {
        List<F35carType> f35carTypeList = null;
        try {
            f35carTypeList = f35carTypeMapper.find();
            if(f35carTypeList == null ){
                logger.error("f35carTypeMapper.find 查询角色信息为空   ！！");
                f35carTypeList = new ArrayList<F35carType>();
            }
        } catch (Exception e) {
//            e.printStackTrace();
            logger.error("f35carTypeMapper.find  查询角色信息异常   ！！");
            f35carTypeList = new ArrayList<F35carType>();
        }

        return f35carTypeList;
    }

}
