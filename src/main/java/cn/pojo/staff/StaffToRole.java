package cn.pojo.staff;

public class StaffToRole implements java.io.Serializable{
    private Integer id;

    private Integer staffRole;

    private Integer staffId;

    public StaffToRole(Integer id, Integer staffRole, Integer staffId) {
        this.id = id;
        this.staffRole = staffRole;
        this.staffId = staffId;
    }

    public StaffToRole() {
        super();
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public Integer getStaffRole() {
        return staffRole;
    }

    public void setStaffRole(Integer staffRole) {
        this.staffRole = staffRole;
    }

    public Integer getStaffId() {
        return staffId;
    }

    public void setStaffId(Integer staffId) {
        this.staffId = staffId;
    }
}