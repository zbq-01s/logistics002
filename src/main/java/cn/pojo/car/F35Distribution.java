package cn.pojo.car;

import cn.constant.OrderStateEnum;

public class F35Distribution {
    private int id;//序号
    private String chepaihao;//车牌号
    private int orderstate;//订单状态为未发货的
    private double orderweight;//货物重量
    private String siji;//司机
    private String sendadd;//始发地
    private String getadd;//目的地
    private int orderId;
    private String orderNo;

    public String getOrderStateStr() {

        return OrderStateEnum.parseByState(orderstate).getStateName();
    }

    public String getOrderNo() {
        return orderNo;
    }

    public void setOrderNo(String orderNo) {
        this.orderNo = orderNo;
    }

    public int getOrderId() {
        return orderId;
    }

    public void setOrderId(int orderId) {
        this.orderId = orderId;
    }

    public String getSendadd() {
        return sendadd;
    }

    public void setSendadd(String sendadd) {
        this.sendadd = sendadd;
    }

    public String getGetadd() {
        return getadd;
    }

    public void setGetadd(String getadd) {
        this.getadd = getadd;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getChepaihao() {
        return chepaihao;
    }

    public void setChepaihao(String chepaihao) {
        this.chepaihao = chepaihao;
    }

    public int getOrderstate() {
        return orderstate;
    }

    public void setOrderstate(int orderstate) {
        this.orderstate = orderstate;
    }

    public double getOrderweight() {
        return orderweight;
    }

    public void setOrderweight(double orderweight) {
        this.orderweight = orderweight;
    }

    public String getSiji() {
        return siji;
    }

    public void setSiji(String siji) {
        this.siji = siji;
    }
}
