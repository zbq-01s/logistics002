<%@ taglib prefix="shiro" uri="http://shiro.apache.org/tags" %>
<%--
  Created by IntelliJ IDEA.
  User: tangjie
  Date: 2018/10/21
  Time: 14:46
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<div class="left">

    <script type="text/javascript">
        var myMenu;
        window.onload = function() {
            myMenu = new SDMenu("my_menu");
            myMenu.init();
        };
    </script>
<div id="my_menu" class="sdmenu">
    <shiro:hasAnyRoles name="系统管理员,业务员">
    <div >
        <span>订单管理</span>
        <a href="${pageContext.request.contextPath}/order/orderList">订单查询</a>
        <%--<a href="#">票据补录</a>--%>
        <%--<a href="#">票单复核</a>--%>
        <%--<a href="#">货物配载</a>--%>
        <%--<a href="#">发车清单</a>--%>
        <%--<a href="#">到货确认</a>--%>
    </div>
    </shiro:hasAnyRoles>
    <%--<div class="collapsed">--%>
        <%--<span>统计</span>--%>
        <%--<a href="#">统计</a>--%>
    <%--</div>--%>
    <%--<div class="collapsed">--%>
        <%--<span>资金结算</span>--%>
        <%--<a href="#">提货登记</a>--%>
        <%--<a href="#">收款核销</a>--%>
        <%--<a href="#">现金转账</a>--%>
        <%--<a href="#">现付结算</a>--%>
        <%--<a href="#">返款结算</a>--%>
        <%--<a href="#">提付结算</a>--%>
        <%--<a href="#">浦发打卡</a>--%>
        <%--<a href="#">建行打卡</a>--%>
        <%--<a href="#">其他打卡</a>--%>
        <%--<a href="#">原返提货</a>--%>



    <%--</div>--%>

    <%--<div class="collapsed">--%>
        <%--<span>票据查询</span>--%>
        <%--<a href="#">票据查询</a>--%>
        <%--<a href="#">跟踪查询</a>--%>
        <%--<a href="#">车次查询</a>--%>

    <%--</div>--%>
    <%--<div class="collapsed">--%>
        <%--<span>数据统计</span>--%>
        <%--<a href="#">放款统计</a>--%>
        <%--<a href="#">综合统计</a>--%>
        <%--<a href="#">司机提成</a>--%>
        <%--<a href="#">收款详单</a>--%>
        <%--<a href="#">每日汇总</a>--%>
        <%--<a href="#">车辆运费</a>--%>
        <%--<a href="#">原返收款明细</a>--%>
        <%--<a href="#">现付确认详单</a>--%>
        <%--<a href="#">回单结算明细</a>--%>
        <%--<a href="#">返款确认明细</a>--%>
        <%--<a href="#">提付结算明细</a>--%>
        <%--<a href="#">分公司排行</a>--%>
        <%--<a href="#">浦发转帐统计</a>--%>
        <%--<a href="#">发货排行</a>--%>
        <%--<a href="#">建行转帐统计</a>--%>
        <%--<a href="#">其他转帐统计</a>--%>
        <%--<a href="#">分理处排行</a>--%>
        <%--<a href="#">分公司月运费对比</a>--%>
        <%--<a href="#">分理处月运费对比</a>--%>
        <%--<a href="#">线路货款未到排行</a>--%>
        <%--<a href="#">分公司入库报表</a>--%>
        <%--<a href="#">分公司收款日报</a>--%>
        <%--<a href="#">分公司当日库存</a>--%>
        <%--<a href="#">分公司往日库存</a>--%>
        <%--<a href="#">专线现付统计</a>--%>
        <%--<a href="#">专线分理处统计</a>--%>
        <%--<a href="#">分理处专线统计</a>--%>
        <%--<a href="#">货款回款率统计</a>--%>
        <%--<a href="#">线路运量</a>--%>

    <%--</div>--%>
    <%--<div class="collapsed">--%>
        <%--<span>单据管理</span>--%>
        <%--<a href="#">作废挂失</a>--%>
        <%--<a href="#">取消修改</a>--%>
        <%--<a href="#">修改清单</a>--%>
        <%--<a href="#">退单管理</a>--%>
        <%--<a href="#">转帐差错处理</a>--%>
        <%--<a href="#">运单修改查询</a>--%>
        <%--<a href="#">复核异常处理</a>--%>
        <%--<a href="#">运单修改</a>--%>
        <%--<a href="#">异常处理</a>--%>
        <%--<a href="#">单据备注</a>--%>

    <%--</div>--%>
    <shiro:hasRole name="系统管理员">
    <div class="collapsed">
        <span>系统管理</span>
        <%--<a href="#">线路管理</a>--%>
        <%--<a href="#">手续费设置</a>--%>
        <%--<a href="#">更改密码</a>--%>
        <%--<a href="#">系统日志</a>--%>
        <%--<a href="#">帐号管理</a>--%>
        <%--<a href="#">复核设置</a>--%>
        <%--<a href="#">部门管理</a>--%>
        <a href="${pageContext.request.contextPath}/role/goRole">角色管理</a>
        <%--<a href="${pageContext.request.contextPath}/user/userlist">用户管理</a>--%>
        <%--<a href="#">短信设置</a>--%>
        <%--<a href="#">短信发送</a>--%>
        <%--<a href="#">分理处分成设置</a>--%>
        <%--<a href="#">省价格设置</a>--%>
        <%--<a href="#">市价格设置</a>--%>
        <%--<a href="#">县价格设置</a>--%>

    </div>
    </shiro:hasRole>
    
    <shiro:hasAnyRoles name="运营,系统管理员">
    <div class="collapsed">
        <span>资讯管理</span>
        <a href="${pageContext.request.contextPath}/news/newslist">资讯列表</a>
        <%--<a href="#">回单查询</a>--%>
        <%--<a href="#">回单接收</a>--%>

    </div>
    </shiro:hasAnyRoles>
    
    <shiro:hasRole name="系统管理员">
    <div class="collapsed">
        <span>用户管理</span>
        <a href="${pageContext.request.contextPath}/user/userlist">用户查询</a>
        <%--<a href="#">科目管理</a>--%>
        <%--<a href="#">费用录入</a>--%>
        <%--<a href="#">费用统计</a>--%>
        <%--<a href="#">当日对账</a>--%>
        <%--<a href="#">往日对账</a>--%>
        <%--<a href="#">利润分成</a>--%>

    </div>
    </shiro:hasRole>

    <shiro:hasAnyRoles name="车辆管理员,系统管理员">
    <div>
        <span>车辆管理</span>
        <a href="${pageContext.request.contextPath}/car/carList">基本信息管理</a>
        <a href="${pageContext.request.contextPath}/distribution/distributionlist">配送记录</a>
        <a href="${pageContext.request.contextPath}/operation/carCostlist">费用记录</a>
        <a href="${pageContext.request.contextPath}/fache/peisong">订单配送</a>
    </div>
    </shiro:hasAnyRoles>
    <%--<div class="collapsed">--%>
        <%--<span>中转处理</span>--%>
        <%--<a href="#">中转操作</a>--%>
        <%--<a href="#">中转单修改</a>--%>
        <%--<a href="#">当日中转明细</a>--%>

    <%--</div>--%>
    <%--<div class="collapsed">--%>
        <%--<span>客户管理</span>--%>
        <%--<a href="#">客户投诉</a>--%>
        <%--<a href="#">投诉处理</a>--%>
        <%--<a href="#">投诉查询</a>--%>
        <%--<a href="#">客户关怀</a>--%>
        <%--<a href="#">积分查询</a>--%>
        <%--<a href="#">分理处排行</a>--%>
        <%--<a href="#">客户管理</a>--%>
        <%--<a href="#">理赔申请</a>--%>
        <%--<a href="#">理赔审核</a>--%>
        <%--<a href="#">理赔结算</a>--%>
        <%--<a href="#">理赔查询</a>--%>

    <%--</div>--%>
    <%--<div class="collapsed">--%>
        <%--<span>行政办公</span>--%>
        <%--<a href="#">文件管理</a>--%>
        <%--<a href="#">在线留言</a>--%>
        <%--<a href="#">人事管理</a>--%>
        <%--<a href="#">公告管理</a>--%>
        <%--<a href="#">罚款登记</a>--%>
        <%--<a href="#">滚动字幕</a>--%>

    <%--</div>--%>
    <div class="collapsed">
        <span>帮助</span>
        <a href="#">使用指南</a>
        <a href="#">友情提醒</a>
        <a href="#">在线客服</a>

    </div>
   <!--  <div class="collapsed">
        <span>更多</span>
        <a href="#">等待开发</a>
        <a href="#">等待开发</a>
        <a href="#">等待开发</a>
        <a href="#">等待开发</a>
        <a href="#">等待开发</a>

    </div> -->



</div>
</div>
<div class="Switch"></div>
<script type="text/javascript">
    $(document).ready(function(e) {
        $(".Switch").click(function(){
            $(".left").toggle();

        });
    });
</script>

