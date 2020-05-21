package cn.pojo.customer;

import org.springframework.format.annotation.DateTimeFormat;

import java.io.Serializable;
import java.util.Date;

public class Customer implements Serializable {
    private Integer cId;

    private String cName;

    private String cPassword;

    private String cEmail;

    private String cSex;

    private String cPhone;

    private Integer cCustomerid;

    @DateTimeFormat(pattern = "yyyy-MM-dd HH:mm:ss")
    private Date cCreatedate;

    @DateTimeFormat(pattern = "yyyy-MM-dd HH:mm:ss")
    private Date cModifydate;

    private Integer cCreateby;

    private Integer cModifyby;

    public Customer(Integer cId, String cName, String cPassword, String cEmail, String cSex, String cPhone, Integer cCustomerid, Date cCreatedate, Date cModifydate, Integer cCreateby, Integer cModifyby) {
        this.cId = cId;
        this.cName = cName;
        this.cPassword = cPassword;
        this.cEmail = cEmail;
        this.cSex = cSex;
        this.cPhone = cPhone;
        this.cCustomerid = cCustomerid;
        this.cCreatedate = cCreatedate;
        this.cModifydate = cModifydate;
        this.cCreateby = cCreateby;
        this.cModifyby = cModifyby;
    }

    public Customer() {
        super();
    }

    public Integer getcId() {
        return cId;
    }

    public void setcId(Integer cId) {
        this.cId = cId;
    }

    public String getcName() {
        return cName;
    }

    public void setcName(String cName) {
        this.cName = cName == null ? null : cName.trim();
    }

    public String getcPassword() {
        return cPassword;
    }

    public void setcPassword(String cPassword) {
        this.cPassword = cPassword == null ? null : cPassword.trim();
    }

    public String getcEmail() {
        return cEmail;
    }

    public void setcEmail(String cEmail) {
        this.cEmail = cEmail == null ? null : cEmail.trim();
    }

    public String getcSex() {
        return cSex;
    }

    public void setcSex(String cSex) {
        this.cSex = cSex == null ? null : cSex.trim();
    }

    public String getcPhone() {
        return cPhone;
    }

    public void setcPhone(String cPhone) {
        this.cPhone = cPhone == null ? null : cPhone.trim();
    }

    public Integer getcCustomerid() {
        return cCustomerid;
    }

    public void setcCustomerid(Integer cCustomerid) {
        this.cCustomerid = cCustomerid;
    }

    public Date getcCreatedate() {
        return cCreatedate;
    }

    public void setcCreatedate(Date cCreatedate) {
        this.cCreatedate = cCreatedate;
    }

    public Date getcModifydate() {
        return cModifydate;
    }

    public void setcModifydate(Date cModifydate) {
        this.cModifydate = cModifydate;
    }

    public Integer getcCreateby() {
        return cCreateby;
    }

    public void setcCreateby(Integer cCreateby) {
        this.cCreateby = cCreateby;
    }

    public Integer getcModifyby() {
        return cModifyby;
    }

    public void setcModifyby(Integer cModifyby) {
        this.cModifyby = cModifyby;
    }
}