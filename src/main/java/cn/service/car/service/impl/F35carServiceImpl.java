package cn.service.car.service.impl;

import cn.dao.car.F35carMapper;
import cn.pojo.car.F35car;
import cn.service.car.service.F35carService;
import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;
import java.util.ArrayList;
import java.util.List;

@Service("F35carService")
public class F35carServiceImpl implements F35carService {

    private static final Logger logger = Logger.getLogger(F35carServiceImpl.class);
    @Autowired
    private F35carMapper f35carMapper;

    public List<F35car> findAll(String chepaihao, int zhuangtai, int from, int pageSize) {
        List<F35car> f35carList = null;
        /*int from = 0;*/
        try {
            /*from = (currentPageNo-1)*pageSize;*/
            f35carList = f35carMapper.findAll(chepaihao,zhuangtai,from,pageSize);
            if(f35carList == null ){
                logger.error("f35carMapper.findAll  查询车辆信息为空   ！！");
                f35carList = new ArrayList<F35car>();
            }
        } catch (Exception e) {
//            e.printStackTrace();
            logger.error("f35carMapper.findAll  查询车辆信息异常   ！！");
            f35carList = new ArrayList<F35car>();
        }

        return f35carList;
    }

    public int findCount(String chepaihao, int zhuangtai) {
        int count = 0;
        try {
            count = f35carMapper.findCount(chepaihao,zhuangtai);
            if(count == 0){
                logger.debug("未查询到可用的用户记录 ！");
            }
        } catch (Exception e) {
//            e.printStackTrace();
            logger.error("f35carMapper.findCount 查询车辆总数异常"+e.getMessage());
        }
        return count;
    }

    public F35car findById(int id) {
        F35car f35car = null;
        try {
            f35car = f35carMapper.findById(id);
        } catch (Exception e) {
            e.printStackTrace();
        }
        return f35car;
    }

    public boolean carAdd(F35car f35car) {
        int row = 0;
        try {
            row = f35carMapper.carAdd(f35car);
            if(row != 1){
                logger.debug("f35carMapper.carAdd 保存车辆信息失败");
                return false;
            }else{
                logger.debug("f35carMapper.carAdd 保存车辆信息成功");
            }
        } catch (Exception e) {
//            e.printStackTrace();
            logger.error("f35carMapper.carAdd 保存车辆信息异常"+e.getMessage());
            return false;
        }
        return true;
    }

    public boolean carUpdate(F35car f35car) {
        int row = 0;
        try {
            row = f35carMapper.carUpdate(f35car);
            if(row != 1){
                logger.debug("f35carMapper.carUpdate 修改车辆信息失败");
                return false;
            }else {
                logger.debug("f35carMapper.carUpdate 修改车辆信息成功");
            }
        } catch (Exception e) {
//            e.printStackTrace();
            logger.error("f35carMapper.carUpdate 修改车辆信息异常"+e.getMessage());
            return false;
        }

        return true;
    }

    public List<F35car> carByType() {
        List<F35car> f35carList = null;
        try {
            f35carList = f35carMapper.carByType();
        } catch (Exception e) {
            e.printStackTrace();
        }
        return f35carList;
    }

    public int carByzt(int id) {
        int row = 0;
        try {
            row = f35carMapper.carByzt(id);
            if(row != 1){
                logger.debug("f35carMapper.carByzt 修改失败");
            }
        } catch (Exception e) {
            e.printStackTrace();
            logger.error("f35carMapper.carByzt 修改异常"+e.getMessage());
        }
        return row;
    }
}
