<%--
  Created by IntelliJ IDEA.
  User: tangjie
  Date: 2018/10/19
  Time: 9:10
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core"  prefix="c"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt"  prefix="fmt"%>
<c:set var="cssBaseUrl" value="${pageContext.request.contextPath}/statics/css/login_css/"></c:set>
<c:set var="imgBaseUrl" value="${pageContext.request.contextPath}/statics/image/login_img/"></c:set>
<c:set var="jsBaseUrl" value="${pageContext.request.contextPath}/statics/js/login_js/"></c:set>
<c:set var="layuiBaseUrl" value="${pageContext.request.contextPath}/statics/login_util/layui/"></c:set>
<script type="text/javascript">
    function getRootPath() {
        //获取当前网址，如： http://localhost:8088/test/test.jsp
        var curPath = window.document.location.href;
        //获取主机地址之后的目录，如： test/test.jsp
        var pathName = window.document.location.pathname;
        var pos = curPath.indexOf(pathName);
        //获取主机地址，如： http://localhost:8088
        var localhostPath = curPath.substring(0, pos);
        //获取带"/"的项目名，如：/test
        var projectName = pathName.substring(0, pathName.substr(1).indexOf('/') + 1);
        return localhostPath;//发布前用此
    }
</script>