package cn.pojo;

public class ResponseResult {
    private int code;
    private Object data;
    private String msg ;

    public ResponseResult() {
    }

    public ResponseResult(int code, String msg) {
        this.code = code;
        this.msg = msg;
    }

    public static ResponseResult successData(Object data){
        ResponseResult responseResult = new ResponseResult();
        responseResult.setCode(0);
        responseResult.setData(data);
        responseResult.setMsg("操作成功");
        return responseResult;
    }

    public int getCode() {
        return code;
    }

    public void setCode(int code) {
        this.code = code;
    }

    public Object getData() {
        return data;
    }

    public void setData(Object data) {
        this.data = data;
    }

    public String getMsg() {
        return msg;
    }

    public void setMsg(String msg) {
        this.msg = msg;
    }
}
