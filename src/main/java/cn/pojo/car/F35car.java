package cn.pojo.car;

import org.springframework.format.annotation.DateTimeFormat;

import java.util.Date;

public class F35car {
    private int id;//序号
    private String chepaihao;//车牌号
    private double zaizhong;//载重
    private String yanse;//颜色
    private String leixing;//车辆类型
    private float gourujiage;//gourujiage
    @DateTimeFormat(pattern = "yyyy-MM-dd")
    private Date goururiqi;//购入日期
    private int zhuangtai;//车辆当前状态：1-运货中，2-空闲，3-维修，4-停用
    private String beizhu;//备注    
    private String carType;//车辆类型

    public String getCarType() {//String为返回值类型，get为获取
        return carType;
    }

    public void setCarType(String carType) {//set为设置
        this.carType = carType;
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

    public double getZaizhong() {
        return zaizhong;
    }

    public void setZaizhong(double zaizhong) {
        this.zaizhong = zaizhong;
    }

    public String getYanse() {
        return yanse;
    }

    public void setYanse(String yanse) {
        this.yanse = yanse;
    }

    public String getLeixing() {
        return leixing;
    }

    public void setLeixing(String leixing) {
        this.leixing = leixing;
    }

    public float getGourujiage() {
        return gourujiage;
    }

    public void setGourujiage(float gourujiage) {
        this.gourujiage = gourujiage;
    }

    public Date getGoururiqi() {
        return goururiqi;
    }

    public void setGoururiqi(Date goururiqi) {
        this.goururiqi = goururiqi;
    }

    public int getZhuangtai() {
        return zhuangtai;
    }

    public void setZhuangtai(int zhuangtai) {
        this.zhuangtai = zhuangtai;
    }

    public String getBeizhu() {
        return beizhu;
    }

    public void setBeizhu(String beizhu) {
        this.beizhu = beizhu;
    }
}
