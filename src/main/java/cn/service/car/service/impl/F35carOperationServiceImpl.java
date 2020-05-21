package cn.service.car.service.impl;

import cn.dao.car.F35carOperationMapper;
import cn.pojo.car.F35carOperation;
import cn.service.car.service.F35carOperationService;
import org.apache.log4j.Logger;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;
import java.util.ArrayList;
import java.util.List;

@Service("F35carOperationService")
public class F35carOperationServiceImpl implements F35carOperationService {

    private static final Logger logger = Logger.getLogger(F35carOperationServiceImpl.class);

    @Resource
    private F35carOperationMapper f35carOperationMapper;

    public List<F35carOperation> findAll(String chepaihao, String jiashiyuan, int from, int pageSize) {
        List<F35carOperation> f35carOperationList = null;
        try {
            f35carOperationList = f35carOperationMapper.findAll(chepaihao,jiashiyuan,from,pageSize);
            if(f35carOperationList == null ){
                logger.error("f35carOperationMapper.findAll  查询车辆费用信息为空   ！！");
                f35carOperationList = new ArrayList<F35carOperation>();
            }
        } catch (Exception e) {
//            e.printStackTrace();
            logger.error("f35carOperationMapper.findAll  查询车辆费用信息异常   ！！"+e.getMessage());
            f35carOperationList = new ArrayList<F35carOperation>();
        }
        return f35carOperationList;
    }

    public int findCount(String chepaihao, String jiashiyuan) {
        int count = 0;
        try {
            count = f35carOperationMapper.findCount(chepaihao,jiashiyuan);
            if(count == 1){
                logger.debug("未查询到可用的车辆费用记录 ！");
            }
        } catch (Exception e) {
//            e.printStackTrace();
            logger.error("f35carOperationMapper.findCount 查询车辆费用总数异常"+e.getMessage());
        }
        return count;
    }

    public F35carOperation findById(int id) {
        F35carOperation f35carOperation = null;
        try {
            f35carOperation = f35carOperationMapper.findById(id);
        } catch (Exception e) {
            e.printStackTrace();
        }

        return f35carOperation;
    }
    public boolean save(F35carOperation f35carOperation) {
        int row = 0;
        try {
            row = f35carOperationMapper.save(f35carOperation);
            if(row != 1){
                logger.debug("f35carOperationMapper.save 添加失败");
                return false;
            }else {
                logger.debug("f35carOperationMapper.save 添加成功");
            }
        } catch (Exception e) {
//            e.printStackTrace();
            logger.error("f35carOperationMapper.save 添加异常"+e.getMessage());
        }
        return true;
    }

    public boolean modify(F35carOperation f35carOperation) {
        int row =0;
        try {
            row = f35carOperationMapper.update(f35carOperation);
            if(row != 1){
                logger.debug("f35carOperationMapper.update 修改失败");
                return false;
            }else {
                logger.debug("f35carOperationMapper.update 修改成功");
            }
        } catch (Exception e) {
//            e.printStackTrace();
            logger.error("f35carOperationMapper.update 修改异常"+e.getMessage());
        }
        return true;
    }
}
