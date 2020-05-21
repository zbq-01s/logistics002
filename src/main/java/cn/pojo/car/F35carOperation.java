package cn.pojo.car;

import org.springframework.format.annotation.DateTimeFormat;

import java.util.Date;

public class F35carOperation {
    private int id;//序号
    private String chepaihao;//车牌号
    private String jiashiyuan;//驾驶员
    private float guolufei;//过路费
    private float xichefei;//洗车费
    private float tingchefei;//停车费
    private float jiashuifei;//加水费
    private float jiayoufei;//加油费
    @DateTimeFormat(pattern = "yyyy-MM-dd")
    private Date baoxiaoriqi;//报销日期

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

    public String getJiashiyuan() {
        return jiashiyuan;
    }

    public void setJiashiyuan(String jiashiyuan) {
        this.jiashiyuan = jiashiyuan;
    }

    public float getGuolufei() {
        return guolufei;
    }

    public void setGuolufei(float guolufei) {
        this.guolufei = guolufei;
    }

    public float getXichefei() {
        return xichefei;
    }

    public void setXichefei(float xichefei) {
        this.xichefei = xichefei;
    }

    public float getTingchefei() {
        return tingchefei;
    }

    public void setTingchefei(float tingchefei) {
        this.tingchefei = tingchefei;
    }

    public float getJiashuifei() {
        return jiashuifei;
    }

    public void setJiashuifei(float jiashuifei) {
        this.jiashuifei = jiashuifei;
    }

    public float getJiayoufei() {
        return jiayoufei;
    }

    public void setJiayoufei(float jiayoufei) {
        this.jiayoufei = jiayoufei;
    }

    public Date getBaoxiaoriqi() {
        return baoxiaoriqi;
    }

    public void setBaoxiaoriqi(Date baoxiaoriqi) {
        this.baoxiaoriqi = baoxiaoriqi;
    }
}
