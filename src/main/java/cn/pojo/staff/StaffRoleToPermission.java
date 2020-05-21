package cn.pojo.staff;

public class StaffRoleToPermission implements java.io.Serializable{
    private Integer id;

    private Integer staffRoleId;

    private Integer permissonId;

    public StaffRoleToPermission(Integer id, Integer staffRoleId, Integer permissonId) {
        this.id = id;
        this.staffRoleId = staffRoleId;
        this.permissonId = permissonId;
    }

    public StaffRoleToPermission() {
        super();
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public Integer getStaffRoleId() {
        return staffRoleId;
    }

    public void setStaffRoleId(Integer staffRoleId) {
        this.staffRoleId = staffRoleId;
    }

    public Integer getPermissonId() {
        return permissonId;
    }

    public void setPermissonId(Integer permissonId) {
        this.permissonId = permissonId;
    }
}