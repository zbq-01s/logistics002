package cn.pojo.news;

import org.springframework.format.annotation.DateTimeFormat;

import java.util.Date;

public class News {
    private int id;//新闻编号
    private String title;//新闻标题
    private String content;//新闻文档
    @DateTimeFormat(pattern = "yyyy-MM-dd")
    private Date createTime;//发表时间
    private int createBy;//发布者id
    @DateTimeFormat(pattern = "yyyy-MM-dd")
    private Date modifyTime;//修改时间
    private int modifyBy;//修改者
    private String picpath;//图片

    //add by yzj
    private String userRoleName;//用户角色名

    //add by yzj
    private String idPicPath;//头像路径

    public String getUserRoleName() {
        return userRoleName;
    }

    public void setUserRoleName(String userRoleName) {
        this.userRoleName = userRoleName;
    }

    public String getIdPicPath() {
        return idPicPath;
    }

    public void setIdPicPath(String idPicPath) {
        this.idPicPath = idPicPath;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getContent() {
        return content;
    }

    public void setContent(String content) {
        this.content = content;
    }

    public Date getCreateTime() {
        return createTime;
    }

    public void setCreateTime(Date createTime) {
        this.createTime = createTime;
    }

    public int getCreateBy() {
        return createBy;
    }

    public void setCreateBy(int createBy) {
        this.createBy = createBy;
    }

    public Date getModifyTime() {
        return modifyTime;
    }

    public void setModifyTime(Date modifyTime) {
        this.modifyTime = modifyTime;
    }

    public int getModifyBy() {
        return modifyBy;
    }

    public void setModifyBy(int modifyBy) {
        this.modifyBy = modifyBy;
    }

    public String getPicpath() {
        return picpath;
    }

    public void setPicpath(String picpath) {
        this.picpath = picpath;
    }
}
