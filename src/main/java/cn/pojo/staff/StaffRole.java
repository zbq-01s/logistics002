package cn.pojo.staff;

public class StaffRole implements java.io.Serializable{
    private Integer id;

    private String role;

    private Integer roleStaffNum;

    public StaffRole(Integer id, String role) {
        this.id = id;
        this.role = role;
    }

    public StaffRole() {
        super();
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getRole() {
        return role;
    }

    public void setRole(String role) {
        this.role = role == null ? null : role.trim();
    }

    public Integer getRoleStaffNum() {
        return roleStaffNum;
    }

    public void setRoleStaffNum(Integer roleStaffNum) {
        this.roleStaffNum = roleStaffNum;
    }
}