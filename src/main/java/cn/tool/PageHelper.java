package cn.tool;

public class PageHelper {

    //当前页
    private int currentPageNo = 1;
    //每页条数
    private int pageSize = 10;
    //总条数
    private int totalCount = 0;
    //总页数
    private int totalPageCount = 0;

    public int getCurrentPageNo() {
        if(currentPageNo < 1){
            currentPageNo = 1;
        }else if(totalPageCount > 0 && currentPageNo > totalPageCount){
            currentPageNo = totalPageCount;
        }
        return currentPageNo;
    }

    public void setCurrentPageNo(int currentPageNo) {
        if(currentPageNo > 0){
            this.currentPageNo = currentPageNo;
        }
    }

    public int getPageSize() {
        return pageSize;
    }

    public void setPageSize(int pageSize) {
        if(pageSize > 0 ){
            this.pageSize = pageSize;
        }
    }

    public int getTotalCount() {
        return totalCount;
    }

    public void setTotalCount(int totalCount) {
        if(totalCount > 0){
            this.totalCount = totalCount;
            setTotalPageCount(0);
        }
    }

    public int getTotalPageCount() {
        return totalPageCount;
    }

    public void setTotalPageCount(int totalPageCount) {
        if(totalCount % pageSize == 0){
            this.totalPageCount = totalCount / pageSize;
        }else if(totalCount % pageSize > 0){
            this.totalPageCount = totalCount / pageSize + 1;
        }else{
            this.totalPageCount = 0;
        }
    }
}
