package cn.pojo.staff;

public class StaffPermission implements java.io.Serializable{
    private Integer id;

    private String name;

    private String percode;

    public StaffPermission(Integer id, String name, String percode) {
        this.id = id;
        this.name = name;
        this.percode = percode;
    }

    public StaffPermission() {
        super();
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name == null ? null : name.trim();
    }

    public String getPercode() {
        return percode;
    }

    public void setPercode(String percode) {
        this.percode = percode == null ? null : percode.trim();
    }
}