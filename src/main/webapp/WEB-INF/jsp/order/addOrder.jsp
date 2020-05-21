<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@include file="/WEB-INF/jsp/tag_all.jsp" %>
<!DOCTYPE html>

<html>
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">

    <meta http-equiv="Access-Control-Allow-Origin" content="*">

    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">

    <meta name="renderer" content="webkit">


    <!--[if lt IE 9]>

    <div id="old-ie-hint"><p class='lt-ie8'>很抱歉，您使用的浏览器暂不支持，将为您的使用带来不便。请更换或升级为IE8以上、Chrome、Firefox、Safari进行浏览。<a
            href="#" onclick="javascript:$('p.lt-ie8').css('display','none'); ">取消</a></p></div>
    <script language="JavaScript">
        (function () {
            var test = /access-type=(\d)/.exec(document.cookie);
            var accessType = test ? test[1] : null;
            if (accessType === "1") {
                document.getElementById("old-ie-hint").innerHTML = "很抱歉，您当前的浏览器版本过低，网站无法正常显示。 请点击<a href='http://10.0.11.111:8080/Chrome_V20_11.exe'>下载谷歌浏览器</a>，下载后点击“运行”自动安装。<br /> 如您的浏览器版本已经是IE8及以上，请关闭兼容模式视图：点击右上角“工具”->兼容性视图>在弹出窗口中取消勾选兼容性视图选项。<br />感谢您对顺丰速运的支持与关注！";
            }
        })();
    </script>

    <![endif]-->
    <title>我要寄件 </title>
    <meta name="description" content="">
    <meta name="keywords" content="">
    <meta name="viewport" content="width=device-width">
    <link rel="shortcut icon" href="${imgBaseUrl}index_img/timg.png" type="image/x-icon"/>


    <script async="" src="${jsBaseUrl}order_js/gtm.js"></script>
    <script src="${jsBaseUrl}order_js/hm.js"></script>
    <script>
        (function (window) {
            var cmsConfig = {
                "root": {
                    "cn": {
                        "en": "../../../../en",
                        "sc": "../../../../sc"
                    },
                    "tw": {
                        "en": "../../../../../tw/en",
                        "tc": "../../../../../tw/tc"
                    },
                    "hk": {
                        "tc": "../../../../../hk/tc",
                        "sc": "../../../../../hk/sc",
                        "en": "../../../../../hk/en"
                    },
                    "sg": {
                        "sc": "../../../../../sg/sc",
                        "en": "../../../../../sg/en"
                    },
                    "my": {
                        "sc": "../../../../../my/sc",
                        "en": "../../../../../my/en"
                    },
                    "us": {
                        "sc": "../../../../../us/sc",
                        "en": "../../../../../us/en"
                    },
                    "ru": {
                        "ru": "../../../../../ru/ru",
                        "sc": "../../../../../ru/sc",
                        "en": "../../../../../ru/en"
                    },
                    "jp": {
                        "ja": "../../../../../jp/ja",
                        "sc": "../../../../../jp/sc",
                        "en": "../../../../../jp/en"
                    },
                    "kr": {
                        "ko": "../../../../../kr/ko",
                        "sc": "../../../../../kr/sc",
                        "en": "../../../../../kr/en"
                    },
                    "gb": {
                        "sc": "../../../../../gb/sc",
                        "en": "../../../../../gb/en"
                    },
                    "au": {
                        "sc": "../../../../../au/sc",
                        "en": "../../../../../au/en"
                    },
                    "vn": {
                        "vi": "../../../../../vn/vi",
                        "sc": "../../../../../vn/sc",
                        "en": "../../../../../vn/en"
                    },
                    "fr": {
                        "fr": "../../../../../fr/fr",
                        "sc": "../../../../../fr/sc",
                        "en": "../../../../../fr/en"
                    },
                    "de": {
                        "ge": "../../../../../de/de",
                        "sc": "../../../../../de/sc",
                        "en": "../../../../../de/en"
                    },
                    "th": {
                        "th": "../../../../../th/th",
                        "sc": "../../../../../th/sc",
                        "en": "../../../../../th/en"
                    }
                },
                "dynamicServerContext": 'http://www.sf-express.com/sf-service-owf-web/service',
                "dynamicBackUrl": 'http://origin.sf-express.com',
                "resourcePath": "../../../../../resource/",
                "region": "cn",
                "language": "sc",
                "sfMapSrc": 'http://gis-rss-core-hint.sf-express.com/tip?ak=0a3e7329ce960df1db1e5a743926d72d',
                "sfgatherHost": 'https://inc-ubas-web.sf-express.com/json_data'
            };
            window._cmsConfig = cmsConfig;
        })(window);
    </script>
    <%--<link href="${cssBaseUrl}order_css/main.css" rel="stylesheet">--%>
    <script type="text/javascript" src="${jsBaseUrl}order_js/jquery-1.11.3.js"></script>
    <!--手机适配-->

    <script>
        (function () {
            var url = window.location.href;
            if (url.indexOf('direct') == -1 && (url.substr(url.length - 'cn/sc/'.length, 'cn/sc/'.length) == 'cn/sc/' ||
                    url.substr(url.length - 'cn/sc/index.html'.length, 'cn/sc/index.html'.length) == 'cn/sc/index.html')) {
                var sUserAgent = navigator.userAgent.toLowerCase();
                var bIsIpad = sUserAgent.match(/ipad/i) == "ipad";
                var bIsIphoneOs = sUserAgent.match(/iphone os/i) == "iphone os";
                var bIsMidp = sUserAgent.match(/midp/i) == "midp";
                var bIsUc7 = sUserAgent.match(/rv:1.2.3.4/i) == "rv:1.2.3.4";
                var bIsUc = sUserAgent.match(/ucweb/i) == "ucweb";
                var bIsAndroid = sUserAgent.match(/android/i) == "android";
                var bIsCE = sUserAgent.match(/windows ce/i) == "windows ce";
                var bIsWM = sUserAgent.match(/windows mobile/i) == "windows mobile";
                var bIsIE = sUserAgent.match(/iemobile/i) == "iemobile";
                if (bIsIpad || bIsIphoneOs || bIsMidp || bIsUc7 || bIsUc || bIsAndroid || bIsCE || bIsWM || bIsIE) {

                    window.location.href = '../../../../../mobile/cn/sc/index.html';
                }
            }
        })();
    </script>


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

    <style type="text/css">.amap-container {
        cursor: url(http://webapi.amap.com/theme/v1.3/openhand.cur), default;
    }

    .amap-drag {
        cursor: url(http://webapi.amap.com/theme/v1.3/closedhand.cur), default;
    }</style>
</head>
<body class="language-sc">

<!--[if lt IE 9]>
<script src="../../../../../resource/scripts/vendor/json2.js"></script>
<script src="../../../../../resource/scripts/vendor/html5.js"></script>
<script
        src="../../../../../resource/scripts/vendor/respond.min.js"></script>
<![endif]-->


<div id="header">

    <div class="topheader">

        <a class="logo" href="${pageContext.request.contextPath}/F35Index"><img src="${imgBaseUrl}index_img/timg.png"
                                                                                alt="F35速运"></a>

        <ul class="topleft">
            <li class="topli"><a href="${pageContext.request.contextPath}/F35Index" class="topa">首页</a></li>


<%--            --- <li class="topli">
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
                                                <a href="http://www.sf-express.com/cn/sc/express/express_service/city_distribution/SF_Rush/">同城急送</a>
                                            </li>


                                        </ul>
                                    </td>


                                    <td>
                                        <p class="title2">内地及港澳台</p>
                                        <ul class="part2">


                                            <li>
                                                <a href="http://www.sf-express.com/cn/sc/express/express_service/mainland_area/one_day_arrve/">顺丰即日</a>
                                            </li>


                                            <li>
                                                <a href="http://www.sf-express.com/cn/sc/express/express_service/mainland_area/next_morning_arrve/">顺丰次晨</a>
                                            </li>


                                            <li>
                                                <a href="http://www.sf-express.com/cn/sc/express/express_service/mainland_area/next_day_arrve2/">顺丰标快</a>
                                            </li>


                                            <li>
                                                <a href="http://www.sf-express.com/cn/sc/express/express_service/mainland_area/next_day_arrve/">顺丰特惠</a>
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
                                                <a href="http://www.sf-express.com/cn/sc/express/express_service/international/Global-Reach-Plus/">直运+</a>
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
                                                <a href="http://www.sf-express.com/cn/sc/express/express_service/added_service/Delivery-Address-Correction-Service/">同城派件地址变更</a>
                                            </li>


                                            <li>
                                                <a href="http://www.sf-express.com/cn/sc/express/express_service/added_service/change_payment_method/">更改付款方式</a>
                                            </li>


                                            <li>
                                                <a href="http://www.sf-express.com/cn/sc/express/express_service/added_service/SF_Certified_International_Shipping/">顺丰国际直邮认证服务</a>
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
                                                <a href="http://www.sf-express.com/cn/sc/express/cold_service/food_service/crab_courier/">大闸蟹专递</a>
                                            </li>


                                            <li>
                                                <a href="http://www.sf-express.com/cn/sc/express/cold_service/food_service/cold_shipped_home/">冷运到家</a>
                                            </li>


                                            <li>
                                                <a href="http://www.sf-express.com/cn/sc/express/cold_service/food_service/cold_shipped_store/">冷运到店</a>
                                            </li>


                                            <li>
                                                <a href="http://www.sf-express.com/cn/sc/express/cold_service/food_service/cold_transport_ltl/">顺丰冷运零担</a>
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
                                                <a href="http://www.sf-express.com/cn/sc/express/cold_service/medical_service/room_temperature/">医药常温</a>
                                            </li>


                                            <li>
                                                <a href="http://www.sf-express.com/cn/sc/express/cold_service/medical_service/temperature_control/">医药专递</a>
                                            </li>


                                            <li>
                                                <a href="http://www.sf-express.com/cn/sc/express/cold_service/medical_service/pharmaceutical_distribution/">医药商配</a>
                                            </li>


                                            <li>
                                                <a href="http://www.sf-express.com/cn/sc/express/cold_service/medical_service/sf_pharmaceutical/">顺丰医药零担</a>
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


                                    <li class="red"><a href="${pageContext.request.contextPath}/addOrder">我要寄件</a></li>


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


                <div class="dropdown">
                    <div class="dropdownInner">
                        <div class="innerWrapper">
                            <table class="part1">
                                <tbody>
                                <tr>
                                    <td class="part2">
                                        <ul class="part3">


                                            <li><a href="http://www.sfbest.com/" target="_blank"><span
                                                    class="ico sfyx1"></span>顺丰优选网上商城</a></li>


                                            <li><a href="http://www.sfbest.com/html/activity/1474966515.html"
                                                   target="_blank"><span class="ico sfyx2"></span>顺丰优选门店</a></li>


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


                <div class="dropdown">
                    <div class="dropdownInner">
                        <div class="innerWrapper">
                            <table class="part1">
                                <tbody>
                                <tr>
                                    <td class="part2">
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


                                            <li><a href="${pageContext.request.contextPath}/addOrder">我要寄件</a></li>


                                            <li><a href="${pageContext.request.contextPath}/order/queryOrder">运单追踪</a>
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


                                            <li>
                                                <a href="http://www.sf-express.com/cn/sc/dynamic_function/more/payment/">更多内容查询</a>
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
                   aria-expanded="false">顺丰控股投资者关系</a>


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
                                                <a href="http://www.sf-express.com/cn/sc/about_us/about_sf/company_introduction/">关于顺丰</a>
                                            </li>


                                            <li><a href="http://www.sf-express.com/cn/sc/news/">新闻资讯</a></li>


                                            <li><a href="http://www.sf-express.com/cn/sc/notice/">服务公告</a></li>


                                            <li><a href="http://www.sf-express.com/cn/sc/promotions/">促销活动</a></li>


                                            <li>
                                                <a href="http://www.sf-express.com/cn/sc/about_us/member_interests/Individual_members/Membership_Levels_and_Growing_Value/">会员权益</a>
                                            </li>


                                            <li><a href="https://hr.sf-express.com/" target="_blank">人才招聘</a></li>


                                        </ul>
                                    </td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>


            </li> --%>
        </ul>


        <ul style="float: right">
            <%@include file="/WEB-INF/jsp/commen/useroprat.jsp" %>
        </ul>


    </div>

</div>


<div class="dynamic-nav-bar">
    <ul>
        <li><a href="${pageContext.request.contextPath}/addOrder" class="active">我要寄件</a></li>
        <li><a href="${pageContext.request.contextPath}/order/queryOrder">运单追踪</a></li>
        <!-- <li><a href="http://www.sf-express.com/cn/sc/dynamic_function/price/">顺丰支持</a></li> -->
    </ul>
</div>

<div class="dynamic_content_wrapper">
    <div class="dynamic_content">
        <div id="function">


            <div class="order-page">
                <div class="order-service ui-front">
                    <script type="text/javascript" src="./我要寄件_files/maps"></script>
                    <script type="text/javascript">
                        window.ParsleyConfig = {
                            i18n: {
                                sc: {
                                    required: '该输入框为必填项。',
                                    maxlength: '请输入%s字符以内。',
                                    max: '请输入%s以内的数值。',
                                    min: '请输入%s以上的数值。',
                                    type: {
                                        integer: '请输入整数。'
                                    }
                                }
                            }
                        };
                        window._cmsConfigOrder = {
                            "orderRemoteUrl": 'http://i.sf-express.com/',
                            "ucmpOrderRemoteUrl": 'http://ucmp-entrance.sf-express.com/'
                        };
                    </script>

                    <div class="receiver-areas" role="radiogroup" s>
                        <a href="javascript:void(0)" class="toggle-tab checked" role="radio" data-tab="mainland"
                           aria-checked="true">
                                                                        寄快递</a>
                        <!-- <a href="javascript:void(0)" class="toggle-tab" role="radio" data-tab="heavyCargo"
                           aria-checked="false">
                                                                        寄大件</a>
                        <a href="javascript:void(0)" class="toggle-tab" role="radio" data-tab="qrCode"
                           aria-checked="false">二维码寄件</a> -->
                    </div>
                    <div class="order-service-content-wrapper">
                        <div class="order-service-content">

                            <div class="row qr-show qr-waybill">
                                <div class="col-xs-12">运单号：<span class="qr-waybill-no"></span></div>
                            </div>
                            <div class="row order-service-title">
                                <div class="col-xs-3 title">
                                                                                                     寄件人信息
                                    <small>标*为必填</small>
                                </div>
                                <!-- <a href="javascript:void(0)"
                                   class="col-xs-3 aicon-intellect-address link addIntellectFill" data-option="sender">智能地址填写</a>
                                <a href="javascript:void(0)"
                                   class="col-xs-3 origin-Address aicon-address-book address-book SendOrigin-Address HKOrigin-Address link"
                                   data-option="sender">
                                                                                           使用地址簿</a> -->

                            </div>

                            <form class="myOrderSubmit" action="/basicOrder" method="post">
                                <!-- 寄件人信息-->
                                <div class="form-horizontal sender-form" method="post">
                                    <p class="warm-reminder shipper-warm-reminder"></p>
                                    <div class="sender-intellect-addr-reminder intellect-warm-reminder"
                                         style="display: none;">请检查拆分地址信息是否准确，如有遗漏请及时补充
                                    </div>
                                    <div class="form-group">
                                        <div class="col-xs-5 senderAutoAddPicker">
                                            <label for="sender-name" class="required control-label">姓名:</label>

                                            <!-- 寄件人姓名-->
                                            <input type="text" name="sender"
                                                   class="form-control parsley-error ui-autocomplete-input"
                                                   id="sender-name" name="sender-name" placeholder="请填写联系人姓名"
                                                   data-parsley-pattern-message="该输入框不能包含特殊字符"
                                                   data-parsley-pattern="^[\u4e00-\u9fa5|\w]+$" data-parsley-required=""
                                                   data-parsley-id="7875" autocomplete="off">

                                        </div>
                                        <!-- <div class="col-xs-5 col-xs-offset-2 senderAutoAddPicker ui-front">
                                            <label for="sender-company" class="control-label">寄件公司:</label>

                                            寄件公司
                                            <input type="text" class="form-control ui-autocomplete-input"
                                                   data-parsley-maxlength="20" id="sender-company" name="sender-company"
                                                   placeholder="请填写公司名称" autocomplete="off">


                                            <ul class="ui-autocomplete ui-front ui-menu ui-widget ui-widget-content"
                                                id="ui-id-6" tabindex="0" style="display: none;"></ul>
                                        </div> -->
                                    </div>

                                    <div class="form-group">
                                        <div class="col-xs-5 senderAutoAddPicker">
                                            <label class="control-label" for="sender-mobile">手机:</label>


                                            <!-- 手机-->
                                            <input type="text" name="sendPhone"
                                                   class="form-control ui-autocomplete-input" id="sender-mobile"
                                                   name="sender-mobile" placeholder="请填写手机号码"
                                                   data-parsley-trigger="change"
                                                   data-parsley-pattern-message="您输入的手机号码格式不正确，请重新输入。"
                                                   data-parsley-pattern="^(1\d{10})$" autocomplete="off">


                                        </div>
                                        <!-- <div class="col-xs-5 col-xs-offset-2">
                                            <label class="control-label" for="sender-phone">固话:</label>

                                            固话
                                            <input type="text" class="form-control" id="sender-phone"
                                                   name="sender-phone" placeholder="请填写固话号码"
                                                   data-parsley-trigger="change"
                                                   data-parsley-pattern-message="您输入的固话号码格式不正确，请重新输入。"
                                                   data-parsley-pattern="^((\d{7,8})|(0\d{2,3})-?(\d{7,8})|(0\d{2,3})-?(\d{7,8})-?(\d{0,7})|(\d{7,8})-?(\d{0,7}))$">
                                        </div> -->
                                    </div>
                                    <div class="nearbyAddressWrapper">
                                        <div class="form-group">
                                            <div class="col-xs-8 sender-location location-inputs normal-inputs">
                                                <label  class="required control-label">上门地址:</label>
                                                <div >

                                                    <!--上门地址，点击获取地址并存在title中-->
                                                    <input type="text" name="sendAdd"
                                                           class="form-control origins"
                                                           data-parsley-required=""
                                                           name="sender-address"
                                                           placeholder="请选择所在地区，例如：广东省－深圳市－福田区" autocomplete="off">

                                                    <!-- 地址下拉框-->
                                                    <!-- <div class="detail-location-picker toggle-plugins"></div> -->
                                                </div>
                                            </div>
                                            <!-- 点击获取地址-->
                                            <!-- <a class="getNearbyAddress aicon-location maidian" data-md-name="点击获取附件地址"
                                               data-md-id="111005" href="javascript:void(0)"></a> -->

                                        </div>
                                        <!-- <div class="form-group error network-err">
                                            <div class="col-xs-12">
                                                网络异常，请稍后再试
                                            </div>
                                        </div> -->
                                    </div>

                                    <div class="form-group">
                                        <div class="col-xs-10">
                                            <label for="sender-address-detail"
                                                   class="required control-label">详细地址：</label>

                                            <!-- 详细地址-->
                                            <input type="text" name="sendDetailAdd"
                                                   class="form-control ui-autocomplete-input" data-parsley-required=""
                                                   id="sender-address-detail" name="sender-address-detail"
                                                   placeholder=" 请填写所在街道以及详细地址" autocomplete="off">


                                        </div>
                                    </div>
                                    <div class="form-group error error-sender-address-detail">
                                        <div class="col-xs-10">
                                            亲，您的寄件地址我司暂无法上门收件，您可修改为其它地址
                                        </div>
                                    </div>
                                </div>

                                <div class="row order-service-title ">
                                    <div class="col-xs-6 title">
                                        收件人信息
                                        <small>标*为必填</small>
                                    </div>
                                    <!-- <a href="javascript:void(0)"
                                       class="col-xs-3 aicon-intellect-address addIntellectFill link"
                                       data-option="receiver">智能地址填写</a>
                                    <a href="javascript:void(0)"
                                       class="col-xs-3 aicon-address-book dest-Address address-book Sendest-Address link"
                                       data-option="receiver">
                                        使用地址簿</a> -->
                                </div>

                                <!-- 收件人信息-->
                                <div class="form-horizontal receiver-form" method="post">
                                    <p class="warm-reminder consignee-warm-reminder"></p>
                                    <div class="intellect-warm-reminder receiver-intellect-addr-reminder"
                                         style="display: none;">请检查拆分地址信息是否准确，如有遗漏请及时补充
                                    </div>
                                    <div class="form-group">
                                        <div class="col-xs-5 receiverAutoAddPicker">
                                            <label for="receiver-name" class="required control-label">姓名:</label>


                                            <!--收件人姓名 -->
                                            <input type="text" name="getter" data-parsley-required=""
                                                   class="form-control ui-autocomplete-input" id="receiver-name"
                                                   name="receiver-name" placeholder="请填写联系人姓名" autocomplete="off">


                                        </div>
                                        <!-- <div class="col-xs-5 col-xs-offset-2 receiverAutoAddPicker ui-front">
                                            <label for="receiver-company" class="control-label">收件公司:</label>


                                            收件公司
                                             <input type="text" class="form-control ui-autocomplete-input"
                                                   data-parsley-maxlength="20" id="receiver-company"
                                                   name="receiver-company" placeholder="请填写公司名称" autocomplete="off">

                                            获取寄件仔细地址
                                            <ul class="ui-autocomplete ui-front ui-menu ui-widget ui-widget-content"
                                                id="ui-id-9" tabindex="0" style="display: none;"></ul>
                                        </div> -->
                                    </div>
                                    <div class="form-group">
                                        <div class="col-xs-5 receiverAutoAddPicker">
                                            <label class="required control-label" for="receiver-mobile">手机:</label>

                                            <!-- 收件人手机-->
                                            <input type="text" name="getPhone"
                                                   class="form-control ui-autocomplete-input" id="receiver-mobile"
                                                   name="receiver-mobile" placeholder="请填写手机号码"
                                                   data-parsley-trigger="change"
                                                   data-parsley-pattern-message="您输入的手机号码格式不正确，请重新输入。"
                                                   data-parsley-pattern="^[1][3-9]\d{9}$|^((\+?00852[-]?)|(\+?852[-]?))?[5689]{1}\d{7}$|^((\+?00853[-]?)|(\+?853[-]?))?6\d{6,7}$|^((\+?886[-]?))?[0]?[9]\d{8}$"
                                                   autocomplete="off">


                                        </div>
                                        <!-- <div class="col-xs-5 col-xs-offset-2">
                                            <label class="control-label" for="receiver-phone">(或)固话:</label>
                                            收件人固话
                                            <input type="text" class="form-control" id="receiver-phone"
                                                   name="receiver-phone" placeholder="请填写固话号码"
                                                   data-parsley-trigger="change"
                                                   data-parsley-pattern-message="您输入的固话号码格式不正确，请重新输入。"
                                                   data-parsley-pattern="^((\d{7,8})|(0\d{2,3})-?(\d{7,8})|(0\d{2,3})-?(\d{7,8})-?(\d{0,7})|(\d{7,8})-?(\d{0,7}))$">

                                        </div> -->
                                    </div>
                                    <div class="form-group">
                                        <div class="col-xs-8 receiver-location">
                                            <label  class="required control-label">上门地址:</label>
                                            <div  data-hide-globe="true" data-max-level="4"
                                                 data-hide-hkmctw="false">

                                                <!-- 收件人地址-->
                                                <input type="text" name="getAdd"
                                                       class="form-control dests "
                                                        name="receiver-address"\
                                                       placeholder="请选择所在地区，例如：广东省－深圳市－福田区" autocomplete="off">


                                                <div class="detail-location-picker toggle-plugins"></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <div class="col-xs-10">
                                            <label for="receiver-address-detail"
                                                   class="required control-label">详细地址：</label>
                                            <!-- 收件人详细地址-->
                                            <input type="text" name="getDetailAdd" data-parsley-required=""
                                                   class="form-control ui-autocomplete-input"
                                                   id="receiver-address-detail" name="receiver-address-detail"
                                                   placeholder="请填写所在街道以及详细地址" autocomplete="off">

                                        </div>
                                    </div>
                                    <div class="form-group error error-receiver-address-detail">
                                        <div class="col-xs-12">
                                            亲，您的收件地址不在我司派送范围内，可选择自取服务
                                        </div>
                                    </div>
                                    <div class="form-group self-pick-service error">
                                        <div class="col-xs-12">
                                            <a href="javascript:void(0)"
                                               class="aicon-uncheck self-pick-toggle">收件人网点自取</a>
                                        </div>
                                    </div>
                                    <div class="form-group TWlicenseInput">
                                        <div class="col-xs-10">
                                            <label for="TWlicense" class="required control-label">收件统编：</label>
                                            <input type="text" class="form-control" id="TWlicense" name="TWlicense"
                                                   placeholder="如收件方为公司请填写营业执照，个人请填写身份证号 ">
                                        </div>
                                    </div>
                                    <!-- <div class="form-group">
                                        <div class="col-xs-12 text-right">
                                            <a href="javascript:void(0)"
                                               class="aicon-circle-check save-address-check checked maidian"
                                               data-md-name="点击收件人保存到地址簿" data-md-id="111007">保存到地址簿</a>
                                        </div>
                                    </div> -->
                                </div>


                            </form>


                            <!-- <div class="row order-service-title qr-hide">
                                <div class="col-xs-12 title">
                                    上门取件时间
                                </div>
                            </div>
                            <div class="row order-service-title qr-other-info-title">
                                <div class="col-xs-12 title">完善预约信息</div>
                            </div>
                                    -->

                            <!--上门收件时间 -->
                            <!-- <form class="form-horizontal date-form qr-hide">
                                <div class="form-group">
                                    <div class="col-xs-8 detail-date-time-input-for-order-container">
                                        <label class="control-label required"> 上门时间：</label>
                                        <div class="detail-date-time-input-for-order pickup-time aicon-time time-picker-pk">
                                            <input type="text" data-parsley-required=""
                                                   class="form-control readonly accessible-click"
                                                   placeholder="请选择您适合的时间" data-parsley-trigger="change"
                                                   data-parsley-errors-container=".detail-date-time-input-for-order-container"
                                                   readonly="" id="date" name="date">
                                            <div class="pickup-time-picker" style="display:none"></div>
                                        </div>
                                    </div>
                                </div>
                            </form> -->


                            <!-- 快递价格-->
                            <div class="form-horizontal product-type-content">
                                <div class="form-group">
                                    <div class="col-xs-12">
                                        <label class="control-label required">快递产品：</label>
                                        <ul class="product-type-wrapper"></ul>
                                    </div>
                                </div>
                            </div>


                            <!--完善预约信息 预估价格：<span class="price">11</span>-->
                            <!-- <div class="subViewWrapper"></div>
                            <div class="official-clearance-content"><p>
                                除简易报关类以外，涉及出口收汇、出口退税、加工贸易手册、出口许可证管理、出口关税的；涉及进口付汇、加工贸易手册核销、增值税抵扣及进口许可证管理的货物。或申报价值超过5000元人民币、重量超过海关规定的货物。</p>
                                <p>注：需贵公司有进出口经营权，需准备的报关资料有“商业发票、装箱单、 报关委托书、合同、报关单，其他许可证件等”，且会产生正式报关相关费用。</p></div> -->

                            <!-- 电子运单契约条款-->
                            <!-- <div class="form-horizontal text-center">
                                <div class="form-group">
                                    <a href="javascript:void(0)" class="aicon-circle-check" id="agree-term-content"></a>
                                    我同意<a class="term" href="javascript:void(0)">《电子运单契约条款》</a>
                                </div>

                            </div> -->


                     <!--        <div class="form-horizontal">
                                <div class="form-group errorgroup text-center" style="display:block;color:#eb1d21">
                                    <div class="col-xs-12">
                                        <div class="fail" style="display:none">
                                            <b>
                                                预约失败：信息填写不正确。</b>
                                        </div>
                                        <div class="reservetm_error" style="display:none">
                                            <b>
                                                预约失败：下单时间不对，当前时间不能下单。</b>
                                        </div>
                                        <div class="out-of-service-time" style="display:none">
                                            <b>
                                                预约失败：下单时间不在服务时间范围内。</b>
                                        </div>
                                        <div class="malicious-order" style="display:none">
                                            <b>
                                                预约失败：恶意下单请求，不予处理。</b>
                                        </div>
                                        <div class="invalid-input must-input-check" style="display:none">
                                            <b>
                                                预约失败：信息校验不通过，请检查必填项。</b>
                                        </div>
                                        <div class="nologin" style="display:none">
                                            <b>
                                                预约失败：没有登录</b>
                                        </div>
                                        <div class="verification-code-invalid" style="display:none">
                                            <b>
                                                预约失败：验证码错误！</b>
                                        </div>
                                        <div class="verification-code-expired" style="display:none">
                                            <b>
                                                预约失败： 验证码已过期！</b>
                                        </div>
                                        <div class="delivery-services-not-available" style="display:none">
                                            <b>
                                                暂时不能为您提供收派件的服务，如有疑问请咨询我司热线95338。</b>
                                        </div>
                                        <div class="abnormal-account" style="display:none">
                                            <b>
                                                账号异常！</b>
                                        </div>
                                    </div>
                                </div>
                            </div> -->


                            <div class="form-group text-center">


                                <!--下单按钮 -->
                                <button type="button" class="primary-btn big" onclick="submitTwoOrder()">下单</button>
                                <script>
                                    function submitTwoOrder() {


                                        <% Customer customer =(Customer) request.getSession().getAttribute("currentUser");
                                        if(customer==null){%>
                                        alert("请前去登录！");
                                        <%}else{%>
                                        $(".myOrderSubmit").submit();
                                        <%}
                                        %>
                                        /*   $(".receiver-form").submit();*/
                                    }

                                </script>

                            </div>


                            <div class="intellectadd-content-wrapper"></div>
                        </div>
                    </div>
                    <!--上门详细地址，id="ui-id-2",ul下li元素-->
                    <ul class="ui-autocomplete ui-front ui-menu ui-widget ui-widget-content" id="ui-id-1" tabindex="0"
                        style="display: none;"></ul>
                    <ul class="ui-autocomplete ui-front ui-menu ui-widget ui-widget-content" id="ui-id-2" tabindex="0"
                        style="display: none;"></ul>
                    <ul class="ui-autocomplete ui-front ui-menu ui-widget ui-widget-content" id="ui-id-3" tabindex="0"
                        style="display: none;"></ul>
                    <!--收货详细地址-->
                    <ul class="ui-autocomplete ui-front ui-menu ui-widget ui-widget-content" id="ui-id-4" tabindex="0"
                        style="display: none;"></ul>
                    <ul class="ui-autocomplete ui-front ui-menu ui-widget ui-widget-content" id="ui-id-5" tabindex="0"
                        style="display: none;"></ul>
                    <ul class="ui-autocomplete ui-front ui-menu ui-widget ui-widget-content" id="ui-id-7" tabindex="0"
                        style="display: none;"></ul>
                    <ul class="ui-autocomplete ui-front ui-menu ui-widget ui-widget-content" id="ui-id-8" tabindex="0"
                        style="display: none;"></ul>
                    <ul class="ui-autocomplete ui-front ui-menu ui-widget ui-widget-content" id="ui-id-10" tabindex="0"
                        style="display: none;"></ul>
                </div>


                <div class="order-success"></div>
            </div>


        </div>

    </div>
</div>


<%-- <div id="footer">


    <div class="botfooter">
        <div class="fcontainer posre">
            <div class="toTop fixed" title="返回顶部" style="display: none;"></div>
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


                                <li><a href="http://www.sfbest.com/" target="_blank">顺丰优选网上商城</a></li>


                                <li><a href="http://www.sfbest.com/html/activity/1474966515.html"
                                       target="_blank">顺丰优选门店</a></li>


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


                                <li><a href="${pageContext.request.contextPath}/addOrder">我要寄件</a></li>


                                <li><a href="${pageContext.request.contextPath}/order/queryOrder">运单追踪</a></li>


                                <li><a href="http://www.sf-express.com/cn/sc/dynamic_function/price/">运费时效查询</a></li>


                                <li><a href="http://www.sf-express.com/cn/sc/dynamic_function/range/">收寄范围查询</a></li>


                                <li><a href="http://www.sf-express.com/cn/sc/dynamic_function/store/">服务网点查询</a></li>


                                <li><a href="http://www.sf-express.com/cn/sc/dynamic_function/accept/">收寄标准查询</a></li>


                                <li><a href="http://www.sf-express.com/cn/sc/dynamic_function/more/payment/">更多内容查询</a>
                                </li>


                            </ul>


                        </td>


                        <td>


                            <p class="title"><a class="nolink" href="javascript:void(0)">顺丰控股投资者关系</a></p>


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


                                <li><a href="http://www.sf-express.com/cn/sc/about_us/about_sf/company_introduction/">关于顺丰</a>
                                </li>


                                <li><a href="http://www.sf-express.com/cn/sc/news/">新闻资讯</a></li>


                                <li><a href="http://www.sf-express.com/cn/sc/notice/">服务公告</a></li>


                                <li><a href="http://www.sf-express.com/cn/sc/promotions/">促销活动</a></li>


                                <li>
                                    <a href="http://www.sf-express.com/cn/sc/about_us/member_interests/Individual_members/Membership_Levels_and_Growing_Value/">会员权益</a>
                                </li>


                                <li><a href="https://hr.sf-express.com/" target="_blank">人才招聘</a></li>


                            </ul>


                        </td>


                        <td>


                            <p class="title"><a class="nolink" href="javascript:void(0)">联系我们</a></p>


                            <ul class="list">


                                <li><a class="nolink" href="javascript:void(0)">客服专线95338 </a></li>


                                <li><a href="http://www.sf-express.com/cn/sc/Customer-Service-Hotlines/">客户服务热线</a></li>


                                <li><a href="http://www.sf-express.com/cn/sc/cooperative_consultation/">合作咨询</a></li>


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
                            <img src="${imgBaseUrl}order_img/sf-code-img.jpg" alt="">
                            <span class="caret"></span>
                        </div>
                    </a>


                    <a href="http://ocs2-idp.sf-express.com/dt_chat/index.action?channelId=25&amp;clientType=1"
                       target="_blank" class="online" aria-label="在线客服"></a>


                </div>

            </div>

        </div>

        <div class="others">
            <ul class="fcontainer cn">
                <li class="list1"><a href="http://www.sf-tech.com.cn/" target="_blank" aria-label="顺丰科技有限公司"></a></li>
                <li class="list2"><a href="http://dengta.sf-express.com/" target="_blank" aria-label="数据灯塔"></a></li>
                <li class="list3"><a href="http://www.sf-airlines.com/sfa/zh/index.html" target="_blank"
                                     aria-label="顺丰航空"></a></li>
                <li class="list4"><a href="http://www.sf-express.com/cn/sc/industrial_park/about_us/Introduction/"
                                     target="_blank" aria-label="顺丰产业园"></a></li>
                <li class="list5"><a
                        href="https://www.sffix.cn/sffix/home.html?chn=173595CFF4554A79087301422BFE33A1&amp;hmsr=baidu&amp;hmpl=%E5%85%AC%E5%8F%B8&amp;hmcu=%E5%85%AC%E5%8F%B8&amp;hmkw=17&amp;hmci"
                        target="_blank" aria-label="顺丰丰修"></a></li>
                <li class="list6"><a href="http://intl.sf-express.com/" target="_blank" aria-label="顺丰国际"></a></li>
                <li class="list7"><a href="http://www.sfbuy.com/index" target="_blank" aria-label="海购丰运"></a></li>
                <li class="list8"><a href="http://www.sfgy.org/" target="_blank" aria-label="顺丰公益"></a></li>
                <li class="list9"><a href="http://sf-saas.com/" target="_blank" aria-label="顺丰一站"></a></li>
                <li class="list10"><a href="https://hr.sf-express.com/" target="_blank" aria-label="人才招聘"></a></li>


            </ul>
        </div>

        <div class="fcontainer botlink">
            <div class="clearfix">
                <ul class="policy">


                    <li><a href="http://www.sf-express.com/cn/sc/use_clause/">使用条款</a></li>


                    <li><a href="http://www.sf-express.com/cn/sc/services_network/">服务网络</a></li>


                    <li><a href="http://www.sf-express.com/cn/sc/purchase_information/">集团采购</a></li>


                    <li><a href="https://qiao.sf-express.com/" target="_blank">丰桥平台</a></li>


                    <li><a href="http://www.sf-express.com/cn/sc/Privacy_Policy/">隐私政策</a></li>


                </ul>
                <ul class="copyright">
                    <li><a class="gray nolink" href="javascript:void(0)">©&nbsp;2017&nbsp;&nbsp;顺丰速运&nbsp;&nbsp;版权所有&nbsp;&nbsp;&nbsp;&nbsp;</a>
                    </li>
                    <li><a href="http://www.miitbeian.gov.cn/"
                           target="_blank">粤&nbsp;&nbsp;ICP&nbsp;&nbsp;备08034243号</a></li>
                </ul>
                <ul class="gov">
                    <li>
                        <a class="gov1" href="http://webcert.cnmstl.net/cert/code?sn=c6cc6af3fac440c28901c15a104582fe"
                           target="_blank" oncontextmenu="return false;">

                            <img src="${imgBaseUrl}order_img/officialbrand_small_h_img.jpg" alt="安全网址认证书">

                        </a>
                    </li>
                    <li>
                        <a class="gov2"
                           href="http://www.sznet110.gov.cn/webrecord/innernet/Welcome.jsp?bano=4403101900826"
                           target="_blank" oncontextmenu="return false;">

                            <img src="${imgBaseUrl}order_img/security_site_1.png" alt="安全认证">

                        </a>
                    </li>
                    <li>
                        <a class="gov3" href="http://www.sznet110.gov.cn/index.jsp" target="_blank"
                           oncontextmenu="return false;">

                            <img src="${imgBaseUrl}order_img/security_site_2.png" alt="公安网认证">

                        </a>
                    </li>
                    <li>
                        <a class="gov4" href="http://szcert.ebs.org.cn/B943BEFD-EF5E-4747-AD73-B875A1FC5CC7"
                           target="_blank" oncontextmenu="return false;">
                            <img src="${imgBaseUrl}order_img/govIcon.gif" title="深圳市市场监督管理局企业主体身份公示"
                                 alt="深圳市市场监督管理局企业主体身份公示">
                        </a>
                    </li>
                </ul>
            </div>
            <div class="text-right">
                <a target="_blank" href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=44030502003091">
                    <img src="${imgBaseUrl}order_img/security_site_3.png" style="display: inline-block"><span>粤公网安备 44030502003091号</span>
                </a>
            </div>
        </div>
    </div>

</div>
 --%>

<!-- 完善预约信息！！！-->
<script>
    var _ejsLabel = {


        "顺丰即日": "顺丰即日",

        "易碎件": "易碎件：",

        "包装费": "包装费：",

        "暂无附近地址可供选择": "暂无附近地址可供选择",

        "保价费用": "保价费用",

        "顺丰次晨": "顺丰次晨",

        "顺丰标快": "顺丰标快",

        "顺丰特惠": "顺丰特惠",

        "顺丰即日时效": "当日送达",

        "顺丰次晨时效": "次早送达",

        "顺丰标快时效": "2-3天送达",

        "顺丰特惠时效": "3-5天送达",

        "产品": "产品",

        "截单时间": "截单时间",

        "预计时效": "预计时效",

        "运费": "运费",

        "一小时内": "一小时内",

        "收派员巴枪价格的7倍": "收派员巴枪价格的7倍",

        "请选择寄托物": "请选择寄托物",

        "现在": "现在",

        "其他": "其他",

        "下单": "下单",

        "寄件": "寄件",

        "请选择快递产品": "请选择快递产品",

        "请输入姓名/电话查询": "请输入姓名/电话查询",

        "搜索": "搜索",

        "新增地址": "新增地址",

        "姓名": "姓名",

        "公司名称": "公司名称",

        "联系方式": "联系方式",

        "详细地址": "详细地址",

        "操作": "操作",

        "正在加载...": "正在加载...",

        "加载异常，请刷新重试": "加载异常，请刷新重试",

        "重试": "重试",

        "地址为空": "地址为空",

        "您可先添加一条地址信息": "您可先添加一条地址信息",

        "暂时木有内容呀...": "暂时木有内容呀...",

        "请填写联系人姓名": "请填写联系人姓名",

        "手机号码": "手机号码",

        "请填写手机号码": "请填写手机号码",

        "请填写公司名称": "请填写公司名称",

        "非必填": "非必填",

        "固话": "固话",

        "请填写固话号码": "请填写固话号码",

        "省市区": "省市区",

        "请选择所在地区，例如：广东省－深圳市－福田区": "请选择所在地区，例如：广东省－深圳市－福田区",

        "详细地址": "详细地址",

        "请填写所在街道以及详细地址": "请填写所在街道以及详细地址",

        "保存失败，请重试": "保存失败，请重试",

        "保存中...": "保存中...",

        "保存": "保存",

        "无": "无",

        "修改": "修改",

        "删除": "删除",

        "请选择其中的一条数据": "请选择其中的一条数据",

        "确定": "确定",

        "您真的要删除": "您真的要删除",

        "这个地址吗": "这个地址吗",

        "删除失败": "删除失败",

        "删除中...": "删除中...",

        "取消": "取消",

        "保存成功": "保存成功",

        "我知道了": "我知道了",

        "从地址簿选择": "从地址簿选择",

        "新增地址": "新增地址",

        "修改地址": "修改地址",

        "温馨提示": "温馨提示",

        "首页": "首页",

        "上一页": "上一页",

        "下一页": "下一页",

        "末页": "末页",

        "该输入框不能包含特殊字符": "该输入框不能包含特殊字符",

        "您输入的手机号码格式不正确，请重新输入。": "您输入的手机号码格式不正确，请重新输入。",

        "您输入的固话号码格式不正确，请重新输入。": "您输入的固话号码格式不正确，请重新输入。",

        "服务协议": "服务协议",

        "预约单信息": "预约单信息",

        "寄方": "寄",

        "收方": "收",

        "包裹类型": "包裹类型",

        "物品重量": "物品重量",

        "产品类型": "产品类型",

        "付款方式": "付款方式",

        "寄付现结": "寄付现结",

        "到付": "到付",

        "保价金额": "保价金额",

        "元": "元",

        "未保价": "未保价",

        "下单时间": "下单时间",

        "文件": "文件",

        "数码产品": "数码产品",

        "日用品": "日用品",

        "服饰": "服饰",

        "食品": "食品",

        "医药类产品": "医药类产品",

        "其他": "其他",

        "重货速运时效": "重货速运时效",

        "请选择寄托物": "请选择寄托物",

        "请选择产品": "请选择产品",

        "重货包裹": "重货包裹",

        "查看我的订单": "查看我的订单",

        "暂不支持该地区下单": "暂不支持该地区下单",

        "继续下单": "继续下单",

        "是否切换城市?详细地址与选择的省市区不一致，是否需要切换到%(city)s": "是否切换城市?详细地址与选择的省市区不一致，是否需要切换到%(city)s",

        "切换城市": "切换城市",

        "重新输入": "重新输入",

        "您选择的地址可能属于%(city)s%(district)s，是否切换？": "您选择的地址可能属于%(city)s%(district)s，是否切换？",

        "是": "是",

        "否": "否",

        "温馨提示!": "温馨提示",

        "医药卫生": "医药卫生",

        "到付月结": "到付月结",

        "当前物品不支持保价": "当前物品不支持保价",

        "修改申报物品": "修改申报物品",

        "申报价值超过5000元人民币的物品，需要正式报关": "申报价值超过5000元人民币的物品，需要正式报关",

        "请填写正确的台湾公司营业执照号": "请填写正确的台湾公司营业执照号",

        "请填写正确的台湾个人身份证号": "请填写正确的台湾个人身份证号",

        "输入内容不能大于100字": "输入内容不能大于100字",

        "例如：顺小哥，13200000000，广东省深圳市南山区某某街道某某大厦001号": "例如：顺小哥，13200000000，广东省深圳市南山区某某街道某某大厦001号",

        "粘贴整段地址，自动识别姓名、电话和地址": "粘贴整段地址，自动识别姓名、电话和地址",

        "其他想对小哥说的话（如：物品体积较大）": "其他想对小哥说的话（如：物品体积较大）",

        "最多可选择三项": "最多可选择三项",

        "上门前请先联系": "上门前请先联系",

        "要爬楼": "要爬楼",

        "带纸箱": "带纸箱",

        "带包装袋": "带包装袋",

        "带文件封": "带文件封",

        "捎话": "捎话",

        "预估重量": "预估重量",

        "未填写月结账号": "未填写月结账号",

        "月结账号无效": "月结账号无效",

        "请填写月结帐号": "请填写月结帐号",

        "月结帐号": "月结帐号",

        "请输入其他物品": "请输入其他物品",

        "温馨提示：由于药品属于特殊托寄物，请确保收寄人信息准确无误，顺丰速运竭诚为您服务": "温馨提示：由于药品属于特殊托寄物，请确保收寄人信息准确无误，顺丰速运竭诚为您服务",

        "请输入药品名称、数量、单位，保健品类请选择食品。&#10;例如：阿莫西林颗粒，2盒": "请输入药品名称、数量、单位，保健品类请选择食品。&#10;例如：阿莫西林颗粒，2盒",

        "药品备注": "药品备注",

        "未选择托寄物": "未选择托寄物",

        "家具": "家具",

        "家电": "家电",

        "电子产品": "电子产品",

        "服装鞋帽": "服装鞋帽",

        "化工橡塑": "化工橡塑",

        "机具仪器": "机具仪器",

        "快消品": "快消品",

        "汽配": "汽配",

        "完善预约信息": "完善预约信息",

        "医药类产品不能选择自取服务": "医药类产品不能选择自取服务",

        "需要自取": "收件人网点自取",

        "大陆保价未选择": "大陆保价未选择",

        "需要保价": "需要保价",

        "保价金额不能超过申报总值，当前申报总值为": "保价金额不能超过申报总值，当前申报总值为",

        "保价超上限提醒": "保价超上限提醒",

        "保价提醒": "保价提醒",

        "保价": "保价",

        "请输入声明价值": "请输入声明价值",

        "保值": "保值",

        "保价服务": "保价服务",

        "您托寄的物品已超出快递产品重量标准，请选择重货产品，详询95338。": "您托寄的物品已超出快递产品重量标准，请选择重货产品，详询95338。",

        "如您的物品单件超过50公斤，将对此件物品收取超长超重费用，详询95338。": "如您的物品单件超过50公斤，将对此件物品收取超长超重费用，详询95338。",

        "预估重量": "预估重量",

        "您输入的单位不存在，请重新输入": "您输入的单位不存在，请重新输入",

        "请填写": "请填写",

        "请输入整数或小数": "请输入整数或小数",

        "物品单价": "物品单价",

        "此物品为违禁品，请重新选择": "此物品为违禁品，请重新选择",

        "请按“品名+材质+规格型号”填写，如：男士棉衬衫": "请按“品名+材质+规格型号”填写，如：男士棉衬衫",

        "请填写物品名称": "请填写物品名称",

        "物品名称": "物品名称",

        "选择类型": "选择类型",

        "地址拆分功能暂不支持港澳台及国际地区。": "地址拆分功能暂不支持港澳台及国际地区。",

        "未找到对应的省份，请您手动进行选择哦！": "未找到对应的省份，请您手动进行选择哦！",

        "未找到对应的城市，请您手动进行选择哦！": "未找到对应的城市，请您手动进行选择哦！",

        "未找到对应的行政区，请您手动进行选择哦！": "未找到对应的行政区，请您手动进行选择哦！",

        "需要自取": "收件人网点自取",

        "预计时效": "预计到达时效",

        "截单时间": "最迟收件时间",

        "增值服务": "增值服务",

        "签单返还": "签单返还",

        "提示：签单返还需收取5元增值服务费": "提示：签单返还需收取5元增值服务费",

        "签名": "签名",

        "盖章": "盖章",

        "登记身份证": "登记身份证",

        "收取身份证复印件": "收取身份证复印件",

        "设置默认寄件地址": "设置默认寄件地址",

        "请选择一个地址设定为默认寄件地址": "请选择一个地址设定为默认寄件地址",

        "港澳台及国际地址不支持默认地址设置，请重新选择": "港澳台及国际地址不支持默认地址设置，请重新选择",

        "港澳台地址不支持默认地址设置": "港澳台地址不支持默认地址设置",

        "已设为默认寄件地址": "已设为默认寄件地址",

        "网络异常，请稍后再试": "网络异常，请稍后再试",

        "设置默认寄件地址失败": "设置默认寄件地址失败",

        "收": "收",

        "默认": "默认",

        "收件统编": "收件统编*",

        "如收件方为公司请填写营业执照，个人请填写身份证号": "如收件方为公司请填写营业执照，个人请填写身份证号",

        "捎话给快递员": "捎话给快递员",

        "寄托物重量": "寄托物重量",

        "预计价格": "预计价格",

        "身份证复印件": "身份证复印件",

        "付款信息": "付款信息",

        "添加增值服务": "添加增值服务",

        "寄托物品信息": "寄托物品信息",

        "地址": "地址",

        "标 * 为必填项": "标 * 为必填项",

        "点击添加": "点击添加",

        "设置快件信息": "设置快件信息",

        "更多操作": "更多操作",

        "删除成功": "删除成功",

        "设为默认地址": "设为默认地址",

        "完善信息": "完善信息",

        "快件信息": "快件信息",

        "修改收件人": "修改收件人",

        "收方信息": "收方信息",

        "修改联系人": "修改联系人",

        "新增联系人": "新增联系人",

        "联系人信息": "联系人信息",

        "确认选择": "确认选择",

        "已为默认地址": "已为默认地址",

        "联系人": "联系人",

        "暂无附近地址可供选择": "暂无附近地址可供选择",

        "下次自动登录": "下次自动登录",

        "月结卡号": "月结卡号*",

        "查看订单列表": "查看订单列表",

        "地址簿": "地址簿",

        "托寄物重量/kg": "托寄物重量/kg",

        "${destFreight}元": "${destFreight}元",

        "${deliverTime}到达": "${deliverTime}到达",

        "起": "起",

        "预计": "预计",

        "请输入12位数字组成的运单号": "请输入12位数字组成的运单号",

        "运单号已被使用": "运单号已被使用",

        "运单号无效": "运单号无效",

        "有扫码寄件": "有扫码寄件",

        "纸质运单": "纸质运单",

        "输入纸质二维码上的运单号": "输入纸质二维码上的运单号",

        "填写寄件信息": "填写寄件信息",

        "将包裹与二维码交给收派员": "将包裹与二维码交给收派员",

        "请输入运单号以开始": "请输入运单号以开始",

        "下一步": "下一步",

        "温馨提示：此方式下单不会通知快递员上门取件。如需快递员及时上门收件，请使用“寄快递”下单或联系快递员。": "温馨提示：此方式下单不会通知快递员上门取件。如需快递员及时上门收件，请使用“寄快递”下单或联系快递员。",

        "运单填写成功": "运单填写成功",

        "温馨提示：请把“顺丰联”粘贴在包裹上，并交由快递员揽收": "温馨提示：请把“顺丰联”粘贴在包裹上，并交由快递员揽收",

        "预约成功": "预约成功",

        "预计上门时间": "预计上门时间",

        "快递员": "快递员",

        "联系电话": "联系电话",

        "取消寄件": "取消寄件",

        "预约号": "预约号",

        "再下一单": "再下一单",

        "下载电子运单": "下载电子运单",

        "完善快件信息": "完善快件信息",

        "电子运单契约条款": "电子运单契约条款",

        "我已阅读该条款，同意遵守": "我已阅读该条款，同意遵守",

        "确认代收卡信息": "确认代收卡信息",

        "代收卡号": "代收卡号",

        "开户名": "开户名",

        "非月结客户的代收货款服务暂不支持“到付”": "非月结客户的代收货款服务暂不支持“到付”",

        "代收货款": "代收货款",

        "信息填写不完整": "信息填写不完整",

        "确认无误": "确认无误",

        "重新填写": "重新填写",

        "金额超过上限，请重新输入": "金额超过上限，请重新输入",

        "卡号不正确，请重新输入": "卡号不正确，请重新输入",

        "网络异常，暂无法支持该服务": "网络异常，暂无法支持该服务",

        "手机号码、固话号码请至少填写一项": "手机号码、固话号码请至少填写一项",

        "请输入重量": "请输入重量",

        "请输入件数": "请输入件数",

        "件": "件",

        "提示：如有多个货物请填写总的重量与体积，最终实际收费以收派员实际上门秤量为准": "提示：如有多个货物请填写总的重量与体积，最终实际收费以收派员实际上门秤量为准",

        "预估体积": "预估体积",

        "请输入体积": "请输入体积",

        "立方米": "立方米",

        "长宽高": "长宽高",

        "托寄物重量": "托寄物重量",

        "快件重量不能为空": "快件重量不能为空",

        "请输入有效的快件重量，最大9999": "请输入有效的快件重量，最大9999",

        "包裹总重量不能低于20kg": "包裹总重量不能低于20kg",

        "快件件数不能为空": "快件件数不能为空",

        "包裹总件数不能低于1": "包裹总件数不能低于1",

        "请输入有效的快件件数，最大9999": "请输入有效的快件件数，最大9999",

        "请输入有效的快件体积，最大9999": "请输入有效的快件体积，最大9999",

        "代收金额": "代收金额",

        "请填写代收金额": "请填写代收金额",


        "中国件": "A000086000",

        "香港件": "A000810000",

        "台湾件": "A000710000",

        "澳门件": "A000820000",

        "国际件": "International",

        "公斤": "公斤",

        "时效": "时效",

        "约": "约",

        "寄付货币换算": "寄付货币换算",

        "送至郊区的": "收/寄地址为郊区的",

        "包裹": "包裹",

        "长": "长",

        "邮件订阅失败，请稍后重试": "很抱歉，邮件订阅失败，请稍后重试。",

        "快件重量": "快件重量",

        "请输入大于0.1的重量": ">0.1",

        "或输入快件体积进行查询": "或输入快件体积进行查询",

        "宽": "宽",

        "计算": "计算",

        "查看": "查看",

        "我们的产品": "我们的产品",

        "重量换算器": "重量换算器",

        "更多": "更多",

        "预计时效": "预计到达时效",

        "到付价": "到付价",

        "寄付价": "寄付价",

        "到付货币换算": "到付货币换算",

        "香港到香港／澳门大件重量": "200",

        "香港到台湾大件重量": "100",

        "香港到大陆大件重量": "150",

        "产品详情": "产品详情",

        "原寄地": "原寄地",

        "快件重量（kg）": "快件重量（kg）",

        "香港／澳门": "香港／澳门",

        "为": "为",

        "高": "高",

        "目的地": "目的地",

        "支持": "支持",

        "香港大件备注": "如您的货件是等同或高于下列重量, 请致电(852) 3123 6826顺丰大货组专线查询或报价",

        "文件": "文件",

        "重量超限,": "重量超限,",

        "体积超限,": "体积超限,",

        "您的快件属于超长件，收件时将收取相应的超长附加费。感谢您对顺丰速运的关注与支持，如有疑问，可致电95338咨询。": "您的快件属于超长件，收件时将收取相应的超长附加费。感谢您对顺丰速运的关注与支持，如有疑问，可致电95338咨询。",

        "很抱歉，您的快件": "很抱歉，您的快件",

        "暂时不能提供收寄服务。感谢您对顺丰速运的关注与支持，如有疑问，可致电95338咨询。": "暂时不能提供收寄服务。感谢您对顺丰速运的关注与支持，如有疑问，可致电95338咨询。",

        "暂不支持流向控制": "  ",

        "暂未开通": "暂未开通",

        "您的快件属于超长件，收件时将收取相应的超长附加费。感谢您对顺丰速运的关注与支持，如有疑问，可致电4008-111-111咨询。": "您的快件属于超长件，收件时将收取相应的超长附加费。感谢您对顺丰速运的关注与支持，如有疑问，可致电95338咨询。",

        "暂时不能提供收寄服务。感谢您对顺丰速运的关注与支持，如有疑问，可致电4008-111-111咨询。": "暂时不能提供收寄服务。感谢您对顺丰速运的关注与支持，如有疑问，可致电95338咨询。",

        "T9Tip": "-",

        "派件服务时间": "派件服务时间",

        "周一至周五": "周一至周五",

        "当日送达": "已过最晚收件时间",

        "次早送达": "已过最晚收件时间",

        "CN说明": "温馨提示：<br/> 1、如您在周六、日/法定节假日期间寄件，将会做相应加时。（以上“预计时效”已做相应加时） <br/>2、如您的收方地址属于偏远区域，在“预计时效”基础上需增加0.5天。",

        "偏远区域加时": "偏远区域加时0.5天",

        "前": " 前",

        "顺丰标快": "顺丰标快",

        "约2-4天": "约2-4天",

        "暂无数据": "暂无数据",

        "重货速运产品根据寄件流向会有最低计价重量及最低收费，请知悉": "重货速运产品根据寄件流向会有最低计价重量及最低收费，请知悉",

        "快递": "快递",

        "大件": "大件",

        "重货包裹": "重货包裹",

        "预计时效": "预计到达时效",

        "提货费：": "提货费：",

        "运输费：": "运输费：",

        "配送费：": "配送费：",

        "a) 寄付价=提货费+运输费+送货费：当查询结果未显示提货或送货费用时，请您选择自送至冷库或到冷库自提。": "a) 寄付价=提货费+运输费+送货费：当查询结果未显示提货或送货费用时，请您选择自送至冷库或到冷库自提。",

        "b) 关于时效：“如需提、送服务，时效在此基础上慢0到2天”。": "b) 关于时效：“如需提、送服务，时效在此基础上慢0到2天”。",

        "c) 如需自助下单请关注【顺丰冷运】微信公众号或登录http://p.sf-express.com。": "c) 如需自助下单请关注【顺丰冷运】微信公众号或登录http://p.sf-express.com。",

        "温馨提示：": "温馨提示：",

        "冷运": "冷运",

        "一、冷运零担": "一、冷运零担",

        "二、冷运到家": "二、冷运到家",

        "a) 如使用EPP箱，加收6元/票的收费。": "a) 如使用EPP箱，加收6元/票的收费。",

        "网络故障，请稍后重试。": "网络故障，请稍后重试。",

        "电子运单契约条款": "电子运单契约条款",

        "我已阅读该条款，同意遵守": "我已阅读该条款，同意遵守",


        "最近查询记录": "最近查询记录",

        "修改成功": "修改成功",

        "全选": "全选",

        "查询预计到达时间": "  ",

        "登录": "登录",

        "二维码请求失败，请稍后重试。": "二维码请求失败，请稍后重试。",

        "预计到达": "预计到达",

        "（已选择%s条运单）": "（已选择%s条运单）",

        "邮件订阅": "邮件订阅",

        "扫码关注": "扫码关注",

        "通过邮件订阅（最多支持绑定3个邮件订阅路由信息）": "通过邮件订阅（最多支持绑定3个邮件地址订阅路由信息）",

        "请输入邮件地址": "请输入邮件地址",

        "订阅中...": "订阅中...",

        "确定": "确定",

        "邮件订阅成功": "邮件订阅成功。",

        "服务器暂不可用，请稍后再试": "服务器暂不可用，请稍后重试。",

        "最多只支持3个邮件地址订阅": "最多只支持3个邮件地址订阅",

        "使用微信扫一扫": "使用微信扫一扫",

        "关注顺丰公众号后自动为您推送这%s运单的更新已签收的运单将不会再推送给您": "关注顺丰公众号后自动为您推送这%s条运单的更新，已签收的运单将不会再推送给您",

        "付款方式": "付款方式",

        "计费重量": "计费重量",

        "托寄物内容": "托寄物内容",

        "附加服务": "附加服务",

        "无附加服务": "无附加服务",

        "数量": "数量",

        "个": "个",

        "运单资料": "运单资料",

        "使用微信扫一扫，关注微信公众号并持续追踪该运单状态": "使用微信扫一扫，关注微信公众号并持续追踪该运单状态",

        "查看超时退费规则": "查看超时退费规则",

        "您的运单已超时，可致电95338咨询退费相关事宜，谢谢！": "您的运单已超过预计派送时间，可致电95338咨询退费相关事宜，感谢您的支持与信任！",

        "超时退费": "超时退费",

        "运单动态": "运单动态",

        "未查到此运单%s信息": "抱歉！未查到此运单%s信息，请确认运单号码是否正确，或致电顺丰客服热线95338。",

        "重新获取(%s)": "重新获取(%s)",

        "不满意": "不满意",

        "优先派送": "优先派送",

        "快件正在派送途中，已记录信息通知收派员优先派送！": "快件正在派送途中，已记录信息通知收派员优先派送！",

        "您的快件已经出仓": "您的快件已经出仓",

        "您的快件还未出仓": "您的快件还未出仓",

        "您的需求已记录，快件到达后我们将尽快为您派送！": "您的需求已记录，快件到达后我们将尽快为您派送！",

        "您输入的验证码有误，请重新输入": "您输入的验证码有误，请重新输入",

        "*输入手机号有误，请重新输入": "输入手机号有误，请重新输入",

        "抱歉，该运单订阅的邮箱数量超过了最大限制。": "抱歉，该运单订阅的邮箱数量超过了最大限制（最多可支持3个邮箱地址）。",

        "提交优派申请": "申请优先派送",

        "服务满意度": "服务满意度",

        "满意": "满意",

        "申请提交成功！": "申请提交成功！",

        "评价中，请稍等...": "评价中，请稍等...",

        "评价请求失败，请稍后重试。": "评价请求失败，请稍后重试。",

        "评价请求成功，感谢你的反馈。": "评价请求成功，感谢你的反馈。",

        "该运单目前还没有路由信息，请耐心等待。": "该运单目前还没有路由信息，请耐心等待。",

        "请输入您运单上寄件人的手机号": "请输入您运单上寄件人的手机号",

        "请输入正确邮件地址，且不能重复。": "请输入正确邮件地址，且不能重复。",

        "运单号码": "运单号码",

        "验证寄件人身份": "验证寄件人身份",

        "验证短信已发送至%s，请查收": "验证短信已发送至%s，请查收",

        "验证码": "验证码",

        "已签收": "已签收",

        "运送中": "运送中",

        "收件员": "收件员",

        "派件员": "派件员",

        "请输入收件人或者寄件人的手机号以验证身份": "请输入收件人或者寄件人的手机号以验证身份",

        "网络异常无法提交，请拨打客服热线95338，顺丰员工将竭诚为您服务。": "网络异常无法提交，请拨打客服热线95338，顺丰员工将竭诚为您服务。",

        "一个运单号在一天之内最多只能查5次，请明天再来": "一个运单号在一天之内最多只能查5次，请明天再来",

        "每个IP在一分钟之内最多只能查60次": "每个IP在一分钟之内最多只能查60次",

        "验证": "验证",

        "打开": "打开",

        "运单资料&签收图": "签收图",

        "手机号码": "手机号码",

        "请输入运单上的手机号码": "请输入运单上的手机号码",

        "请输入验证码。": "请输入验证码。",

        "申请中...": "申请中...",

        "确认": "确认",

        "您输入的手机号有误，请重新输入": "您输入的手机号有误，请重新输入",

        "查询中...": "查询中...",

        "获取中...": "获取中...",

        "运单 %s 已经达到可订阅的上限。": "运单 %s 已经达到可订阅的上限。",

        "邮箱地址 %s 已经订阅过选中的运单，请更换后重试。": "邮箱地址 %s 已经订阅过选中的运单，请更换后重试。",

        "正在加载二维码...": "正在加载二维码...",

        "请求失败，请稍后重试<br />或者关注顺丰速运官方微信。": "请求失败，请稍后重试<br />或者关注顺丰速运官方微信。",

        "您输入的验证码已经过期，请重新获取": "您输入的验证码已经过期，请重新获取",

        "运单 %s 已经达到可订阅的上限，请取消勾选后重试。": "运单 %s 已经达到可订阅的上限，请取消勾选后重试。",

        "您对%s的服务是否满意": "您对%s的服务是否满意",

        "未查到此苹果运单%s信息": "抱歉！未查到此运单%s信息，请确认运单号码是否正确，或致电顺丰客服热线4006 635 333.",

        "苹果客服专线": "苹果客服专线：9533-887（限大陆）",

        "关闭": "关闭",

        "子单资料": "子单资料",

        "因APEC快件时效受限提示": " ",

        "关闭签收图图片地址": "images/ico_close_img.png",

        "苹果客服专线：1800-3111-111（限新加坡）": "苹果客服专线：1800-3111-111（限新加坡）",

        "苹果客服专线：852-27300273（限香港）": "苹果客服专线：00852-27300273（限香港）",

        "苹果客服专线：0800-088830（限台湾座机）02-21926063（台湾座机以外）": "苹果客服专线：0800-088830（限台湾座机）02-21926063（台湾座机以外）",

        "请输入大于0.1的重量": " >0.1",

        "国际件电子派送证明": "派送证明",

        "关闭签收图图片地址": "images/ico_close_img.png",

        "预计": "预计",

        "到达": "到达",

        "前": "前",

        "(仅供参考，具体时效以实际派送时间为准)": "(仅供参考，具体时效以实际派送时间为准)",

        "预计派送时间重新计算中": "预计派送时间重新计算中",

        "请输入验证码": "请输入验证码",

        "查询": "查询",

        "paymentType.1": "寄付",

        "paymentType.2": "到付",

        "paymentType.3": "第三方付",

        "图形验证码": "图形验证码",

        "请输入图片中的验证码": "请输入图片中的验证码",

        "您输入的手机号或图形验证有误，请重新输入": "您输入的手机号或图形验证有误，请重新输入",

        "SF.InternationalExpress.Tips": "顺丰国际直邮认证商家 - 确保海外国家发货，为您提供点对点查询，安全有保障",

        "很抱歉，签收图暂未录入系统，请等待。签收图将在运单签收后的1~2个工作日录入系统。": "暂无数据",

        "暂无运单信息": "暂无运单信息",

        "马上下单": "马上下单",

        "运单号": "运单号",

        "等待取件": "等待取件",

        "派送中": "派送中",

        "已签收": "已签收",

        "已作废": "已作废",

        "已退回": "已退回",

        "已转寄": "已转寄",

        "等待上门": "等待上门",

        "已揽件": "已揽件",

        "已取件": "已取件",

        "已关闭": "已关闭",

        "已取消": "已取消",

        "预约上门时间": "预约上门时间",

        "预计送达时间": "预计送达时间",

        "退回时间": "退回时间",

        "签收时间": "签收时间",

        "作废时间": "作废时间",

        "转寄时间": "转寄时间",

        "揽件时间": "揽件时间",

        "取消时间": "取消时间",

        "取件时间": "取件时间",

        "关闭时间": "关闭时间",

        "是否取消订单？": "是否取消订单？",

        "温馨提示": "温馨提示",

        "取消成功": "取消成功",

        "取消失败": "取消失败",

        "待定": "待定",

        "是": "是",

        "否": "否",

        "无2": "无",

        "首页2": "首页",

        "上一页": "上一页",

        "下一页": "下一页",

        "末页": "末页",

        "取消预约": "取消预约",

        "待支付": "待支付",

        "待退款": "待退款",

        "已退款": "已退款",

        "已取消": "已取消",

        "预约完成": "预约完成",

        "已拒单": "已拒单",

        "可接单": "可接单",

        "退款时间": "退款时间",

        "完成时间": "完成时间",

        "拒单时间拒单时间": "",

        "点击可查看更多": "点击可查看更多",

        "运单详情": "运单详情",

        "签收底单": "签收底单",

        "电子存根": "电子存根",

        "暂无数据": "暂无数据",

        "目的地": "目的地",

        "寄件方": "寄件方",

        "收件方": "收件方",

        "托寄物": "托寄物",

        "产品类型": "产品类型",

        "付款方式": "付款方式",

        "寄付现结": "寄付现结",

        "到付": "到付",

        "第三方付": "第三方付运费",

        "寄付月结": "寄付月结",

        "实际重量": "实际重量",

        "件数": "件数",

        "计费重量": "计费重量",

        "运费": "运费",

        "附加费用": "附加费用",

        "费用合计": "费用合计",

        "备注": "备注",

        "收件员": "收件员",

        "收件时间": "收件时间",

        "请求失败": "请求失败",

        "燃油附加费": "燃油附加费",

        "全选": "全选",

        "温馨提示：您当前未选择保价服务，若在寄递过程中发生丢损，您最高可获得7倍运费的赔偿。": "温馨提示：您当前未选择保价服务，若在寄递过程中发生丢损，您最高可获得7倍运费的赔偿。",

        "点击输入保额": "点击输入保额",

        "托寄物重量/kg *": "托寄物重量/kg *",

        "预计价格": "预计价格",

        "付款信息": "付款信息",

        "托寄物品信息": "托寄物品信息",

        "寄": "寄",

        "收": "收",

        "*订单号只能为12位数字,且不能重复。": "*订单号只能为12位数字,且不能重复。",

        "登录/注册": "登录/注册",

        "暂无运单，登录/注册会员可查询更多运单": "暂无运单，登录/注册会员可查询更多运单",

        "输入运单号进行查询，单次最多查询20条。请以逗号、空格或回车键隔开": "输入运单号进行查询，单次最多查询20条。请以逗号、空格或回车键隔开",

        "修改失败": "修改失败",

        "该预约单暂不支持修改": "该预约单暂不支持修改",

        "是否删除订单？": "是否删除订单？",

        "我寄的": "我寄的",

        "我收的": "我收的",

        "我的包裹": "我的包裹",

        "运单信息": "运单信息",

        "完善信息": "完善信息",

        "预计<i>%(deliveryTime)s前</i>到达": "预计<i>%(deliveryTime)s前</i>到达",

        "预计派送时间重新计算中": "预计派送时间重新计算中",

        "(仅供参考，具体时效以实际派送时间为准)": "(仅供参考，具体时效以实际派送时间为准)",

        "亲，您的收件地址不在我司派送范围内，可选择自取服务": "亲，您的收件地址不在我司派送范围内，可选择自取服务",

        "收件人网点自取": "收件人网点自取",


        "常用市": "常用市",

        "选择国家或地区": "选择国家或地区",

        "国际": "国际",

        "请选择": "请选择",

        "正在加载地区数据...": "正在加载地区数据...",

        "抱歉，加载数据地区数据失败。": "很抱歉，加载地区数据失败。",

        "未来将会再开通": "未来将会再开通",

        "不清楚具体地名?": "不清楚具体地名?",

        "现在": "现在",

        "本": "本",

        "日期": "日期",

        "台湾偏远地区范围备注": "备注: 台湾部分地区收派时效需加1个工作天，可<a href='http://www.sf-express.com/tw/tc/download/TW_Remote_area_TC.PDF' target='_black'>按此</a>查阅详情。",

        "港澳台": "港澳台",

        "省/直辖市": "省/直辖市",

        "正在加载数据...": "正在加载数据...",

        "明天": "明天",

        "今天": "今天",

        "时间": "时间",

        "偏远地区附加费": "                                                                    ",

        "非工商附加费": "如收派件地址为香港非工商地区或香港偏远地区,上门收派每票另收港币$30，附加费可与运费绑定(寄付或到付)，收派件时效需加1个工作天。",

        "大陆": "内地",

        "香港": "香港",

        "台湾": "台湾",

        "下": "下",

        "天": "工作日",

        "海外": "海外",

        "昨天": "昨天",

        "上": "上",

        "该地区暂时没有开通该项业务": "该地区暂时没有开通该项业务",

        "%s等%d个服务地区": "%s等%d个服务地区",

        "关闭": "关闭",

        "扫描二维码<br />关注顺丰微信": "扫描二维码<br />关注顺丰微信",

        "tip.message": "关于冒充顺丰速运<br>诈骗客户的<br>警示公告",

        "查询结果": "查询结果",

        "结果为空": "没有找到任何结果，请换一个搜索词试",

        "手机号码不能为空！": "手机号码不能为空！",

        "验证码不能为空！": "验证码不能为空！",

        "请输入正确的手机号！": "请输入正确的手机号！",

        "验证码错误！": "验证码错误！",

        "提交成功！": "提交成功！",

        "秒后开始下载！": "秒后开始下载！",

        "请输入正确的邮箱地址！": "请输入正确的邮箱地址！",

        "提交中...": "提交中...",

        "网络错误！": "网络错误！",

        "秒后重新提交！": "秒后重新提交！",

        "提交": "提交",

        "帐号登录": "帐号登录",

        "登录后即可免验证快速下单与查件": "登录后即可免验证快速下单与查件",

        "请输入手机号": "请输入手机号",

        "请输入验证码": "请输入验证码",

        "重新获取%s": "重新获取%s",

        "获取验证码": "获取验证码",

        "手机号错误": "手机号错误",

        "登录失败": "登录失败",

        "该手机号本日已达到发送短信上限": "该手机号本日已达到发送短信上限",

        "获取验证码失败": "获取验证码失败",

        "验证码已过期": "验证码已过期",

        "验证码错误": "验证码错误",

        "验证码未发送": "验证码未发送",

        "网络错误": "网络错误",

        "未注册用户登录默认注册顺丰会员": "未注册用户登录默认注册顺丰会员",

        "登录中...": "登录中...",

        "快速登录": "快速登录",

        "进入会员系统": "进入会员系统",

        "同意": "同意",

        "服务条款": "服务条款",

        "请勾选服务条款": "请勾选服务条款",

        "请在手机上登录顺丰官网": "请在手机上登录顺丰官网",

        "请使用微信扫描二维码": "请使用微信扫描二维码",

        "请在手机上确认": "请在手机上确认",

        "二维码已失效": "二维码已失效",

        "扫码登录": "扫码登录",

        "扫描成功": "扫描成功",

        "如非顺丰会员请使用帐号登录": "如非顺丰会员请使用帐号登录",

        "保费": "保费",

        "赔偿": "赔偿",

        "温馨提示：感谢您使用顺丰保价服务，我们将竭诚保护您的货物安全，若在寄递过程中发生丢损，您最高可获得声明价值": "温馨提示：感谢您使用顺丰保价服务，我们将竭诚保护您的货物安全，若在寄递过程中发生丢损，您最高可获得声明价值",

        "温馨提示：您当前未选择保价服务，若在寄递过程中发生丢损，您最高可获得5倍运费的赔偿。": "温馨提示：您当前未选择保价服务，若在寄递过程中发生丢损，您最高可获得5倍运费的赔偿。",

        "单价": "单价",

        "请输入正整数或正小数": "请输入正整数或正小数",

        "请输入正整数": "请输入正整数",

        "文件": "文件",

        "新增申报物品": "新增申报物品",

        "温馨提示：您当前未选择保价服务，若在寄递过程中发生丢损，您最高可获得7倍运费的赔偿。": "温馨提示：您当前未选择保价服务，若在寄递过程中发生丢损，您最高可获得7倍运费的赔偿。",

        "物品数量": "物品数量",

        "物品": "物品",

        "正式报关须知": "正式报关须知",

        "正式报关费用：200元": "正式报关费用：200元",

        "正式报关": "正式报关",

        "非正式报关": "非正式报关",

        "报关方式": "报关方式",

        "声明价值最高上限为50万元，如货物价值大于50万，请咨询上门收件员或95338。": "声明价值最高上限为50万元，如货物价值大于50万，请咨询上门收件员或95338。",

        "温馨提示：如保价大于50万，请以小哥上门确认的保价金额为准，保价服务最低收费8元": "温馨提示：如保价大于50万，请以小哥上门确认的保价金额为准，保价服务最低收费8元",

        "税金": "税金",

        "请填写月结卡号": "请填写月结卡号",

        "人民币": "人民币",

        "申报总价值": "申报总价值",

        "提示：物品的申报币种需要保持一致": "提示：物品的申报币种需要保持一致",

        "提示：申报物品必须填写": "提示：申报物品必须填写",

        "提示：申报物品数量不能大于10条": "提示：申报物品数量不能大于10条",

        "违禁品查询": "违禁品查询",

        "新增": "新增",

        "海关申报": "海关申报",

        "完善报关信息": "完善报关信息",

        "未找到您所在的地区信息，请重新选择": "未找到您所在的地区信息，请重新选择",

        "验证码参数错误": "验证码参数错误",

        "验证码超次数，请重新获取": "验证码超次数，请重新获取",

        "同意条款并注册会员": "同意条款并注册会员",

        "自动登录": "自动登录",


        "您的寄件数量不可为空": "您的寄件数量不可为空",

        "您的联系电话不可为空": "您的联系电话不可为空",

        "您输入联系电话错误": "您输入联系电话错误 ",

        "您输入的预估月快递费用必须大于等于0": "您输入的预估月快递费用必须大于等于0",

        "您输入的验证码有误，请重新输入": "您输入的验证码有误，请重新输入",

        "您输入的验证码不能为空": "您输入的验证码不能为空",

        "您输入联系电话有误，请重新输入": "您输入联系电话有误，请重新输入",

        "您输入的托寄内容太长": "您输入的托寄内容太长",

        "网络异常，请稍后再试！": "网络异常，请稍后再试！",

        "必须同意隐私声明": "必须同意隐私声明",

        "客户名称未填写": "客户名称未填写",

        "客户名称超出长度范围": "客户名称超出长度范围",

        "客户区域未填写": "客户区域未填写",

        "客户详细地址未填写": "客户详细地址未填写",

        "客户详细地址超出长度范围": "客户详细地址超出长度范围",

        "联系人姓名未填写": "联系人姓名未填写",

        "联系人姓名超出长度范围": "联系人姓名超出长度范围",

        "联系人手机未填写": "联系人手机未填写",

        "联系人手机不符合手机格式": "联系人手机不符合手机格式",

        "联系人座机不符合电话格式": "联系人座机不符合电话格式",

        "每月顺丰快递费未填写": "每月顺丰快递费未填写",

        "每月顺丰快递费超出长度规定": "每月顺丰快递费超出长度规定",

        "您的合作申请需求我司已在跟进中，请您耐心等待，谢谢！": "您的合作申请需求我司已在跟进中，请您耐心等待，谢谢！",

        "您的月结申请未成功，如有问题请与客户经理联系（客户经理${managerName}、电话${managerPhone}），谢谢！": "您的月结申请未成功，如有问题请与客户经理联系（客户经理${managerName}、电话${managerPhone}），谢谢！",

        "您的月结申请已在办理中，如有问题请与客户经理联系（客户经理${managerName}、电话${managerPhone}），谢谢！": "您的月结申请已在办理中，如有问题请与客户经理联系（客户经理${managerName}、电话${managerPhone}），谢谢！",

        "您在${clueCloseTime}申请我司月结未成功，是否继续申请？": "您在${clueCloseTime}申请我司月结未成功，是否继续申请？",

        "您已是月结卡号尾数为${cardTailNum}的月结客户，如有问题请与客户经理联系（客户经理${managerName}、电话${managerPhone}），是否继续申请？": "您已是月结卡号尾数为${cardTailNum}的月结客户，如有问题请与客户经理联系（客户经理${managerName}、电话${managerPhone}），是否继续申请？",

        "销售人员将会尽快与您取得联系，近期请留意接听来电": "销售人员将会尽快与您取得联系，近期请留意接听来电",

        "客户名称超出长度规定": "客户名称超出长度规定",

        "客户地址超出长度规定": "客户地址超出长度规定",

        "联系人姓名超出长度规定": "联系人姓名超出长度规定",

        "联系人手机不符合手机格式": "联系人手机不符合手机格式",

        "联系人座机不符合电话格式": "联系人座机不符合电话格式",

        "预计月收入不是正整数": "预计月收入不是正整数",

        "预计月收入超出长度规定": "预计月收入超出长度规定",

        "推荐人工号无效": "推荐人工号无效",

        "请求参数不能为空": "请求参数不能为空",

        "客户地址未填写": "客户地址未填写",

        "预计月收入未填写": "预计月收入未填写",

        "业务板块未填写": "业务板块未填写",

        "线索来源不能为空": "线索来源不能为空",

        "您目前的快递业务暂时达不到顺丰月结标准，可以继续使用顺丰其他非月结服务": "您目前的快递业务暂时达不到顺丰月结标准，可以继续使用顺丰其他非月结服务",

        "您的月结申请已在办理中，如有问题请与客户经理联系（客户经理${managerName}、电话${managerPhone}），是否继续申请？": "您的月结申请已在办理中，如有问题请与客户经理联系（客户经理${managerName}、电话${managerPhone}），是否继续申请？",


        "CN": "中国内地",

        "TW": "中国台湾",

        "HK": "中国香港",

        "MO": "中国澳门",

        "IN": "印度",

        "KH": "柬埔寨",

        "AU": "澳大利亚",

        "SG": "新加坡",

        "MY": "马来西亚",

        "TH": "泰国",

        "VN": "越南",

        "JP": "日本",

        "US": "美国",

        "KR": "韩国",

        "RU": "俄罗斯",

        "MN": "蒙古国",

        "ID": "印度尼西亚",


        "1": "内地互寄",

        "2": "香港同城",

        "3": "台湾同城",

        "4": "澳门同城",

        "OTHERS": "进出口（含港/澳/台）",


        "收": "收",

        "上门服务需要加时：+%s天": "上门服务需要加时：+%s天",

        "仅支持到店自寄自取服务，暂不支持上门收派件": "仅支持到店自寄自取服务，暂不支持上门收派件",

        "仅支持到店自寄服务，暂不支持上门收派件": "仅支持到店自寄服务，暂不支持上门收派件",

        "仅支持到店自取服务，暂不支持上门收派件": "仅支持到店自取服务，暂不支持上门收派件",

        "仅支持上门派件服务，暂不支持上门收件": "仅支持上门派件服务，暂不支持上门收件",

        "仅支持上门收件服务，暂不支持上门派件": "仅支持上门收件服务，暂不支持上门派件",

        "时": "时",

        "全境配送": "全境提供服务",

        "本地区不配送": "本地区不提供服务",

        "部分地区提供服务": "部分地区提供服务",

        "不服务的地区为：": "不服务的地区为：",

        "备注：": "备注：",

        "查看全部网点": "查看全部网点",

        "服务地区详情": "服务地区详情",

        "正常派送地区：": "正常收送地区：",

        "部分收送地区：": "偏远地区/特别收送地区：",

        "服务地区": "服务地区",

        "前往%s的网点，到点自寄自取，享方便优惠": "前往%s的网点，到店自寄自取，享方便优惠",

        "查看网点": "查看网点",

        "自": "自",

        "派": "派",

        "selfpickupsalesimg": "../../../../resources/images/store-detail.png",

        "其他国家": "全境收派送",

        "美国": "快件进口 - 进口派送服务覆盖全美50个州份。<br/><br/> 快件出口 - 顺丰速运提供全美48个州（不包含夏威夷和阿拉斯加）的快件出口服务。具体的服务内容请联系美国销售组和客服组：<br/><br/> 美国销售组： US_SALES_@sf-express.com  <br/><br/> 美国客服组：US_CSD_GROUP@sf-express.com",


        "请注意此项为必填": "请注意此项为必填",

        "您输入联系电话错误，请重新输入": "您输入联系电话错误 ，请重新输入",

        "您输入联系邮箱错误，请重新输入": "您输入联系邮箱错误，请重新输入",

        "只能填写数字或字母，请重新输入": "只能填写数字或字母，请重新输入",

        "这网址不是以http://https://开头，或者不是网址！": "这网址不是以http://https://开头，或者不是网址！",

        "网店网址最大长度不能超过100个字符": "网店网址最大长度不能超过100个字符",

        "发件量只能为数字": "发件量只能为数字",

        "发件量最大长度只能填写9位": "发件量最大长度只能填写9位",

        "格式填写有误": "格式填写有误",

        "顺丰发件占比不能大于100%": "顺丰发件占比不能大于100%",

        "您输入的验证码不能为空": "您输入的验证码不能为空",

        "您输入的验证码有误，请重新输入": "您输入的验证码有误，请重新输入",

        "网络异常，请稍后再试！": "网络异常，请稍后再试！",

        "请勾选并接受相关协议提交您的申请": "请勾选并接受相关协议提交您的申请",


        "ylsfksh": "ccxfdkm",
        "newI18n": "newI18n"
    }
</script>


<script type="text/javascript" src="${jsBaseUrl}order_js/modernizr.js"></script>

<script type="text/javascript" src="${jsBaseUrl}order_js/configs.js"></script>
<script type="text/javascript" src="${jsBaseUrl}order_js/require.js"></script>
<script type="text/javascript" src="${jsBaseUrl}order_js/frame.js"></script>
<script type="text/javascript" src="${jsBaseUrl}order_js/main.js"></script>

<!--Baidu Tongji-->
<script>
    var _hmt = _hmt || [];
    (function () {
        var hm = document.createElement("script");
        hm.src = "//hm.baidu.com/hm.js?32464c62d48217432782c817b1ae58ce";
        var s = document.getElementsByTagName("script")[0];
        s.parentNode.insertBefore(hm, s);
    })();
</script>
<!--End Baidu Tongji-->


<!--Google Tag Manager-->
<script>(function (w, d, s, l, i) {
    w[l] = w[l] || [];
    w[l].push({
        'gtm.start':
            new Date().getTime(), event: 'gtm.js'
    });
    var f = d.getElementsByTagName(s)[0],
        j = d.createElement(s), dl = l != 'dataLayer' ? '&l=' + l : '';
    j.async = true;
    j.src =
        'https://www.googletagmanager.com/gtm.js?id=' + i + dl;
    f.parentNode.insertBefore(j, f);
})(window, document, 'script', 'dataLayer', 'GTM-TRTH8KL');</script>
<!-- End Google Tag Manager -->

<!-- Google Tag Manager (noscript) -->
<noscript>&lt;iframe src="https://www.googletagmanager.com/ns.html?id=GTM-TRTH8KL"
    height="0" width="0" style="display:none;visibility:hidden"&gt;&lt;/iframe&gt;
</noscript>
<!-- End Google Tag Manager (noscript) -->
<%@include file="/WEB-INF/jsp/login/fastLogin.jsp" %>
<span role="status" aria-live="assertive" aria-relevant="additions" class="ui-helper-hidden-accessible"></span><span
        role="status" aria-live="assertive" aria-relevant="additions" class="ui-helper-hidden-accessible"></span><span
        role="status" aria-live="assertive" aria-relevant="additions" class="ui-helper-hidden-accessible"></span><span
        role="status" aria-live="assertive" aria-relevant="additions" class="ui-helper-hidden-accessible"></span><span
        role="status" aria-live="assertive" aria-relevant="additions" class="ui-helper-hidden-accessible"></span><span
        role="status" aria-live="assertive" aria-relevant="additions" class="ui-helper-hidden-accessible"></span><span
        role="status" aria-live="assertive" aria-relevant="additions" class="ui-helper-hidden-accessible"></span><span
        role="status" aria-live="assertive" aria-relevant="additions" class="ui-helper-hidden-accessible"></span><span
        role="status" aria-live="assertive" aria-relevant="additions" class="ui-helper-hidden-accessible"></span><span
        role="status" aria-live="assertive" aria-relevant="additions" class="ui-helper-hidden-accessible"></span>
<div style="display: none; visibility: hidden;">
    <script>(function () {
        var b = window.XMLHttpRequest.prototype.send;
        window.XMLHttpRequest.prototype.send = function () {
            var a = this, c = window.setInterval(function () {
                4 == a.readyState && (dataLayer.push({
                    event: "ajaxComplete",
                    attributes: {
                        statusCode: a.status || "",
                        statusText: a.statusText || "",
                        response: a.responseJSON || a.responseXML || a.responseText || ""
                    }
                }), clearInterval(c))
            }, 1);
            return b.apply(this, [].slice.call(arguments))
        }
    })();</script>
</div>
</body>
</html>