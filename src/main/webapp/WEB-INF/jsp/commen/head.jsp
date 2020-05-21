<%--
  Created by IntelliJ IDEA.
  User: tangjie
  Date: 2018/10/21
  Time: 14:49
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@include file="/WEB-INF/jsp/tag_all.jsp"%>
<div class="header">
    <div class="logo"><img  src="${imgBaseUrl}img/tangDogDog.png" /></div>

    <div class="header-right">
       <i class="icon-question-sign icon-white"></i> 
        <a href="#">帮助</a> <i class="icon-off icon-white"></i>
        <a id="modal-973558" href="#modal-container-973558" role="button" data-toggle="modal">注销</a> 
        <!-- <i class="icon-user icon-white"></i> <a href="#">开票员的工作平台</a>  -->
        <!-- <i class="icon-envelope icon-white"></i> <a href="#">发送短信</a> -->
        <div id="modal-container-973558" class="modal hide fade" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true" style="width:300px; margin-left:-150px; top:30%">
            <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>
                <h3 id="myModalLabel">
                    注销系统
                </h3>
            </div>
            <div class="modal-body">
                <p>
                    您确定要注销退出系统吗？
                </p>
            </div>
            <div class="modal-footer">
                <input type="hidden" name="path" id="path" value="${pageContext.request.contextPath }">
                <button class="btn" data-dismiss="modal" aria-hidden="true">关闭</button> <a class="btn btn-primary" style="line-height:20px;" href="javascript:;" id="quit_sys">确定退出</a>
            </div>
        </div>
    </div>
</div>

<script type="text/javascript">
    $("#quit_sys").click(function () {
//        $.ajax({
//            url: $("#path").val()+"/quitsystem",
//            async : true,
//            type: "post",
//
//            data: {"number":1},
//            success: function (data) {
//                if(data.responseText == "success"){
//                    window.location.href = $("#path").val()+"/login";
//                }else if(data.responseText == "fail"){
//                    window.location.href = $("#path").val()+"/login";
//                }
//            },
//            error:function (data) {
//                window.location.href = $("#path").val()+"/login";
//            }
//        });

        window.location.href = "${pageContext.request.contextPath}/logout";
    });

</script>
