<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%--
  Created by IntelliJ IDEA.
  User: yzj
  Date: 2018/10/27
  Time: 16:35
  To change this template use File | Settings | File Templates.
--%>


<%--标题--%>


<div class="wrapper">
<c:forEach var="news" items="${news}" varStatus="status" begin="0" end="3">
    <a href="http://www.sf-express.com/cn/sc/news/detail/The-Big-Data-World-Cup-Is-Coming-Up-Official-Opening-of-the-2018-Win-in-Dongguan-Global-Big-Data-Innovation-and-Entrepreneurship-Competition/"
       class="box-link box-link-first" name="/cn/.content/news/news_2018/20180712.xml"
       title="${news.title}">

        <script type="text/javascript">
            var filename = "../en/News/detail/The-Big-Data-World-Cup-Is-Coming-Up-Official-Opening-of-the-2018-Win-in-Dongguan-Global-Big-Data-Innovation-and-Entrepreneurship-Competition/";
            var href = filename.replace("/en/", "/sc/");
            $("a[name='/cn/.content/News/news_2018/20180712.xml']").attr("href", href);
        </script>
        <img class="titlePage" src="${spBaseUrl}${news.picpath}">
        <div>

            <span> ${news.title}</span>

            <p> ${news.content}<b>[详情]</b></p>

        </div>
    </a>
</c:forEach>
</div>




