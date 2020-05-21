package cn.service.car.service.impl;

import cn.constant.CarStatusEnum;
import cn.dao.car.F35DistributionMapper;
import cn.dao.car.F35carMapper;
import cn.dao.order.OrderMapper;
import cn.pojo.ResponseResult;
import cn.pojo.car.F35Distribution;
import cn.service.car.service.F35DistributionService;
import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;
import java.util.ArrayList;
import java.util.List;

@Service("F35DistributionService")
public class F35DistributionServiceImpl implements F35DistributionService {

    private static final Logger logger = Logger.getLogger(F35DistributionServiceImpl.class);
    @Autowired
    private F35carMapper f35carMapper;
    @Autowired
    private OrderMapper orderMapper ;
    @Resource
    private F35DistributionMapper f35DistributionMapper;


    public List<F35Distribution> findAll(int from, int pageSize) {
        List<F35Distribution> f35DistributionList = null;
        try {
            f35DistributionList = f35DistributionMapper.findAll(from, pageSize);
            if (f35DistributionList == null) {
                logger.error("f35DistributionMapper.findAll 查询配送信息为空   ！！");
                f35DistributionList = new ArrayList<F35Distribution>();
            }
        } catch (Exception e) {
            e.printStackTrace();
            logger.error("f35DistributionMapper.findAll 查询配送信息异常" + e.getMessage());
            f35DistributionList = new ArrayList<F35Distribution>();
        }
        return f35DistributionList;
    }

    public int findCount() {
        int count = 0;
        try {
            count = f35DistributionMapper.findCount();
            if (count == 0) {
                logger.debug("未查询到可用的配送记录 ！");
            }
        } catch (Exception e) {
//            e.printStackTrace();
            logger.error("f35DistributionMapper.findCount 查询配送总数异常" + e.getMessage());
        }
        return count;
    }

    public boolean save(F35Distribution f35Distribution) {
        int row = 0;
        try {
            row = f35DistributionMapper.save(f35Distribution);
            if (row != 1) {
                logger.debug("f35DistributionMapper.save 添加失败");
                return false;
            }
        } catch (Exception e) {
            e.printStackTrace();
            logger.error("f35DistributionMapper.save 添加异常" + e.getMessage());
        }
        return true;
    }

    public ResponseResult arrived(String distributeId) {
        F35Distribution distribution = f35DistributionMapper.findById(distributeId);
        if (distribution == null) {
            return new ResponseResult(-1, "配送记录为空");
        }
        f35carMapper.updateCarStatusByCarNo(distribution.getChepaihao() , CarStatusEnum.IDLE.getType());
        f35DistributionMapper.updateStatusById(distributeId ,3);
        orderMapper.updateOrderSendEndTime(distribution.getOrderId());
        return ResponseResult.successData(null);
    }
}
