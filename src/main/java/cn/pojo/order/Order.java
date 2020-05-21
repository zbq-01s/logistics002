package cn.pojo.order;

import org.springframework.format.annotation.DateTimeFormat;

import cn.constant.OrderStateEnum;

import java.util.Date;

public class Order {
    private Integer orderId;

    private String tradeNo;

    private Integer userId;

    private Integer orderState;
    @DateTimeFormat(pattern = "yyyy-MM-dd")
    private Date orderCreateTime;

    private Double orderMoney;

    private Double orderWeight;

    private String carNumber;

    private Integer orderIsPay;

    private Date orderPickTime;

    private String sender;

    private String sendAdd;

    private String sendDetailAdd;

    private Integer sendManner;

    private String sendPhone;

    private Date sendTime;

    private Date sendEndTime ;

    private String getter;

    private String getAdd;

    private String getDetailAdd;

    private String getPhone;

    private Date getTime;

    private String comment;

    public Order(Integer orderId, Integer userId, Integer orderState, Date orderCreateTime, Double orderMoney, Double orderWeight, String carNumber, Integer orderIsPay, Date orderPickTime, String sender, String sendAdd, String sendDetailAdd, Integer sendManner, String sendPhone, Date sendTime, String getter, String getAdd, String getDetailAdd, String getPhone, Date getTime, String comment) {
        this.orderId = orderId;
        this.userId = userId;
        this.orderState = orderState;
        this.orderCreateTime = orderCreateTime;
        this.orderMoney = orderMoney;
        this.orderWeight = orderWeight;
        this.carNumber = carNumber;
        this.orderIsPay = orderIsPay;
        this.orderPickTime = orderPickTime;
        this.sender = sender;
        this.sendAdd = sendAdd;
        this.sendDetailAdd = sendDetailAdd;
        this.sendManner = sendManner;
        this.sendPhone = sendPhone;
        this.sendTime = sendTime;
        this.getter = getter;
        this.getAdd = getAdd;
        this.getDetailAdd = getDetailAdd;
        this.getPhone = getPhone;
        this.getTime = getTime;
        this.comment = comment;
    }

    public Order() {
        super();
    }

    public Integer getOrderId() {
        return orderId;
    }

    public void setOrderId(Integer orderId) {
        this.orderId = orderId;
    }

    public String getTradeNo() {
        return tradeNo;
    }

    public void setTradeNo(String tradeNo) {
        this.tradeNo = tradeNo;
    }

    public Integer getUserId() {
        return userId;
    }

    public void setUserId(Integer userId) {
        this.userId = userId;
    }

    public Integer getOrderState() {
        return orderState;
    }
    public String getOrderStateStr() {
    	
        return OrderStateEnum.parseByState(orderState).getStateName();
    }

    public void setOrderState(Integer orderState) {
        this.orderState = orderState;
    }

    public Date getOrderCreateTime() {
        return orderCreateTime;
    }

    public void setOrderCreateTime(Date orderCreateTime) {
        this.orderCreateTime = orderCreateTime;
    }

    public Double getOrderMoney() {
        return orderMoney;
    }

    public void setOrderMoney(Double orderMoney) {
        this.orderMoney = orderMoney;
    }

    public Double getOrderWeight() {
        return orderWeight;
    }

    public void setOrderWeight(Double orderWeight) {
        this.orderWeight = orderWeight;
    }

    public String getCarNumber() {
        return carNumber;
    }

    public void setCarNumber(String carNumber) {
        this.carNumber = carNumber == null ? null : carNumber.trim();
    }

    public Integer getOrderIsPay() {
        return orderIsPay;
    }

    public void setOrderIsPay(Integer orderIsPay) {
        this.orderIsPay = orderIsPay;
    }

    public Date getOrderPickTime() {
        return orderPickTime;
    }

    public void setOrderPickTime(Date orderPickTime) {
        this.orderPickTime = orderPickTime;
    }

    public String getSender() {
        return sender;
    }

    public void setSender(String sender) {
        this.sender = sender == null ? null : sender.trim();
    }

    public String getSendAdd() {
        return sendAdd;
    }

    public void setSendAdd(String sendAdd) {
        this.sendAdd = sendAdd == null ? null : sendAdd.trim();
    }

    public String getSendDetailAdd() {
        return sendDetailAdd;
    }

    public void setSendDetailAdd(String sendDetailAdd) {
        this.sendDetailAdd = sendDetailAdd == null ? null : sendDetailAdd.trim();
    }

    public Integer getSendManner() {
        return sendManner;
    }

    public void setSendManner(Integer sendManner) {
        this.sendManner = sendManner;
    }

    public String getSendPhone() {
        return sendPhone;
    }

    public void setSendPhone(String sendPhone) {
        this.sendPhone = sendPhone == null ? null : sendPhone.trim();
    }

    public Date getSendTime() {
        return sendTime;
    }

    public void setSendTime(Date sendTime) {
        this.sendTime = sendTime;
    }

    public String getGetter() {
        return getter;
    }

    public void setGetter(String getter) {
        this.getter = getter == null ? null : getter.trim();
    }

    public String getGetAdd() {
        return getAdd;
    }

    public void setGetAdd(String getAdd) {
        this.getAdd = getAdd == null ? null : getAdd.trim();
    }

    public String getGetDetailAdd() {
        return getDetailAdd;
    }

    public void setGetDetailAdd(String getDetailAdd) {
        this.getDetailAdd = getDetailAdd == null ? null : getDetailAdd.trim();
    }

    public String getGetPhone() {
        return getPhone;
    }

    public void setGetPhone(String getPhone) {
        this.getPhone = getPhone == null ? null : getPhone.trim();
    }

    public Date getGetTime() {
        return getTime;
    }

    public void setGetTime(Date getTime) {
        this.getTime = getTime;
    }

    public String getComment() {
        return comment;
    }

    public void setComment(String comment) {
        this.comment = comment == null ? null : comment.trim();
    }

    public Date getSendEndTime() {
        return sendEndTime;
    }

    public void setSendEndTime(Date sendEndTime) {
        this.sendEndTime = sendEndTime;
    }
}