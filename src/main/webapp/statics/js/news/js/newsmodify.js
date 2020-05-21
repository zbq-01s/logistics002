// 声明的全局变量
var title;
var content;
var createTime;
var createBy;
var modifyTime;
var modifyBy;
var picpath;


$(function () {
    // userCode = $("#userCode");
    title = $("#title");
    // userPassword = $("#userPassword");
    // ruserPassword = $("#ruserPassword");
    // gender = $("#gender");
    content = $("#content");
    createTime = $("#createTime");
    createBy = $("#createBy");
    modifyTime = $("#modifyTime");
    // update = $("#update");
    modifyBy = $("#modifyBy");
    picpath = $("#picpath");
    // modifyNews.bind("click",function () {
    //     var newsid = $(this).attr("newsid");
    //     window.location.href = path+"/user/modify?newsid="+newsid;
    // });
    // userCode.next().html("*");
    // userName.next().html("*");
    // userPassword.next().html("*");
    // ruserPassword.next().html("*");
    // gender.next().html("*");
    // birthday.next().html("*");
    // phone.next().html("*");
    // address.next().html("*");
    // userRole.next().html("*");

    //绑定返回
    $("#back").on("click", function () {
        history.back();
    });

    //校验userCode
    /*userCode.bind("focus",function () {
        $(this).next().css({"color":"blue"}).html("* 用户编码长度为6-10位");
    }).bind("blur",function () {
        var userCode = $(this).val();
        var userCodeRex = /^\w{6,10}$/;
        if(!userCodeRex.test(userCode)){
            $(this).attr("isVali",false).next().css({"color":"red"}).html(imgNo+"* 输入的长度非法");
        }else{
            $(this).attr("isVali",true).next().css({"color":"green"}).html(imgYes);
        }
    });*/
    /*//校验userName
    userName.bind("focus",function () {
        $(this).next().css({"color":"blue"}).html("* 用户姓名长度为2-5位");
    }).bind("blur",function () {
        var userCode = $(this).val();
        var userCodeRex = /^\S{2,5}$/;
        if(!userCodeRex.test(userCode)){
            $(this).attr("isVali",false).next().css({"color":"red"}).html(imgNo+"* 输入的长度非法");
        }else{
            $(this).attr("isVali",true).next().css({"color":"green"}).html(imgYes);
        }
    });
    //校验birthday
    birthday.bind("focus",function () {
        $(this).next().css({"color":"blue"}).html("* 生日不能大于今天");
    }).bind("blur",function () {
        var birthday = $(this).val();
        if(new Date(birthday) > new Date()){
            $(this).next().css({"color":"red"}).html(imgNo+"* 输入的生日不合法");
        }else{
            $(this).next().css({"color":"green"}).html(imgYes);
        }
    });
    //校验phone
    phone.bind("focus",function () {
        $(this).next().css({"color":"blue"}).html("* 必须是139,187或155打头的手机号");
    }).bind("blur",function () {
        var phone = $(this).val();
        var phoneRex = /^(139|187|155)\d{8}$/;
        if(!phoneRex.test(phone)){
            $(this).next().css({"color":"red"}).html(imgNo+"* 输入手机号不合法");
        }else{
            $(this).next().css({"color":"green"}).html(imgYes);
        }
    });
    //校验address
    address.bind("focus",function () {
        $(this).next().css({"color":"blue"}).html("* 用户地址长度为1-255位");
    }).bind("blur",function () {
        var address = $(this).val();
        var addressRex = /^\S{1,255}$/;
        if(!addressRex.test(address)){
            $(this).next().css({"color":"red"}).html(imgNo+"* 输入的长度非法");
        }else{
            $(this).next().css({"color":"green"}).html(imgYes);
        }
    });

    //提交校验
    add.bind("click",function () {
        if(!userName.attr("isVali")){
            userName.blur();
        }
        //此处省略4个
        else{
            $("#userForm").submit();
        }

    });*/
});