function page_nav(form, currentPageNo) {
    form.pageIndex.value = currentPageNo;
    //提交
    form.submit();
}

function jump_to(form, inputPage) {
    //01.输入的必输是数字，首位是1-9
    var inputRex = /^[1-9]\d*$/;
    if (!inputRex.test(inputPage.value)) {
        alert("请输入合法的数字！");
        return;
    }
    if (inputPage.value > document.getElementById("totalPageCount").value) {
        alert("不能超过总页数！");
        return;
    }

    form.pageIndex.value = inputPage.value;
    //提交
    form.submit();
}