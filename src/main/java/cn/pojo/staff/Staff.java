package cn.pojo.staff;

public class Staff implements java.io.Serializable{
    private Integer s_id;

    private String s_realName;

    private String s_code;

    private Integer s_age;

    private String salt;

    private String s_state;

    private String s_password;

    private String s_phone;

    private String s_address;

    private String s_email;

    public Staff(Integer s_id, String s_realName, String s_code, Integer s_age, String salt, String s_state, String s_password, String s_phone, String s_address, String s_email) {
        this.s_id = s_id;
        this.s_realName = s_realName;
        this.s_code = s_code;
        this.s_age = s_age;
        this.salt = salt;
        this.s_state = s_state;
        this.s_password = s_password;
        this.s_phone = s_phone;
        this.s_address = s_address;
        this.s_email = s_email;
    }

    public Staff() {
        super();
    }

    public Integer getS_id() {
        return s_id;
    }

    public void setS_id(Integer s_id) {
        this.s_id = s_id;
    }

    public String getS_realName() {
        return s_realName;
    }

    public void setS_realName(String s_realName) {
        this.s_realName = s_realName == null ? null : s_realName.trim();
    }

    public String getS_code() {
        return s_code;
    }

    public void setS_code(String s_code) {
        this.s_code = s_code == null ? null : s_code.trim();
    }

    public Integer getS_age() {
        return s_age;
    }

    public void setS_age(Integer s_age) {
        this.s_age = s_age;
    }

    public String getSalt() {
        return salt;
    }

    public void setSalt(String salt) {
        this.salt = salt == null ? null : salt.trim();
    }

    public String getS_state() {
        return s_state;
    }

    public void setS_state(String s_state) {
        this.s_state = s_state == null ? null : s_state.trim();
    }

    public String getS_password() {
        return s_password;
    }

    public void setS_password(String s_password) {
        this.s_password = s_password == null ? null : s_password.trim();
    }

    public String getS_phone() {
        return s_phone;
    }

    public void setS_phone(String s_phone) {
        this.s_phone = s_phone == null ? null : s_phone.trim();
    }

    public String getS_address() {
        return s_address;
    }

    public void setS_address(String s_address) {
        this.s_address = s_address == null ? null : s_address.trim();
    }

    public String getS_email() {
        return s_email;
    }

    public void setS_email(String s_email) {
        this.s_email = s_email == null ? null : s_email.trim();
    }
}