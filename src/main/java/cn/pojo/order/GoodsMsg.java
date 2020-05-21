package cn.pojo.order;

public class GoodsMsg {
    private Integer goodId;

    private Integer orderId;

    private String goodName;

    private String goodType;

    private String goodUnit;

    private Float goodNumber;

    private Float goodWeight;

    private String comment;

    public GoodsMsg(Integer goodId, Integer orderId, String goodName, String goodType, String goodUnit, Float goodNumber, Float goodWeight, String comment) {
        this.goodId = goodId;
        this.orderId = orderId;
        this.goodName = goodName;
        this.goodType = goodType;
        this.goodUnit = goodUnit;
        this.goodNumber = goodNumber;
        this.goodWeight = goodWeight;
        this.comment = comment;
    }

    public GoodsMsg() {
        super();
    }

    public Integer getGoodId() {
        return goodId;
    }

    public void setGoodId(Integer goodId) {
        this.goodId = goodId;
    }

    public Integer getOrderId() {
        return orderId;
    }

    public void setOrderId(Integer orderId) {
        this.orderId = orderId;
    }

    public String getGoodName() {
        return goodName;
    }

    public void setGoodName(String goodName) {
        this.goodName = goodName == null ? null : goodName.trim();
    }

    public String getGoodType() {
        return goodType;
    }

    public void setGoodType(String goodType) {
        this.goodType = goodType == null ? null : goodType.trim();
    }

    public String getGoodUnit() {
        return goodUnit;
    }

    public void setGoodUnit(String goodUnit) {
        this.goodUnit = goodUnit == null ? null : goodUnit.trim();
    }

    public Float getGoodNumber() {
        return goodNumber;
    }

    public void setGoodNumber(Float goodNumber) {
        this.goodNumber = goodNumber;
    }

    public Float getGoodWeight() {
        return goodWeight;
    }

    public void setGoodWeight(Float goodWeight) {
        this.goodWeight = goodWeight;
    }

    public String getComment() {
        return comment;
    }

    public void setComment(String comment) {
        this.comment = comment == null ? null : comment.trim();
    }
}