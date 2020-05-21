<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@include file="/WEB-INF/jsp/tag_all.jsp" %>
<!DOCTYPE html>
<!-- saved from url=(0089)http://www.sf-express.com/cn/sc/dynamic_function/waybill/#search/bill-number/231194017861 -->
<html class=" js flexbox flexboxlegacy canvas canvastext webgl no-touch geolocation postmessage websqldatabase indexeddb hashchange history draganddrop websockets rgba hsla multiplebgs backgroundsize borderimage borderradius boxshadow textshadow opacity cssanimations csscolumns cssgradients cssreflections csstransforms no-csstransforms3d csstransitions fontface generatedcontent video audio localstorage sessionstorage webworkers applicationcache svg inlinesvg smil svgclippaths">
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <style type="text/css" class="AMap.style">.vml {
        behavior: url(#default#VML);
        display: inline-block;
        position: absolute
    }

    .amap-custom {
        top: 0;
        left: 0;
        position: absolute
    }

    .amap-container img {
        max-width: none !important;
        max-height: none !important
    }

    .amap-container {
        touch-action: none;
        position: relative;
        overflow: hidden;
        background: #fcf9f2 url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAfQAAAH0AgMAAAC2uDcZAAAADFBMVEX////////////////1pQ5zAAAABHRSTlMAgP/AWuZC2AAAAVhJREFUeAFiYGAQYGDEQjAB2rcDC4BiGIqiU7abdKlO2QkeIClyPsDHweMKtOPHIJ1Op6/w7Y4fdqfT6VpndzqdrnV2p9PpWmd3Oj3qWndSoKp+2J1Op7vr7E6n07XO7nQ6XevsTqfTtc7udPo4/f787E6n0911dqfT6VpndzqdrnV2p9PpWmd3Ot27Ce8m6HS6u85dR6fTtU7r6HS61mkdnU7XOrvT6XTvJuxOp9PddXan0+laZ3c6na51dDpd67SOTqd7N+HdBJ1Od9e56+h0utZpHZ1O1zq70+l0rbM7nU73bsLudDrdXWd3Ol3rtI5Op2ud1tHpdK3TOjqd7t2EdxN0Ot1dZ3c6na51dqfT6VpndzqdrnV2p9Pp3k3Q6XR3nbuOTqdrndbR6XSt0zo6na51Wken072bsDudTnfX2Z1Op2ud3el0utbZnU7XOq2j0+t0uncTD1gO4zoT5doZAAAAAElFTkSuQmCC);
        -ms-touch-action: none
    }

    .amap-drags, .amap-layers {
        width: 100%;
        height: 100%;
        position: absolute;
        overflow: hidden
    }

    .amap-layer img {
        pointer-events: none
    }

    .amap-e, .amap-maps {
        width: 100%;
        height: 100%
    }

    .amap-maps, .amap-e, .amap-layers, .amap-tile, .amap-tile-container {
        position: absolute;
        left: 0;
        top: 0;
        overflow: hidden
    }

    .amap-context {
        position: absolute;
        left: 0;
        top: 0
    }

    .amap-overlays, .amap-markers, .amap-marker {
        position: absolute;
        left: 0;
        top: 0
    }

    .amap-layers {
        z-index: 0
    }

    .amap-overlays {
        z-index: 110;
        cursor: default
    }

    .amap-markers {
        z-index: 120
    }

    .amap-controls {
        z-index: 150
    }

    .amap-copyright {
        position: absolute;
        display: block !important;
        left: 77px;
        height: 16px;
        bottom: 0;
        padding-bottom: 3px;
        font-size: 11px;
        font-family: Arial, sans-serif;
        z-index: 160
    }

    .amap-logo {
        position: absolute;
        bottom: 1px;
        left: 1px;
        z-index: 160;
        height: 20px
    }

    .amap-logo img {
        width: 73px !important;
        height: 20px !important;
        border: 0;
        vertical-align: baseline !important
    }

    .amap-icon {
        position: relative;
        z-index: 1;
        overflow: hidden
    }

    .amap-icon img {
        position: absolute;
        z-index: -1
    }

    .amap-marker-label {
        position: absolute;
        z-index: 2;
        border: 1px solid blue;
        background-color: white;
        white-space: nowrap;
        cursor: default;
        padding: 3px;
        font-size: 12px;
        line-height: 14px
    }

    .amap-info {
        position: absolute;
        left: 0;
        z-index: 140;
        width: 320px
    }

    .amap-menu {
        position: absolute;
        z-index: 140;
        _width: 100px
    }

    .amap-info-close {
        position: absolute;
        right: 5px;
        _right: 12px;
    + right: 11 px;
        top: 5px;
        _top: 2px;
    + top: 2 px;
        color: #c3c3c3;
        text-decoration: none;
        font: bold 16px/14px Tahoma, Verdana, sans-serif;
        width: 14px;
        height: 14px
    }

    .amap-info-outer, .amap-menu-outer {
        box-shadow: 0 3px 14px rgba(0, 0, 100, 0.6);
        background: none repeat scroll 0 0 white;
        border-radius: 2px;
        padding: 1px;
        text-align: left;
        border: #c0c0c0 solid 1px
    }

    .amap-info-outer:hover, .amap-menu-outer:hover {
        box-shadow: 0 3px 14px rgba(0, 0, 0, 0.75)
    }

    .amap-info-content {
        background: #fff;
        border: 1px solid #ccc;
        padding: 10px 18px 10px 10px;
    + margin: 0 10 px;
    + padding: 10 px 0;
        line-height: 1.4;
        overflow: auto
    }

    .amap-marker-content {
        position: relative
    }

    .amap-info {
        _width: 320px
    }

    .amap-menu {
        _width: 100px
    }

    .amap-info-sharp {
        height: 23px;
        margin: 0 auto;
        overflow: hidden;
        position: relative;
        top: -1px;
        width: 30px;
        background-image: url(https://webapi.amap.com/theme/v1.3/sharp.png);
        _background-image: url(https://webapi.amap.com/theme/v1.3/sharp.gif)
    }

    .amap-menu-outer {
        margin: 0;
        padding: 0;
        list-style-type: none
    }

    ul.amap-menu-outer li {
        cursor: pointer;
        height: 35px;
        line-height: 35px;
        word-break: break-all;
        padding: 0 10px;
        font-size: 12px;
        white-space: nowrap
    }

    ul.amap-menu-outer li a {
        text-decoration: none;
        font-size: 13px;
        margin: 0 5px;
        color: #000;
        padding: 5px 5px
    }

    ul.amap-menu-outer li:hover {
        background-color: #f3f3ee
    }

    .amap-overlay-text-container {
        display: block;
        width: auto;
        word-break: keep-all;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        background: #fff;
        padding: 2px 3px;
        border: 1px solid #ccc;
        border-radius: 3px
    }

    .amap-overlay-text-container.amap-overlay-text-empty {
        display: none
    }</style>
    <style type="text/css">.amap-indoor-map .label-canvas {
        position: absolute;
        top: 0;
        left: 0
    }

    .amap-indoor-map .highlight-image-con * {
        pointer-events: none
    }

    .amap-indoormap-floorbar-control {
        position: absolute;
        margin: auto 0;
        bottom: 165px;
        right: 12px;
        width: 35px;
        text-align: center;
        line-height: 1.3em;
        overflow: hidden;
        padding: 0 2px
    }

    .amap-indoormap-floorbar-control .panel-box {
        background-color: rgba(255, 255, 255, .9);
        border-radius: 3px;
        border: 1px solid #ccc
    }

    .amap-indoormap-floorbar-control .select-dock {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        box-sizing: border-box;
        height: 30px;
        border: solid #4196ff;
        border-width: 0 2px;
        border-radius: 2px;
        pointer-events: none;
        background: linear-gradient(to bottom, #f6f8f9 0, #e5ebee 50%, #d7dee3 51%, #f5f7f9 100%)
    }

    .amap-indoor-map .transition {
        transition: opacity .2s
    }

    ,
    .amap-indoormap-floorbar-control .transition {
        transition: top .2s, margin-top .2s
    }

    .amap-indoormap-floorbar-control .select-dock:after, .amap-indoormap-floorbar-control .select-dock:before {
        content: "";
        position: absolute;
        width: 0;
        height: 0;
        left: 0;
        top: 10px;
        border: solid transparent;
        border-width: 4px;
        border-left-color: #4196ff
    }

    .amap-indoormap-floorbar-control .select-dock:after {
        right: 0;
        left: auto;
        border-left-color: transparent;
        border-right-color: #4196ff
    }

    .amap-indoormap-floorbar-control.is-mobile {
        width: 37px
    }

    .amap-indoormap-floorbar-control.is-mobile .floor-btn {
        height: 35px;
        line-height: 35px
    }

    .amap-indoormap-floorbar-control.is-mobile .select-dock {
        height: 35px;
        top: 36px
    }

    .amap-indoormap-floorbar-control.is-mobile .select-dock:after, .amap-indoormap-floorbar-control.is-mobile .select-dock:before {
        top: 13px
    }

    .amap-indoormap-floorbar-control.is-mobile .floor-list-box {
        height: 105px
    }

    .amap-indoormap-floorbar-control .floor-list-item .floor-btn {
        color: #555;
        font-family: "Times New Roman", sans-serif, "Microsoft Yahei";
        font-size: 16px
    }

    .amap-indoormap-floorbar-control .floor-list-item.selected .floor-btn {
        color: #000
    }

    .amap-indoormap-floorbar-control .floor-btn {
        height: 28px;
        line-height: 28px;
        overflow: hidden;
        cursor: pointer;
        position: relative;
        -webkit-touch-callout: none;
        -webkit-user-select: none;
        -khtml-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none
    }

    .amap-indoormap-floorbar-control .floor-btn:hover {
        background-color: rgba(221, 221, 221, .4)
    }

    .amap-indoormap-floorbar-control .floor-minus, .amap-indoormap-floorbar-control .floor-plus {
        position: relative;
        text-indent: -1000em
    }

    .amap-indoormap-floorbar-control .floor-minus:after, .amap-indoormap-floorbar-control .floor-plus:after {
        content: "";
        position: absolute;
        margin: auto;
        top: 9px;
        left: 0;
        right: 0;
        width: 0;
        height: 0;
        border: solid transparent;
        border-width: 10px 8px;
        border-top-color: #777
    }

    .amap-indoormap-floorbar-control .floor-minus.disabled, .amap-indoormap-floorbar-control .floor-plus.disabled {
        opacity: .3
    }

    .amap-indoormap-floorbar-control .floor-plus:after {
        border-bottom-color: #777;
        border-top-color: transparent;
        top: -3px
    }

    .amap-indoormap-floorbar-control .floor-list-box {
        max-height: 153px;
        position: relative;
        overflow-y: hidden
    }

    .amap-indoormap-floorbar-control .floor-list {
        margin: 0;
        padding: 0;
        list-style: none
    }

    .amap-indoormap-floorbar-control .floor-list-item {
        position: relative
    }

    .amap-indoormap-floorbar-control .floor-btn.disabled, .amap-indoormap-floorbar-control .floor-btn.disabled *, .amap-indoormap-floorbar-control.with-indrm-loader * {
        -webkit-pointer-events: none !important;
        pointer-events: none !important
    }

    .amap-indoormap-floorbar-control .with-indrm-loader .floor-nonas {
        opacity: .5
    }

    .amap-indoor-map-moverf-marker {
        color: #555;
        background-color: #FFFEEF;
        border: 1px solid #7E7E7E;
        padding: 3px 6px;
        font-size: 12px;
        white-space: nowrap;
        display: inline-block;
        position: absolute;
        top: 1em;
        left: 1.2em
    }

    .amap-indoormap-floorbar-control .amap-indrm-loader {
        -moz-animation: amap-indrm-loader 1250ms infinite linear;
        -webkit-animation: amap-indrm-loader 1250ms infinite linear;
        animation: amap-indrm-loader 1250ms infinite linear;
        border: 2px solid #91A3D8;
        border-right-color: transparent;
        box-sizing: border-box;
        display: inline-block;
        overflow: hidden;
        text-indent: -9999px;
        width: 13px;
        height: 13px;
        border-radius: 7px;
        position: absolute;
        margin: auto;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0
    }

    @-moz-keyframes amap-indrm-loader {
        0% {
            -moz-transform: rotate(0deg);
            transform: rotate(0deg)
        }
        100% {
            -moz-transform: rotate(360deg);
            transform: rotate(360deg)
        }
    }

    @-webkit-keyframes amap-indrm-loader {
        0% {
            -webkit-transform: rotate(0deg);
            transform: rotate(0deg)
        }
        100% {
            -webkit-transform: rotate(360deg);
            transform: rotate(360deg)
        }
    }

    @keyframes amap-indrm-loader {
        0% {
            -moz-transform: rotate(0deg);
            -ms-transform: rotate(0deg);
            -webkit-transform: rotate(0deg);
            transform: rotate(0deg)
        }
        100% {
            -moz-transform: rotate(360deg);
            -ms-transform: rotate(360deg);
            -webkit-transform: rotate(360deg);
            transform: rotate(360deg)
        }
    }</style>


    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">

    <meta name="renderer" content="webkit">


    <!--[if lt IE 9]>

    <div id="old-ie-hint"><p class='lt-ie8'>很抱歉，您使用的浏览器暂不支持，将为您的使用带来不便。请更换或升级为IE8以上、Chrome、Firefox、Safari进行浏览。<a
            href="#" onclick="javascript:$('p.lt-ie8')/statics/image/order_img('display','none'); ">取消</a></p></div>
    <script language="JavaScript">
        (function () {
            var test = /access-type=(\d)/.exec(document.cookie);
            var accessType = test ? test[1] : null;
            if (accessType === "1") {
                document.getElementById("old-ie-hint").innerHTML = "很抱歉，您当前的浏览器版本过低，网站无法正常显示。 请点击<a href='http://10.0.11.111:8080/Chrome_V20_11.exe'>下载谷歌浏览器</a>，下载后点击“运行”自动安装。<br /> 如您的浏览器版本已经是IE10及以上，请关闭兼容模式视图：点击右上角“工具”->兼容性视图>在弹出窗口中取消勾选兼容性视图选项。<br />感谢您对F35速运的支持与关注！";
            }
        })();
    </script>

    <![endif]-->
    <title>运单追踪 </title>
    <meta name="description" content="">
    <meta name="keywords" content="">
    <meta name="viewport" content="width=device-width">
    <link rel="shortcut icon" href="#">


    <script async="" src="/statics/js/order_js/gtm.js"></script>
    <script src="/statics/js/order_js/hm.js"></script>
    <script>
        (function (window) {
            var cmsConfig = {
                "root": {
                    "cn": {
                        "en": "../../../en",
                        "sc": "../../../sc"
                    },
                    "tw": {
                        "en": "../../../../tw/en",
                        "tc": "../../../../tw/tc"
                    },
                    "hk": {
                        "tc": "../../../../hk/tc",
                        "sc": "../../../../hk/sc",
                        "en": "../../../../hk/en"
                    },
                    "sg": {
                        "sc": "../../../../sg/sc",
                        "en": "../../../../sg/en"
                    },
                    "my": {
                        "sc": "../../../../my/sc",
                        "en": "../../../../my/en"
                    },
                    "us": {
                        "sc": "../../../../us/sc",
                        "en": "../../../../us/en"
                    },
                    "ru": {
                        "ru": "../../../../ru/ru",
                        "sc": "../../../../ru/sc",
                        "en": "../../../../ru/en"
                    },
                    "jp": {
                        "ja": "../../../../jp/ja",
                        "sc": "../../../../jp/sc",
                        "en": "../../../../jp/en"
                    },
                    "kr": {
                        "ko": "../../../../kr/ko",
                        "sc": "../../../../kr/sc",
                        "en": "../../../../kr/en"
                    },
                    "gb": {
                        "sc": "../../../../gb/sc",
                        "en": "../../../../gb/en"
                    },
                    "au": {
                        "sc": "../../../../au/sc",
                        "en": "../../../../au/en"
                    },
                    "vn": {
                        "vi": "../../../../vn/vi",
                        "sc": "../../../../vn/sc",
                        "en": "../../../../vn/en"
                    },
                    "fr": {
                        "fr": "../../../../fr/fr",
                        "sc": "../../../../fr/sc",
                        "en": "../../../../fr/en"
                    },
                    "de": {
                        "de": "../../../../de/de",
                        "sc": "../../../../de/sc",
                        "en": "../../../../de/en"
                    },
                    "th": {
                        "th": "../../../../th/th",
                        "sc": "../../../../th/sc",
                        "en": "../../../../th/en"
                    }
                },
                "dynamicServerContext": 'http://www.sf-express.com/sf-service-owf-web/service',
                "dynamicBackUrl": 'http://origin.sf-express.com',
                "resourcePath": "../../../../resource/",
                "region": "cn",
                "language": "sc",
                "sfMapSrc": 'null',
                "sfgatherHost": 'https://inc-ubas-web.sf-express.com/json_data',
                "googleSrc": 'https://maps.google.com/maps/api/js?v=3.15&sensor=false&libraries=drawing,geometry&client=gme-sfexpress1',
                "mapSrc": 'https://webapi.amap.com/maps?v=1.4.3&plugin=AMap.PlaceSearch&key=04e70f978f9d7314e3ef367f5071cf6c',
                "gisDomain": 'https://gis.sf-express.com',
                "sfCloudDomain": 'null',
                "ucmpOrderRemoteUrl": 'http://ucmp-entrance.sf-express.com/',
                "ucmpWx": 'https://ucmp.sf-express.com/',
                "ucmpX": 'https://ucmp-x.sf-express.com/'
            };
            window._cmsConfig = cmsConfig;
        })(window);
    </script>
    <link href="/statics/css/order_css/mainOrder.css" rel="stylesheet">
    <script type="text/javascript" src="/statics/js/order_js/jquery-1.11.3.js"></script>
    <!--手机适配-->


    <script type="text/javascript">
        if (/Android (\d+\.\d+)/.test(navigator.userAgent)) {
            var version = parseFloat(RegExp.$1);
            if (version > 2.3) {
                var phoneScale = parseInt(window.screen.width) / 640;
                document.write('<meta name="viewport" content="width=640, minimum-scale = ' + phoneScale + ', maximum-scale = ' + phoneScale + ', target-densitydpi=device-dpi">');
            } else {
                document.write('<meta name="viewport" content="width=640, target-densitydpi=device-dpi">');
            }
        } else {
            document.write('<meta name="viewport" content="width=640, user-scalable=no">');
        }
    </script>
    <meta name="viewport" content="width=640, user-scalable=no">

    <script type="text/javascript" async="" src="/statics/js/order_js/JsonMsg.js"></script>
    <script type="text/javascript" async="" src="/statics/js/order_js/TCapIframe.js"></script>
    <link rel="stylesheet" type="text/css" href="/statics/css/order_css/tcaptcha_animation.css">
    <style type="text/css">.amap-container {
        cursor: url(https://webapi.amap.com/theme/v1.3/openhand.cur), default;
    }

    .amap-drag {
        cursor: url(https://webapi.amap.com/theme/v1.3/closedhand.cur), default;
    }</style>
    <script charset="utf-8" src="/statics/css/order_css/modules"></script>
</head>
<body class="language-sc">

<!--[if lt IE 9]>
<script src="../../../../resource/scripts/vendor/json2.js"></script>
<script src="../../../../resource/scripts/vendor/html5.js"></script>
<script
        src="../../../../resource/scripts/vendor/respond.min.js"></script>
<![endif]-->


<div id="header">


    <div class="topheader">


        <a class="logo" href="${pageContext.request.contextPath}/F35Index"><img src="${imgBaseUrl}index_img/timg.png" alt="F35速运"></a>

        <ul class="topleft">
            <li class="topli"><a href="${pageContext.request.contextPath}/F35Index" class="topa">首页</a></li>


<!--            <li class="topli">
                <a href="javascript:void(0)" class="topa nolink" aria-haspopup="true" aria-expanded="false">物流</a>


                <div class="dropdown">
                    <div class="dropdownInner">
                        <div class="innerWrapper">


                            <table class="part1">
                                <tbody>
                                <tr>
                                    <td class="title1" colspan="6"><span class="ico fast"></span>
                                        快递服务
                                    </td>
                                </tr>
                                <tr>


                                    <td>
                                        <p class="title2">同城</p>
                                        <ul class="part2">


                                            <li>
                                                <a href="http://www.sf-express.com/cn/sc/express/express_service/city_distribution/SF_Rush/">F35同城急送</a>
                                            </li>


                                        </ul>
                                    </td>


                                    <td>
                                        <p class="title2">内地及港澳台</p>
                                        <ul class="part2">


                                            <li>
                                                <a href="http://www.sf-express.com/cn/sc/express/express_service/mainland_area/one_day_arrve/">F35即日</a>
                                            </li>


                                            <li>
                                                <a href="http://www.sf-express.com/cn/sc/express/express_service/mainland_area/next_morning_arrve/">F35次晨</a>
                                            </li>


                                            <li>
                                                <a href="http://www.sf-express.com/cn/sc/express/express_service/mainland_area/next_day_arrve2/">F35标快</a>
                                            </li>


                                            <li>
                                                <a href="http://www.sf-express.com/cn/sc/express/express_service/mainland_area/next_day_arrve/">F35特惠</a>
                                            </li>


                                            <li>
                                                <a href="http://www.sf-express.com/cn/sc/express/express_service/mainland_area/transportation/">物流普运</a>
                                            </li>


                                            <li>
                                                <a href="http://www.sf-express.com/cn/sc/express/express_service/mainland_area/cargo_express/">重货快运</a>
                                            </li>


                                            <li>
                                                <a href="http://www.sf-express.com/cn/sc/express/express_service/mainland_area/special_cargo_express/">重货专运</a>
                                            </li>


                                            <li>
                                                <a href="http://www.sf-express.com/cn/sc/express/express_service/mainland_area/Heavy_Freight_Package/">重货包裹</a>
                                            </li>


                                            <li>
                                                <a href="http://www.sf-express.com/cn/sc/express/express_service/mainland_area/Small_size_LTL/">小票零担</a>
                                            </li>


                                            <li>
                                                <a href="http://www.sf-express.com/cn/sc/express/express_service/mainland_area/EC_Ship/">E顺递</a>
                                            </li>


                                        </ul>
                                    </td>


                                    <td>
                                        <p class="title2">国际</p>
                                        <ul class="part2">


                                            <li>
                                                <a href="http://www.sf-express.com/cn/sc/express/express_service/international/standard_fast/">国际标快</a>
                                            </li>


                                            <li>
                                                <a href="http://www.sf-express.com/cn/sc/express/express_service/international/international_ex/">国际特惠</a>
                                            </li>


                                            <li>
                                                <a href="http://www.sf-express.com/cn/sc/express/express_service/international/international_packet/">国际小包</a>
                                            </li>


                                            <li>
                                                <a href="http://www.sf-express.com/cn/sc/express/express_service/international/International_cargo/">国际重货</a>
                                            </li>


                                            <li>
                                                <a href="http://www.sf-express.com/cn/sc/express/express_service/international/electricity_express/">国际电商专递</a>
                                            </li>


                                            <li>
                                                <a href="http://www.sf-express.com/cn/sc/express/express_service/international/sfbuy/">海购丰运</a>
                                            </li>


                                            <li>
                                                <a href="http://www.sf-express.com/cn/sc/express/express_service/international/sign_service/">签收确认服务</a>
                                            </li>


                                            <li>
                                                <a href="http://www.sf-express.com/cn/sc/express/express_service/international/overseas_warehouse/">海外仓</a>
                                            </li>


                                            <li><a href="http://intl.sf-express.com/" target="_blank">前往国际网站</a></li>


                                        </ul>
                                    </td>


                                    <td>
                                        <p class="title2">增值服务</p>
                                        <ul class="part2">


                                            <li>
                                                <a href="http://www.sf-express.com/cn/sc/express/express_service/added_service/insured/">普通保价</a>
                                            </li>


                                            <li>
                                                <a href="http://www.sf-express.com/cn/sc/express/express_service/added_service/Highly_Secured_Express_Service/">特安服务</a>
                                            </li>


                                            <li>
                                                <a href="http://www.sf-express.com/cn/sc/express/express_service/added_service/collection_payment/">代收货款</a>
                                            </li>


                                            <li>
                                                <a href="http://www.sf-express.com/cn/sc/express/express_service/added_service/gross_return/">签单返还</a>
                                            </li>


                                            <li>
                                                <a href="http://www.sf-express.com/cn/sc/express/express_service/added_service/packaging_services/">包装服务</a>
                                            </li>


                                            <li>
                                                <a href="http://www.sf-express.com/cn/sc/express/express_service/added_service/commissioned_piece/">委托收件</a>
                                            </li>


                                            <li>
                                                <a href="http://www.sf-express.com/cn/sc/express/express_service/added_service/reverse_logistics/">逆向物流</a>
                                            </li>


                                            <li>
                                                <a href="http://www.sf-express.com/cn/sc/express/express_service/added_service/special_warehousing/">特殊入仓</a>
                                            </li>


                                            <li>
                                                <a href="http://www.sf-express.com/cn/sc/express/express_service/added_service/delivery_upstairs/">送货上楼</a>
                                            </li>


                                        </ul>
                                    </td>


                                    <td>
                                        <p class="title2">&nbsp;</p>
                                        <ul class="part2">


                                            <li>
                                                <a href="http://www.sf-express.com/cn/sc/express/express_service/added_service/formal_customs_declaration/">正式报关</a>
                                            </li>


                                            <li>
                                                <a href="http://www.sf-express.com/cn/sc/express/express_service/added_service/electronic_acceptance/">电子验收</a>
                                            </li>


                                            <li>
                                                <a href="http://www.sf-express.com/cn/sc/express/express_service/added_service/original_return/">原单退回</a>
                                            </li>


                                            <li>
                                                <a href="http://www.sf-express.com/cn/sc/express/express_service/added_service/timing_delivery/">定时派送</a>
                                            </li>


                                            <li>
                                                <a href="http://www.sf-express.com/cn/sc/express/express_service/added_service/collection_payment/">垫付货款</a>
                                            </li>


                                            <li>
                                                <a href="http://www.sf-express.com/cn/sc/express/express_service/added_service/policy_distribution/">保单配送</a>
                                            </li>


                                            <li>
                                                <a href="http://www.sf-express.com/cn/sc/express/express_service/added_service/To-door-Large-size-Shipment-Delivery/">大件入戶</a>
                                            </li>


                                        </ul>
                                    </td>


                                    <td>
                                        <p class="title2">&nbsp;</p>
                                        <ul class="part2">


                                            <li>
                                                <a href="http://www.sf-express.com/cn/sc/express/express_service/added_service/extra_long_overweight_surcharge/">超长超重附加费</a>
                                            </li>


                                            <li>
                                                <a href="http://www.sf-express.com/cn/sc/express/express_service/added_service/holiday_service/">节假日服务</a>
                                            </li>


                                            <li>
                                                <a href="http://www.sf-express.com/cn/sc/express/express_service/added_service/non_industrial_service_fee/">住宅附加费</a>
                                            </li>


                                            <li>
                                                <a href="http://www.sf-express.com/cn/sc/express/express_service/added_service/fuel_surcharge/">燃油附加费</a>
                                            </li>


                                            <li>
                                                <a href="http://www.sf-express.com/cn/sc/express/express_service/added_service/Delivery-Address-Correction-Service/">派件地址变更</a>
                                            </li>


                                            <li>
                                                <a href="http://www.sf-express.com/cn/sc/express/express_service/added_service/change_payment_method/">更改付款方式</a>
                                            </li>


                                            <li>
                                                <a href="http://www.sf-express.com/cn/sc/express/express_service/added_service/SF_Certified_International_Shipping/">F35国际直邮认证服务</a>
                                            </li>


                                            <li>
                                                <a href="http://www.sf-express.com/cn/sc/express/express_service/added_service/Shipment_Storage_Surcharge/">货物保管附加费</a>
                                            </li>


                                        </ul>
                                    </td>


                                </tr>
                                </tbody>
                            </table>


                            <table class="part1">

                                <tbody>
                                <tr>
                                    <td class="title1" colspan="2"><span class="ico cold"></span>

                                        冷运服务

                                    </td>
                                </tr>
                                <tr>


                                    <td>
                                        <p class="title2">食品服务</p>
                                        <ul class="part2">


                                            <li>
                                                <a href="http://www.sf-express.com/cn/sc/express/cold_service/food_service/fresh_match/">生鲜速配</a>
                                            </li>


                                            <li>
                                                <a href="http://www.sf-express.com/cn/sc/express/cold_service/food_service/coldchainexpress/">冷仓速配</a>
                                            </li>


                                            <li>
                                                <a href="http://www.sf-express.com/cn/sc/express/cold_service/food_service/crab_courier/">大闸蟹专递</a>
                                            </li>


                                            <li>
                                                <a href="http://www.sf-express.com/cn/sc/express/cold_service/food_service/cold_shipped_home/">冷冻到家</a>
                                            </li>


                                            <li>
                                                <a href="http://www.sf-express.com/cn/sc/express/cold_service/food_service/cold_shipped_store/">冷运到店</a>
                                            </li>


                                            <li>
                                                <a href="http://www.sf-express.com/cn/sc/express/cold_service/food_service/cold_transport_ltl/">F35冷运零担</a>
                                            </li>


                                            <li>
                                                <a href="http://www.sf-express.com/cn/sc/express/cold_service/food_service/cold_transport_car/">冷运专车</a>
                                            </li>


                                            <li>
                                                <a href="http://www.sf-express.com/cn/sc/express/cold_service/food_service/cold_storage/">冷运仓储</a>
                                            </li>


                                        </ul>
                                    </td>


                                    <td>
                                        <p class="title2">医药服务</p>
                                        <ul class="part2">


                                            <li>
                                                <a href="http://www.sf-express.com/cn/sc/express/cold_service/medical_service/room_temperature/">医药安心递</a>
                                            </li>


                                            <li>
                                                <a href="http://www.sf-express.com/cn/sc/express/cold_service/medical_service/temperature_control/">医药专递</a>
                                            </li>


                                            <li>
                                                <a href="http://www.sf-express.com/cn/sc/express/cold_service/medical_service/shunfeng_pharmaceutical/">F35医药零担</a>
                                            </li>


                                            <li>
                                                <a href="http://www.sf-express.com/cn/sc/express/cold_service/medical_service/special_medicine/">医药专车</a>
                                            </li>


                                            <li>
                                                <a href="http://www.sf-express.com/cn/sc/express/cold_service/medical_service/medicine_storage/">医药仓储</a>
                                            </li>


                                        </ul>
                                    </td>


                                </tr>
                                </tbody>
                            </table>


                            <table class="part1">

                                <tbody>
                                <tr>
                                    <td class="title1"><span class="ico house"></span>

                                        仓储服务

                                    </td>
                                </tr>
                                <tr>


                                </tr>
                                <tr>
                                    <td>
                                        <p class="title2">仓储服务</p>
                                        <ul class="part2">


                                            <li>
                                                <a href="http://www.sf-express.com/cn/sc/express/storage_service/storage_services/warehouse_management/">标准化仓储管理</a>
                                            </li>


                                            <li>
                                                <a href="http://www.sf-express.com/cn/sc/express/storage_service/storage_services/storage_core_competence/">仓储核心能力</a>
                                            </li>


                                        </ul>
                                    </td>
                                </tr>


                                </tbody>
                            </table>


                        </div>
                        <div class="grayright">
                            <ul class="part2">


                                <ul class="part2">


                                    <li class="red"><a
                                            href="/addOrder">我要寄件</a>
                                    </li>


                                    <li><a href="http://www.sf-express.com/cn/sc/dynamic_function/range/">收寄范围查询</a>
                                    </li>


                                    <li><a href="http://www.sf-express.com/cn/sc/dynamic_function/accept/">收寄标准查询</a>
                                    </li>


                                    <li><a href="http://www.sf-express.com/cn/sc/dynamic_function/price/">运费时效查询</a>
                                    </li>


                                    <li>
                                        <a href="http://www.sf-express.com/cn/sc/dynamic_function/order/weChat/index.html">其他寄件方式</a>
                                    </li>


                                    <li class="red"><a
                                            href="http://www.sf-express.com/cn/sc/cooperative_consultation/index.html"
                                            target="_blank">合作咨询</a></li>


                                </ul>


                            </ul>
                        </div>

                    </div>
                </div>


            </li>
            <li class="topli">
                <a href="https://www.sf-financial.com/sfjrpc/?fc=ex&amp;fp=nt&amp;fa=pc&amp;" class="topa"
                   target="_blank">
                    金融
                </a>


            </li>
            <li class="topli">
                <a href="javascript:void(0)" class="topa nolink" aria-haspopup="true" aria-expanded="false">商业</a>


                <div class="dropdown" style="display: none; left: 221px;">
                    <div class="dropdownInner">
                        <div class="innerWrapper">
                            <table class="part1">
                                <tbody>
                                <tr>
                                    <td class="part2" style="min-width: 28px;">
                                        <ul class="part3">


                                            <li><a href="http://www.sfbest.com/" target="_blank"><span
                                                    class="ico sfyx1"></span>F35优选网上商城</a></li>


                                            <li><a href="http://www.sfbest.com/html/activity/1474966515.html"
                                                   target="_blank"><span class="ico sfyx2"></span>F35优选门店</a></li>


                                        </ul>
                                    </td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>


            </li>
            <li class="topli">
                <a href="http://www.sf-express.com/cn/sc/case_share/" class="topa" aria-haspopup="true"
                   aria-expanded="false">
                    成功案例</a>


                <div class="dropdown" style="display: none; left: 277px;">
                    <div class="dropdownInner">
                        <div class="innerWrapper">
                            <table class="part1">
                                <tbody>
                                <tr>
                                    <td class="part2" style="min-width: 56px;">
                                        <ul class="part3">


                                            <li>
                                                <a href="http://www.sf-express.com/cn/sc/case_share/index.html_364584038.html">3C电子行业</a>
                                            </li>


                                            <li>
                                                <a href="http://www.sf-express.com/cn/sc/case_share/index.html_836109172.html">医疗行业</a>
                                            </li>


                                            <li>
                                                <a href="http://www.sf-express.com/cn/sc/case_share/index.html_591155569.html">生鲜行业</a>
                                            </li>


                                            <li>
                                                <a href="http://www.sf-express.com/cn/sc/case_share/index.html_1045342821.html">快消行业</a>
                                            </li>


                                        </ul>
                                    </td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>


            </li>
            <li class="topli">
                <a href="javascript:void(0)" class="topa nolink" aria-haspopup="true" aria-expanded="false">服务支持</a>


                <div class="dropdown">
                    <div class="dropdownInner">
                        <div class="innerWrapper">
                            <table class="part1">
                                <tbody>
                                <tr>
                                    <td>
                                        <ul class="part2">


                                            <li><a href="/addOrder">我要寄件</a>
                                            </li>


                                            <li>
                                                <a href="http://www.sf-express.com/cn/sc/dynamic_function/waybill/">运单追踪</a>
                                            </li>


                                        </ul>
                                    </td>
                                </tr>
                                </tbody>
                            </table>
                            <table class="part1">
                                <tbody>
                                <tr>
                                    <td>
                                        <ul class="part2">


                                            <li>
                                                <a href="http://www.sf-express.com/cn/sc/dynamic_function/price/">运费时效查询</a>
                                            </li>


                                            <li>
                                                <a href="http://www.sf-express.com/cn/sc/dynamic_function/range/">收寄范围查询</a>
                                            </li>


                                            <li>
                                                <a href="http://www.sf-express.com/cn/sc/dynamic_function/store/">服务网点查询</a>
                                            </li>


                                            <li><a href="http://www.sf-express.com/cn/sc/dynamic_function/accept/">收寄标准查询</a>
                                            </li>


                                            <li><a href="http://www.sf-express.com/cn/sc/dynamic_function/sf_care/">更多内容查询</a>
                                            </li>


                                        </ul>
                                    </td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>


            </li>
            <li class="topli">
                <a href="javascript:void(0)" class="topa nolink" aria-haspopup="true"
                   aria-expanded="false">F35控股投资者关系</a>


                <div class="dropdown">
                    <div class="dropdownInner">
                        <div class="innerWrapper">
                            <table class="part1">
                                <tbody>
                                <tr>
                                    <td>
                                        <ul class="part2">


                                            <li>
                                                <a href="http://www.sf-express.com/cn/sc/investor_relations/corporate_governance/">公司治理</a>
                                            </li>


                                            <li>
                                                <a href="http://www.sf-express.com/cn/sc/investor_relations/latest_announcement/">公司公告</a>
                                            </li>


                                            <li>
                                                <a href="http://www.sf-express.com/cn/sc/investor_relations/periodic_report/financial_statements/">定期报告</a>
                                            </li>


                                            <li>
                                                <a href="http://www.sf-express.com/cn/sc/investor_relations/stock_information/">投资者联络</a>
                                            </li>


                                            <li>
                                                <a href="http://www.sf-express.com/cn/sc/investor_relations/investor_relations_calendar/board_meeting/">投资者关系日历</a>
                                            </li>


                                        </ul>
                                    </td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>


            </li>
            <li class="topli">
                <a href="http://www.sf-express.com/cn/sc/about_us/" class="topa" aria-haspopup="true"
                   aria-expanded="false">
                    关于我们</a>


                <div class="dropdown">
                    <div class="dropdownInner">
                        <div class="innerWrapper">
                            <table class="part1">
                                <tbody>
                                <tr>
                                    <td class="part2">
                                        <ul class="part3">


                                            <li>
                                                <a href="http://www.sf-express.com/cn/sc/about_us/about_sf/company_introduction/">关于F35</a>
                                            </li>


                                            <li><a href="http://www.sf-express.com/cn/sc/news/">新闻资讯</a></li>


                                            <li><a href="http://www.sf-express.com/cn/sc/notice/">服务公告</a></li>


                                            <li><a href="http://www.sf-express.com/cn/sc/promotions/">促销活动</a></li>


                                            <li>
                                                <a href="http://www.sf-express.com/cn/sc/about_us/member_interests/Individual_members/Membership_Levels_and_Growing_Value/">会员权益</a>
                                            </li>


                                            <li><a href="http://hr.sf-express.com/" target="_blank">人才招聘</a></li>


                                            <li><a href="http://www.sf-express.com/cn/sc/purchase_information/">集团采购</a>
                                            </li>


                                        </ul>
                                    </td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </li> -->
        </ul>


        <ul class="topright">


            <li class="topli log quickLogin" style="display: list-item;"><span class="icon member"></span><a
                    href="javascript:void(0)" class="topa maidian" data-md-name="点击登录/注册"
                    data-md-id="105002">快速登录/注册</a></li>
            <li class="topli log quickLogout" style="display: none;">
                <span>欢迎您：</span>
                <span class="head-user-number"></span>
                <a href="http://www.sf-express.com/cn/sc/user_center/"><span>我的F35</span> &gt;</a>
            </li>


            <li class="topli"><span></span><a href="http://origin.sf-express.com/cn/sc/" class="topa"></a></li>


            <li class="topli switch">
                <a href="javascript:void(0)" class="icon flag cn" aria-label="版本切换菜单" aria-haspopup="true"
                   aria-expanded="false"></a>
                <div class="dropdown">
                    <ul class="region">
                        <li>
                            <a data-region="cn" data-language="sc" href="javascript:void(0)">中国内地 Chinese Mainland</a>
                            <span class="gap">|</span>
                            <a data-region="cn" data-language="sc" href="javascript:void(0)">简</a>
                            <a data-region="cn" data-language="en" href="javascript:void(0)">EN</a>
                        </li>
                        <li>
                            <a data-region="hk" data-language="tc" href="javascript:void(0)">中国香港/中国澳門 HongKong China
                                /Macau China</a>
                            <span class="gap">|</span>
                            <a data-region="hk" data-language="tc" href="javascript:void(0)">繁</a>
                            <a data-region="hk" data-language="sc" href="javascript:void(0)">简</a>
                            <a data-region="hk" data-language="en" href="javascript:void(0)">EN</a>
                        </li>
                        <li>
                            <a data-region="tw" data-language="tc" href="javascript:void(0)">中國台灣 Taiwan China</a>
                            <span class="gap">|</span>
                            <a data-region="tw" data-language="tc" href="javascript:void(0)">繁</a>
                            <a data-region="tw" data-language="en" href="javascript:void(0)">EN</a>
                        </li>
                        <li>
                            <a data-region="sg" data-language="en" href="javascript:void(0)">新加坡 Singapore</a>
                            <span class="gap">|</span>
                            <a data-region="sg" data-language="en" href="javascript:void(0)">EN</a>
                            <a data-region="sg" data-language="sc" href="javascript:void(0)">简</a>
                        </li>

                    </ul>
                </div>
            </li>

        </ul>


    </div>

</div>


<nav class="dynamic-nav-bar">


    <a href="/addOrder">我要寄件</a>
    <a href="/order/queryOrder" class="active">运单追踪</a>
    <!-- <a href="http://www.sf-express.com/cn/sc/dynamic_function/sf_care/">服务支持</a> -->


</nav>


<div class="dynamic_content_wrapper">
    <div class="dynamic_content">
        <div id="function">


            <div>
                <div class="F35shipping-detail-page">
                    <div class="shipping-search-detail"><!-- 查询表单 -->
                        <div class="bill-number-wrapper">
                            <div class="input-group">

                            </div><!-- 最近查询记录 -->
                            <div class="bill-number-list-content">
                                <ul class="nearly-records clearfix">
                                    <li><a data-bill="231194017861"></a><span class="remove">×</span></li>
                                </ul>
                            </div>
                            <div>
                                <div id="TCaptcha" style="width:310px;height:40px;display: none"></div>
                                <div class="verification-code">
                                    <div class="input-group"><input type="text" class="form-control no-right-border"
                                                                    placeholder="请输入验证码"><span
                                            class="input-group-addon refresh no-left-border"><span
                                            class="sfi sfi-refresh"></span></span></div>
                                    <img id="validation-image">
                                    <div class="error validation-code-error">*验证码有误。</div>
                                </div>
                                <div class="error" data-error="bill-number-format" style="display: none;">*运单号错误或重复。
                                </div>
                                <div class="error" data-error="limit-exceeded" style="display: none;">
                                    *您已输入超过20条运单号，系统将自动截取并显示前20条运单号的追踪信息
                                </div>
                                <div class="error" data-error="server-network">服务器暂不可用，请稍后再试</div>
                            </div>
                        </div>
                    </div><!-- 中国大陆运单查询 -->
                    <div class="F35delivery-view"><!-- 我的运单列表 -->
                        <!-- 运单路由信息 -->
                        <div class="route-result clearfix" style="">
                            <div class="bill-title"><a href="/basicOrder" class="go-to-bill-list"><span
                                    class="aicon-to-left"></span>返回运单列表</a>
                            </div>
                            <div class="delivery-wrapper">
                                <div class="delivery">
                                    <div class="delivery-item send-out-item "><!-- 地图 -->
                                        <!-- 快递简介 -->
                                        <div class="delivery-brief" style="top:-200px">
                                            <div class="brief-content clearfix">
                                                <div class="wrapper_left">
                                                    <div class="bill-num"><span class="gray">运单号 </span><span
                                                            class="number">${order.tradeNo}</span><!-- 苹果客服专线 --><span
                                                            class="apple-hotline"></span></div><!-- 寄件城市与收件城市 -->
                                                    <div class="locations">${order.sendAdd}<i class="aicon-arrow-right"></i>${order.getAdd}
                                                    </div>
                                                </div>
                                                <div class="status-details fr">
                                                    <div class="cancel-time">
                                                        <c:if test="${order.getTime == null}" >
                                                            <input type="button" onclick="orderGet('${order.orderId}')" value="点击确认收货" class="express-state " style="color: #845b5b;
    background-color: #92ef92;"></input>
                                                        </c:if>
                                                        <c:if test="${order.getTime != null}" >
                                                            <span><fmt:formatDate value="${order.getTime}" pattern="yyyy-MM-dd HH:mm" />  签收</span>
                                                        </c:if>
                                                        </div>
                                                    <span class="express-state signed">
                                                        <c:if test="${order.getTime == null}" >
                                                            运送中
                                                        </c:if>
                                                        <c:if test="${order.getTime != null}" >
                                                            已签收
                                                        </c:if>
                                                        </span></div>
                                            </div>
                                        </div><!-- 营运异常事件提醒 -->
                                        <div class="warm-reminder"></div><!-- 操作按钮 --><!-- 地图标注信息 -->
                                        <div class="delivery-map-hide hide">
                                            <div class="map-win-info"></div>
                                        </div><!-- 路由详细信息 -->
                                        <div class="routes-wrapper">
                                            <div class="route-list">
                                                <div class="dashed-line" style="height: 572px;"></div>
                                                <c:if test="${order != null}" >
                                                    <c:if test="${order.getTime != null}" >
                                                    <ul class="route first ">
                                                        <li class="route-status-text"><span class="signed">已签收</span></li>
                                                        <li class="route-status-icon"><img
                                                                src="/statics/image/order_img/status-signed.png"></li>
                                                        <li class="route-date-time"><span><fmt:formatDate value="${order.getTime}" pattern="yyyy-MM-dd HH:mm" /></span></li>
                                                        <li class="route-desc"><span>已签收,感谢使用F35,期待再次为您服务</span></li>
                                                    </ul>
                                                    </c:if>
                                                    <c:if test="${order.sendEndTime != null}" >
                                                        <ul class="route  ">
                                                            <li class="route-status-text"><span class="">派送中</span></li>
                                                            <li class="route-status-icon"><img
                                                                    src="/statics/image/order_img/status-transporting.png"></li>
                                                            <li class="route-date-time"><span><fmt:formatDate value="${order.sendEndTime }" pattern="yyyy-MM-dd HH:mm" /></span></li>
                                                            <li class="route-desc"><span>快递已到达【${order.getAdd}】，马上安排人员送货</span>
                                                            </li>
                                                        </ul>
                                                    </c:if>


                                                    <c:if test="${order.sendTime != null}" >
                                                        <ul class="route  ">
                                                            <li class="route-status-text"><span class="">运送中</span></li>
                                                            <li class="route-status-icon"><img
                                                                    src="/statics/image/order_img/status-transporting.png"></li>
                                                            <li class="route-date-time"><span><fmt:formatDate value="${order.sendTime}" pattern="yyyy-MM-dd HH:mm" />
                                                                    </span></li>
                                                            <li class="route-desc">
                                                                <span>快件在【${order.sendAdd}】已装车,准备发往 【${order.getAdd}】</span></li>
                                                        </ul>
                                                    </c:if>
                                                    <c:if test="${order.orderPickTime != null}" >
                                                        <ul class="route  last">
                                                            <li class="route-status-text"><span class="">已取件</span></li>
                                                            <li class="route-status-icon"><img
                                                                    src="/statics/image/order_img/status-collect.png"></li>
                                                            <li class="route-date-time"><span>
                                                                <fmt:formatDate value="${order.orderPickTime}" pattern="yyyy-MM-dd HH:mm" />
                                                                </span></li>
                                                            <li class="route-desc"><span>F35速运 已收取快件</span></li>
                                                        </ul>
                                                    </c:if>
                                                    <ul class="route  last">
                                                        <li class="route-status-text"><span class="">已下单</span></li>
                                                        <li class="route-status-icon"><img
                                                                src="/statics/image/order_img/status-collect.png"></li>
                                                        <li class="route-date-time"><span>
                                                                <fmt:formatDate value="${order.orderCreateTime}" pattern="yyyy-MM-dd HH:mm" />
                                                                </span></li>
                                                        <li class="route-desc"><span>订单已下达到F35速运系统</span></li>
                                                    </ul>
                                                </c:if>
                                            </div>
                                        </div><!-- 登录按钮 -->
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="modal_captcha" id="modal_captcha"
                     style="width: 100%; height: 100%; background: rgb(0, 0, 0); position: fixed; left: 0px; top: 0px; opacity: 0.5; z-index: 1000; display: none;"></div>
            </div>


        </div>


        <!-- <div class="order-button-wrapper">
            <div class="order-button go-dynamic accessible-click" tabindex="0" data-new-window="true"
                 data-location="/order/quick/">
                <div class="order-button-inner">

                    <img class="icon" src="/statics/image/order_img/order-button-icon.gif" alt="预约上门取件">

                    <div class="text">
                        免费预约上门取件
                    </div>
                    <div class="arrow"></div>
                    <div class="flash"></div>
                </div>
            </div>
        </div> -->


    </div>
</div>


<!-- <div id="footer">


    <div class="botfooter">
        <div class="fcontainer posre">
            <div class="toTop fixed" title="返回顶部" style="display: block;"></div>
            <div class="left cn">
                <table>
                    <tbody>
                    <tr>


                        <td>


                            <p class="title"><a class="nolink" href="javascript:void(0)">物流</a></p>


                            <ul class="list">


                                <li>
                                    <a href="http://www.sf-express.com/cn/sc/express/express_service/city_distribution/SF_Rush/">快递服务</a>
                                </li>


                                <li>
                                    <a href="http://www.sf-express.com/cn/sc/express/cold_service/food_service/fresh_match/">冷运服务</a>
                                </li>


                                <li>
                                    <a href="http://www.sf-express.com/cn/sc/express/storage_service/storage_services/warehouse_management/">仓储服务</a>
                                </li>


                            </ul>


                        </td>


                        <td>


                            <p class="title"><a
                                    href="https://www.sf-financial.com/sfjrpc/?fc=ex&amp;fp=nt&amp;fa=pc&amp;"
                                    target="_blank">金融</a></p>


                            <ul class="list">


                                <li><a href="https://www.sf-financial.com/index.html?fc=ex&amp;fp=nb&amp;fa=pc&amp;"
                                       target="_blank">财富管理</a></li>


                                <li><a href="https://www.sf-financial.com/index.html?fc=ex&amp;fp=nb&amp;fa=pc&amp;"
                                       target="_blank">资产管理</a></li>


                                <li><a href="https://www.sf-financial.com/index.html?fc=ex&amp;fp=nb&amp;fa=pc&amp;"
                                       target="_blank">综合支付</a></li>


                            </ul>


                        </td>


                        <td>


                            <p class="title"><a class="nolink" href="javascript:void(0)">商业</a></p>


                            <ul class="list">


                                <li><a href="http://www.sfbest.com/" target="_blank">F35优选网上商城</a></li>


                                <li><a href="http://www.sfbest.com/html/activity/1474966515.html"
                                       target="_blank">F35优选门店</a></li>


                            </ul>


                        </td>


                        <td>


                            <p class="title"><a href="http://www.sf-express.com/cn/sc/case_share/">成功案例</a></p>


                            <ul class="list">


                                <li><a href="http://www.sf-express.com/cn/sc/case_share/index.html_364584038.html">3C电子行业</a>
                                </li>


                                <li>
                                    <a href="http://www.sf-express.com/cn/sc/case_share/index.html_836109172.html">医疗行业</a>
                                </li>


                                <li>
                                    <a href="http://www.sf-express.com/cn/sc/case_share/index.html_591155569.html">生鲜行业</a>
                                </li>


                                <li>
                                    <a href="http://www.sf-express.com/cn/sc/case_share/index.html_1045342821.html">快消行业</a>
                                </li>


                            </ul>


                        </td>


                        <td>


                            <p class="title"><a class="nolink" href="javascript:void(0)">服务支持</a></p>


                            <ul class="list">


                                <li><a href="/addOrder">我要寄件</a>
                                </li>


                                <li><a href="http://www.sf-express.com/cn/sc/dynamic_function/waybill/">运单追踪</a></li>


                                <li><a href="http://www.sf-express.com/cn/sc/dynamic_function/price/">运费时效查询</a></li>


                                <li><a href="http://www.sf-express.com/cn/sc/dynamic_function/range/">收寄范围查询</a></li>


                                <li><a href="http://www.sf-express.com/cn/sc/dynamic_function/store/">服务网点查询</a></li>


                                <li><a href="http://www.sf-express.com/cn/sc/dynamic_function/accept/">收寄标准查询</a></li>


                                <li><a href="http://www.sf-express.com/cn/sc/dynamic_function/sf_care/">更多内容查询</a></li>


                            </ul>


                        </td>


                        <td>


                            <p class="title"><a class="nolink" href="javascript:void(0)">F35控股投资者关系</a></p>


                            <ul class="list">


                                <li><a href="http://www.sf-express.com/cn/sc/investor_relations/corporate_governance/">公司治理</a>
                                </li>


                                <li><a href="http://www.sf-express.com/cn/sc/investor_relations/latest_announcement/">公司公告</a>
                                </li>


                                <li>
                                    <a href="http://www.sf-express.com/cn/sc/investor_relations/periodic_report/financial_statements/">定期报告</a>
                                </li>


                                <li><a href="http://www.sf-express.com/cn/sc/investor_relations/stock_information/">投资者联络</a>
                                </li>


                                <li>
                                    <a href="http://www.sf-express.com/cn/sc/investor_relations/investor_relations_calendar/board_meeting/">投资者关系日历</a>
                                </li>


                            </ul>


                        </td>


                        <td>


                            <p class="title"><a href="http://www.sf-express.com/cn/sc/about_us/">关于我们</a></p>


                            <ul class="list">


                                <li><a href="http://www.sf-express.com/cn/sc/about_us/about_sf/company_introduction/">关于F35</a>
                                </li>


                                <li><a href="http://www.sf-express.com/cn/sc/news/">新闻资讯</a></li>


                                <li><a href="http://www.sf-express.com/cn/sc/notice/">服务公告</a></li>


                                <li><a href="http://www.sf-express.com/cn/sc/promotions/">促销活动</a></li>


                                <li>
                                    <a href="http://www.sf-express.com/cn/sc/about_us/member_interests/Individual_members/Membership_Levels_and_Growing_Value/">会员权益</a>
                                </li>


                                <li><a href="http://hr.sf-express.com/" target="_blank">人才招聘</a></li>


                                <li><a href="http://www.sf-express.com/cn/sc/purchase_information/">集团采购</a></li>


                            </ul>


                        </td>


                        <td>


                            <p class="title"><a class="nolink" href="javascript:void(0)">联系我们</a></p>


                            <ul class="list">


                                <li><a class="nolink" href="javascript:void(0)">客服专线95338 </a></li>


                                <li><a href="http://www.sf-express.com/cn/sc/Customer-Service-Hotlines/">客户服务热线</a></li>


                                <li><a href="http://www.sf-express.com/cn/sc/cooperative_consultation/">合作咨询</a></li>


                                <li>
                                    <a href="http://ocs2odp.sf-express.com/app/init?orgName=sy&amp;channelId=469&amp;clientType=1&amp;accountId="
                                       target="_blank">在线客服</a></li>


                            </ul>
                        </td>


                    </tr>
                    </tbody>
                </table>
            </div>

            <div class="right cn">
                <p class="title"><a href="javascript:void(0)" class="nolink">马上联系我们</a></p>

                <div class="share">
                    <a href="http://weibo.com/sfsuyun?is_hot=1" class="xinlang" aria-label="分享至微博"></a>
                    <a href="javascript:void(0)" class="weixin" aria-label="分享至微信">
                        <div class="pop">
                            <img src="/statics/image/order_img/sf-code-img.jpg" alt="">
                            <span class="caret"></span>
                        </div>
                    </a>


                    <a href="http://ocs2-isp.sf-express.com/?orgName=sy&amp;channelId=469&amp;clientType=1#/pc/home"
                       target="_blank" class="online" aria-label="在线客服"></a>


                </div>

            </div>

        </div>

        <div class="others">
            <ul class="fcontainer cn">
                <li class="list1"><a href="http://www.sf-tech.com.cn/" target="_blank" aria-label="F35科技有限公司"></a></li>
                <li class="list2"><a href="http://dengta.sf-express.com/" target="_blank" aria-label="数据灯塔"></a></li>
                <li class="list3"><a href="http://www.sf-airlines.com/sfa/zh/index.html" target="_blank"
                                     aria-label="F35航空"></a></li>
                <li class="list4"><a href="http://www.sf-express.com/cn/sc/industrial_park/about_us/Introduction/"
                                     target="_blank" aria-label="F35产业园"></a></li>
                <li class="list5"><a
                        href="https://www.sffix.cn/sffix/home.html?chn=173595CFF4554A79087301422BFE33A1&amp;hmsr=baidu&amp;hmpl=%E5%85%AC%E5%8F%B8&amp;hmcu=%E5%85%AC%E5%8F%B8&amp;hmkw=17&amp;hmci"
                        target="_blank" aria-label="F35丰修"></a></li>
                <li class="list6"><a href="http://intl.sf-express.com/" target="_blank" aria-label="F35国际"></a></li>
                <li class="list7"><a href="http://www.sfbuy.com/index" target="_blank" aria-label="海购丰运"></a></li>
                <li class="list8"><a href="http://www.sfgy.org/" target="_blank" aria-label="F35公益"></a></li>
                <li class="list9"><a href="http://sf-saas.com/" target="_blank" aria-label="F35一站"></a></li>
                <li class="list10"><a href="https://hr.sf-express.com/" target="_blank" aria-label="人才招聘"></a></li>


            </ul>
        </div>

        <div class="fcontainer botlink">
            <div class="clearfix">
                <ul class="policy">


                    <li><a href="http://www.sf-express.com/cn/sc/use_clause/">使用条款</a></li>


                    <li><a href="http://www.sf-express.com/cn/sc/services_network/">服务网络</a></li>


                    <li><a href="https://qiao.sf-express.com/" target="_blank">丰桥平台</a></li>


                    <li><a href="http://www.sf-express.com/cn/sc/Privacy_Policy/">隐私政策</a></li>


                </ul>
                <ul class="copyright">
                    <li><a class="gray nolink" href="javascript:void(0)">©&nbsp;2017&nbsp;&nbsp;F35速运&nbsp;&nbsp;版权所有&nbsp;&nbsp;&nbsp;&nbsp;</a>
                    </li>
                    <li><a href="http://www.miitbeian.gov.cn/"
                           target="_blank">粤&nbsp;&nbsp;ICP&nbsp;&nbsp;备08034243号</a></li>
                </ul>
                <ul class="gov">
                    <li>
                        <a class="gov1" href="http://webcert.cnmstl.net/cert/code?sn=c6cc6af3fac440c28901c15a104582fe"
                           target="_blank" oncontextmenu="return false;">

                            <img src="/statics/image/order_img/officialbrand_small_h_img.jpg" alt="安全网址认证书">

                        </a>
                    </li>
                    <li>
                        <a class="gov2"
                           href="http://www.sznet110.gov.cn/webrecord/innernet/Welcome.jsp?bano=4403101900826"
                           target="_blank" oncontextmenu="return false;">

                            <img src="/statics/image/order_img/security_site_1.png" alt="安全认证">

                        </a>
                    </li>
                    <li>
                        <a class="gov3" href="http://www.sznet110.gov.cn/index.jsp" target="_blank"
                           oncontextmenu="return false;">

                            <img src="/statics/image/order_img/security_site_2.png" alt="公安网认证">

                        </a>
                    </li>
                    <li>
                        <a class="gov4" href="https://szcert.ebs.org.cn/B943BEFD-EF5E-4747-AD73-B875A1FC5CC7"
                           target="_blank" oncontextmenu="return false;">
                            <img src="/statics/image/order_img/govIcon.gif" title="深圳市市场监督管理局企业主体身份公示" alt="深圳市市场监督管理局企业主体身份公示">
                        </a>
                    </li>
                </ul>
            </div>
            <div class="text-right">
                <a target="_blank" href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=44030502003091">
                    <img src="/statics/image/order_img/security_site_3.png" style="display: inline-block"><span>粤公网安备 44030502003091号</span>
                </a>
            </div>
        </div>
    </div>

</div>
 -->

<script>

</script>
<script type="text/javascript" src="/statics/js/order_js/modernizr.js"></script>

<script type="text/javascript" src="/statics/js/order_js/configs.js"></script>
<script type="text/javascript" src="/statics/js/order_js/require.js"></script>
<%--<script type="text/javascript" src="/statics/js/order_js/frame.js"></script>--%>
<script type="text/javascript" src="/statics/js/order_js/main.js"></script>
<script >
    var orderGet = function(orderId){
        $.get("/order/customerGet/"+ orderId ,null ,  function(){
            window.location.reload();
        } , "text")
    }
    $(function(){

    })
</script>


<span style="position:absolute; top:-999px; left:0; white-space:pre;"></span>
<div class="layui-layer-move"></div>
</body>
</html>