var modifyNews;
var deleteNews;
var viewNews;
var path;

$(function () {
    modifyNews = $(".modifyNews");
    deleteNews = $(".deleteNews");
    viewNews = $(".viewNews");
    path = $("#qwer").val();
    modifyNews.bind("click", function () {
        var newsid = $(this).attr("newsid");
        window.location.href = getRootPath() + "/news/modify1?newsid=" + newsid;
    });

    // deleteUser.bind("click",function () {
    //
    //     $(".zhezhao").fadeIn(500);
    //     $("#removeUse").fadeIn(1000);
    //     var userId =  $(this).attr("userid");
    //     $("#yes").bind("click",function () {
    //         window.location.href = path+"/user/delete?userId="+userId;
    //         // $(".zhezhao").hide();
    //         // $("#removeUse").hide();
    //     });
    //     $("#no").bind("click",function () {
    //         $(".zhezhao").fadeOut(1000);
    //         $("#removeUse").fadeOut(500);
    //     });
    // });
    //

    /*//查看的点击事件
    viewNews.bind("click",function () {
        var newsid = $(this).attr("newsid");
        // window.location.href = path+"/user/modify?userId="+userId;
        // window.location.href = path+"/user/view/"+userId;

        $.ajax({
            type:'GET',
            url:path+'/news/modify/'+ newsid,
            data:{},
            dataType:'json',
            success:function (result) {
                // console.log(result);
                if(result != null ){
                    $("#id").html(result.id);
                    $("#title").html(result.title);
                    // if(result.gender == 1){
                    //     $("#gender").html("女");
                    // }else {
                    //     $("#gender").html("男");
                    // }
                    $("#content").html(result.content);
                    $("#createTime").html(result.createTime);
                    $("#createBy").html(result.createBy);
                    $("#modifyTime").html(result.modifyTime);
                    $("#modifyBy").html(result.modifyBy);
                    $("#picpath").attr("src",path+result.picpath);
                }
            },
            error:function () {
                alert("查询新闻信息异常！");
            }
        });
    });*/
});

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
