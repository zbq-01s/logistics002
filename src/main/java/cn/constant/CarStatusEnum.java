package cn.constant;

public enum CarStatusEnum {
    CARRY(1, "运货中"),
    IDLE(2, "空闲"),
    MODIFY(3, "维修"),
    DISCARD(4, "报废");
    private int statusType;
    private String desc;

    CarStatusEnum(int statusType, String desc) {
        this.statusType = statusType;
        this.desc = desc;
        System.out.println("0000000009");
    }

    public int getType() {
        return statusType;
    }

    public String getDesc() {
        return desc;
    }
}
