package cn.constant;
/**
 *                  <option value="1">未发货</option>
                    <option value="2">已发货</option>
                    <option value="3">运输中</option>
                    <option value="4">配送中</option>
		    <option value="50">恭喜，您的订单已完成</option>

 */
public enum OrderStateEnum {
    NONE(0 , "NA"),
    APPLY(1 , "已下单"),
    TO_SEND(2 , "已取货"),
    SEND(3 , "已发货"),
    SENDING(4 , "配送中"),
    DISTRIBUTE(5 , "已完成"),
    DELIVERY(6 , "订单已完成");
    
	private int stateId;
    private String stateName ;
    
    OrderStateEnum(int stateId, String stateName) {
        this.stateId = stateId;
        this.stateName = stateName;
        System.out.println("");
    }

    public int getStateId() {
        return stateId;
    }

    public String getStateName() {
        return stateName;
    }

	public static OrderStateEnum parseByState(int orderState) {
		OrderStateEnum result = NONE;
		for(OrderStateEnum state : values()) {
			if(state.getStateId() == orderState) {
				result = state;
				break;
			}
		}		
		return result;		
	}
}
