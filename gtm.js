
// Copyright 2012 Google Inc. All rights reserved.
(function(w,g){w[g]=w[g]||{};w[g].e=function(s){return eval(s);};})(window,'google_tag_manager');(function(){

var data = {
"resource": {
  "version":"87",
  
  "macros":[{
      "function":"__e"
    },{
      "function":"__v",
      "vtp_name":"varPageType",
      "vtp_dataLayerVersion":2
    },{
      "function":"__u",
      "vtp_component":"HOST",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__u",
      "vtp_component":"PATH",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",2],8,16],";a=a.split(\".\");switch(a[0]){case \"videos\":return\"\/live\"==",["escape",["macro",3],8,16],"?\"Live\":\"Videos\";case \"sav\":return\"Sav\";case \"club\":return\"Club\";default:return\"Not set\"}})();"]
    },{
      "function":"__smm",
      "vtp_setDefaultValue":true,
      "vtp_input":["macro",1],
      "vtp_defaultValue":["macro",4],
      "vtp_map":["list",["map","key","List - Model","value","Product"],["map","key","List - Model (no result)","value","Product"],["map","key","Model","value","Product"],["map","key","Supermodel","value","Product"],["map","key","Reviews","value","Product"],["map","key","Cart","value","Product"],["map","key","Advice Homepage","value","Advice"],["map","key","List - Advice_category","value","Advice"],["map","key","Advice","value","Advice"],["map","key","List - Blog_category","value","Blog"],["map","key","Blog","value","Blog"],["map","key","Page","value","Other content"],["map","key","Legal_notice","value","Other content"],["map","key","Homepage","value","Homepage"],["map","key","Group - Search","value","Search"],["map","key","List - Search","value","Search"],["map","key","404","value","Various"],["map","key","Contact","value","Various"],["map","key","Tetris_page","value","Tetris"]]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"varAdviceCategory"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",6],8,16],"[0];return a})();"]
    },{
      "function":"__c",
      "vtp_value":"domyos.fr, domyos.bg, domyos.cz, domyos.cn, domyos.com.de, domyos.co.uk, domyos.es, domyos.be, domyos.it, domyos.hu, domyos.nl, domyos.pl, domyos.com.br, domyos.pt, domyos.ro, domyos.ru, domyos.se, domyos.com.tr, domyos.in"
    },{
      "function":"__v",
      "vtp_name":"ecommerce",
      "vtp_dataLayerVersion":2
    },{
      "function":"__k",
      "vtp_decodeCookie":false,
      "vtp_name":"shoppingTools"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var e=",["escape",["macro",9],8,16],";if(void 0!=",["escape",["macro",10],8,16],")if(\"Model\"==",["escape",["macro",1],8,16],")for(var b=",["escape",["macro",10],8,16],".split(\",\"),a=0;a\u003Cb.length;a++){var c=b[a].split(\"\\x3d\"),f=c[0].indexOf(",["escape",["macro",9],8,16],".detail.products[0].id);if(-1!=f){e.detail.products[0].dimension10=c[1];break}}else if(\"Cart\"==",["escape",["macro",1],8,16],")for(b=",["escape",["macro",10],8,16],".split(\",\"),a=0;a\u003Cb.length;a++){c=b[a].split(\"\\x3d\");for(var d=0;d\u003C",["escape",["macro",9],8,16],".checkout.products.length;d++)if(f=c[0].indexOf(",["escape",["macro",9],8,16],".checkout.products[d].id),\n-1!=f){e.checkout.products[d].dimension10=c[1];break}}return e})();"]
    },{
      "function":"__v",
      "vtp_name":"currency",
      "vtp_dataLayerVersion":2
    },{
      "function":"__u",
      "vtp_component":"URL",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__f",
      "vtp_component":"URL"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=\/^\\\/search\\\/content\\\/(.*)\/;if(a.test(",["escape",["macro",3],8,16],"))return\"\/search\/content?q\\x3d\"+a.exec(",["escape",["macro",3],8,16],")[1];if(\"404\"==",["escape",["macro",1],8,16],")return\"\/page404\/?url\\x3d\"+",["escape",["macro",13],8,16],"+\"\\x26ref\\x3d\"+",["escape",["macro",14],8,16],"})();"]
    },{
      "function":"__v",
      "vtp_name":"varSort",
      "vtp_dataLayerVersion":2
    },{
      "function":"__smm",
      "vtp_input":["macro",16],
      "vtp_map":["list",["map","key","field_model_price_discount_amount_decimal_1","value","Prix decroissant"],["map","key","field_model_price_discount_amount_decimal","value","Prix croissant"],["map","key","field_model_note","value","Note decroissant"],["map","key","smartqueue_weight","value","Ordre manuel"]]
    },{
      "function":"__v",
      "vtp_name":"varFacet",
      "vtp_dataLayerVersion":2
    },{
      "function":"__smm",
      "vtp_input":["macro",18],
      "vtp_map":["list",["map","key","Bénéfice utilisateur : titre","value","Bénéfices utilisateurs"],["map","key","Concept technique : titre","value","Technologies"],["map","key","Concept : titre","value","Technologies"]],
      "vtp_defaultValue":["macro",18],
      "vtp_setDefaultValue":true
    },{
      "function":"__v",
      "vtp_name":"varPageNumber",
      "vtp_dataLayerVersion":2
    },{
      "function":"__v",
      "vtp_name":"varRichContent",
      "vtp_dataLayerVersion":2
    },{
      "function":"__v",
      "vtp_name":"varCrosselling",
      "vtp_dataLayerVersion":2
    },{
      "function":"__v",
      "vtp_name":"varPanoply",
      "vtp_dataLayerVersion":2
    },{
      "function":"__v",
      "vtp_name":"varLinkedContent",
      "vtp_dataLayerVersion":2
    },{
      "function":"__v",
      "vtp_name":"varRating",
      "vtp_dataLayerVersion":2
    },{
      "function":"__k",
      "vtp_decodeCookie":false,
      "vtp_name":"contentTools"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"varAdviceId"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"varBlogId"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"varBasicPageId"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"varTetrisPageId"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var clearContent=undefined;if(",["escape",["macro",26],8,16],"!=undefined)if(",["escape",["macro",1],8,16],"==\"Advice\"||\"Blog\"||\"Page\"||\"Tetris_page\"){var table=",["escape",["macro",26],8,16],".split(\",\");for(var i=0;i\u003Ctable.length;i++){var tableSplit=table[i].split(\"\\x3d\");var result=tableSplit[0];if(",["escape",["macro",1],8,16],"==\"Advice\")var source=",["escape",["macro",27],8,16],";else if(",["escape",["macro",1],8,16],"==\"Blog\")var source=",["escape",["macro",28],8,16],";else if(",["escape",["macro",1],8,16],"==\"Page\")var source=",["escape",["macro",29],8,16],";else if(",["escape",["macro",1],8,16],"==\n\"Tetris_page\")var source=",["escape",["macro",30],8,16],";if(result==source){var clearContent=tableSplit[1];break}}}return clearContent})();"]
    },{
      "function":"__c",
      "vtp_value":"UA-37189510-1"
    },{
      "function":"__v",
      "vtp_name":"eventCategory",
      "vtp_dataLayerVersion":2
    },{
      "function":"__v",
      "vtp_name":"eventAction",
      "vtp_dataLayerVersion":2
    },{
      "function":"__v",
      "vtp_name":"eventLabel",
      "vtp_dataLayerVersion":2
    },{
      "function":"__c",
      "vtp_value":"UA-62613805-1"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",2],8,16],";a=a.split(\".\");var b=a[a.length-1];\"nl\"==a[0]\u0026\u0026(b=\"nl-be\");return b})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){for(var c=",["escape",["macro",9],8,16],".purchase.products,a=\"\",b=0;b\u003Cc.length;b++){var d=c[b].name;a=\"\"!=a?a+\";\"+d:d}return a})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){for(var b=",["escape",["macro",9],8,16],".purchase.products,c=0,a=0;a\u003Cb.length;a++){var d=b[a].quantity;c+=d}return c})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",9],8,16],".purchase.actionField.revenue;return a})();"]
    },{
      "function":"__r"
    },{
      "function":"__u",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__v",
      "vtp_name":"gtm.element",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.triggers",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":""
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return ",["escape",["macro",43],8,16],".parentElement.parentElement.parentElement.parentElement.parentElement.className})();"]
    },{
      "function":"__v",
      "vtp_name":"gtm.elementUrl",
      "vtp_dataLayerVersion":1
    },{
      "function":"__smm",
      "vtp_setDefaultValue":true,
      "vtp_input":["macro",2],
      "vtp_defaultValue":"no",
      "vtp_map":["list",["map","key","www.domyos.ru","value","yes"],["map","key","www.domyos.com.tr","value","yes"],["map","key","www.domyos.com.br","value","yes"],["map","key","www.domyos.cn","value","yes"],["map","key","www.domyos.bg","value","yes"],["map","key","www.domyos.in","value","yes"],["map","key","videos.domyos.fr","value","yes"],["map","key","videos.domyos.be","value","yes"],["map","key","videos.domyos.com.br","value","yes"],["map","key","videos.domyos.cz","value","yes"],["map","key","videos.domyos.com.de","value","yes"],["map","key","videos.domyos.es","value","yes"],["map","key","videos.domyos.it","value","yes"],["map","key","videos.domyos.hu","value","yes"],["map","key","videos.domyos.nl","value","yes"],["map","key","videos.domyos.pl","value","yes"],["map","key","videos.domyos.ru","value","yes"],["map","key","videos.domyos.ro","value","yes"],["map","key","videos.domyos.pt","value","yes"],["map","key","videos.domyos.com.tr","value","yes"],["map","key","videos.domyos.se","value","yes"],["map","key","videos.domyos.co.uk","value","yes"],["map","key","videos.domyos.cn","value","yes"],["map","key","videos.domyos.bg","value","yes"],["map","key","videos.domyos.in","value","yes"]]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){if(\"yes\"==",["escape",["macro",47],8,16],")return!0;var a=document.cookie;a=a.indexOf(\"cookie-agreed-\");return-1!=a})();"]
    },{
      "function":"__smm",
      "vtp_setDefaultValue":true,
      "vtp_input":["macro",2],
      "vtp_defaultValue":"error",
      "vtp_map":["list",["map","key","www.domyos.fr","value","YT-000003-1"],["map","key","www.domyos.be","value","YT-000067-1"],["map","key","nl.domyos.be","value","YT-000067-1"],["map","key","www.domyos.com.br","value","YT-000049-1"],["map","key","www.domyos.cz","value","YT-000054-1"],["map","key","www.domyos.com.de","value","YT-000068-1"],["map","key","www.domyos.es","value","YT-000070-1"],["map","key","www.domyos.it","value","YT-000071-1"],["map","key","www.domyos.hu","value","YT-000055-1"],["map","key","www.domyos.nl","value","YT-000066-1"],["map","key","www.domyos.pl","value","YT-000072-1"],["map","key","www.domyos.ru","value","YT-000073-1"],["map","key","www.domyos.ro","value","YT-000052-1"],["map","key","www.domyos.pt","value","YT-000074-1"],["map","key","www.domyos.com.tr","value","YT-000064-1"],["map","key","www.domyos.se","value","YT-000065-1"],["map","key","www.domyos.co.uk","value","YT-000069-1"],["map","key","www.domyos.cn","value","YT-000044-1"],["map","key","www.domyos.bg","value","YT-000050-1"],["map","key","www.domyos.in","value","YT-000048-1"],["map","key","videos.domyos.fr","value","YT-000003-1"],["map","key","videos.domyos.be","value","YT-000067-1"],["map","key","videos.domyos.com.br","value","YT-000049-1"],["map","key","videos.domyos.cz","value","YT-000054-1"],["map","key","videos.domyos.com.de","value","YT-000068-1"],["map","key","videos.domyos.es","value","YT-000070-1"],["map","key","videos.domyos.it","value","YT-000071-1"],["map","key","videos.domyos.hu","value","YT-000055-1"],["map","key","videos.domyos.nl","value","YT-000066-1"],["map","key","videos.domyos.pl","value","YT-000072-1"],["map","key","videos.domyos.ru","value","YT-000073-1"],["map","key","videos.domyos.ro","value","YT-000052-1"],["map","key","videos.domyos.pt","value","YT-000074-1"],["map","key","videos.domyos.com.tr","value","YT-000064-1"],["map","key","videos.domyos.se","value","YT-000065-1"],["map","key","videos.domyos.co.uk","value","YT-000069-1"],["map","key","videos.domyos.cn","value","YT-000044-1"],["map","key","videos.domyos.bg","value","YT-000050-1"],["map","key","videos.domyos.in","value","YT-000048-1"]]
    },{
      "function":"__smm",
      "vtp_setDefaultValue":true,
      "vtp_input":["macro",2],
      "vtp_defaultValue":"error",
      "vtp_map":["list",["map","key","www.domyos.fr","value","0034"],["map","key","www.domyos.be","value","0048"],["map","key","nl.domyos.be","value","0048"],["map","key","www.domyos.com.br","value","0049"],["map","key","www.domyos.cz","value","0050"],["map","key","www.domyos.com.de","value","0051"],["map","key","www.domyos.es","value","0052"],["map","key","www.domyos.it","value","0053"],["map","key","www.domyos.hu","value","0054"],["map","key","www.domyos.nl","value","0055"],["map","key","www.domyos.pl","value","0056"],["map","key","www.domyos.ru","value","0057"],["map","key","www.domyos.ro","value","0058"],["map","key","www.domyos.pt","value","0059"],["map","key","www.domyos.com.tr","value","0060"],["map","key","www.domyos.se","value","0061"],["map","key","www.domyos.co.uk","value","0062"],["map","key","www.domyos.cn","value","0063"],["map","key","www.domyos.bg","value","0064"],["map","key","www.domyos.in","value","0250"],["map","key","videos.domyos.fr","value","0034"],["map","key","videos.domyos.be","value","0048"],["map","key","videos.domyos.com.br","value","0049"],["map","key","videos.domyos.cz","value","0050"],["map","key","videos.domyos.com.de","value","0051"],["map","key","videos.domyos.es","value","0052"],["map","key","videos.domyos.it","value","0053"],["map","key","videos.domyos.hu","value","0054"],["map","key","videos.domyos.nl","value","0055"],["map","key","videos.domyos.pl","value","0056"],["map","key","videos.domyos.ru","value","0057"],["map","key","videos.domyos.ro","value","0058"],["map","key","videos.domyos.pt","value","0059"],["map","key","videos.domyos.com.tr","value","0060"],["map","key","videos.domyos.se","value","0061"],["map","key","videos.domyos.co.uk","value","0062"],["map","key","videos.domyos.cn","value","0063"],["map","key","videos.domyos.bg","value","0064"],["map","key","videos.domyos.in","value","0250"]]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){for(var c=",["escape",["macro",9],8,16],".impressions,a=\"\",b=0;b\u003Cc.length;b++){var d=c[b].id;a=\"\"!=a?a+\";\"+d:d}return a})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",9],8,16],".detail.products[0].id;return a})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",9],8,16],".detail.products[0].name;return a})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",9],8,16],".detail.products[0].price;return a})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",9],8,16],".detail.products[0].category;return a})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",9],8,16],".detail.products[0].variant;return a})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){for(var b=",["escape",["macro",9],8,16],".checkout.products,c=0,a=0;a\u003Cb.length;a++){var d=b[a].quantity;c+=d}return c})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){for(var c=",["escape",["macro",9],8,16],".checkout.products,a=\"\",b=0;b\u003Cc.length;b++){var d=c[b].id;a=\"\"!=a?a+\";\"+d:d}return a})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"varTetrisUuid"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a;return a=navigator.userAgent.match(\/(android|iphone|ipad|blackberry|symbian|symbianos|symbos|netfront|model-orange|javaplatform|iemobile|windows phone|samsung|htc|opera mobile|opera mobi|opera mini|presto|huawei|blazer|bolt|doris|fennec|gobrowser|iris|maemo browser|mib|cldc|minimo|semc-browser|skyfire|teashark|teleca|uzard|uzardweb|meego|nokia|bb10|playbook)\/gi)?480\u003C=screen.width\u0026\u0026800\u003C=screen.height||800\u003C=screen.width\u0026\u0026480\u003C=screen.height||navigator.userAgent.match(\/ipad\/gi)?\"tablet\":\n\"mobile\":\"desktop\"})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",9],8,16],".purchase.actionField.id;return a})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",9],8,16],".purchase.actionField.revenue;return a})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){for(var b=",["escape",["macro",9],8,16],".purchase.products,c=0,a=0;a\u003Cb.length;a++){var d=b[a].quantity;c+=d}return c})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return\/Android|webOS|iPhone|iPod|BlackBerry|IEMobile|Opera Mini\/i.test(navigator.userAgent)})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){for(var c=",["escape",["macro",9],8,16],".checkout.products,a=\"\",b=0;b\u003Cc.length;b++){var d=c[b].name;a=\"\"!=a?a+\"|\"+d:d}return a})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){for(var c=",["escape",["macro",9],8,16],".checkout.products,a=\"\",b=0;b\u003Cc.length;b++){var d=c[b].price;a=\"\"!=a?a+\"|\"+d:d}return a})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){for(var b=",["escape",["macro",9],8,16],".checkout.products,c=0,a=0;a\u003Cb.length;a++){var d=b[a].price,e=b[a].quantity;c+=d*e}return c})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){for(var c=",["escape",["macro",9],8,16],".checkout.products,a=\"\",b=0;b\u003Cc.length;b++){var d=c[b].quantity;a=\"\"!=a?a+\"|\"+d:d}return a})();"]
    },{
      "function":"__e"
    },{
      "function":"__v",
      "vtp_name":"gtm.elementTarget",
      "vtp_dataLayerVersion":1
    }],
  "tags":[{
      "function":"__ua",
      "once_per_event":true,
      "vtp_useDebugVersion":false,
      "vtp_useHashAutoLink":false,
      "vtp_trackType":"TRACK_PAGEVIEW",
      "vtp_contentGroup":["list",["map","index","1","group",["macro",5]],["map","index","2","group",["macro",7]]],
      "vtp_autoLinkDomains":["macro",8],
      "vtp_decorateFormsAutoLink":false,
      "vtp_useEcommerceDataLayer":false,
      "vtp_ecommerceMacroData":["macro",11],
      "vtp_setTrackerName":false,
      "vtp_doubleClick":false,
      "vtp_fieldsToSet":["list",["map","fieldName","allowLinker","value","true"],["map","fieldName","anonymizeIp","value","true"],["map","fieldName","cookieDomain","value","auto"],["map","fieldName","currencyCode","value",["macro",12]],["map","fieldName","page","value",["macro",15]]],
      "vtp_enableLinkId":false,
      "vtp_dimension":["list",["map","index","1","dimension",["macro",1]],["map","index","2","dimension",["macro",17]],["map","index","3","dimension",["macro",19]],["map","index","4","dimension",["macro",20]],["map","index","5","dimension",["macro",21]],["map","index","6","dimension",["macro",22]],["map","index","7","dimension",["macro",23]],["map","index","8","dimension",["macro",24]],["map","index","9","dimension",["macro",25]],["map","index","11","dimension",["macro",31]]],
      "vtp_enableEcommerce":true,
      "vtp_trackingId":["macro",32],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_ecommerceIsEnabled":true,
      "tag_id":18
    },{
      "function":"__ua",
      "vtp_trackingId":["macro",32],
      "vtp_trackType":"TRACK_EVENT",
      "vtp_nonInteraction":false,
      "vtp_useDebugVersion":false,
      "vtp_enableLinkId":false,
      "vtp_doubleClick":false,
      "vtp_advertisingFeaturesType":"NONE",
      "vtp_eventCategory":["macro",33],
      "vtp_eventAction":["macro",34],
      "vtp_eventLabel":["macro",35],
      "vtp_enableEcommerce":true,
      "vtp_useEcommerceDataLayer":true,
      "vtp_fieldsToSet":["list",["map","fieldName","currencyCode","value",["macro",12]]],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_ecommerceIsEnabled":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":20
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_doubleClick":false,
      "vtp_setTrackerName":false,
      "vtp_useDebugVersion":false,
      "vtp_eventCategory":["macro",33],
      "vtp_trackType":"TRACK_EVENT",
      "vtp_enableLinkId":false,
      "vtp_eventAction":["macro",34],
      "vtp_eventLabel":["macro",35],
      "vtp_enableEcommerce":false,
      "vtp_trackingId":["macro",32],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":21
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_useDebugVersion":false,
      "vtp_useHashAutoLink":false,
      "vtp_trackType":"TRACK_PAGEVIEW",
      "vtp_functionName":"webizi",
      "vtp_contentGroup":["list",["map","index","1","group",["macro",5]]],
      "vtp_autoLinkDomains":["macro",8],
      "vtp_decorateFormsAutoLink":false,
      "vtp_setTrackerName":false,
      "vtp_doubleClick":false,
      "vtp_fieldsToSet":["list",["map","fieldName","allowLinker","value","true"],["map","fieldName","anonymizeIp","value","true"],["map","fieldName","cookieDomain","value","auto"],["map","fieldName","page","value",["macro",15]]],
      "vtp_enableLinkId":false,
      "vtp_dimension":["list",["map","index","1","dimension",["macro",1]],["map","index","2","dimension","Domyos"]],
      "vtp_enableEcommerce":false,
      "vtp_trackingId":["macro",36],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "tag_id":23
    },{
      "function":"__flc",
      "vtp_ordinalType":"STANDARD",
      "vtp_advertiserId":"3192900",
      "vtp_groupTag":"domyos",
      "vtp_activityTag":"domyo00",
      "vtp_useImageTag":false,
      "vtp_customVariable":["list",["map","key","u2","value",["macro",37]],["map","key","u3","value",["macro",38]],["map","key","u4","value",["macro",39]],["map","key","u5","value",["macro",40]]],
      "vtp_ordinalStandard":["macro",41],
      "vtp_url":["macro",42],
      "vtp_enableGoogleAttributionOptions":false,
      "vtp_showConversionLinkingControls":true,
      "tag_id":24
    },{
      "function":"__flc",
      "unlimited":true,
      "vtp_ordinalType":"UNIQUE",
      "vtp_advertiserId":"3192900",
      "vtp_groupTag":"domyos",
      "vtp_activityTag":"domyo0",
      "vtp_useImageTag":false,
      "vtp_customVariable":["list",["map","key","u2","value",["macro",37]]],
      "vtp_ordinalUnique":"1",
      "vtp_number":["macro",41],
      "vtp_url":["macro",42],
      "vtp_enableGoogleAttributionOptions":false,
      "vtp_showConversionLinkingControls":true,
      "tag_id":25
    },{
      "function":"__sp",
      "unlimited":true,
      "vtp_conversionId":"981033390",
      "vtp_enableOgtRmktParams":true,
      "vtp_url":["macro",42],
      "vtp_enableRdpCheckbox":true,
      "tag_id":26
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_trackingId":["macro",32],
      "vtp_trackType":"TRACK_EVENT",
      "vtp_nonInteraction":false,
      "vtp_useDebugVersion":false,
      "vtp_enableLinkId":false,
      "vtp_doubleClick":false,
      "vtp_advertisingFeaturesType":"NONE",
      "vtp_eventCategory":["macro",45],
      "vtp_eventAction":"Click",
      "vtp_eventLabel":["macro",46],
      "vtp_enableEcommerce":false,
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":27
    },{
      "function":"__flc",
      "once_per_event":true,
      "vtp_ordinalType":"UNIQUE",
      "vtp_useImageTag":false,
      "vtp_customVariable":["list",["map","key","u2","value",["macro",2]]],
      "vtp_groupTag":"domyos",
      "vtp_activityTag":"domyo004",
      "vtp_advertiserId":"3192900",
      "vtp_ordinalUnique":"1",
      "vtp_number":["macro",41],
      "vtp_url":["macro",42],
      "vtp_enableGoogleAttributionOptions":false,
      "vtp_showConversionLinkingControls":true,
      "tag_id":43
    },{
      "function":"__flc",
      "once_per_event":true,
      "vtp_ordinalType":"UNIQUE",
      "vtp_useImageTag":false,
      "vtp_customVariable":["list",["map","key","u2","value",["macro",2]]],
      "vtp_groupTag":"domyos",
      "vtp_activityTag":"domyo00h",
      "vtp_advertiserId":"3192900",
      "vtp_ordinalUnique":"1",
      "vtp_number":["macro",41],
      "vtp_url":["macro",42],
      "vtp_enableGoogleAttributionOptions":false,
      "vtp_showConversionLinkingControls":true,
      "tag_id":44
    },{
      "function":"__flc",
      "once_per_event":true,
      "vtp_ordinalType":"UNIQUE",
      "vtp_useImageTag":false,
      "vtp_groupTag":"domyos",
      "vtp_activityTag":"decat002",
      "vtp_advertiserId":"3192900",
      "vtp_ordinalUnique":"1",
      "vtp_number":["macro",41],
      "vtp_url":["macro",42],
      "vtp_enableGoogleAttributionOptions":false,
      "vtp_showConversionLinkingControls":true,
      "tag_id":47
    },{
      "function":"__flc",
      "once_per_event":true,
      "vtp_ordinalType":"STANDARD",
      "vtp_useImageTag":false,
      "vtp_groupTag":"domyos",
      "vtp_activityTag":"decat003",
      "vtp_advertiserId":"3192900",
      "vtp_ordinalStandard":["macro",41],
      "vtp_url":["macro",42],
      "vtp_enableGoogleAttributionOptions":false,
      "vtp_showConversionLinkingControls":true,
      "tag_id":48
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_doubleClick":false,
      "vtp_setTrackerName":false,
      "vtp_useDebugVersion":false,
      "vtp_trackType":"TRACK_SOCIAL",
      "vtp_socialAction":["macro",34],
      "vtp_enableLinkId":false,
      "vtp_socialActionTarget":["macro",35],
      "vtp_socialNetwork":["macro",33],
      "vtp_trackingId":["macro",32],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsSocial":true,
      "tag_id":56
    },{
      "function":"__flc",
      "once_per_event":true,
      "vtp_customVariable":["list",["map","key","u2","value",["macro",37]]],
      "vtp_groupTag":"domyos",
      "vtp_useImageTag":false,
      "vtp_activityTag":"1603lpco",
      "vtp_ordinalType":"UNIQUE",
      "vtp_advertiserId":"3192900",
      "vtp_ordinalUnique":"1",
      "vtp_number":["macro",41],
      "vtp_url":["macro",42],
      "vtp_enableGoogleAttributionOptions":false,
      "vtp_showConversionLinkingControls":true,
      "tag_id":58
    },{
      "function":"__flc",
      "once_per_event":true,
      "vtp_groupTag":"domyos",
      "vtp_useImageTag":false,
      "vtp_activityTag":"1601ctkb",
      "vtp_ordinalType":"UNIQUE",
      "vtp_advertiserId":"3192900",
      "vtp_ordinalUnique":"1",
      "vtp_number":["macro",41],
      "vtp_url":["macro",42],
      "vtp_enableGoogleAttributionOptions":false,
      "vtp_showConversionLinkingControls":true,
      "tag_id":59
    },{
      "function":"__flc",
      "once_per_event":true,
      "vtp_groupTag":"domyos",
      "vtp_useImageTag":false,
      "vtp_activityTag":"1604ctgl",
      "vtp_ordinalType":"UNIQUE",
      "vtp_advertiserId":"3192900",
      "vtp_ordinalUnique":"1",
      "vtp_number":["macro",41],
      "vtp_url":["macro",42],
      "vtp_enableGoogleAttributionOptions":false,
      "vtp_showConversionLinkingControls":true,
      "tag_id":60
    },{
      "function":"__flc",
      "once_per_event":true,
      "vtp_groupTag":"domyos",
      "vtp_useImageTag":false,
      "vtp_activityTag":"1604ctpu",
      "vtp_ordinalType":"UNIQUE",
      "vtp_advertiserId":"3192900",
      "vtp_ordinalUnique":"1",
      "vtp_number":["macro",41],
      "vtp_url":["macro",42],
      "vtp_enableGoogleAttributionOptions":false,
      "vtp_showConversionLinkingControls":true,
      "tag_id":61
    },{
      "function":"__flc",
      "once_per_event":true,
      "vtp_groupTag":"domyos",
      "vtp_useImageTag":false,
      "vtp_activityTag":"1604ctst",
      "vtp_ordinalType":"UNIQUE",
      "vtp_advertiserId":"3192900",
      "vtp_ordinalUnique":"1",
      "vtp_number":["macro",41],
      "vtp_url":["macro",42],
      "vtp_enableGoogleAttributionOptions":false,
      "vtp_showConversionLinkingControls":true,
      "tag_id":62
    },{
      "function":"__flc",
      "once_per_event":true,
      "vtp_groupTag":"domyos",
      "vtp_useImageTag":false,
      "vtp_activityTag":"1604-000",
      "vtp_ordinalType":"UNIQUE",
      "vtp_advertiserId":"3192900",
      "vtp_ordinalUnique":"1",
      "vtp_number":["macro",41],
      "vtp_url":["macro",42],
      "vtp_enableGoogleAttributionOptions":false,
      "vtp_showConversionLinkingControls":true,
      "tag_id":64
    },{
      "function":"__flc",
      "once_per_event":true,
      "vtp_groupTag":"domyos",
      "vtp_useImageTag":false,
      "vtp_activityTag":"1604-0",
      "vtp_ordinalType":"UNIQUE",
      "vtp_advertiserId":"3192900",
      "vtp_ordinalUnique":"1",
      "vtp_number":["macro",41],
      "vtp_url":["macro",42],
      "vtp_enableGoogleAttributionOptions":false,
      "vtp_showConversionLinkingControls":true,
      "tag_id":65
    },{
      "function":"__flc",
      "once_per_event":true,
      "vtp_groupTag":"ecoac0",
      "vtp_useImageTag":false,
      "vtp_activityTag":"1606-0",
      "vtp_ordinalType":"UNIQUE",
      "vtp_advertiserId":"3192900",
      "vtp_ordinalUnique":"1",
      "vtp_number":["macro",41],
      "vtp_url":["macro",42],
      "vtp_enableGoogleAttributionOptions":false,
      "vtp_showConversionLinkingControls":true,
      "tag_id":67
    },{
      "function":"__flc",
      "once_per_event":true,
      "vtp_groupTag":"ecoac0",
      "vtp_useImageTag":false,
      "vtp_activityTag":"1606-00",
      "vtp_ordinalType":"UNIQUE",
      "vtp_advertiserId":"3192900",
      "vtp_ordinalUnique":"1",
      "vtp_number":["macro",41],
      "vtp_url":["macro",42],
      "vtp_enableGoogleAttributionOptions":false,
      "vtp_showConversionLinkingControls":true,
      "tag_id":68
    },{
      "function":"__flc",
      "once_per_event":true,
      "vtp_groupTag":"ecoac0",
      "vtp_useImageTag":false,
      "vtp_activityTag":"1606-000",
      "vtp_ordinalType":"UNIQUE",
      "vtp_advertiserId":"3192900",
      "vtp_ordinalUnique":"1",
      "vtp_number":["macro",41],
      "vtp_url":["macro",42],
      "vtp_enableGoogleAttributionOptions":false,
      "vtp_showConversionLinkingControls":true,
      "tag_id":69
    },{
      "function":"__flc",
      "once_per_event":true,
      "vtp_groupTag":"ecoac0",
      "vtp_useImageTag":false,
      "vtp_activityTag":"1606-001",
      "vtp_ordinalType":"UNIQUE",
      "vtp_advertiserId":"3192900",
      "vtp_ordinalUnique":"1",
      "vtp_number":["macro",41],
      "vtp_url":["macro",42],
      "vtp_enableGoogleAttributionOptions":false,
      "vtp_showConversionLinkingControls":true,
      "tag_id":70
    },{
      "function":"__flc",
      "once_per_event":true,
      "vtp_groupTag":"ecoac0",
      "vtp_useImageTag":false,
      "vtp_activityTag":"1606-002",
      "vtp_ordinalType":"UNIQUE",
      "vtp_advertiserId":"3192900",
      "vtp_ordinalUnique":"1",
      "vtp_number":["macro",41],
      "vtp_url":["macro",42],
      "vtp_enableGoogleAttributionOptions":false,
      "vtp_showConversionLinkingControls":true,
      "tag_id":71
    },{
      "function":"__flc",
      "once_per_event":true,
      "vtp_groupTag":"danse0",
      "vtp_useImageTag":false,
      "vtp_activityTag":"0109-0",
      "vtp_ordinalType":"UNIQUE",
      "vtp_advertiserId":"3192900",
      "vtp_ordinalUnique":"1",
      "vtp_number":["macro",41],
      "vtp_url":["macro",42],
      "vtp_enableGoogleAttributionOptions":false,
      "vtp_showConversionLinkingControls":true,
      "tag_id":73
    },{
      "function":"__flc",
      "once_per_event":true,
      "vtp_groupTag":"danse0",
      "vtp_useImageTag":false,
      "vtp_activityTag":"0109-00",
      "vtp_ordinalType":"UNIQUE",
      "vtp_advertiserId":"3192900",
      "vtp_ordinalUnique":"1",
      "vtp_number":["macro",41],
      "vtp_url":["macro",42],
      "vtp_enableGoogleAttributionOptions":false,
      "vtp_showConversionLinkingControls":true,
      "tag_id":74
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"649339_19",
      "tag_id":165
    },{
      "function":"__hl",
      "tag_id":166
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003Evar _y_account=\"",["escape",["macro",49],7],"\";\nwindow.ytrackAsyncInit=function(){var a=this._wt1Q||[];window.Ytrack.init({account:_y_account,domain_id:\"",["escape",["macro",50],7],"\",domain_version:\"2\",domain:\"",["escape",["macro",2],7],"\"});a.setTrackAccept(!0);var b=null,c=null;\"\"!==(Ytrack.getParamValue(\"SPMID\")||Ytrack.getParamValue(\"SPMID\",void 0,document.referrer))?(c=Ytrack.getParamValue(\"SPMID\")||Ytrack.getParamValue(\"SPMID\",void 0,document.referrer),b=\"sharedid\"):\"\"!==(Ytrack.getParamValue(\"PMID\")||Ytrack.getParamValue(\"PMID\",void 0,document.referrer))\u0026\u0026\n(c=Ytrack.getParamValue(\"PMID\")||Ytrack.getParamValue(\"PMID\",void 0,document.referrer),b=\"email\");\"undefined\"!=typeof ",["escape",["macro",1],8,16],"\u0026\u0026a.push([\"setSessionParam\",\"_env_template\",",["escape",["macro",1],8,16],"]);\"undefined\"!=typeof ",["escape",["macro",17],8,16],"\u0026\u0026a.push([\"setSessionParam\",\"_list_sort\",",["escape",["macro",17],8,16],"]);\"undefined\"!=typeof ",["escape",["macro",19],8,16],"\u0026\u0026a.push([\"setSessionParam\",\"_varFacet\",",["escape",["macro",19],8,16],"]);\"undefined\"!=typeof ",["escape",["macro",20],8,16],"\u0026\u0026a.push([\"setSessionParam\",\"_varPageNumber\",\n",["escape",["macro",20],8,16],"]);\"undefined\"!=typeof ",["escape",["macro",12],8,16],"\u0026\u0026a.push([\"setSessionParam\",\"_product_currency\",",["escape",["macro",12],8,16],"]);\"undefined\"!=typeof ",["escape",["macro",51],8,16],"\u0026\u0026a.push([\"setSessionParam\",\"_list_products\",",["escape",["macro",51],8,16],"]);\"undefined\"!=typeof ",["escape",["macro",21],8,16],"\u0026\u0026a.push([\"setSessionParam\",\"_varRichContent\",",["escape",["macro",21],8,16],"]);\"undefined\"!=typeof ",["escape",["macro",22],8,16],"\u0026\u0026a.push([\"setSessionParam\",\"_varCrosselling\",",["escape",["macro",22],8,16],"]);\"undefined\"!=typeof ",["escape",["macro",23],8,16],"\u0026\u0026\na.push([\"setSessionParam\",\"_varPanoply\",",["escape",["macro",23],8,16],"]);\"undefined\"!=typeof ",["escape",["macro",24],8,16],"\u0026\u0026a.push([\"setSessionParam\",\"_varLinkedContent\",",["escape",["macro",24],8,16],"]);\"undefined\"!=typeof ",["escape",["macro",25],8,16],"\u0026\u0026a.push([\"setSessionParam\",\"_product_rating\",",["escape",["macro",25],8,16],"]);\"undefined\"!=typeof ",["escape",["macro",52],8,16],"\u0026\u0026a.push([\"setSessionParam\",\"_product_id_model\",",["escape",["macro",52],8,16],"]);\"undefined\"!=typeof ",["escape",["macro",53],8,16],"\u0026\u0026a.push([\"setSessionParam\",\"_product_name\",",["escape",["macro",53],8,16],"]);\n\"undefined\"!=typeof ",["escape",["macro",54],8,16],"\u0026\u0026a.push([\"setSessionParam\",\"_product_unitprice_ati\",",["escape",["macro",54],8,16],"]);\"undefined\"!=typeof ",["escape",["macro",55],8,16],"\u0026\u0026a.push([\"setSessionParam\",\"_product_nature\",",["escape",["macro",55],8,16],"]);\"undefined\"!=typeof ",["escape",["macro",56],8,16],"\u0026\u0026a.push([\"setSessionParam\",\"_product_color\",",["escape",["macro",56],8,16],"]);\"undefined\"!=typeof ",["escape",["macro",57],8,16],"\u0026\u0026a.push([\"setSessionParam\",\"_order_products_number\",",["escape",["macro",57],8,16],"]);\"undefined\"==typeof ",["escape",["macro",58],8,16],"\u0026\u0026\na.push([\"setSessionParam\",\"_order_products\",",["escape",["macro",58],8,16],"]);\"undefined\"!=typeof ",["escape",["macro",59],8,16],"\u0026\u0026a.push([\"setSessionParam\",\"_advice_id\",",["escape",["macro",59],8,16],"]);\"undefined\"!=typeof ",["escape",["macro",60],8,16],"\u0026\u0026a.push([\"setSessionParam\",\"_device_type\",",["escape",["macro",60],8,16],"]);null!==c\u0026\u0026\"private\"!==c\u0026\u0026(a.push([\"setVisitorParam\",\"_PmId\",c]),a.push([\"setVisitorParam\",\"_PmSrc\",b]));a.push([\"trackPage\",{}])};\n(function(){var a=document.createElement(\"script\");a.id=\"tc_script_553_1\";a.async=!0;a.src=\"\/\/prod-js.aws.y-track.com\/\"+_y_account+\"\/v5\/tracker.min.js\";var b=document.getElementsByTagName(\"script\")[0];b.parentNode.insertBefore(a,b)})();\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":32
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003EjQuery(\"#aic\").parent().prepend('\\x3cimg src\\x3d\"https:\/\/www.domyos.cn\/sites\/domyos\/files\/aic_logo_15x14.png\" alt\\x3d\"\"\/\\x3e');\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":49
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003E\"undefined\"!=typeof ",["escape",["macro",9],8,16],"\u0026\u0026(_abtasty.push([\"transaction\",\"transfert panier\",",["escape",["macro",61],8,16],",",["escape",["macro",62],8,16],"]),_abtasty.push([\"eco\",\"Nbr article(s)\",",["escape",["macro",63],8,16],"]));\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":50
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Evar _hmt=_hmt||[];(function(){var a=document.createElement(\"script\");a.src=\"\/\/hm.baidu.com\/hm.js?1161fa76b88a6dbb2cdf08a0729a7552\";var b=document.getElementsByTagName(\"script\")[0];b.parentNode.insertBefore(a,b)})();\u003C\/script\u003E\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":52
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cstyle\u003E\n     .bandeau-marques .bandeau-sport:hover {\n         background-color: #545452 !important;\n         color: #ffffff;\n         -webkit-transition: all .3s;\n         transition: all .3s;\n     }\n    .bandeau-marques .bandeau-sites .close span{\n        display:block;\n        height:19px;\n        width:20px;\n        float:right;\n        margin:-35px 10px 0 0;\n        background-image:url(\"https:\/\/www.domyos.fr\/sites\/domyos\/files\/archive_0\/close.png\");\n        cursor:pointer;\n    }\n    .bandeau-marques .owl-item a{\n        text-decoration:none;\n        color:#212121;\n        background-color:#ffffff;\n        padding:10px 5px;\n        height:150px;\n        -moz-box-sizing: initial;\n        -webkit-box-sizing: initial;\n        box-sizing: initial;\n        width:110px;\n        border:2px solid #212121;\n        display:block;\n        font-size:11px;\n        font-family:arial;\n        -webkit-transition:border .3s;\n        transition:border .3s;\n    }\n    .bandeau-marques .owl-item a:hover{\n        border:2px solid #ff9600;\n    }\n    .bandeau-marques .owl-item p{\n        margin:0 0 10px 0;\n        line-height:12px;\n        height:24px;\n    }\n    .bandeau-marques .owl-prev,\n    .bandeau-marques .owl-next{\n        position:absolute;\n        background-color:rgba(255,255,255,0.2);\n        font-size:0;\n        width:30px;\n        height:174px;\n        top:0;\n        left:-40px;\n    }\n    .bandeau-marques .owl-prev:before,\n    .bandeau-marques .owl-next:before{\n        content:\"\";\n        display:block;\n        background-image:url(\"https:\/\/www.domyos.fr\/sites\/domyos\/files\/archive_0\/close.png\");\n        width:10px;\n        height:19px;\n        position:absolute;\n        left:10px;\n        top:77px;\n    }\n    .bandeau-marques .owl-prev:before{\n        -ms-transform:rotate(180deg);\n        -webkit-transform:rotate(180deg);\n        transform:rotate(180deg);\n    }\n    .bandeau-marques .owl-next{\n        right:-40px;\n        left:inherit;\n    }\n\u003C\/style\u003E\n\n\u003Clink rel=\"stylesheet\" href=\"https:\/\/cdnjs.cloudflare.com\/ajax\/libs\/owl-carousel\/1.32\/owl.carousel.min.css\"\u003E\n\n\u003Cdiv class=\"bandeau-marques\" style=\"background-color:#ffffff;\"\u003E\n    \u003Cdiv class=\"content\" style=\"width:940px;margin:auto;font-family:arial;color:#545452;font-size:12px;height:35px;\"\u003E\n        \u003Cdiv class=\"text\" style=\"float:left;line-height:35px;margin-right:10px;\"\u003E\n            \u003Cspan\u003EProduits vendus en exclusivité chez\u003C\/span\u003E\n        \u003C\/div\u003E\n        \u003Cdiv class=\"bandeau-logo\" style=\"float:left;height:29px;width:auto;margin:3px 0 0 0;\"\u003E\n            \u003Ca onclick=\"bandeauEvent(\u0026quot;Decathlon\u0026quot;);\" href=\"https:\/\/www.decathlon.fr?utm_medium=referral_internal\u0026amp;utm_source=pb_domyos_fitness\u0026amp;utm_campaign=logo_header\" target=\"_blank\" style=\"display:block;cursor:pointer;\"\u003E\n                \u003Cimg src=\"https:\/\/www.domyos.fr\/sites\/domyos\/files\/decathlon.jpg\" style=\"height:29px;width:auto;border:none;\"\u003E\n            \u003C\/a\u003E\n        \u003C\/div\u003E\n        \u003Cdiv class=\"bandeau-sport\" style=\"position:relative;float:right;padding:0 10px 0 10px;border-radius:5px;top:5px;line-height:25px;background-color:#cccccc;cursor:pointer;\"\u003E\n            \u003Cspan onclick=\"bandeauEvent(\u0026quot;Open brand list\u0026quot;);\"\u003E▼ Découvrez nos autres sports\u003C\/span\u003E\n        \u003C\/div\u003E\n        \u003Cdiv class=\"clear\" style=\"clear:both;\"\u003E\u003C\/div\u003E\n    \u003C\/div\u003E\n    \u003Cdiv class=\"bandeau-sites\" style=\"position:relative;display:none;background-color:#212121;padding:50px 50px 20px 50px;height:172px;-moz-box-sizing:initial;-webkit-box-sizing:initial;box-sizing:initial;\"\u003E\n        \u003Cdiv class=\"close\" style=\"margin:0 auto;height:0px;width:910px;position:relative;\"\u003E\u003Cspan\u003E\u003C\/span\u003E\u003C\/div\u003E\n        \u003Cdiv class=\"slide-sites\" style=\"min-with:940px;\"\u003E\u003C\/div\u003E\n    \u003C\/div\u003E\n\u003C\/div\u003E\n\n\u003Cscript type=\"text\/gtmscript\"\u003Evar html=\"\\x3ca onclick\\x3d'bandeauEvent(\\x26quot;Solognac\\x26quot;);' href\\x3d'https:\/\/www.solognac.fr' target\\x3d'_blank'\\x3e\\x3cp\\x3eChasse\\x3c\/p\\x3e\\x3cimg src\\x3d'https:\/\/www.domyos.fr\/sites\/domyos\/files\/archive\/solognac.png' alt\\x3d'Solognac'\/\\x3e\\x3c\/a\\x3e\";html+=\"\\x3ca onclick\\x3d'bandeauEvent(\\x26quot;Inesis\\x26quot;);' href\\x3d'https:\/\/www.inesis.fr' target\\x3d'_blank'\\x3e\\x3cp\\x3eEquipements golf\\x3c\/p\\x3e\\x3cimg src\\x3d'https:\/\/www.domyos.fr\/sites\/domyos\/files\/archive\/inesis.png' alt\\x3d'Inesis'\/\\x3e\\x3c\/a\\x3e\";\nhtml+=\"\\x3ca onclick\\x3d'bandeauEvent(\\x26quot;Caperlan\\x26quot;);' href\\x3d'https:\/\/www.caperlan.fr' target\\x3d'_blank'\\x3e\\x3cp\\x3eEquipements p\\u00eache\\x3c\/p\\x3e\\x3cimg src\\x3d'https:\/\/www.domyos.fr\/sites\/domyos\/files\/archive\/caperlan.png' alt\\x3d'Caperlan'\/\\x3e\\x3c\/a\\x3e\";html+=\"\\x3ca onclick\\x3d'bandeauEvent(\\x26quot;Fouganza\\x26quot;);' href\\x3d'https:\/\/www.fouganza.fr' target\\x3d'_blank'\\x3e\\x3cp\\x3eEquitation\\x3c\/p\\x3e\\x3cimg src\\x3d'https:\/\/www.domyos.fr\/sites\/domyos\/files\/archive\/fouganza.png' alt\\x3d'Fouganza'\/\\x3e\\x3c\/a\\x3e\";\nhtml+=\"\\x3ca onclick\\x3d'bandeauEvent(\\x26quot;Simond\\x26quot;);' href\\x3d'https:\/\/www.simond.fr' target\\x3d'_blank'\\x3e\\x3cp\\x3eEscalade\\x3c\/p\\x3e\\x3cimg src\\x3d'https:\/\/www.domyos.fr\/sites\/domyos\/files\/simond2.png' alt\\x3d'Simond'\/\\x3e\\x3c\/a\\x3e\";html+=\"\\x3ca onclick\\x3d'bandeauEvent(\\x26quot;Orao\\x26quot;);' href\\x3d'https:\/\/www.orao.com' target\\x3d'_blank'\\x3e\\x3cp\\x3eLunettes, jumelles\\x3c\/p\\x3e\\x3cimg src\\x3d'https:\/\/www.domyos.fr\/sites\/domyos\/files\/archive\/orao.png' alt\\x3d'Orao'\/\\x3e\\x3c\/a\\x3e\";\nhtml+=\"\\x3ca onclick\\x3d'bandeauEvent(\\x26quot;Newfeel\\x26quot;);' href\\x3d'https:\/\/www.newfeel.fr' target\\x3d'_blank'\\x3e\\x3cp\\x3eMarche sportive\\x3c\/p\\x3e\\x3cimg src\\x3d'https:\/\/www.domyos.fr\/sites\/domyos\/files\/newfeel.png' alt\\x3d'Newfeel'\/\\x3e\\x3c\/a\\x3e\";html+=\"\\x3ca onclick\\x3d'bandeauEvent(\\x26quot;Nabaiji\\x26quot;);' href\\x3d'https:\/\/www.nabaiji.fr' target\\x3d'_blank'\\x3e\\x3cp\\x3eNatation\\x3c\/p\\x3e\\x3cimg src\\x3d'https:\/\/www.domyos.fr\/sites\/domyos\/files\/archive\/nabaiji.png' alt\\x3d'Nabaiji'\/\\x3e\\x3c\/a\\x3e\";\nhtml+=\"\\x3ca onclick\\x3d'bandeauEvent(\\x26quot;Aptonia\\x26quot;);' href\\x3d'https:\/\/www.aptonia.fr' target\\x3d'_blank'\\x3e\\x3cp\\x3eNutrition et Soin\\x3c\/p\\x3e\\x3cimg src\\x3d'https:\/\/www.domyos.fr\/sites\/domyos\/files\/archive\/aptonia.png' alt\\x3d'Aptonia'\/\\x3e\\x3c\/a\\x3e\";html+=\"\\x3ca onclick\\x3d'bandeauEvent(\\x26quot;Geonaute\\x26quot;);' href\\x3d'https:\/\/www.geonaute.fr' target\\x3d'_blank'\\x3e\\x3cp\\x3eProduits \\u00e9lectroniques\\x3c\/p\\x3e\\x3cimg src\\x3d'https:\/\/www.domyos.fr\/sites\/domyos\/files\/archive\/geonaute.png' alt\\x3d'Geonaute'\/\\x3e\\x3c\/a\\x3e\";\nhtml+=\"\\x3ca onclick\\x3d'bandeauEvent(\\x26quot;Quechua\\x26quot;);' href\\x3d'https:\/\/www.quechua.fr' target\\x3d'_blank'\\x3e\\x3cp\\x3eRandonn\\u00e9e et camping\\x3c\/p\\x3e\\x3cimg src\\x3d'https:\/\/www.domyos.fr\/sites\/domyos\/files\/archive\/quechua.png' alt\\x3d'Quechua'\/\\x3e\\x3c\/a\\x3e\";html+=\"\\x3ca onclick\\x3d'bandeauEvent(\\x26quot;Kalenji\\x26quot;);' href\\x3d'https:\/\/www.kalenji.fr' target\\x3d'_blank'\\x3e\\x3cp\\x3eRunning et trail\\x3c\/p\\x3e\\x3cimg src\\x3d'https:\/\/www.domyos.fr\/sites\/domyos\/files\/archive\/kalenji.png' alt\\x3d'Kalenji'\/\\x3e\\x3c\/a\\x3e\";\nhtml+=\"\\x3ca onclick\\x3d'bandeauEvent(\\x26quot;Wedze\\x26quot;);' href\\x3d'https:\/\/www.wedze.fr' target\\x3d'_blank'\\x3e\\x3cp\\x3eSki et snowboard\\x3c\/p\\x3e\\x3cimg src\\x3d'https:\/\/www.domyos.fr\/sites\/domyos\/files\/archive\/wedze.png' alt\\x3d'Wedze'\/\\x3e\\x3c\/a\\x3e\";html+=\"\\x3ca onclick\\x3d'bandeauEvent(\\x26quot;Geologic\\x26quot;);' href\\x3d'https:\/\/www.geologic.org' target\\x3d'_blank'\\x3e\\x3cp\\x3eSports de pr\\u00e9cision\\x3c\/p\\x3e\\x3cimg src\\x3d'https:\/\/www.domyos.fr\/sites\/domyos\/files\/archive\/geologic.png' alt\\x3d'Geologic'\/\\x3e\\x3c\/a\\x3e\";\nhtml+=\"\\x3ca onclick\\x3d'bandeauEvent(\\x26quot;Kipsta\\x26quot;);' href\\x3d'https:\/\/www.kipsta.fr' target\\x3d'_blank'\\x3e\\x3cp\\x3eSports collectifs\\x3c\/p\\x3e\\x3cimg src\\x3d'https:\/\/www.domyos.fr\/sites\/domyos\/files\/archive\/kipsta.png' alt\\x3d'Kipsta'\/\\x3e\\x3c\/a\\x3e\";html+=\"\\x3ca onclick\\x3d'bandeauEvent(\\x26quot;Artengo\\x26quot;);' href\\x3d'https:\/\/www.artengo.fr' target\\x3d'_blank'\\x3e\\x3cp\\x3eSports de raquette\\x3c\/p\\x3e\\x3cimg src\\x3d'https:\/\/www.domyos.fr\/sites\/domyos\/files\/archive\/artengo.png' alt\\x3d'Artengo'\/\\x3e\\x3c\/a\\x3e\";\nhtml+=\"\\x3ca onclick\\x3d'bandeauEvent(\\x26quot;Tribord\\x26quot;);' href\\x3d'https:\/\/www.tribord.tm.fr' target\\x3d'_blank'\\x3e\\x3cp\\x3eSports nautiques et aquatiques\\x3c\/p\\x3e\\x3cimg src\\x3d'https:\/\/www.domyos.fr\/sites\/domyos\/files\/archive\/tribord.png' alt\\x3d'Tribord'\/\\x3e\\x3c\/a\\x3e\";html+=\"\\x3ca onclick\\x3d'bandeauEvent(\\x26quot;Oxelo\\x26quot;);' href\\x3d'https:\/\/www.oxelo.fr' target\\x3d'_blank'\\x3e\\x3cp\\x3eTrottinette, Skateboard \\x26 Roller\\x3c\/p\\x3e\\x3cimg src\\x3d'https:\/\/www.domyos.fr\/sites\/domyos\/files\/oxelo.png' alt\\x3d'Oxelo'\/\\x3e\\x3c\/a\\x3e\";\nhtml+=\"\\x3ca onclick\\x3d'bandeauEvent(\\x26quot;Itiwit\\x26quot;);' href\\x3d'https:\/\/www.itiwit.fr' target\\x3d'_blank'\\x3e\\x3cp\\x3eKayak et Stand up paddle\\x3c\/p\\x3e\\x3cimg src\\x3d'https:\/\/www.domyos.fr\/sites\/domyos\/files\/itiwit.png' alt\\x3d'Itiwit'\/\\x3e\\x3c\/a\\x3e\";html+=\"\\x3ca onclick\\x3d'bandeauEvent(\\x26quot;Subea\\x26quot;);' href\\x3d'https:\/\/www.subea.fr' target\\x3d'_blank'\\x3e\\x3cp\\x3ePlong\\u00e9e et Snorkeling\\x3c\/p\\x3e\\x3cimg src\\x3d'https:\/\/www.domyos.fr\/sites\/domyos\/files\/subea.png' alt\\x3d'Subea'\/\\x3e\\x3c\/a\\x3e\";\nvar cpt=0;jQuery(\".bandeau-sport\").click(function(){0==cpt\u0026\u0026(jQuery(\".slide-sites\").append(html),html=\"\");jQuery(\".bandeau-sites\").slideToggle(\"slow\");0==cpt\u0026\u0026jQuery.ajax({url:\"https:\/\/cdnjs.cloudflare.com\/ajax\/libs\/owl-carousel\/1.32\/owl.carousel.min.js\",dataType:\"script\",cache:!0,async:!0,success:function(){jQuery(\".slide-sites\").owlCarousel({pagination:!1,navigation:!0,scrollPerPage:!0,itemsCustom:[[0,6],[1E3,7],[1300,8],[1400,9],[1500,10]]})}});cpt=1});jQuery(\".bandeau-sites .close span\").click(function(){jQuery(\".bandeau-sport\").trigger(\"click\")});\nfunction bandeauEvent(a){dataLayer.push({event:\"BandeauEvent\",eventCategory:\"Bandeau\",eventAction:\"click\",eventLabel:a})}jQuery(\"#section-header\").prepend(jQuery(\".bandeau-marques\"));\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":72
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003E(function(c,d,e,f,g,a,b){c[e]=c[e]||[];a=d.createElement(f);a.async=1;a.src=g;b=d.getElementsByTagName(f)[0];b.parentNode.insertBefore(a,b)})(window,document,\"_gscq\",\"script\",\"\/\/widgets.getsitecontrol.com\/142996\/script.js\");\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":79
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\u003Cscript async type=\"text\/gtmscript\"\u003E(function(f,c,d,e,a,b){a=c.createElement(d);b=c.getElementsByTagName(d)[0];a.async=1;a.src=e;a.dataset.sumoSiteId=\"cd38b8433c1a71bb5f716b15b4331cdd17ac5e71d276076313cee4b4aa06e555\";b.parentNode.insertBefore(a,b)})(window,document,\"script\",\"\/\/load.sumo.com\/\");\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":164
    }],
  "predicates":[{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"gtm.js"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"GACommerceEvent"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"GAEvent"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"BandeauEvent"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"ColorEvent"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"HotspotEvent"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"NavigationEvent"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"PromotedEvent"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"BannerEvent"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"ProductImageEvent"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"RichContentEvent"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"SearchEvent"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"ReferenceEvent"
    },{
      "function":"_eq",
      "arg0":["macro",34],
      "arg1":"Purchase"
    },{
      "function":"_eq",
      "arg0":["macro",1],
      "arg1":"Page"
    },{
      "function":"_cn",
      "arg0":["macro",13],
      "arg1":"crosstraining"
    },{
      "function":"_eq",
      "arg0":["macro",2],
      "arg1":"www.domyos.nl"
    },{
      "function":"_css",
      "arg0":["macro",43],
      "arg1":".content-richcontent .field-name-field-rich-content-link a"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"gtm.linkClick"
    },{
      "function":"_re",
      "arg0":["macro",44],
      "arg1":"(^$|((^|,)649339_19($|,)))"
    },{
      "function":"_cn",
      "arg0":["macro",13],
      "arg1":"www.domyos.fr\/360"
    },{
      "function":"_cn",
      "arg0":["macro",13],
      "arg1":"www.domyos.it\/360"
    },{
      "function":"_cn",
      "arg0":["macro",13],
      "arg1":"www.domyos.pt\/360"
    },{
      "function":"_cn",
      "arg0":["macro",13],
      "arg1":"www.domyos.nl\/360"
    },{
      "function":"_cn",
      "arg0":["macro",13],
      "arg1":"www.domyos.fr\/danse-idfam3403"
    },{
      "function":"_cn",
      "arg0":["macro",13],
      "arg1":"www.domyos.be\/danse-idfam3410"
    },{
      "function":"_cn",
      "arg0":["macro",13],
      "arg1":"www.domyos.ro\/dans-idfam3418"
    },{
      "function":"_cn",
      "arg0":["macro",13],
      "arg1":"www.domyos.pt\/danca-idfam3417"
    },{
      "function":"_cn",
      "arg0":["macro",13],
      "arg1":"nl.domyos.be\/dans-idfam3413"
    },{
      "function":"_cn",
      "arg0":["macro",13],
      "arg1":"www.domyos.co.uk\/dancing-idfam3408"
    },{
      "function":"_cn",
      "arg0":["macro",13],
      "arg1":"account.geonaute.com\/domyosvideo\/newuser"
    },{
      "function":"_cn",
      "arg0":["macro",13],
      "arg1":"account.geonaute.com\/account\/created"
    },{
      "function":"_cn",
      "arg0":["macro",14],
      "arg1":"account.geonaute.com\/domyosvideo\/newuser"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"gtm.historyChange"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"SocialEvent"
    },{
      "function":"_re",
      "arg0":["macro",13],
      "arg1":".*videos\\.domyos\\.(fr|it|es|nl|pt|pl)\/econnected.*"
    },{
      "function":"_cn",
      "arg0":["macro",13],
      "arg1":"videos.domyos.fr\/exos\/Kettle-Bell"
    },{
      "function":"_cn",
      "arg0":["macro",13],
      "arg1":"videos.domyos.fr\/exos\/Gilet-leste-de-musculation-10-KG"
    },{
      "function":"_cn",
      "arg0":["macro",13],
      "arg1":"videos.domyos.fr\/exos\/Pull-up-bar-500"
    },{
      "function":"_cn",
      "arg0":["macro",13],
      "arg1":"videos.domyos.fr\/exos\/Strap-Training"
    },{
      "function":"_cn",
      "arg0":["macro",13],
      "arg1":"http:\/\/www.domyos.nl\/dance-gala-idfam7077"
    },{
      "function":"_cn",
      "arg0":["macro",13],
      "arg1":"http:\/\/www.domyos.fr\/gala-danse-idfam7066"
    },{
      "function":"_cn",
      "arg0":["macro",13],
      "arg1":"http:\/\/videos.domyos.fr\/exos"
    },{
      "function":"_cn",
      "arg0":["macro",13],
      "arg1":"http:\/\/videos.domyos.es\/exos"
    },{
      "function":"_cn",
      "arg0":["macro",13],
      "arg1":"http:\/\/videos.domyos.it\/exos"
    },{
      "function":"_cn",
      "arg0":["macro",13],
      "arg1":"http:\/\/videos.domyos.co.uk\/exos"
    },{
      "function":"_eq",
      "arg0":["macro",13],
      "arg1":"http:\/\/www.domyos.pl\/lookbook-danse-bp_317445"
    },{
      "function":"_eq",
      "arg0":["macro",13],
      "arg1":"http:\/\/www.domyos.nl\/lookbook-danse-bp_317443"
    },{
      "function":"_cn",
      "arg0":["macro",48],
      "arg1":"true"
    },{
      "function":"_cn",
      "arg0":["macro",2],
      "arg1":"domyos.cn"
    },{
      "function":"_eq",
      "arg0":["macro",2],
      "arg1":"www.domyos.fr"
    },{
      "function":"_eq",
      "arg0":["macro",64],
      "arg1":"true"
    }],
  "rules":[
    [["if",0],["add",0,3,27,28,34]],
    [["if",1],["add",1]],
    [["if",2],["add",2]],
    [["if",3],["add",2]],
    [["if",4],["add",2]],
    [["if",5],["add",2]],
    [["if",6],["add",2]],
    [["if",7],["add",2]],
    [["if",8],["add",2]],
    [["if",9],["add",2]],
    [["if",10],["add",2]],
    [["if",11],["add",2]],
    [["if",12],["add",2]],
    [["if",1,13],["add",4,31]],
    [["if",0,14,15],["add",5]],
    [["if",0,16],["add",6]],
    [["if",17,18,19],["add",7]],
    [["if",0,20],["add",8]],
    [["if",0,21],["add",8]],
    [["if",0,22],["add",8]],
    [["if",0,23],["add",8]],
    [["if",0,24],["add",9]],
    [["if",0,25],["add",9]],
    [["if",0,26],["add",9]],
    [["if",0,27],["add",9]],
    [["if",0,28],["add",9]],
    [["if",0,29],["add",9]],
    [["if",0,30],["add",10]],
    [["if",0,31],["add",11]],
    [["if",32,33],["add",11]],
    [["if",34],["add",12]],
    [["if",0,35],["add",13]],
    [["if",0,36],["add",14]],
    [["if",0,37],["add",15]],
    [["if",0,38],["add",16]],
    [["if",0,39],["add",17]],
    [["if",0,40],["add",18]],
    [["if",0,41],["add",19]],
    [["if",0,42],["add",20,22]],
    [["if",0,43],["add",21]],
    [["if",0,44],["add",23]],
    [["if",0,45],["add",24]],
    [["if",0,46],["add",25]],
    [["if",0,47],["add",26]],
    [["if",0,48],["add",29]],
    [["if",0,49],["add",30,32]],
    [["if",0,50],["add",33,35]],
    [["if",0,51],["block",33]]]
},
"runtime":[]




};
/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
var aa,ba="function"==typeof Object.create?Object.create:function(a){var b=function(){};b.prototype=a;return new b},ca;if("function"==typeof Object.setPrototypeOf)ca=Object.setPrototypeOf;else{var ea;a:{var fa={Qf:!0},ha={};try{ha.__proto__=fa;ea=ha.Qf;break a}catch(a){}ea=!1}ca=ea?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}
var ia=ca,ka=function(a,b){a.prototype=ba(b.prototype);a.prototype.constructor=a;if(ia)ia(a,b);else for(var c in b)if("prototype"!=c)if(Object.defineProperties){var d=Object.getOwnPropertyDescriptor(b,c);d&&Object.defineProperty(a,c,d)}else a[c]=b[c]},ma=this||self,na=/^[\w+/_-]+[=]{0,2}$/,pa=null,qa=function(a,b){function c(){}c.prototype=b.prototype;a.prototype=new c;a.prototype.constructor=a},sa=function(a){return a};var ua=function(){},va=function(a){return"function"==typeof a},g=function(a){return"string"==typeof a},wa=function(a){return"number"==typeof a&&!isNaN(a)},xa=function(a){return"[object Array]"==Object.prototype.toString.call(Object(a))},m=function(a,b){if(Array.prototype.indexOf){var c=a.indexOf(b);return"number"==typeof c?c:-1}for(var d=0;d<a.length;d++)if(a[d]===b)return d;return-1},ya=function(a,b){if(a&&xa(a))for(var c=0;c<a.length;c++)if(a[c]&&b(a[c]))return a[c]},za=function(a,b){if(!wa(a)||
!wa(b)||a>b)a=0,b=2147483647;return Math.floor(Math.random()*(b-a+1)+a)},Ba=function(a,b){for(var c=new Aa,d=0;d<a.length;d++)c.set(a[d],!0);for(var e=0;e<b.length;e++)if(c.get(b[e]))return!0;return!1},Ca=function(a,b){for(var c in a)Object.prototype.hasOwnProperty.call(a,c)&&b(c,a[c])},Da=function(a){return Math.round(Number(a))||0},Ea=function(a){return"false"==String(a).toLowerCase()?!1:!!a},Fa=function(a){var b=[];if(xa(a))for(var c=0;c<a.length;c++)b.push(String(a[c]));return b},Ga=function(a){return a?
a.replace(/^\s+|\s+$/g,""):""},Ha=function(){return(new Date).getTime()},Aa=function(){this.prefix="gtm.";this.values={}};Aa.prototype.set=function(a,b){this.values[this.prefix+a]=b};Aa.prototype.get=function(a){return this.values[this.prefix+a]};
var Ia=function(a,b,c){return a&&a.hasOwnProperty(b)?a[b]:c},Ja=function(a){var b=!1;return function(){if(!b)try{a()}catch(c){}b=!0}},Ka=function(a,b){for(var c in b)b.hasOwnProperty(c)&&(a[c]=b[c])},La=function(a){for(var b in a)if(a.hasOwnProperty(b))return!0;return!1},Ma=function(a,b){for(var c=[],d=0;d<a.length;d++)c.push(a[d]),c.push.apply(c,b[a[d]]||[]);return c},Na=function(a,b){for(var c={},d=c,e=a.split("."),f=0;f<e.length-1;f++)d=d[e[f]]={};d[e[e.length-1]]=b;return c},Oa=function(a){var b=
[];Ca(a,function(c,d){10>c.length&&d&&b.push(c)});return b.join(",")};/*
 jQuery v1.9.1 (c) 2005, 2012 jQuery Foundation, Inc. jquery.org/license. */
var Pa=/\[object (Boolean|Number|String|Function|Array|Date|RegExp)\]/,Qa=function(a){if(null==a)return String(a);var b=Pa.exec(Object.prototype.toString.call(Object(a)));return b?b[1].toLowerCase():"object"},Ra=function(a,b){return Object.prototype.hasOwnProperty.call(Object(a),b)},Sa=function(a){if(!a||"object"!=Qa(a)||a.nodeType||a==a.window)return!1;try{if(a.constructor&&!Ra(a,"constructor")&&!Ra(a.constructor.prototype,"isPrototypeOf"))return!1}catch(c){return!1}for(var b in a);return void 0===
b||Ra(a,b)},D=function(a,b){var c=b||("array"==Qa(a)?[]:{}),d;for(d in a)if(Ra(a,d)){var e=a[d];"array"==Qa(e)?("array"!=Qa(c[d])&&(c[d]=[]),c[d]=D(e,c[d])):Sa(e)?(Sa(c[d])||(c[d]={}),c[d]=D(e,c[d])):c[d]=e}return c};
var Ua=[],Va={"\x00":"&#0;",'"':"&quot;","&":"&amp;","'":"&#39;","<":"&lt;",">":"&gt;","\t":"&#9;","\n":"&#10;","\x0B":"&#11;","\f":"&#12;","\r":"&#13;"," ":"&#32;","-":"&#45;","/":"&#47;","=":"&#61;","`":"&#96;","\u0085":"&#133;","\u00a0":"&#160;","\u2028":"&#8232;","\u2029":"&#8233;"},Wa=function(a){return Va[a]},Xa=/[\x00\x22\x26\x27\x3c\x3e]/g;var ab=/[\x00\x08-\x0d\x22\x26\x27\/\x3c-\x3e\\\x85\u2028\u2029]/g,bb={"\x00":"\\x00","\b":"\\x08","\t":"\\t","\n":"\\n","\x0B":"\\x0b",
"\f":"\\f","\r":"\\r",'"':"\\x22","&":"\\x26","'":"\\x27","/":"\\/","<":"\\x3c","=":"\\x3d",">":"\\x3e","\\":"\\\\","\u0085":"\\x85","\u2028":"\\u2028","\u2029":"\\u2029",$:"\\x24","(":"\\x28",")":"\\x29","*":"\\x2a","+":"\\x2b",",":"\\x2c","-":"\\x2d",".":"\\x2e",":":"\\x3a","?":"\\x3f","[":"\\x5b","]":"\\x5d","^":"\\x5e","{":"\\x7b","|":"\\x7c","}":"\\x7d"},cb=function(a){return bb[a]};Ua[7]=function(a){return String(a).replace(ab,cb)};
Ua[8]=function(a){if(null==a)return" null ";switch(typeof a){case "boolean":case "number":return" "+a+" ";default:return"'"+String(String(a)).replace(ab,cb)+"'"}};var lb=/[\x00- \x22\x27-\x29\x3c\x3e\\\x7b\x7d\x7f\x85\xa0\u2028\u2029\uff01\uff03\uff04\uff06-\uff0c\uff0f\uff1a\uff1b\uff1d\uff1f\uff20\uff3b\uff3d]/g,mb={"\x00":"%00","\u0001":"%01","\u0002":"%02","\u0003":"%03","\u0004":"%04","\u0005":"%05","\u0006":"%06","\u0007":"%07","\b":"%08","\t":"%09","\n":"%0A","\x0B":"%0B","\f":"%0C","\r":"%0D","\u000e":"%0E","\u000f":"%0F","\u0010":"%10",
"\u0011":"%11","\u0012":"%12","\u0013":"%13","\u0014":"%14","\u0015":"%15","\u0016":"%16","\u0017":"%17","\u0018":"%18","\u0019":"%19","\u001a":"%1A","\u001b":"%1B","\u001c":"%1C","\u001d":"%1D","\u001e":"%1E","\u001f":"%1F"," ":"%20",'"':"%22","'":"%27","(":"%28",")":"%29","<":"%3C",">":"%3E","\\":"%5C","{":"%7B","}":"%7D","\u007f":"%7F","\u0085":"%C2%85","\u00a0":"%C2%A0","\u2028":"%E2%80%A8","\u2029":"%E2%80%A9","\uff01":"%EF%BC%81","\uff03":"%EF%BC%83","\uff04":"%EF%BC%84","\uff06":"%EF%BC%86",
"\uff07":"%EF%BC%87","\uff08":"%EF%BC%88","\uff09":"%EF%BC%89","\uff0a":"%EF%BC%8A","\uff0b":"%EF%BC%8B","\uff0c":"%EF%BC%8C","\uff0f":"%EF%BC%8F","\uff1a":"%EF%BC%9A","\uff1b":"%EF%BC%9B","\uff1d":"%EF%BC%9D","\uff1f":"%EF%BC%9F","\uff20":"%EF%BC%A0","\uff3b":"%EF%BC%BB","\uff3d":"%EF%BC%BD"},pb=function(a){return mb[a]};Ua[16]=function(a){return a};var rb;
var sb=[],tb=[],ub=[],vb=[],wb=[],xb={},yb,zb,Ab,Bb=function(a,b){var c=a["function"];if(!c)throw Error("Error: No function name given for function call.");var d=xb[c],e={},f;for(f in a)a.hasOwnProperty(f)&&0===f.indexOf("vtp_")&&(e[void 0!==d?f:f.substr(4)]=a[f]);return void 0!==d?d(e):rb(c,e,b)},Fb=function(a,b,c){c=c||[];var d={},e;for(e in a)a.hasOwnProperty(e)&&(d[e]=Eb(a[e],b,c));return d},Gb=function(a){var b=a["function"];if(!b)throw"Error: No function name given for function call.";var c=
xb[b];return c?c.priorityOverride||0:0},Eb=function(a,b,c){if(xa(a)){var d;switch(a[0]){case "function_id":return a[1];case "list":d=[];for(var e=1;e<a.length;e++)d.push(Eb(a[e],b,c));return d;case "macro":var f=a[1];if(c[f])return;var h=sb[f];if(!h||b.fd(h))return;c[f]=!0;try{var k=Fb(h,b,c);k.vtp_gtmEventId=b.id;d=Bb(k,b);Ab&&(d=Ab.rg(d,k))}catch(z){b.Be&&b.Be(z,Number(f)),d=!1}c[f]=!1;return d;case "map":d={};for(var l=1;l<a.length;l+=2)d[Eb(a[l],b,c)]=Eb(a[l+1],b,c);return d;case "template":d=
[];for(var p=!1,n=1;n<a.length;n++){var r=Eb(a[n],b,c);zb&&(p=p||r===zb.Qb);d.push(r)}return zb&&p?zb.vg(d):d.join("");case "escape":d=Eb(a[1],b,c);if(zb&&xa(a[1])&&"macro"===a[1][0]&&zb.Wg(a))return zb.ph(d);d=String(d);for(var t=2;t<a.length;t++)Ua[a[t]]&&(d=Ua[a[t]](d));return d;case "tag":var q=a[1];if(!vb[q])throw Error("Unable to resolve tag reference "+q+".");return d={me:a[2],index:q};case "zb":var u={arg0:a[2],arg1:a[3],ignore_case:a[5]};u["function"]=a[1];var v=Hb(u,b,c),w=!!a[4];return w||
2!==v?w!==(1===v):null;default:throw Error("Attempting to expand unknown Value type: "+a[0]+".");}}return a},Hb=function(a,b,c){try{return yb(Fb(a,b,c))}catch(d){JSON.stringify(a)}return 2};var Ib=function(){var a=function(b){return{toString:function(){return b}}};return{Hd:a("convert_case_to"),Id:a("convert_false_to"),Jd:a("convert_null_to"),Kd:a("convert_true_to"),Ld:a("convert_undefined_to"),Mh:a("debug_mode_metadata"),Oa:a("function"),pf:a("instance_name"),tf:a("live_only"),vf:a("malware_disabled"),wf:a("metadata"),Oh:a("original_vendor_template_id"),Af:a("once_per_event"),Od:a("once_per_load"),Sd:a("setup_tags"),Td:a("tag_id"),Ud:a("teardown_tags")}}();var Jb=null,Mb=function(a){function b(r){for(var t=0;t<r.length;t++)d[r[t]]=!0}var c=[],d=[];Jb=Kb(a);for(var e=0;e<tb.length;e++){var f=tb[e],h=Lb(f);if(h){for(var k=f.add||[],l=0;l<k.length;l++)c[k[l]]=!0;b(f.block||[])}else null===h&&b(f.block||[])}for(var p=[],n=0;n<vb.length;n++)c[n]&&!d[n]&&(p[n]=!0);return p},Lb=function(a){for(var b=a["if"]||[],c=0;c<b.length;c++){var d=Jb(b[c]);if(0===d)return!1;if(2===d)return null}for(var e=a.unless||[],f=0;f<e.length;f++){var h=Jb(e[f]);if(2===h)return null;
if(1===h)return!1}return!0},Kb=function(a){var b=[];return function(c){void 0===b[c]&&(b[c]=Hb(ub[c],a));return b[c]}};var Nb={rg:function(a,b){b[Ib.Hd]&&"string"===typeof a&&(a=1==b[Ib.Hd]?a.toLowerCase():a.toUpperCase());b.hasOwnProperty(Ib.Jd)&&null===a&&(a=b[Ib.Jd]);b.hasOwnProperty(Ib.Ld)&&void 0===a&&(a=b[Ib.Ld]);b.hasOwnProperty(Ib.Kd)&&!0===a&&(a=b[Ib.Kd]);b.hasOwnProperty(Ib.Id)&&!1===a&&(a=b[Ib.Id]);return a}};/*
 Copyright (c) 2014 Derek Brans, MIT license https://github.com/krux/postscribe/blob/master/LICENSE. Portions derived from simplehtmlparser, which is licensed under the Apache License, Version 2.0 */
var E={eb:"_ee",Sc:"_syn",Rh:"_uei",Ph:"_pci",Cc:"event_callback",Pb:"event_timeout",ja:"gtag.config"};E.ca="allow_ad_personalization_signals";E.Oc="restricted_data_processing";E.kb="allow_google_signals";E.da="cookie_expires";E.zc="cookie_update";E.yb="session_duration";E.na="user_properties";E.Ea="transport_url";E.P="ads_data_redaction";E.m="ad_storage";
E.J="analytics_storage";E.bf="region";E.df="wait_for_update";
E.Te=[E.ca,E.kb,E.zc];E.Ve=[E.da,E.Pb,E.yb];var lc={},mc=function(a,b){lc[a]=lc[a]||[];lc[a][b]=!0},nc=function(a){for(var b=[],c=lc[a]||[],d=0;d<c.length;d++)c[d]&&(b[Math.floor(d/6)]^=1<<d%6);for(var e=0;e<b.length;e++)b[e]="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".charAt(b[e]||0);return b.join("")};var oc=function(a){mc("GTM",a)};var pc=function(a){if(Error.captureStackTrace)Error.captureStackTrace(this,pc);else{var b=Error().stack;b&&(this.stack=b)}a&&(this.message=String(a))};qa(pc,Error);pc.prototype.name="CustomError";var qc=function(a,b){for(var c=a.split("%s"),d="",e=c.length-1,f=0;f<e;f++)d+=c[f]+(f<b.length?b[f]:"%s");pc.call(this,d+c[e])};qa(qc,pc);qc.prototype.name="AssertionError";var rc=function(a,b){throw new qc("Failure"+(a?": "+a:""),Array.prototype.slice.call(arguments,1));};var sc=function(a,b){var c=function(){};c.prototype=a.prototype;var d=new c;a.apply(d,Array.prototype.slice.call(arguments,1));return d};var tc;var uc=/^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i;var vc;a:{var wc=ma.navigator;if(wc){var xc=wc.userAgent;if(xc){vc=xc;break a}}vc=""}var yc=function(a){return-1!=vc.indexOf(a)};var Ac=function(a,b,c){this.h=c===zc?a:""};Ac.prototype.toString=function(){return"SafeHtml{"+this.h+"}"};var Bc=function(a){if(a instanceof Ac&&a.constructor===Ac)return a.h;var b=typeof a;rc("expected object of type SafeHtml, got '"+a+"' of type "+("object"!=b?b:a?Array.isArray(a)?"array":b:"null"));return"type_error:SafeHtml"},zc={},Cc=new Ac(ma.trustedTypes&&ma.trustedTypes.emptyHTML||"",0,zc);var Dc={MATH:!0,SCRIPT:!0,STYLE:!0,SVG:!0,TEMPLATE:!0},Ec=function(a){var b=!1,c;return function(){b||(c=a(),b=!0);return c}}(function(){if("undefined"===typeof document)return!1;var a=document.createElement("div"),b=document.createElement("div");b.appendChild(document.createElement("div"));a.appendChild(b);if(!a.firstChild)return!1;var c=a.firstChild.firstChild;a.innerHTML=Bc(Cc);return!c.parentElement}),Fc=function(a,b){if(Dc[a.tagName.toUpperCase()])throw Error("goog.dom.safe.setInnerHtml cannot be used to set content of "+
a.tagName+".");if(Ec())for(;a.lastChild;)a.removeChild(a.lastChild);a.innerHTML=Bc(b)};var Gc=function(a){var b;if(void 0===tc){var c=null,d=ma.trustedTypes;if(d&&d.createPolicy){try{c=d.createPolicy("goog#html",{createHTML:sa,createScript:sa,createScriptURL:sa})}catch(f){ma.console&&ma.console.error(f.message)}tc=c}else tc=c}var e=(b=tc)?b.createHTML(a):a;return new Ac(e,null,zc)};var F=window,H=document,Ic=navigator,Jc=H.currentScript&&H.currentScript.src,Kc=function(a,b){var c=F[a];F[a]=void 0===c?b:c;return F[a]},Lc=function(a,b){b&&(a.addEventListener?a.onload=b:a.onreadystatechange=function(){a.readyState in{loaded:1,complete:1}&&(a.onreadystatechange=null,b())})},Mc=function(a,b,c){var d=H.createElement("script");d.type="text/javascript";d.async=!0;d.src=a;Lc(d,b);c&&(d.onerror=c);var e;if(null===pa)b:{var f=ma.document,h=f.querySelector&&f.querySelector("script[nonce]");
if(h){var k=h.nonce||h.getAttribute("nonce");if(k&&na.test(k)){pa=k;break b}}pa=""}e=pa;e&&d.setAttribute("nonce",e);var l=H.getElementsByTagName("script")[0]||H.body||H.head;l.parentNode.insertBefore(d,l);return d},Nc=function(){if(Jc){var a=Jc.toLowerCase();if(0===a.indexOf("https://"))return 2;if(0===a.indexOf("http://"))return 3}return 1},Oc=function(a,b){var c=H.createElement("iframe");c.height="0";c.width="0";c.style.display="none";c.style.visibility="hidden";var d=H.body&&H.body.lastChild||
H.body||H.head;d.parentNode.insertBefore(c,d);Lc(c,b);void 0!==a&&(c.src=a);return c},Pc=function(a,b,c){var d=new Image(1,1);d.onload=function(){d.onload=null;b&&b()};d.onerror=function(){d.onerror=null;c&&c()};d.src=a;return d},Qc=function(a,b,c,d){a.addEventListener?a.addEventListener(b,c,!!d):a.attachEvent&&a.attachEvent("on"+b,c)},Rc=function(a,b,c){a.removeEventListener?a.removeEventListener(b,c,!1):a.detachEvent&&a.detachEvent("on"+b,c)},I=function(a){F.setTimeout(a,0)},Sc=function(a,b){return a&&
b&&a.attributes&&a.attributes[b]?a.attributes[b].value:null},Tc=function(a){var b=a.innerText||a.textContent||"";b&&" "!=b&&(b=b.replace(/^[\s\xa0]+|[\s\xa0]+$/g,""));b&&(b=b.replace(/(\xa0+|\s{2,}|\n|\r\t)/g," "));return b},Uc=function(a){var b=H.createElement("div");Fc(b,Gc("A<div>"+a+"</div>"));b=b.lastChild;for(var c=[];b.firstChild;)c.push(b.removeChild(b.firstChild));return c},Vc=function(a,b,c){c=c||100;for(var d={},e=0;e<b.length;e++)d[b[e]]=!0;for(var f=a,h=0;f&&h<=c;h++){if(d[String(f.tagName).toLowerCase()])return f;
f=f.parentElement}return null},Wc=function(a){Ic.sendBeacon&&Ic.sendBeacon(a)||Pc(a)},Xc=function(a,b){var c=a[b];c&&"string"===typeof c.animVal&&(c=c.animVal);return c};var Yc={},Zc=function(a){return void 0==Yc[a]?!1:Yc[a]};var $c=[];function ad(){var a=Kc("google_tag_data",{});a.ics||(a.ics={entries:{},set:bd,update:cd,addListener:dd,notifyListeners:ed,active:!1});return a.ics}
function bd(a,b,c,d,e,f){var h=ad();h.active=!0;if(void 0!=b){var k=h.entries,l=k[a]||{},p=l.region,n=c&&g(c)?c.toUpperCase():void 0;d=d.toUpperCase();e=e.toUpperCase();if(n===e||(n===d?p!==e:!n&&!p)){var r=!!(f&&0<f&&void 0===l.update),t={region:n,initial:"granted"===b,update:l.update,quiet:r};k[a]=t;r&&F.setTimeout(function(){k[a]===t&&t.quiet&&(t.quiet=!1,fd(a),ed(),mc("TAGGING",2))},f)}}}
function cd(a,b){var c=ad();c.active=!0;if(void 0!=b){var d=gd(a),e=c.entries,f=e[a]=e[a]||{};f.update="granted"===b;var h=gd(a);f.quiet?(f.quiet=!1,fd(a)):h!==d&&fd(a)}}function dd(a,b){$c.push({fe:a,Fg:b})}function fd(a){for(var b=0;b<$c.length;++b){var c=$c[b];xa(c.fe)&&-1!==c.fe.indexOf(a)&&(c.Je=!0)}}function ed(){for(var a=0;a<$c.length;++a){var b=$c[a];if(b.Je){b.Je=!1;try{b.Fg.call()}catch(c){}}}}
var gd=function(a){var b=ad().entries[a]||{};return void 0!==b.update?b.update:void 0!==b.initial?b.initial:void 0},hd=function(a){return!(ad().entries[a]||{}).quiet},id=function(){return Zc("gtag_cs_api")?ad().active:!1},jd=function(a,b){ad().addListener(a,b)},kd=function(a,b){function c(){for(var e=0;e<b.length;e++)if(!hd(b[e]))return!0;return!1}if(c()){var d=!1;jd(b,function(){d||c()||(d=!0,a())})}else a()},ld=function(a,b){if(!1===gd(b)){var c=!1;jd([b],function(){!c&&gd(b)&&(a(),c=!0)})}};var md=[E.m,E.J],nd=function(a){var b=a[E.bf];b&&oc(40);var c=a[E.df];c&&oc(41);for(var d=xa(b)?b:[b],e=0;e<d.length;++e)for(var f=0;f<md.length;f++){var h=md[f],k=a[md[f]],l=d[e];ad().set(h,k,l,"RU","RU-YAR",c)}},od=function(a){for(var b=0;b<md.length;b++){var c=md[b],d=a[md[b]];ad().update(c,d)}ad().notifyListeners()},pd=function(a){var b=gd(a);return void 0!=b?b:!0},qd=function(){for(var a=[],b=0;b<md.length;b++){var c=gd(md[b]);a[b]=!0===c?"1":!1===c?"0":"-"}return"G1"+
a.join("")},rd=function(a,b){kd(a,b)};var td=function(a){return sd?H.querySelectorAll(a):null},ud=function(a,b){if(!sd)return null;if(Element.prototype.closest)try{return a.closest(b)}catch(e){return null}var c=Element.prototype.matches||Element.prototype.webkitMatchesSelector||Element.prototype.mozMatchesSelector||Element.prototype.msMatchesSelector||Element.prototype.oMatchesSelector,d=a;if(!H.documentElement.contains(d))return null;do{try{if(c.call(d,b))return d}catch(e){break}d=d.parentElement||d.parentNode}while(null!==d&&1===d.nodeType);
return null},yd=!1;if(H.querySelectorAll)try{var zd=H.querySelectorAll(":root");zd&&1==zd.length&&zd[0]==H.documentElement&&(yd=!0)}catch(a){}var sd=yd;var Nd={},K=null,Od=Math.random();Nd.C="GTM-PCG5C6";Nd.Ub="8j2";Nd.Nh="";var Pd={__cl:!0,__ecl:!0,__ehl:!0,__evl:!0,__fal:!0,__fil:!0,__fsl:!0,__hl:!0,__jel:!0,__lcl:!0,__sdl:!0,__tl:!0,__ytl:!0,__paused:!0,__tg:!0},Qd="www.googletagmanager.com/gtm.js";
var Rd=Qd,Sd=null,Td=null,Ud="//www.googletagmanager.com/a?id="+Nd.C+"&cv=87",Vd={},Wd={},Xd=function(){var a=K.sequence||1;K.sequence=a+1;return a};
var Yd=function(){return"&tc="+vb.filter(function(a){return a}).length},ae=function(){Zd||(Zd=F.setTimeout($d,500))},$d=function(){Zd&&(F.clearTimeout(Zd),Zd=void 0);void 0===be||ce[be]&&!de&&!ee||(fe[be]||ge.Yg()||0>=he--?(oc(1),fe[be]=!0):(ge.wh(),Pc(ie()),ce[be]=!0,je=ke=ee=de=""))},ie=function(){var a=be;if(void 0===a)return"";var b=nc("GTM"),c=nc("TAGGING");return[le,ce[a]?"":"&es=1",me[a],b?"&u="+b:"",c?"&ut="+c:"",Yd(),de,ee,ke,je,"&z=0"].join("")},ne=function(){return[Ud,"&v=3&t=t","&pid="+
za(),"&rv="+Nd.Ub].join("")},oe="0.005000">Math.random(),le=ne(),pe=function(){le=ne()},ce={},de="",ee="",je="",ke="",be=void 0,me={},fe={},Zd=void 0,ge=function(a,b){var c=0,d=0;return{Yg:function(){if(c<a)return!1;Ha()-d>=b&&(c=0);return c>=a},wh:function(){Ha()-d>=b&&(c=0);c++;d=Ha()}}}(2,1E3),he=1E3,qe=function(a,b){if(oe&&!fe[a]&&be!==a){$d();be=a;je=de="";var c;c=0===b.indexOf("gtm.")?encodeURIComponent(b):"*";me[a]="&e="+c+"&eid="+a;ae()}},re=function(a,b,c){if(oe&&!fe[a]&&
b){a!==be&&($d(),be=a);var d,e=String(b[Ib.Oa]||"").replace(/_/g,"");0===e.indexOf("cvt")&&(e="cvt");d=e;var f=c+d;de=de?de+"."+f:"&tr="+f;var h=b["function"];if(!h)throw Error("Error: No function name given for function call.");var k=(xb[h]?"1":"2")+d;je=je?je+"."+k:"&ti="+k;ae();2022<=ie().length&&$d()}},se=function(a,b,c){if(oe&&!fe[a]){a!==be&&($d(),be=a);var d=c+b;ee=ee?ee+
"."+d:"&epr="+d;ae();2022<=ie().length&&$d()}};var te={},ue=new Aa,ve={},we={},ze={name:"dataLayer",set:function(a,b){D(Na(a,b),ve);xe()},get:function(a){return ye(a,2)},reset:function(){ue=new Aa;ve={};xe()}},ye=function(a,b){if(2!=b){var c=ue.get(a);oe&&c!==Ae(a.split("."))&&oc(5);return c}return Ae(a.split("."))},Ae=function(a){for(var b=ve,c=0;c<a.length;c++){if(null===b)return!1;if(void 0===b)break;b=b[a[c]]}return b},Be=function(a,b){we.hasOwnProperty(a)||(ue.set(a,b),D(Na(a,b),ve),xe())},xe=function(a){Ca(we,function(b,c){ue.set(b,
c);D(Na(b,void 0),ve);D(Na(b,c),ve);a&&delete we[b]})},Ce=function(a,b,c){te[a]=te[a]||{};var d=1!==c?Ae(b.split(".")):ue.get(b);"array"===Qa(d)||"object"===Qa(d)?te[a][b]=D(d):te[a][b]=d},Ee=function(a,b){if(te[a])return te[a][b]},Fe=function(a,b){te[a]&&delete te[a][b]};var Ie=/:[0-9]+$/,Je=function(a,b,c){for(var d=a.split("&"),e=0;e<d.length;e++){var f=d[e].split("=");if(decodeURIComponent(f[0]).replace(/\+/g," ")===b){var h=f.slice(1).join("=");return c?h:decodeURIComponent(h).replace(/\+/g," ")}}},Me=function(a,b,c,d,e){b&&(b=String(b).toLowerCase());if("protocol"===b||"port"===b)a.protocol=Ke(a.protocol)||Ke(F.location.protocol);"port"===b?a.port=String(Number(a.hostname?a.port:F.location.port)||("http"==a.protocol?80:"https"==a.protocol?443:"")):"host"===b&&
(a.hostname=(a.hostname||F.location.hostname).replace(Ie,"").toLowerCase());return Le(a,b,c,d,e)},Le=function(a,b,c,d,e){var f,h=Ke(a.protocol);b&&(b=String(b).toLowerCase());switch(b){case "url_no_fragment":f=Ne(a);break;case "protocol":f=h;break;case "host":f=a.hostname.replace(Ie,"").toLowerCase();if(c){var k=/^www\d*\./.exec(f);k&&k[0]&&(f=f.substr(k[0].length))}break;case "port":f=String(Number(a.port)||("http"==h?80:"https"==h?443:""));break;case "path":a.pathname||a.hostname||mc("TAGGING",
1);f="/"==a.pathname.substr(0,1)?a.pathname:"/"+a.pathname;var l=f.split("/");0<=m(d||[],l[l.length-1])&&(l[l.length-1]="");f=l.join("/");break;case "query":f=a.search.replace("?","");e&&(f=Je(f,e,void 0));break;case "extension":var p=a.pathname.split(".");f=1<p.length?p[p.length-1]:"";f=f.split("/")[0];break;case "fragment":f=a.hash.replace("#","");break;default:f=a&&a.href}return f},Ke=function(a){return a?a.replace(":","").toLowerCase():""},Ne=function(a){var b="";if(a&&a.href){var c=a.href.indexOf("#");
b=0>c?a.href:a.href.substr(0,c)}return b},Oe=function(a){var b=H.createElement("a");a&&(b.href=a);var c=b.pathname;"/"!==c[0]&&(a||mc("TAGGING",1),c="/"+c);var d=b.hostname.replace(Ie,"");return{href:b.href,protocol:b.protocol,host:b.host,hostname:d,pathname:c,search:b.search,hash:b.hash,port:b.port}},Pe=function(a){function b(p){var n=p.split("=")[0];return 0>d.indexOf(n)?p:n+"=0"}function c(p){return p.split("&").map(b).filter(function(n){return void 0!=n}).join("&")}var d="gclid dclid gclaw gcldc gclgp gclha gclgf _gl".split(" "),
e=Oe(a),f=a.split(/[?#]/)[0],h=e.search,k=e.hash;"?"===h[0]&&(h=h.substring(1));"#"===k[0]&&(k=k.substring(1));h=c(h);k=c(k);""!==h&&(h="?"+h);""!==k&&(k="#"+k);var l=""+f+h+k;"/"===l[l.length-1]&&(l=l.substring(0,l.length-1));return l};function Qe(a,b,c){for(var d=[],e=b.split(";"),f=0;f<e.length;f++){var h=e[f].split("="),k=h[0].replace(/^\s*|\s*$/g,"");if(k&&k==a){var l=h.slice(1).join("=").replace(/^\s*|\s*$/g,"");l&&c&&(l=decodeURIComponent(l));d.push(l)}}return d};var Se=function(a,b,c,d){return Re(d)?Qe(a,String(b||document.cookie),c):[]},Ve=function(a,b,c,d,e){if(Re(e)){var f=Te(a,d,e);if(1===f.length)return f[0].id;if(0!==f.length){f=Ue(f,function(h){return h.Zb},b);if(1===f.length)return f[0].id;f=Ue(f,function(h){return h.Eb},c);return f[0]?f[0].id:void 0}}};function We(a,b,c,d){var e=document.cookie;document.cookie=a;var f=document.cookie;return e!=f||void 0!=c&&0<=Se(b,f,!1,d).indexOf(c)}
var $e=function(a,b,c){function d(q,u,v){if(null==v)return delete h[u],q;h[u]=v;return q+"; "+u+"="+v}function e(q,u){if(null==u)return delete h[u],q;h[u]=!0;return q+"; "+u}if(!Re(c.Ia))return 2;var f;void 0==b?f=a+"=deleted; expires="+(new Date(0)).toUTCString():(c.encode&&(b=encodeURIComponent(b)),b=Xe(b),f=a+"="+b);var h={};f=d(f,"path",c.path);var k;c.expires instanceof Date?k=c.expires.toUTCString():null!=c.expires&&(k=""+c.expires);f=d(f,"expires",k);f=d(f,"max-age",c.ai);f=d(f,"samesite",
c.fi);c.gi&&(f=e(f,"secure"));var l=c.domain;if("auto"===l){for(var p=Ye(),n=0;n<p.length;++n){var r="none"!==p[n]?p[n]:void 0,t=d(f,"domain",r);t=e(t,c.flags);if(!Ze(r,c.path)&&We(t,a,b,c.Ia))return 0}return 1}l&&"none"!==l&&(f=d(f,"domain",l));f=e(f,c.flags);return Ze(l,c.path)?1:We(f,a,b,c.Ia)?0:1},af=function(a,b,c){null==c.path&&(c.path="/");c.domain||(c.domain="auto");return $e(a,b,c)};
function Ue(a,b,c){for(var d=[],e=[],f,h=0;h<a.length;h++){var k=a[h],l=b(k);l===c?d.push(k):void 0===f||l<f?(e=[k],f=l):l===f&&e.push(k)}return 0<d.length?d:e}function Te(a,b,c){for(var d=[],e=Se(a,void 0,void 0,c),f=0;f<e.length;f++){var h=e[f].split("."),k=h.shift();if(!b||-1!==b.indexOf(k)){var l=h.shift();l&&(l=l.split("-"),d.push({id:h.join("."),Zb:1*l[0]||1,Eb:1*l[1]||1}))}}return d}
var Xe=function(a){a&&1200<a.length&&(a=a.substring(0,1200));return a},bf=/^(www\.)?google(\.com?)?(\.[a-z]{2})?$/,cf=/(^|\.)doubleclick\.net$/i,Ze=function(a,b){return cf.test(document.location.hostname)||"/"===b&&bf.test(a)},Ye=function(){var a=[],b=document.location.hostname.split(".");if(4===b.length){var c=b[b.length-1];if(parseInt(c,10).toString()===c)return["none"]}for(var d=b.length-2;0<=d;d--)a.push(b.slice(d).join("."));var e=document.location.hostname;cf.test(e)||bf.test(e)||a.push("none");
return a},Re=function(a){if(!Zc("gtag_cs_api")||!a||!id())return!0;if(!hd(a))return!1;var b=gd(a);return null==b?!0:!!b};var df=function(){for(var a=Ic.userAgent+(H.cookie||"")+(H.referrer||""),b=a.length,c=F.history.length;0<c;)a+=c--^b++;var d=1,e,f,h;if(a)for(d=0,f=a.length-1;0<=f;f--)h=a.charCodeAt(f),d=(d<<6&268435455)+h+(h<<14),e=d&266338304,d=0!=e?d^e>>21:d;return[Math.round(2147483647*Math.random())^d&2147483647,Math.round(Ha()/1E3)].join(".")},gf=function(a,b,c,d,e){var f=ef(b);return Ve(a,f,ff(c),d,e)},hf=function(a,b,c,d){var e=""+ef(c),f=ff(d);1<f&&(e+="-"+f);return[b,e,a].join(".")},ef=function(a){if(!a)return 1;
a=0===a.indexOf(".")?a.substr(1):a;return a.split(".").length},ff=function(a){if(!a||"/"===a)return 1;"/"!==a[0]&&(a="/"+a);"/"!==a[a.length-1]&&(a+="/");return a.split("/").length-1};function jf(a,b,c){var d,e=a.Ab;null==e&&(e=7776E3);0!==e&&(d=new Date((b||Ha())+1E3*e));return{path:a.path,domain:a.domain,flags:a.flags,encode:!!c,expires:d}};var kf=["1"],lf={},pf=function(a){var b=mf(a.prefix);lf[b]||nf(b,a.path,a.domain)||(of(b,df(),a),nf(b,a.path,a.domain))};function of(a,b,c){var d=hf(b,"1",c.domain,c.path),e=jf(c);e.Ia="ad_storage";af(a,d,e)}function nf(a,b,c){var d=gf(a,b,c,kf,"ad_storage");d&&(lf[a]=d);return d}function mf(a){return(a||"_gcl")+"_au"};function qf(){for(var a=rf,b={},c=0;c<a.length;++c)b[a[c]]=c;return b}function sf(){var a="ABCDEFGHIJKLMNOPQRSTUVWXYZ";a+=a.toLowerCase()+"0123456789-_";return a+"."}var rf,tf;function uf(a){rf=rf||sf();tf=tf||qf();for(var b=[],c=0;c<a.length;c+=3){var d=c+1<a.length,e=c+2<a.length,f=a.charCodeAt(c),h=d?a.charCodeAt(c+1):0,k=e?a.charCodeAt(c+2):0,l=f>>2,p=(f&3)<<4|h>>4,n=(h&15)<<2|k>>6,r=k&63;e||(r=64,d||(n=64));b.push(rf[l],rf[p],rf[n],rf[r])}return b.join("")}
function vf(a){function b(l){for(;d<a.length;){var p=a.charAt(d++),n=tf[p];if(null!=n)return n;if(!/^[\s\xa0]*$/.test(p))throw Error("Unknown base64 encoding at char: "+p);}return l}rf=rf||sf();tf=tf||qf();for(var c="",d=0;;){var e=b(-1),f=b(0),h=b(64),k=b(64);if(64===k&&-1===e)return c;c+=String.fromCharCode(e<<2|f>>4);64!=h&&(c+=String.fromCharCode(f<<4&240|h>>2),64!=k&&(c+=String.fromCharCode(h<<6&192|k)))}};var wf;var Af=function(){var a=xf,b=yf,c=zf(),d=function(h){a(h.target||h.srcElement||{})},e=function(h){b(h.target||h.srcElement||{})};if(!c.init){Qc(H,"mousedown",d);Qc(H,"keyup",d);Qc(H,"submit",e);var f=HTMLFormElement.prototype.submit;HTMLFormElement.prototype.submit=function(){b(this);f.call(this)};c.init=!0}},Bf=function(a,b,c,d,e){var f={callback:a,domains:b,fragment:2===c,placement:c,forms:d,sameHost:e};zf().decorators.push(f)},Cf=function(a,b,c){for(var d=zf().decorators,e={},f=0;f<d.length;++f){var h=
d[f],k;if(k=!c||h.forms)a:{var l=h.domains,p=a,n=!!h.sameHost;if(l&&(n||p!==H.location.hostname))for(var r=0;r<l.length;r++)if(l[r]instanceof RegExp){if(l[r].test(p)){k=!0;break a}}else if(0<=p.indexOf(l[r])||n&&0<=l[r].indexOf(p)){k=!0;break a}k=!1}if(k){var t=h.placement;void 0==t&&(t=h.fragment?2:1);t===b&&Ka(e,h.callback())}}return e},zf=function(){var a=Kc("google_tag_data",{}),b=a.gl;b&&b.decorators||(b={decorators:[]},a.gl=b);return b};var Df=/(.*?)\*(.*?)\*(.*)/,Ef=/^https?:\/\/([^\/]*?)\.?cdn\.ampproject\.org\/?(.*)/,Ff=/^(?:www\.|m\.|amp\.)+/,Gf=/([^?#]+)(\?[^#]*)?(#.*)?/;function Hf(a){return new RegExp("(.*?)(^|&)"+a+"=([^&]*)&?(.*)")}
var Jf=function(a){var b=[],c;for(c in a)if(a.hasOwnProperty(c)){var d=a[c];void 0!==d&&d===d&&null!==d&&"[object Object]"!==d.toString()&&(b.push(c),b.push(uf(String(d))))}var e=b.join("*");return["1",If(e),e].join("*")},If=function(a,b){var c=[window.navigator.userAgent,(new Date).getTimezoneOffset(),window.navigator.userLanguage||window.navigator.language,Math.floor((new Date).getTime()/60/1E3)-(void 0===b?0:b),a].join("*"),d;if(!(d=wf)){for(var e=Array(256),f=0;256>f;f++){for(var h=f,k=0;8>k;k++)h=
h&1?h>>>1^3988292384:h>>>1;e[f]=h}d=e}wf=d;for(var l=4294967295,p=0;p<c.length;p++)l=l>>>8^wf[(l^c.charCodeAt(p))&255];return((l^-1)>>>0).toString(36)},Lf=function(){return function(a){var b=Oe(F.location.href),c=b.search.replace("?",""),d=Je(c,"_gl",!0)||"";a.query=Kf(d)||{};var e=Me(b,"fragment").match(Hf("_gl"));a.fragment=Kf(e&&e[3]||"")||{}}},Mf=function(a){var b=Lf(),c=zf();c.data||(c.data={query:{},fragment:{}},b(c.data));var d={},e=c.data;e&&(Ka(d,e.query),a&&Ka(d,e.fragment));return d},Kf=
function(a){var b;b=void 0===b?3:b;try{if(a){var c;a:{for(var d=a,e=0;3>e;++e){var f=Df.exec(d);if(f){c=f;break a}d=decodeURIComponent(d)}c=void 0}var h=c;if(h&&"1"===h[1]){var k=h[3],l;a:{for(var p=h[2],n=0;n<b;++n)if(p===If(k,n)){l=!0;break a}l=!1}if(l){for(var r={},t=k?k.split("*"):[],q=0;q<t.length;q+=2)r[t[q]]=vf(t[q+1]);return r}}}}catch(u){}};
function Nf(a,b,c,d){function e(n){var r=n,t=Hf(a).exec(r),q=r;if(t){var u=t[2],v=t[4];q=t[1];v&&(q=q+u+v)}n=q;var w=n.charAt(n.length-1);n&&"&"!==w&&(n+="&");return n+p}d=void 0===d?!1:d;var f=Gf.exec(c);if(!f)return"";var h=f[1],k=f[2]||"",l=f[3]||"",p=a+"="+b;d?l="#"+e(l.substring(1)):k="?"+e(k.substring(1));return""+h+k+l}
function Of(a,b){var c="FORM"===(a.tagName||"").toUpperCase(),d=Cf(b,1,c),e=Cf(b,2,c),f=Cf(b,3,c);if(La(d)){var h=Jf(d);c?Pf("_gl",h,a):Qf("_gl",h,a,!1)}if(!c&&La(e)){var k=Jf(e);Qf("_gl",k,a,!0)}for(var l in f)if(f.hasOwnProperty(l))a:{var p=l,n=f[l],r=a;if(r.tagName){if("a"===r.tagName.toLowerCase()){Qf(p,n,r,void 0);break a}if("form"===r.tagName.toLowerCase()){Pf(p,n,r);break a}}"string"==typeof r&&Nf(p,n,r,void 0)}}
function Qf(a,b,c,d){if(c.href){var e=Nf(a,b,c.href,void 0===d?!1:d);uc.test(e)&&(c.href=e)}}
function Pf(a,b,c){if(c&&c.action){var d=(c.method||"").toLowerCase();if("get"===d){for(var e=c.childNodes||[],f=!1,h=0;h<e.length;h++){var k=e[h];if(k.name===a){k.setAttribute("value",b);f=!0;break}}if(!f){var l=H.createElement("input");l.setAttribute("type","hidden");l.setAttribute("name",a);l.setAttribute("value",b);c.appendChild(l)}}else if("post"===d){var p=Nf(a,b,c.action);uc.test(p)&&(c.action=p)}}}
var xf=function(a){try{var b;a:{for(var c=a,d=100;c&&0<d;){if(c.href&&c.nodeName.match(/^a(?:rea)?$/i)){b=c;break a}c=c.parentNode;d--}b=null}var e=b;if(e){var f=e.protocol;"http:"!==f&&"https:"!==f||Of(e,e.hostname)}}catch(h){}},yf=function(a){try{if(a.action){var b=Me(Oe(a.action),"host");Of(a,b)}}catch(c){}},Rf=function(a,b,c,d){Af();Bf(a,b,"fragment"===c?2:1,!!d,!1)},Sf=function(a,b){Af();Bf(a,[Le(F.location,"host",!0)],b,!0,!0)},Tf=function(){var a=H.location.hostname,b=Ef.exec(H.referrer);if(!b)return!1;
var c=b[2],d=b[1],e="";if(c){var f=c.split("/"),h=f[1];e="s"===h?decodeURIComponent(f[2]):decodeURIComponent(h)}else if(d){if(0===d.indexOf("xn--"))return!1;e=d.replace(/-/g,".").replace(/\.\./g,"-")}var k=a.replace(Ff,""),l=e.replace(Ff,""),p;if(!(p=k===l)){var n="."+l;p=k.substring(k.length-n.length,k.length)===n}return p},Uf=function(a,b){return!1===a?!1:a||b||Tf()};var Vf=/^\w+$/,Wf=/^[\w-]+$/,Xf=/^~?[\w-]+$/,Yf={aw:"_aw",dc:"_dc",gf:"_gf",ha:"_ha",gp:"_gp"},Zf=function(){if(!Zc("gtag_cs_api")||!id())return!0;var a=gd("ad_storage");return null==a?!0:!!a},$f=function(a,b){hd("ad_storage")?Zf()?a():ld(a,"ad_storage"):b?mc("TAGGING",3):kd(function(){$f(a,!0)},["ad_storage"])},cg=function(a){var b=[];if(!H.cookie)return b;var c=Se(a,H.cookie,void 0,"ad_storage");if(!c||0==c.length)return b;for(var d=0;d<c.length;d++){var e=ag(c[d]);e&&-1===m(b,e)&&b.push(e)}return bg(b)};
function dg(a){return a&&"string"==typeof a&&a.match(Vf)?a:"_gcl"}
var fg=function(){var a=Oe(F.location.href),b=Me(a,"query",!1,void 0,"gclid"),c=Me(a,"query",!1,void 0,"gclsrc"),d=Me(a,"query",!1,void 0,"dclid");if(!b||!c){var e=a.hash.replace("#","");b=b||Je(e,"gclid",void 0);c=c||Je(e,"gclsrc",void 0)}return eg(b,c,d)},eg=function(a,b,c){var d={},e=function(f,h){d[h]||(d[h]=[]);d[h].push(f)};d.gclid=a;d.gclsrc=b;d.dclid=c;if(void 0!==a&&a.match(Wf))switch(b){case void 0:e(a,"aw");break;case "aw.ds":e(a,"aw");e(a,"dc");break;case "ds":e(a,"dc");break;case "3p.ds":Zc("gtm_3pds")&&
e(a,"dc");break;case "gf":e(a,"gf");break;case "ha":e(a,"ha");break;case "gp":e(a,"gp")}c&&e(c,"dc");return d},hg=function(a){var b=fg();$f(function(){return gg(b,a)})};
function gg(a,b,c){function d(p,n){var r=ig(p,e);r&&(af(r,n,f),h=!0)}b=b||{};var e=dg(b.prefix);c=c||Ha();var f=jf(b,c,!0);f.Ia="ad_storage";var h=!1,k=Math.round(c/1E3),l=function(p){return["GCL",k,p].join(".")};a.aw&&(!0===b.ki?d("aw",l("~"+a.aw[0])):d("aw",l(a.aw[0])));a.dc&&d("dc",l(a.dc[0]));a.gf&&d("gf",l(a.gf[0]));a.ha&&d("ha",l(a.ha[0]));a.gp&&d("gp",l(a.gp[0]));return h}
var kg=function(a,b){var c=Mf(!0);$f(function(){for(var d=dg(b.prefix),e=0;e<a.length;++e){var f=a[e];if(void 0!==Yf[f]){var h=ig(f,d),k=c[h];if(k){var l=Math.min(jg(k),Ha()),p;b:{for(var n=l,r=Se(h,H.cookie,void 0,"ad_storage"),t=0;t<r.length;++t)if(jg(r[t])>n){p=!0;break b}p=!1}if(!p){var q=jf(b,l,!0);q.Ia="ad_storage";af(h,k,q)}}}}gg(eg(c.gclid,c.gclsrc),b)})},ig=function(a,b){var c=Yf[a];if(void 0!==c)return b+c},jg=function(a){var b=a.split(".");return 3!==b.length||"GCL"!==b[0]?0:1E3*(Number(b[1])||
0)};function ag(a){var b=a.split(".");if(3==b.length&&"GCL"==b[0]&&b[1])return b[2]}
var lg=function(a,b,c,d,e){if(xa(b)){var f=dg(e),h=function(){for(var k={},l=0;l<a.length;++l){var p=ig(a[l],f);if(p){var n=Se(p,H.cookie,void 0,"ad_storage");n.length&&(k[p]=n.sort()[n.length-1])}}return k};$f(function(){Rf(h,b,c,d)})}},bg=function(a){return a.filter(function(b){return Xf.test(b)})},mg=function(a,b){for(var c=dg(b.prefix),d={},e=0;e<a.length;e++)Yf[a[e]]&&(d[a[e]]=Yf[a[e]]);$f(function(){Ca(d,function(f,h){var k=Se(c+h,H.cookie,void 0,"ad_storage");if(k.length){var l=k[0],p=jg(l),
n={};n[f]=[ag(l)];gg(n,b,p)}})})};function ng(a,b){for(var c=0;c<b.length;++c)if(a[b[c]])return!0;return!1}
var og=function(){function a(e,f,h){h&&(e[f]=h)}var b=["aw","dc"];if(id()){var c=fg();if(ng(c,b)){var d={};a(d,"gclid",c.gclid);a(d,"dclid",c.dclid);a(d,"gclsrc",c.gclsrc);Sf(function(){return d},3);Sf(function(){var e={};return e._up="1",e},1)}}},pg=function(){var a;if(Zf()){for(var b=[],c=H.cookie.split(";"),d=/^\s*_gac_(UA-\d+-\d+)=\s*(.+?)\s*$/,e=0;e<c.length;e++){var f=c[e].match(d);f&&b.push({Ad:f[1],value:f[2]})}var h={};if(b&&b.length)for(var k=0;k<b.length;k++){var l=b[k].value.split(".");
"1"==l[0]&&3==l.length&&l[1]&&(h[b[k].Ad]||(h[b[k].Ad]=[]),h[b[k].Ad].push({timestamp:l[1],Hg:l[2]}))}a=h}else a={};return a};var qg=/^\d+\.fls\.doubleclick\.net$/;function rg(a,b){hd(E.m)?pd(E.m)?a():ld(a,E.m):b?oc(42):rd(function(){rg(a,!0)},[E.m])}function sg(a){var b=Oe(F.location.href),c=Me(b,"host",!1);if(c&&c.match(qg)){var d=Me(b,"path").split(a+"=");if(1<d.length)return d[1].split(";")[0].split("?")[0]}}
function tg(a,b,c){if("aw"==a||"dc"==a){var d=sg("gcl"+a);if(d)return d.split(".")}var e=dg(b);if("_gcl"==e){c=void 0===c?!0:c;var f=!pd(E.m)&&c,h;h=fg()[a]||[];if(0<h.length)return f?["0"]:h}var k=ig(a,e);return k?cg(k):[]}
var ug=function(a){var b=sg("gac");if(b)return!pd(E.m)&&a?"0":decodeURIComponent(b);var c=pg(),d=[];Ca(c,function(e,f){for(var h=[],k=0;k<f.length;k++)h.push(f[k].Hg);h=bg(h);h.length&&d.push(e+":"+h.join(","))});return d.join(";")},vg=function(a,b){var c=fg().dc||[];rg(function(){pf(b);var d=lf[mf(b.prefix)],e=!1;if(d&&0<c.length){var f=K.joined_au=K.joined_au||{},h=b.prefix||"_gcl";if(!f[h])for(var k=0;k<c.length;k++){var l="https://adservice.google.com/ddm/regclk";l=l+"?gclid="+c[k]+"&auiddc="+d;Wc(l);e=f[h]=
!0}}null==a&&(a=e);if(a&&d){var p=mf(b.prefix),n=lf[p];n&&of(p,n,b)}})};var wg=/[A-Z]+/,xg=/\s/,yg=function(a){if(g(a)&&(a=Ga(a),!xg.test(a))){var b=a.indexOf("-");if(!(0>b)){var c=a.substring(0,b);if(wg.test(c)){for(var d=a.substring(b+1).split("/"),e=0;e<d.length;e++)if(!d[e])return;return{id:a,prefix:c,containerId:c+"-"+d[0],B:d}}}}},Ag=function(a){for(var b={},c=0;c<a.length;++c){var d=yg(a[c]);d&&(b[d.id]=d)}zg(b);var e=[];Ca(b,function(f,h){e.push(h)});return e};
function zg(a){var b=[],c;for(c in a)if(a.hasOwnProperty(c)){var d=a[c];"AW"===d.prefix&&d.B[1]&&b.push(d.containerId)}for(var e=0;e<b.length;++e)delete a[b[e]]};var Bg=function(){var a=!1;return a};var Q=function(a,b,c,d){return(2===Cg()||d||"http:"!=F.location.protocol?a:b)+c},Cg=function(){var a=Nc(),b;if(1===a)a:{var c=Rd;c=c.toLowerCase();for(var d="https://"+c,e="http://"+c,f=1,h=H.getElementsByTagName("script"),k=0;k<h.length&&100>k;k++){var l=h[k].src;if(l){l=l.toLowerCase();if(0===l.indexOf(e)){b=3;break a}1===f&&0===l.indexOf(d)&&(f=2)}}b=f}else b=a;return b};
var Rg=function(a){return pd(E.m)?a:a.replace(/&url=([^&#]+)/,function(b,c){var d=Pe(decodeURIComponent(c));return"&url="+encodeURIComponent(d)})};var Sg=new RegExp(/^(.*\.)?(google|youtube|blogger|withgoogle)(\.com?)?(\.[a-z]{2})?\.?$/),Tg={cl:["ecl"],customPixels:["nonGooglePixels"],ecl:["cl"],ehl:["hl"],hl:["ehl"],html:["customScripts","customPixels","nonGooglePixels","nonGoogleScripts","nonGoogleIframes"],customScripts:["html","customPixels","nonGooglePixels","nonGoogleScripts","nonGoogleIframes"],nonGooglePixels:[],nonGoogleScripts:["nonGooglePixels"],nonGoogleIframes:["nonGooglePixels"]},Ug={cl:["ecl"],customPixels:["customScripts","html"],
ecl:["cl"],ehl:["hl"],hl:["ehl"],html:["customScripts"],customScripts:["html"],nonGooglePixels:["customPixels","customScripts","html","nonGoogleScripts","nonGoogleIframes"],nonGoogleScripts:["customScripts","html"],nonGoogleIframes:["customScripts","html","nonGoogleScripts"]},Vg="google customPixels customScripts html nonGooglePixels nonGoogleScripts nonGoogleIframes".split(" ");
var Xg=function(a){var b;b||(b=ye("gtm.whitelist"));b&&oc(9);
var c=b&&Ma(Fa(b),Tg),d;d||(d=ye("gtm.blacklist"));d||(d=ye("tagTypeBlacklist"))&&oc(3);d?oc(8):d=[];Wg()&&(d=Fa(d),d.push("nonGooglePixels","nonGoogleScripts","sandboxedScripts"));0<=m(Fa(d),"google")&&oc(2);var e=d&&Ma(Fa(d),Ug),f={};return function(h){var k=
h&&h[Ib.Oa];if(!k||"string"!=typeof k)return!0;k=k.replace(/^_*/,"");if(void 0!==f[k])return f[k];var l=Wd[k]||[],p=a(k,l);if(b){var n;if(n=p)a:{if(0>m(c,k))if(l&&0<l.length)for(var r=0;r<l.length;r++){if(0>m(c,l[r])){oc(11);n=!1;break a}}else{n=!1;break a}n=!0}p=n}var t=!1;if(d){var q=0<=m(e,k);if(q)t=q;else{var u=Ba(e,l||[]);u&&oc(10);t=u}}var v=!p||t;v||!(0<=m(l,"sandboxedScripts"))||c&&-1!==m(c,"sandboxedScripts")||(v=Ba(e,Vg));return f[k]=v}},Wg=function(){return Sg.test(F.location&&F.location.hostname)};var Yg={active:!0,isAllowed:function(){return!0}},Zg=function(a){var b=K.zones;!b&&a&&(b=K.zones=a());return b};var $g=function(){};var ah=!1,bh=0,ch=[];function dh(a){if(!ah){var b=H.createEventObject,c="complete"==H.readyState,d="interactive"==H.readyState;if(!a||"readystatechange"!=a.type||c||!b&&d){ah=!0;for(var e=0;e<ch.length;e++)I(ch[e])}ch.push=function(){for(var f=0;f<arguments.length;f++)I(arguments[f]);return 0}}}function eh(){if(!ah&&140>bh){bh++;try{H.documentElement.doScroll("left"),dh()}catch(a){F.setTimeout(eh,50)}}}var fh=function(a){ah?a():ch.push(a)};var gh={},hh={},ih=function(a,b,c,d){if(!hh[a]||Pd[b]||"__zone"===b)return-1;var e={};Sa(d)&&(e=D(d,e));e.id=c;e.status="timeout";return hh[a].tags.push(e)-1},jh=function(a,b,c,d){if(hh[a]){var e=hh[a].tags[b];e&&(e.status=c,e.executionTime=d)}};function kh(a){for(var b=gh[a]||[],c=0;c<b.length;c++)b[c]();gh[a]={push:function(d){d(Nd.C,hh[a])}}}
var nh=function(a,b,c){hh[a]={tags:[]};va(b)&&lh(a,b);c&&F.setTimeout(function(){return kh(a)},Number(c));return mh(a)},lh=function(a,b){gh[a]=gh[a]||[];gh[a].push(Ja(function(){return I(function(){b(Nd.C,hh[a])})}))};function mh(a){var b=0,c=0,d=!1;return{add:function(){c++;return Ja(function(){b++;d&&b>=c&&kh(a)})},cg:function(){d=!0;b>=c&&kh(a)}}};var oh=function(){function a(d){return!wa(d)||0>d?0:d}if(!K._li&&F.performance&&F.performance.timing){var b=F.performance.timing.navigationStart,c=wa(ze.get("gtm.start"))?ze.get("gtm.start"):0;K._li={cst:a(c-b),cbt:a(Td-b)}}};var sh={},th=function(){return F.GoogleAnalyticsObject&&F[F.GoogleAnalyticsObject]},uh=!1;
var vh=function(a){F.GoogleAnalyticsObject||(F.GoogleAnalyticsObject=a||"ga");var b=F.GoogleAnalyticsObject;if(F[b])F.hasOwnProperty(b)||oc(12);else{var c=function(){c.q=c.q||[];c.q.push(arguments)};c.l=Number(new Date);F[b]=c}oh();return F[b]},wh=function(a,b,c,d){b=String(b).replace(/\s+/g,"").split(",");var e=th();e(a+"require","linker");e(a+"linker:autoLink",b,c,d)};
var yh=function(a){},xh=function(){return F.GoogleAnalyticsObject||"ga"},zh=function(a,b){return function(){var c=th(),d=c&&c.getByName&&c.getByName(a);if(d){var e=d.get("sendHitTask");d.set("sendHitTask",function(f){var h=f.get("hitPayload"),k=f.get("hitCallback"),l=0>h.indexOf("&tid="+b);l&&(f.set("hitPayload",h.replace(/&tid=UA-[0-9]+-[0-9]+/,"&tid="+
b),!0),f.set("hitCallback",void 0,!0));e(f);l&&(f.set("hitPayload",h,!0),f.set("hitCallback",k,!0),f.set("_x_19",void 0,!0),e(f))})}}};function Eh(a,b,c,d){var e=vb[a],f=Fh(a,b,c,d);if(!f)return null;var h=Eb(e[Ib.Sd],c,[]);if(h&&h.length){var k=h[0];f=Eh(k.index,{F:f,D:1===k.me?b.terminate:f,terminate:b.terminate},c,d)}return f}
function Fh(a,b,c,d){function e(){if(f[Ib.vf])k();else{var w=Fb(f,c,[]),z=ih(c.id,String(f[Ib.Oa]),Number(f[Ib.Td]),w[Ib.wf]),x=!1;w.vtp_gtmOnSuccess=function(){if(!x){x=!0;var y=Ha()-A;re(c.id,vb[a],"5");jh(c.id,z,"success",y);h()}};w.vtp_gtmOnFailure=function(){if(!x){x=!0;var y=Ha()-A;re(c.id,vb[a],"6");jh(c.id,z,"failure",y);k()}};w.vtp_gtmTagId=f.tag_id;
w.vtp_gtmEventId=c.id;re(c.id,f,"1");var B=function(){var y=Ha()-A;re(c.id,f,"7");jh(c.id,z,"exception",y);x||(x=!0,k())};var A=Ha();try{Bb(w,c)}catch(y){B(y)}}}var f=vb[a],h=b.F,k=b.D,l=b.terminate;if(c.fd(f))return null;var p=Eb(f[Ib.Ud],c,[]);if(p&&p.length){var n=p[0],r=Eh(n.index,{F:h,D:k,terminate:l},c,d);if(!r)return null;h=r;k=2===n.me?l:r}if(f[Ib.Od]||f[Ib.Af]){var t=f[Ib.Od]?wb:c.Eh,q=h,u=k;if(!t[a]){e=Ja(e);var v=Gh(a,t,e);h=v.F;k=v.D}return function(){t[a](q,u)}}return e}
function Gh(a,b,c){var d=[],e=[];b[a]=Hh(d,e,c);return{F:function(){b[a]=Ih;for(var f=0;f<d.length;f++)d[f]()},D:function(){b[a]=Jh;for(var f=0;f<e.length;f++)e[f]()}}}function Hh(a,b,c){return function(d,e){a.push(d);b.push(e);c()}}function Ih(a){a()}function Jh(a,b){b()};var Mh=function(a,b){for(var c=[],d=0;d<vb.length;d++)if(a.Cb[d]){var e=vb[d];var f=b.add();try{var h=Eh(d,{F:f,D:f,terminate:f},a,d);h?c.push({Se:d,Ke:Gb(e),Cg:h}):(Kh(d,a),f())}catch(l){f()}}b.cg();c.sort(Lh);for(var k=0;k<c.length;k++)c[k].Cg();return 0<c.length};function Lh(a,b){var c,d=b.Ke,e=a.Ke;c=d>e?1:d<e?-1:0;var f;if(0!==c)f=c;else{var h=a.Se,k=b.Se;f=h>k?1:h<k?-1:0}return f}
function Kh(a,b){if(!oe)return;var c=function(d){var e=b.fd(vb[d])?"3":"4",f=Eb(vb[d][Ib.Sd],b,[]);f&&f.length&&c(f[0].index);re(b.id,vb[d],e);var h=Eb(vb[d][Ib.Ud],b,[]);h&&h.length&&c(h[0].index)};c(a);}
var Nh=!1,Oh=function(a,b,c,d,e){if("gtm.js"==b){if(Nh)return!1;Nh=!0}qe(a,b);var f=nh(a,d,e);Ce(a,"event",1);Ce(a,"ecommerce",1);Ce(a,"gtm");var h={id:a,name:b,fd:Xg(c),Cb:[],Eh:[],Be:function(){oc(6)}};h.Cb=Mb(h);
var k=Mh(h,f);"gtm.js"!==b&&"gtm.sync"!==b||yh(Nd.C);if(!k)return k;for(var l=0;l<h.Cb.length;l++)if(h.Cb[l]){var p=vb[l];if(p&&!Pd[String(p[Ib.Oa])])return!0}return!1};function Ph(a,b){if(a){var c=""+a;0!==c.indexOf("http://")&&0!==c.indexOf("https://")&&(c="https://"+c);"/"===c[c.length-1]&&(c=c.substring(0,c.length-1));return Oe(""+c+b).href}}function Qh(a,b){return Rh()?Ph(a,b):void 0}function Rh(){var a=!1;return a};var Sh=function(){this.eventModel={};this.targetConfig={};this.containerConfig={};this.h={};this.globalConfig={};this.F=function(){};this.D=function(){};this.eventId=void 0},Th=function(a){var b=new Sh;b.eventModel=a;return b},Uh=function(a,b){a.targetConfig=b;return a},Vh=function(a,b){a.containerConfig=b;return a},Wh=function(a,b){a.h=b;return a},Xh=function(a,b){a.globalConfig=b;return a},Yh=function(a,b){a.F=b;return a},Zh=function(a,b){a.D=b;return a};
Sh.prototype.getWithConfig=function(a){if(void 0!==this.eventModel[a])return this.eventModel[a];if(void 0!==this.targetConfig[a])return this.targetConfig[a];if(void 0!==this.containerConfig[a])return this.containerConfig[a];if(void 0!==this.h[a])return this.h[a];if(void 0!==this.globalConfig[a])return this.globalConfig[a]};
var $h=function(a){function b(e){Ca(e,function(f){c[f]=null})}var c={};b(a.eventModel);b(a.targetConfig);b(a.containerConfig);b(a.globalConfig);var d=[];Ca(c,function(e){d.push(e)});return d};var ai;if(3===Nd.Ub.length)ai="g";else{var bi="G";ai=bi}
var ci={"":"n",UA:"u",AW:"a",DC:"d",G:"e",GF:"f",HA:"h",GTM:ai,OPT:"o"},di=function(a){var b=Nd.C.split("-"),c=b[0].toUpperCase(),d=ci[c]||"i",e=a&&"GTM"===c?b[1]:"OPT"===c?b[1]:"",f;if(3===Nd.Ub.length){var h="w";f="2"+h}else f="";return f+d+Nd.Ub+e};var ei=function(a,b){a.addEventListener&&a.addEventListener("message",b,!1)};var fi=function(){return yc("iPhone")&&!yc("iPod")&&!yc("iPad")};yc("Opera");yc("Trident")||yc("MSIE");yc("Edge");!yc("Gecko")||-1!=vc.toLowerCase().indexOf("webkit")&&!yc("Edge")||yc("Trident")||yc("MSIE")||yc("Edge");-1!=vc.toLowerCase().indexOf("webkit")&&!yc("Edge")&&yc("Mobile");yc("Macintosh");yc("Windows");yc("Linux")||yc("CrOS");var gi=ma.navigator||null;gi&&(gi.appVersion||"").indexOf("X11");yc("Android");fi();yc("iPad");yc("iPod");fi()||yc("iPad")||yc("iPod");vc.toLowerCase().indexOf("kaios");var hi=function(a,b){for(var c=a,d=0;50>d;++d){var e;try{e=!(!c.frames||!c.frames[b])}catch(k){e=!1}if(e)return c;var f;a:{try{var h=c.parent;if(h&&h!=c){f=h;break a}}catch(k){}f=null}if(!(c=f))break}return null};var ii=function(){};var ji=function(a){return void 0!==a.tcString&&"string"!==typeof a.tcString||void 0!==a.gdprApplies&&"boolean"!==typeof a.gdprApplies||void 0!==a.listenerId&&"number"!==typeof a.listenerId||void 0!==a.addtlConsent&&"string"!==typeof a.addtlConsent?2:a.cmpStatus&&"error"!==a.cmpStatus?0:3},ki=function(a,b){this.i=a;this.h=null;this.H={};this.fa=0;this.la=void 0===b?500:b;this.o=null};ka(ki,ii);
var mi=function(a){return"function"===typeof a.i.__tcfapi||null!=li(a)},pi=function(a,b){var c=setTimeout(function(){c=0;b({tcString:"tcunavailable",internalErrorState:1})},a.la);ni(a,"addEventListener",function(d){d&&oi(d)&&(d.internalErrorState=ji(d),0!=d.internalErrorState&&(d.tcString="tcunavailable"),ni(a,"removeEventListener",null,d.listenerId),c&&(clearTimeout(c),c=0,b(d)))})};
ki.prototype.addEventListener=function(a){ni(this,"addEventListener",function(b,c){var d=c?b:{};d.internalErrorState=ji(d);0!==d.internalErrorState&&(d.tcString="tcunavailable");a(d)})};ki.prototype.removeEventListener=function(a){a&&a.listenerId&&ni(this,"removeEventListener",null,a.listenerId)};
var ri=function(a,b){if(!a.purpose||!a.vendor)return!1;var c=qi(a.vendor.consents,"755");return c&&"1"===b&&a.purposeOneTreatment&&"DE"===a.publisherCC?!0:c&&qi(a.purpose.consents,b)},qi=function(a,b){return!(!a||!a[b])},ni=function(a,b,c,d){c||(c=function(){});if("function"===typeof a.i.__tcfapi){var e=a.i.__tcfapi;e(b,2,c,d)}else if(li(a)){si(a);var f=++a.fa;a.H[f]=c;if(a.h){var h={};a.h.postMessage((h.__tcfapiCall={command:b,version:2,callId:f,parameter:d},h),"*")}}else c({},!1)},li=function(a){if(a.h)return a.h;
a.h=hi(a.i,"__tcfapiLocator");return a.h},si=function(a){a.o||(a.o=function(b){try{var c,d;"string"===typeof b.data?d=JSON.parse(b.data):d=b.data;c=d.__tcfapiReturn;a.H[c.callId](c.returnValue,c.success)}catch(e){}},ei(a.i,a.o))},oi=function(a){return!1===a.gdprApplies||"error"===a.cmpStatus||"loaded"===a.cmpStatus&&("tcloaded"===a.eventStatus||"useractioncomplete"===a.eventStatus)?!0:!1};var ti={1:1,3:1,7:3,9:3,10:3};function ui(a,b){if(""===a)return b;var c=Number(a);return isNaN(c)?b:c}var vi=ui("",550),wi=ui("",500);function xi(){var a=K.tcf||{};return K.tcf=a}
var yi=function(){var a=xi();if(!a.active){a.active=!0;var b=new ki(F,3E3),c="x";"function"===typeof F.__tcfapi?c="s":mi(b)?c="i":"function"===typeof F.__cmp?c="c":hi(F,"__cmpLocator")&&(c="d");a.Ae=Ha();try{var d=!1;pi(b,function(){d=!0;a.kd=Ha()});d&&(a.kd=a.Ae)}catch(e){c="e"}a.type=c}},Ei=function(){if(zi()?!0===F.gtag_enable_tcf_support:!1!==F.gtag_enable_tcf_support){var a=xi();if(!a.active||!a.Ha){var b=new ki(F,3E3);if("function"===typeof F.__tcfapi||mi(b)){a.active=!0;a.type="p";a.Ha={};
Ai();var c=setTimeout(function(){Bi(a);Ci(a);c=null},wi);try{b.addEventListener(function(d){c&&(clearTimeout(c),c=null);if(0!==d.internalErrorState)Bi(a),Ci(a);else{var e;if(!1===d.gdprApplies)e=Di(),b.removeEventListener(d);else if("tcloaded"===d.eventStatus||"useractioncomplete"===d.eventStatus||"cmpuishown"===d.eventStatus){var f={},h;for(h in ti)if(ti.hasOwnProperty(h))if("1"===h)f["1"]=oi(d)?!1===d.gdprApplies||"tcunavailable"===d.tcString?!0:ri(d,"1"):!1;else{var k=d.purpose&&d.vendor?qi(d.purpose.legitimateInterests,
h)&&qi(d.vendor.legitimateInterests,"755"):!1,l=ri(d,h),p=ti[h];1===p?f[h]=l:2===p?f[h]=k:3===p&&(f[h]=l||k)}e=f}e&&(a.tcString=d.tcString||"tcempty",a.Ha=e,Ci(a))}})}catch(d){c&&(clearTimeout(c),c=null),Bi(a),Ci(a)}}}}};function Bi(a){a.type="e";a.tcString="tcunavailable";a.Ha=Di()}function Ai(){var a={};nd((a.ad_storage="denied",a.wait_for_update=vi,a))}var zi=function(){var a=!1;a=!0;return a};
function Di(){var a={},b;for(b in ti)ti.hasOwnProperty(b)&&(a[b]=!0);return a}function Ci(a){var b={};od((b.ad_storage=a.Ha["1"]?"granted":"denied",b))}var Fi=function(){var a=xi();if(a.active&&void 0!==a.kd)return Number(a.kd-a.Ae)},Gi=function(){var a=xi();return a.active&&a.Ha?a.tcString||"":""},Hi=function(a){if(!ti.hasOwnProperty(String(a)))return!0;var b=xi();return b.active&&b.Ha?!!b.Ha[String(a)]:!0};function Ii(a,b,c){function d(r){var t;K.reported_gclid||(K.reported_gclid={});t=K.reported_gclid;var q=f+(r?"gcu":"gcs");if(!t[q]){t[q]=!0;var u=[],v=function(A,y){y&&u.push(A+"="+encodeURIComponent(y))},w="https://www.google.com";if(id()){var z=pd(E.m);v("gcs",qd());r&&v("gcu","1");v("rnd",n);if((!f||h&&"aw.ds"!==h)&&pd(E.m)){var x=cg("_gcl_aw");v("gclaw",x.join("."))}v("url",String(F.location).split(/[?#]/)[0]);v("dclid",Ji(b,k));!z&&b&&(w="https://pagead2.googlesyndication.com")}
v("gdpr_consent",Gi());"1"===Mf(!1)._up&&v("gtm_up","1");v("gclid",Ji(b,f));v("gclsrc",h);v("gtm",di(!c));var B=w+"/pagead/landing?"+u.join("&");Wc(B)}}var e=fg(),f=e.gclid||"",h=e.gclsrc,k=e.dclid||"",l=!a&&(!f||h&&"aw.ds"!==h?!1:!0),p=id();if(l||p){var n=""+df();p?rd(function(){d();pd(E.m)||ld(function(){return d(!0)},E.m)},[E.m]):d()}}function Ji(a,b){var c=a&&!pd(E.m);return b&&c?"0":b}
var Ti=function(a){return!(void 0===a||null===a||0===(a+"").length)},Ui=function(a,b){var c;if(2===b.X)return a("ord",za(1E11,1E13)),!0;if(3===b.X)return a("ord","1"),a("num",za(1E11,1E13)),!0;if(4===b.X)return Ti(b.sessionId)&&a("ord",b.sessionId),!0;if(5===b.X)c="1";else if(6===b.X)c=b.vd;else return!1;Ti(c)&&a("qty",c);Ti(b.Xb)&&a("cost",b.Xb);Ti(b.transactionId)&&a("ord",b.transactionId);return!0},Wi=function(a,b,c){function d(x,B,A){n.hasOwnProperty(x)||(B=String(B),p.push(";"+x+"="+(A?B:Vi(B))))}
var e=a.Zc,f=a.yd,h=a.protocol;h+=f?"//"+e+".fls.doubleclick.net/activityi":"//ad.doubleclick.net/activity";var k=";",l=!pd(E.m)&&a.Fb;l&&(h="https://ade.googlesyndication.com/ddm/activity",k="/",f=!1);var p=[k,"src="+Vi(e),";type="+Vi(a.bd),";cat="+Vi(a.mb)],n=a.xg||{};Ca(n,function(x,B){p.push(";"+Vi(x)+"="+Vi(B+""))});if(Ui(d,a)){Ti(a.wc)&&d("u",a.wc);Ti(a.vc)&&d("tran",a.vc);d("gtm",di());id()&&(d("gcs",qd()),c&&d("gcu","1"));(function(x,B){B&&d(x,B)})("gdpr_consent",
Gi());"1"===Mf(!1)._up&&d("gtm_up","1");!1===a.Zf&&d("npa","1");if(a.Yc){var r=void 0===a.Fb?!0:!!a.Fb,t=tg("dc",a.Va,r);t&&t.length&&d("gcldc",t.join("."));var q=tg("aw",a.Va,r);q&&q.length&&d("gclaw",q.join("."));var u=ug(r);u&&d("gac",u);pf({prefix:a.Va,Ab:a.ug,domain:a.sg,flags:a.Uh});var v=lf[mf(a.Va)];v&&d("auiddc",v)}Ti(a.rd)&&d("prd",a.rd,!0);Ca(a.Cd,function(x,B){d(x,B)});p.push(b||"");if(Ti(a.fc)){var w=a.fc||"";l&&(w=Pe(w));d("~oref",w)}var z=h+
p.join("")+"?";f?Oc(z,a.F):Pc(z,a.F,a.D)}else I(a.D)},Vi=encodeURIComponent,Xi=function(a,b){id()?rd(function(){Wi(a,b);pd(E.m)||ld(function(){Wi(a,b,!0)},E.m)},[E.m]):Wi(a,b)};var uj=function(){var a=!0;Hi(7)&&Hi(9)&&Hi(10)||(a=!1);var b=!0;b&&!Hi(3)&&(a=!1);return a},vj=function(){var a=!0;Hi(3)||(a=!1);return a};function Pj(){var a=K;return a.gcq=a.gcq||new Qj}
var Rj=function(a,b,c){Pj().register(a,b,c)},Sj=function(a,b,c,d){Pj().push("event",[b,a],c,d)},Tj=function(a,b){Pj().push("config",[a],b)},Uj=function(a,b,c){Pj().push("get",[a,b],c)},Vj={},Wj=function(){this.status=1;this.containerConfig={};this.targetConfig={};this.i={};this.o=null;this.h=!1},Xj=function(a,b,c,d,e){this.type=a;this.o=b;this.ba=c||"";this.h=d;this.i=e},Qj=function(){this.o={};this.i={};this.h=[]},Yj=function(a,b){var c=yg(b);return a.o[c.containerId]=a.o[c.containerId]||new Wj},
Zj=function(a,b,c){if(b){var d=yg(b);if(d&&1===Yj(a,b).status){Yj(a,b).status=2;var e={};oe&&(e.timeoutId=F.setTimeout(function(){oc(38);ae()},3E3));a.push("require",[e],d.containerId);Vj[d.containerId]=Ha();if(Bg()){}else{var h="/gtag/js?id="+encodeURIComponent(d.containerId)+"&l=dataLayer&cx=c",k=("http:"!=F.location.protocol?"https:":"http:")+("//www.googletagmanager.com"+h),l=Qh(c,h)||k;Mc(l)}}}},ak=function(a,b,c,d){if(d.ba){var e=Yj(a,d.ba),f=e.o;if(f){var h=D(c),k=D(e.targetConfig[d.ba]),l=D(e.containerConfig),p=D(e.i),n=D(a.i),r=ye("gtm.uniqueEventId"),t=yg(d.ba).prefix,q=Zh(Yh(Xh(Wh(Vh(Uh(Th(h),k),l),p),n),function(){
se(r,t,"2");}),function(){se(r,t,"3");});try{se(r,t,"1");f(d.ba,b,d.o,q)}catch(u){se(r,t,"4");}}}};
Qj.prototype.register=function(a,b,c){if(3!==Yj(this,a).status){Yj(this,a).o=b;Yj(this,a).status=3;c&&(Yj(this,a).i=c);var d=yg(a),e=Vj[d.containerId];if(void 0!==e){var f=K[d.containerId].bootstrap,h=d.prefix.toUpperCase();K[d.containerId]._spx&&(h=h.toLowerCase());var k=ye("gtm.uniqueEventId"),l=h,p=Ha()-f;if(oe&&!fe[k]){k!==be&&($d(),be=k);var n=l+"."+Math.floor(f-e)+"."+Math.floor(p);ke=ke?ke+","+n:"&cl="+n}delete Vj[d.containerId]}this.flush()}};
Qj.prototype.push=function(a,b,c,d){var e=Math.floor(Ha()/1E3);Zj(this,c,b[0][E.Ea]||this.i[E.Ea]);this.h.push(new Xj(a,e,c,b,d));d||this.flush()};
Qj.prototype.flush=function(a){for(var b=this;this.h.length;){var c=this.h[0];if(c.i)c.i=!1,this.h.push(c);else switch(c.type){case "require":if(3!==Yj(this,c.ba).status&&!a)return;oe&&F.clearTimeout(c.h[0].timeoutId);break;case "set":Ca(c.h[0],function(n,r){D(Na(n,r),b.i)});break;case "config":var d=c.h[0],e=!!d[E.Ob];delete d[E.Ob];var f=Yj(this,c.ba),h=yg(c.ba),k=h.containerId===h.id;e||(k?f.containerConfig={}:f.targetConfig[c.ba]={});f.h&&e||ak(this,E.ja,d,c);f.h=!0;delete d[E.eb];k?D(d,f.containerConfig):
D(d,f.targetConfig[c.ba]);break;case "event":ak(this,c.h[1],c.h[0],c);break;case "get":}this.h.shift()}};var bk=!1,ck=[];function dk(){if(!bk){bk=!0;for(var a=0;a<ck.length;a++)I(ck[a])}}var ek=function(a){bk?I(a):ck.push(a)};var fk="HA GF GP G UA AW DC".split(" "),gk=!1,hk={},ik=!1;function jk(a,b){var c={event:a};b&&(c.eventModel=D(b),b[E.Cc]&&(c.eventCallback=b[E.Cc]),b[E.Pb]&&(c.eventTimeout=b[E.Pb]));return c}function kk(){return gk}
var nk={config:function(a){},event:function(a){var b=a[1];if(g(b)&&!(3<a.length)){var c;if(2<a.length){if(!Sa(a[2])&&
void 0!=a[2])return;c=a[2]}var d=jk(b,c);return d}},js:function(a){if(2==a.length&&a[1].getTime)return ik=!0,kk(),{event:"gtm.js","gtm.start":a[1].getTime()}},policy:function(){},set:function(a){var b;2==a.length&&Sa(a[1])?b=D(a[1]):3==a.length&&g(a[1])&&(b={},Sa(a[2])||xa(a[2])?b[a[1]]=D(a[2]):b[a[1]]=a[2]);if(b){
b._clear=!0;return b}},consent:function(a){if(3===a.length){var b=function(){kk()&&D(a[2],{subcommand:a[1]})};oc(39);var c=a[1];"default"===c?(b(),nd(a[2])):"update"===c&&(b(),od(a[2]))}}};var ok={policy:!0};var pk=function(a,b){var c=a.hide;if(c&&void 0!==c[b]&&c.end){c[b]=!1;var d=!0,e;for(e in c)if(c.hasOwnProperty(e)&&!0===c[e]){d=!1;break}d&&(c.end(),c.end=null)}},rk=function(a){var b=qk(),c=b&&b.hide;c&&c.end&&(c[a]=!0)};var Jk=function(a){if(Ik(a))return a;this.h=a};Jk.prototype.Mg=function(){return this.h};var Ik=function(a){return!a||"object"!==Qa(a)||Sa(a)?!1:"getUntrustedUpdateValue"in a};Jk.prototype.getUntrustedUpdateValue=Jk.prototype.Mg;var Kk=[],Lk=!1,Mk=function(a){return F["dataLayer"].push(a)},Nk=function(a){var b=K["dataLayer"],c=b?b.subscribers:1,d=0;return function(){++d===c&&a()}};
function Ok(a){var b=a._clear;Ca(a,function(f,h){"_clear"!==f&&(b&&Be(f,void 0),Be(f,h))});Sd||(Sd=a["gtm.start"]);var c=a.event,d=a["gtm.uniqueEventId"];if(!c)return!1;d||(d=Xd(),a["gtm.uniqueEventId"]=d,Be("gtm.uniqueEventId",d));var e=Pk(a);switch(c){case "gtm.init":oc(19),e&&oc(20)}return e}
function Pk(a){var b=a.event,c=a["gtm.uniqueEventId"],d,e=K.zones;d=e?e.checkState(Nd.C,c):Yg;return d.active?Oh(c,b,d.isAllowed,a.eventCallback,a.eventTimeout)?!0:!1:!1}
function Qk(){for(var a=!1;!Lk&&0<Kk.length;){Lk=!0;delete ve.eventModel;xe();var b=Kk.shift();if(null!=b){var c=Ik(b);if(c){var d=b;b=Ik(d)?d.getUntrustedUpdateValue():void 0;for(var e=["gtm.allowlist","gtm.blocklist","gtm.whitelist","gtm.blacklist","tagTypeBlacklist"],f=0;f<e.length;f++){var h=e[f],k=ye(h,1);if(xa(k)||Sa(k))k=D(k);we[h]=k}}try{if(va(b))try{b.call(ze)}catch(w){}else if(xa(b)){var l=
b;if(g(l[0])){var p=l[0].split("."),n=p.pop(),r=l.slice(1),t=ye(p.join("."),2);if(void 0!==t&&null!==t)try{t[n].apply(t,r)}catch(w){}}}else{var q=b;if(q&&("[object Arguments]"==Object.prototype.toString.call(q)||Object.prototype.hasOwnProperty.call(q,"callee"))){a:{var u=b;if(u.length&&g(u[0])){var v=nk[u[0]];if(v&&(!c||!ok[u[0]])){b=v(u);break a}}b=void 0}if(!b){Lk=!1;continue}}a=Ok(b)||a}}finally{c&&xe(!0)}}Lk=!1}
return!a}function Rk(){var a=Qk();try{pk(F["dataLayer"],Nd.C)}catch(b){}return a}
var Tk=function(){var a=Kc("dataLayer",[]),b=Kc("google_tag_manager",{});b=b["dataLayer"]=b["dataLayer"]||{};fh(function(){b.gtmDom||(b.gtmDom=!0,a.push({event:"gtm.dom"}))});ek(function(){b.gtmLoad||(b.gtmLoad=!0,a.push({event:"gtm.load"}))});b.subscribers=(b.subscribers||0)+1;var c=a.push;a.push=function(){var e;if(0<K.SANDBOXED_JS_SEMAPHORE){e=[];for(var f=0;f<arguments.length;f++)e[f]=new Jk(arguments[f])}else e=[].slice.call(arguments,0);var h=c.apply(a,e);Kk.push.apply(Kk,e);if(300<
this.length)for(oc(4);300<this.length;)this.shift();var k="boolean"!==typeof h||h;return Qk()&&k};var d=a.slice(0);Kk.push.apply(Kk,d);Sk()&&I(Rk)},Sk=function(){var a=!0;return a};var Uk={};Uk.Qb=new String("undefined");
var Vk=function(a){this.h=function(b){for(var c=[],d=0;d<a.length;d++)c.push(a[d]===Uk.Qb?b:a[d]);return c.join("")}};Vk.prototype.toString=function(){return this.h("undefined")};Vk.prototype.valueOf=Vk.prototype.toString;Uk.Jf=Vk;Uk.Qc={};Uk.vg=function(a){return new Vk(a)};var Wk={};Uk.xh=function(a,b){var c=Xd();Wk[c]=[a,b];return c};Uk.he=function(a){var b=a?0:1;return function(c){var d=Wk[c];if(d&&"function"===typeof d[b])d[b]();Wk[c]=void 0}};Uk.Wg=function(a){for(var b=!1,c=!1,d=2;d<a.length;d++)b=
b||8===a[d],c=c||16===a[d];return b&&c};Uk.ph=function(a){if(a===Uk.Qb)return a;var b=Xd();Uk.Qc[b]=a;return'google_tag_manager["'+Nd.C+'"].macro('+b+")"};Uk.ih=function(a,b,c){a instanceof Uk.Jf&&(a=a.h(Uk.xh(b,c)),b=ua);return{dd:a,F:b}};var Xk=function(a,b,c){function d(f,h){var k=f[h];return k}var e={event:b,"gtm.element":a,"gtm.elementClasses":d(a,"className"),"gtm.elementId":a["for"]||Sc(a,"id")||"","gtm.elementTarget":a.formTarget||d(a,"target")||""};c&&(e["gtm.triggers"]=c.join(","));e["gtm.elementUrl"]=(a.attributes&&a.attributes.formaction?a.formAction:"")||a.action||d(a,"href")||a.src||a.code||a.codebase||
"";return e},Yk=function(a){K.hasOwnProperty("autoEventsSettings")||(K.autoEventsSettings={});var b=K.autoEventsSettings;b.hasOwnProperty(a)||(b[a]={});return b[a]},Zk=function(a,b,c){Yk(a)[b]=c},$k=function(a,b,c,d){var e=Yk(a),f=Ia(e,b,d);e[b]=c(f)},al=function(a,b,c){var d=Yk(a);return Ia(d,b,c)};var bl=["input","select","textarea"],cl=["button","hidden","image","reset","submit"],dl=function(a){var b=a.tagName.toLowerCase();return!ya(bl,function(c){return c===b})||"input"===b&&ya(cl,function(c){return c===a.type.toLowerCase()})?!1:!0},el=function(a){return a.form?a.form.tagName?a.form:H.getElementById(a.form):Vc(a,["form"],100)},fl=function(a,b,c){if(!a.elements)return 0;for(var d=b.getAttribute(c),e=0,f=1;e<a.elements.length;e++){var h=a.elements[e];if(dl(h)){if(h.getAttribute(c)===d)return f;
f++}}return 0};var gl=!!F.MutationObserver,hl=void 0,il=function(a){if(!hl){var b=function(){var c=H.body;if(c)if(gl)(new MutationObserver(function(){for(var e=0;e<hl.length;e++)I(hl[e])})).observe(c,{childList:!0,subtree:!0});else{var d=!1;Qc(c,"DOMNodeInserted",function(){d||(d=!0,I(function(){d=!1;for(var e=0;e<hl.length;e++)I(hl[e])}))})}};hl=[];H.body?b():I(b)}hl.push(a)};var Dl=F.clearTimeout,El=F.setTimeout,V=function(a,b,c){if(Bg()){b&&I(b)}else return Mc(a,b,c)},Fl=function(){return new Date},Gl=function(){return F.location.href},Hl=function(a){return Me(Oe(a),"fragment")},Il=function(a){return Ne(Oe(a))},Jl=function(a,b){return ye(a,b||2)},Kl=function(a,b,c){var d;b?(a.eventCallback=b,c&&(a.eventTimeout=c),d=Mk(a)):d=Mk(a);return d},Ll=function(a,b){F[a]=b},W=function(a,b,c){b&&
(void 0===F[a]||c&&!F[a])&&(F[a]=b);return F[a]},Ml=function(a,b,c){return Se(a,b,void 0===c?!0:!!c)},Nl=function(a,b,c){return 0===af(a,b,c)},Ol=function(a,b){if(Bg()){b&&I(b)}else Oc(a,b)},Pl=function(a){return!!al(a,"init",!1)},Ql=function(a){Zk(a,"init",!0)},Rl=function(a,b){var c=(void 0===b?0:b)?"www.googletagmanager.com/gtag/js":Rd;c+="?id="+encodeURIComponent(a)+"&l=dataLayer";V(Q("https://","http://",c))},Sl=function(a,
b){var c=a[b];return c};
var Tl=Uk.ih;function pm(a,b){a=String(a);b=String(b);var c=a.length-b.length;return 0<=c&&a.indexOf(b,c)==c}var qm=new Aa;function rm(a,b){function c(h){var k=Oe(h),l=Me(k,"protocol"),p=Me(k,"host",!0),n=Me(k,"port"),r=Me(k,"path").toLowerCase().replace(/\/$/,"");if(void 0===l||"http"==l&&"80"==n||"https"==l&&"443"==n)l="web",n="default";return[l,p,n,r]}for(var d=c(String(a)),e=c(String(b)),f=0;f<d.length;f++)if(d[f]!==e[f])return!1;return!0}
function sm(a){return tm(a)?1:0}
function tm(a){var b=a.arg0,c=a.arg1;if(a.any_of&&xa(c)){for(var d=0;d<c.length;d++)if(sm({"function":a["function"],arg0:b,arg1:c[d]}))return!0;return!1}switch(a["function"]){case "_cn":return 0<=String(b).indexOf(String(c));case "_css":var e;a:{if(b){var f=["matches","webkitMatchesSelector","mozMatchesSelector","msMatchesSelector","oMatchesSelector"];try{for(var h=0;h<f.length;h++)if(b[f[h]]){e=b[f[h]](c);break a}}catch(t){}}e=!1}return e;case "_ew":return pm(b,c);case "_eq":return String(b)==String(c);
case "_ge":return Number(b)>=Number(c);case "_gt":return Number(b)>Number(c);case "_lc":var k;k=String(b).split(",");return 0<=m(k,String(c));case "_le":return Number(b)<=Number(c);case "_lt":return Number(b)<Number(c);case "_re":var l;var p=a.ignore_case?"i":void 0;try{var n=String(c)+p,r=qm.get(n);r||(r=new RegExp(c,p),qm.set(n,r));l=r.test(b)}catch(t){l=!1}return l;case "_sw":return 0==String(b).indexOf(String(c));case "_um":return rm(b,c)}return!1};var um={},vm=encodeURI,X=encodeURIComponent,wm=Pc;var xm=function(a,b){if(!a)return!1;var c=Me(Oe(a),"host");if(!c)return!1;for(var d=0;b&&d<b.length;d++){var e=b[d]&&b[d].toLowerCase();if(e){var f=c.length-e.length;0<f&&"."!=e.charAt(0)&&(f--,e="."+e);if(0<=f&&c.indexOf(e,f)==f)return!0}}return!1};
var ym=function(a,b,c){for(var d={},e=!1,f=0;a&&f<a.length;f++)a[f]&&a[f].hasOwnProperty(b)&&a[f].hasOwnProperty(c)&&(d[a[f][b]]=a[f][c],e=!0);return e?d:null};um.Xg=function(){var a=!1;return a};function Yn(){return F.gaGlobal=F.gaGlobal||{}}var Zn=function(){var a=Yn();a.hid=a.hid||za();return a.hid},$n=function(a,b){var c=Yn();if(void 0==c.vid||b&&!c.from_cookie)c.vid=a,c.from_cookie=b};var jo=window,ko=document,lo=function(a){var b=jo._gaUserPrefs;if(b&&b.ioo&&b.ioo()||a&&!0===jo["ga-disable-"+a])return!0;try{var c=jo.external;if(c&&c._gaUserPrefs&&"oo"==c._gaUserPrefs)return!0}catch(f){}for(var d=Qe("AMP_TOKEN",String(ko.cookie),!0),e=0;e<d.length;e++)if("$OPT_OUT"==d[e])return!0;return ko.getElementById("__gaOptOutExtension")?!0:!1};
function oo(a){delete a.eventModel[E.eb];qo(a.eventModel)}var qo=function(a){Ca(a,function(c){"_"===c.charAt(0)&&delete a[c]});var b=a[E.na]||{};Ca(b,function(c){"_"===c.charAt(0)&&delete b[c]})};var to=function(a,b,c){Sj(b,c,a)},uo=function(a,b,c){Sj(b,c,a,!0)},wo=function(a,b){};
function vo(a,b){}var Z={a:{}};

Z.a.jsm=["customScripts"],function(){(function(a){Z.__jsm=a;Z.__jsm.b="jsm";Z.__jsm.g=!0;Z.__jsm.priorityOverride=0})(function(a){if(void 0!==a.vtp_javascript){var b=a.vtp_javascript;try{var c=W("google_tag_manager");return c&&c.e&&c.e(b)}catch(d){}}})}();
Z.a.flc=[],function(){function a(b,c){c=c?c.slice(0,-1):void 0;Xi(b,c)}(function(b){Z.__flc=b;Z.__flc.b="flc";Z.__flc.g=!0;Z.__flc.priorityOverride=0})(function(b){var c=!b.hasOwnProperty("vtp_enableConversionLinker")||b.vtp_enableConversionLinker,d=ym(b.vtp_customVariable||[],"key","value")||{},e={mb:b.vtp_activityTag,Yc:c,Va:b.vtp_conversionCookiePrefix||void 0,Xb:void 0,X:{UNIQUE:3,SESSION:4}[b.vtp_ordinalType]||2,Zc:b.vtp_advertiserId,bd:b.vtp_groupTag,D:b.vtp_gtmOnFailure,F:b.vtp_gtmOnSuccess,
fc:b.vtp_useImageTag?void 0:b.vtp_url,protocol:"",vd:void 0,yd:!b.vtp_useImageTag,sessionId:b.vtp_sessionId,vc:b.vtp_transactionVariable,transactionId:void 0,wc:b.vtp_userVariable,Cd:d},f=!pd(E.m)&&void 0!=Jl(E.P)&&!1!==Jl(E.P);e.Fb=f;if(b.vtp_enableAttribution){var h=b.vtp_attributionFields||[];if(h.length){V("//www.gstatic.com/attribution/collection/attributiontools.js",function(){a(e,W("google_attr").build([ym(h,"key","value")||{}]))},b.vtp_gtmOnFailure);return}}a(e)})}();

Z.a.sp=["google"],function(){(function(a){Z.__sp=a;Z.__sp.b="sp";Z.__sp.g=!0;Z.__sp.priorityOverride=0})(function(a){var b=-1==navigator.userAgent.toLowerCase().indexOf("firefox")?"//www.googleadservices.com/pagead/conversion_async.js":"https://www.google.com/pagead/conversion_async.js",c=a.vtp_gtmOnFailure,d=function(){var f=W("google_trackConversion");if(va(f)){var h={};"DATA_LAYER"==a.vtp_customParamsFormat?h=a.vtp_dataLayerVariable:"USER_SPECIFIED"==a.vtp_customParamsFormat&&(h=ym(a.vtp_customParams,
"key","value"));var k={};a.vtp_enableDynamicRemarketing&&(a.vtp_eventName&&(h.event=a.vtp_eventName),a.vtp_eventValue&&(k.value=a.vtp_eventValue),a.vtp_eventItems&&(k.items=a.vtp_eventItems));var l={google_conversion_id:a.vtp_conversionId,google_conversion_label:a.vtp_conversionLabel,google_custom_params:h,google_gtag_event_data:k,google_remarketing_only:!0,onload_callback:a.vtp_gtmOnSuccess,google_gtm:di()};a.vtp_rdp&&(l.google_restricted_data_processing=!0);a.vtp_userId&&(l.google_user_id=a.vtp_userId);
var p=Gi();(l.google_additional_params=l.google_additional_params||{}).gdpr_consent=p;f(l)||c()}else c()},e=function(){V(b,d,c)};id()?rd(function(){pd(E.m)?e():ld(e,E.m)},[E.m]):(oh(),e())})}();Z.a.c=["google"],function(){(function(a){Z.__c=a;Z.__c.b="c";Z.__c.g=!0;Z.__c.priorityOverride=0})(function(a){return a.vtp_value})}();
Z.a.e=["google"],function(){(function(a){Z.__e=a;Z.__e.b="e";Z.__e.g=!0;Z.__e.priorityOverride=0})(function(a){return String(Ee(a.vtp_gtmEventId,"event"))})}();
Z.a.f=["google"],function(){(function(a){Z.__f=a;Z.__f.b="f";Z.__f.g=!0;Z.__f.priorityOverride=0})(function(a){var b=Jl("gtm.referrer",1)||H.referrer;return b?a.vtp_component&&"URL"!=a.vtp_component?Me(Oe(String(b)),a.vtp_component,a.vtp_stripWww,a.vtp_defaultPages,a.vtp_queryKey):Il(String(b)):String(b)})}();Z.a.k=["google"],function(){(function(a){Z.__k=a;Z.__k.b="k";Z.__k.g=!0;Z.__k.priorityOverride=0})(function(a){return Ml(a.vtp_name,Jl("gtm.cookie",1),!!a.vtp_decodeCookie)[0]})}();
Z.a.r=["google"],function(){(function(a){Z.__r=a;Z.__r.b="r";Z.__r.g=!0;Z.__r.priorityOverride=0})(function(a){return za(a.vtp_min,a.vtp_max)})}();
Z.a.u=["google"],function(){var a=function(b){return{toString:function(){return b}}};(function(b){Z.__u=b;Z.__u.b="u";Z.__u.g=!0;Z.__u.priorityOverride=0})(function(b){var c;b.vtp_customUrlSource?c=b.vtp_customUrlSource:c=Jl("gtm.url",1);c=c||Gl();var d=b[a("vtp_component")];if(!d||"URL"==d)return Il(String(c));var e=Oe(String(c)),f;if("QUERY"===d)a:{var h=b[a("vtp_multiQueryKeys").toString()],k=b[a("vtp_queryKey").toString()]||"",l=b[a("vtp_ignoreEmptyQueryParam").toString()],p;h?xa(k)?p=k:p=String(k).replace(/\s+/g,
"").split(","):p=[String(k)];for(var n=0;n<p.length;n++){var r=Me(e,"QUERY",void 0,void 0,p[n]);if(void 0!=r&&(!l||""!==r)){f=r;break a}}f=void 0}else f=Me(e,d,"HOST"==d?b[a("vtp_stripWww")]:void 0,"PATH"==d?b[a("vtp_defaultPages")]:void 0,void 0);return f})}();
Z.a.v=["google"],function(){(function(a){Z.__v=a;Z.__v.b="v";Z.__v.g=!0;Z.__v.priorityOverride=0})(function(a){var b=a.vtp_name;if(!b||!b.replace)return!1;var c=Jl(b.replace(/\\\./g,"."),a.vtp_dataLayerVersion||1);return void 0!==c?c:a.vtp_defaultValue})}();
Z.a.ua=["google"],function(){function a(n,r){if(id()&&!d[n]){var t=function(){var q=th(),u="gtm"+Xd(),v=l(r),w={name:u};k(v,w,!0);q("create",n,w);q(function(){q.remove(u)})};ld(t,E.J);ld(t,E.m);d[n]=!0}}var b,c={},d={},e=function(n){rd(function(){p(n)},[E.J,E.m])},f={name:!0,clientId:!0,sampleRate:!0,siteSpeedSampleRate:!0,alwaysSendReferrer:!0,allowAnchor:!0,allowLinker:!0,cookieName:!0,cookieDomain:!0,cookieExpires:!0,cookiePath:!0,cookieUpdate:!0,cookieFlags:!0,legacyCookieDomain:!0,legacyHistoryImport:!0,
storage:!0,useAmpClientId:!0,storeGac:!0,_cd2l:!0},h={allowAnchor:!0,allowLinker:!0,alwaysSendReferrer:!0,anonymizeIp:!0,cookieUpdate:!0,exFatal:!0,forceSSL:!0,javaEnabled:!0,legacyHistoryImport:!0,nonInteraction:!0,useAmpClientId:!0,useBeacon:!0,storeGac:!0,allowAdFeatures:!0,allowAdPersonalizationSignals:!0,_cd2l:!0},k=function(n,r,t){var q=0;if(n)for(var u in n)if(n.hasOwnProperty(u)&&(t&&f[u]||!t&&void 0===f[u])){var v=h[u]?Ea(n[u]):n[u];"anonymizeIp"!=u||v||(v=void 0);r[u]=v;q++}return q},l=
function(n){var r={};n.vtp_gaSettings&&D(ym(n.vtp_gaSettings.vtp_fieldsToSet,"fieldName","value"),r);D(ym(n.vtp_fieldsToSet,"fieldName","value"),r);pd(E.J)||(r.storage="none");pd(E.m)||(r.allowAdFeatures=!1,r.storeGac=!1);uj()||(r.allowAdFeatures=!1);vj()||(r.allowAdPersonalizationSignals=!1);n.vtp_transportUrl&&(r._x_19=n.vtp_transportUrl);return r},p=function(n){function r(la,
S){void 0!==S&&C("set",la,S)}var t={},q={},u={},v={};if(n.vtp_gaSettings){var w=n.vtp_gaSettings;D(ym(w.vtp_contentGroup,"index","group"),q);D(ym(w.vtp_dimension,"index","dimension"),u);D(ym(w.vtp_metric,"index","metric"),v);var z=D(w);z.vtp_fieldsToSet=void 0;z.vtp_contentGroup=void 0;z.vtp_dimension=void 0;z.vtp_metric=void 0;n=D(n,z)}D(ym(n.vtp_contentGroup,"index","group"),q);D(ym(n.vtp_dimension,"index","dimension"),u);D(ym(n.vtp_metric,"index","metric"),v);var x=l(n),B=vh(n.vtp_functionName);
if(va(B)){var A="",y="";n.vtp_setTrackerName&&"string"==typeof n.vtp_trackerName?""!==n.vtp_trackerName&&(y=n.vtp_trackerName,A=y+"."):(y="gtm"+Xd(),A=y+".");var C=function(la){var S=[].slice.call(arguments,0);S[0]=A+S[0];B.apply(window,S)},G=function(la,S){return void 0===S?S:la(S)},L=function(la,S){if(S)for(var nb in S)S.hasOwnProperty(nb)&&C("set",la+nb,S[nb])},P=function(){var la=function(Ao,Fk,Bo){if(!Sa(Fk))return!1;for(var wd=
Ia(Object(Fk),Bo,[]),Pg=0;wd&&Pg<wd.length;Pg++)C(Ao,wd[Pg]);return!!wd&&0<wd.length},S;if(n.vtp_useEcommerceDataLayer){var nb=!1;nb||(S=Jl("ecommerce",1))}else n.vtp_ecommerceMacroData&&(S=n.vtp_ecommerceMacroData.ecommerce);if(!Sa(S))return;S=Object(S);var xd=Ia(x,"currencyCode",S.currencyCode);void 0!==xd&&C("set","&cu",xd);la("ec:addImpression",
S,"impressions");if(la("ec:addPromo",S[S.promoClick?"promoClick":"promoView"],"promotions")&&S.promoClick){C("ec:setAction","promo_click",S.promoClick.actionField);return}for(var gc="detail checkout checkout_option click add remove purchase refund".split(" "),hc="refund purchase remove checkout checkout_option add click detail".split(" "),db=0;db<gc.length;db++){var ob=S[gc[db]];if(ob){la("ec:addProduct",ob,"products");C("ec:setAction",gc[db],ob.actionField);if(oe)for(var Db=0;Db<hc.length;Db++){var Hc=
S[hc[Db]];if(Hc){Hc!==ob&&oc(13);break}}break}}},U={name:y};k(x,U,!0);var O=n.vtp_trackingId||t.trackingId;B("create",O,U);C("set","&gtm",di(!0));id()&&(C("set","&gcs",qd()),a(O,n));x._x_19&&(null==Jc&&delete x._x_19,x._x_20&&!c[y]&&(c[y]=!0,B(zh(y,String(x._x_20)))));n.vtp_enableRecaptcha&&
C("require","recaptcha","recaptcha.js");(function(la,S){void 0!==n[S]&&C("set",la,n[S])})("nonInteraction","vtp_nonInteraction");L("contentGroup",q);L("dimension",u);L("metric",v);var ta={};k(x,ta,!1)&&C("set",ta);var Y;n.vtp_enableLinkId&&C("require","linkid","linkid.js");C("set","hitCallback",function(){var la=x&&x.hitCallback;
va(la)&&la();n.vtp_gtmOnSuccess()});if("TRACK_EVENT"==n.vtp_trackType){n.vtp_enableEcommerce&&(C("require","ec","ec.js"),P());var N={hitType:"event",eventCategory:String(n.vtp_eventCategory||t.category),eventAction:String(n.vtp_eventAction||t.action),eventLabel:G(String,n.vtp_eventLabel||t.label),eventValue:G(Da,n.vtp_eventValue||t.value)};k(Y,N,!1);C("send",N);}else if("TRACK_SOCIAL"==
n.vtp_trackType){var J={hitType:"social",socialNetwork:String(n.vtp_socialNetwork),socialAction:String(n.vtp_socialAction),socialTarget:String(n.vtp_socialActionTarget)};k(Y,J,!1);C("send",J);}else if("TRACK_TRANSACTION"==n.vtp_trackType){}else if("TRACK_TIMING"==n.vtp_trackType){}else if("DECORATE_LINK"==n.vtp_trackType){}else if("DECORATE_FORM"==n.vtp_trackType){}else if("TRACK_DATA"==n.vtp_trackType){}else{n.vtp_enableEcommerce&&(C("require","ec","ec.js"),P());if(n.vtp_doubleClick||"DISPLAY_FEATURES"==n.vtp_advertisingFeaturesType){var ja="_dc_gtm_"+String(n.vtp_trackingId).replace(/[^A-Za-z0-9-]/g,
"");C("require","displayfeatures",void 0,{cookieName:ja})}if("DISPLAY_FEATURES_WITH_REMARKETING_LISTS"==n.vtp_advertisingFeaturesType){var fc="_dc_gtm_"+String(n.vtp_trackingId).replace(/[^A-Za-z0-9-]/g,"");C("require","adfeatures",{cookieName:fc})}Y?C("send","pageview",Y):C("send","pageview");n.vtp_autoLinkDomains&&wh(A,n.vtp_autoLinkDomains,!!n.vtp_useHashAutoLink,!!n.vtp_decorateFormsAutoLink);}if(!b){var Cb=
n.vtp_useDebugVersion?"u/analytics_debug.js":"analytics.js";n.vtp_useInternalVersion&&!n.vtp_useDebugVersion&&(Cb="internal/"+Cb);b=!0;var vd=Qh(x._x_19,"/analytics.js"),De=Q("https:","http:","//www.google-analytics.com/"+Cb,x&&!!x.forceSSL);V("analytics.js"===Cb&&vd?vd:De,function(){var la=th();la&&la.loaded||n.vtp_gtmOnFailure();},n.vtp_gtmOnFailure)}}else I(n.vtp_gtmOnFailure)};Z.__ua=e;Z.__ua.b="ua";Z.__ua.g=!0;Z.__ua.priorityOverride=0}();







Z.a.hl=["google"],function(){function a(f){return f.target&&f.target.location&&f.target.location.href?f.target.location.href:Gl()}function b(f,h){Qc(f,"hashchange",function(k){var l=a(k);h({source:"hashchange",state:null,url:Il(l),R:Hl(l)})})}function c(f,h){Qc(f,"popstate",function(k){var l=a(k);h({source:"popstate",state:k.state,url:Il(l),R:Hl(l)})})}function d(f,h,k){var l=h.history,p=l[f];if(va(p))try{l[f]=function(n,r,t){p.apply(l,[].slice.call(arguments,0));k({source:f,state:n,url:Il(Gl()),
R:Hl(Gl())})}}catch(n){}}function e(){var f={source:null,state:W("history").state||null,url:Il(Gl()),R:Hl(Gl())};return function(h){var k=f,l={};l[k.source]=!0;l[h.source]=!0;if(!l.popstate||!l.hashchange||k.R!=h.R){var p={event:"gtm.historyChange","gtm.historyChangeSource":h.source,"gtm.oldUrlFragment":f.R,"gtm.newUrlFragment":h.R,"gtm.oldHistoryState":f.state,"gtm.newHistoryState":h.state,"gtm.oldUrl":f.url,"gtm.newUrl":h.url};f=h;Kl(p)}}}(function(f){Z.__hl=f;Z.__hl.b="hl";Z.__hl.g=!0;Z.__hl.priorityOverride=
0})(function(f){var h=W("self");if(!Pl("hl")){var k=e();b(h,k);c(h,k);d("pushState",h,k);d("replaceState",h,k);Ql("hl")}I(f.vtp_gtmOnSuccess)})}();Z.a.smm=["google"],function(){(function(a){Z.__smm=a;Z.__smm.b="smm";Z.__smm.g=!0;Z.__smm.priorityOverride=0})(function(a){var b=a.vtp_input,c=ym(a.vtp_map,"key","value")||{};return c.hasOwnProperty(b)?c[b]:a.vtp_defaultValue})}();





Z.a.html=["customScripts"],function(){function a(d,e,f,h){return function(){try{if(0<e.length){var k=e.shift(),l=a(d,e,f,h);if("SCRIPT"==String(k.nodeName).toUpperCase()&&"text/gtmscript"==k.type){var p=H.createElement("script");p.async=!1;p.type="text/javascript";p.id=k.id;p.text=k.text||k.textContent||k.innerHTML||"";k.charset&&(p.charset=k.charset);var n=k.getAttribute("data-gtmsrc");n&&(p.src=n,Lc(p,l));d.insertBefore(p,null);n||l()}else if(k.innerHTML&&0<=k.innerHTML.toLowerCase().indexOf("<script")){for(var r=
[];k.firstChild;)r.push(k.removeChild(k.firstChild));d.insertBefore(k,null);a(k,r,l,h)()}else d.insertBefore(k,null),l()}else f()}catch(t){I(h)}}}var c=function(d){if(H.body){var e=
d.vtp_gtmOnFailure,f=Tl(d.vtp_html,d.vtp_gtmOnSuccess,e),h=f.dd,k=f.F;if(d.vtp_useIframe){}else d.vtp_supportDocumentWrite?b(h,k,e):a(H.body,Uc(h),k,e)()}else El(function(){c(d)},
200)};Z.__html=c;Z.__html.b="html";Z.__html.g=!0;Z.__html.priorityOverride=0}();






Z.a.lcl=[],function(){function a(){var c=W("document"),d=0,e=function(f){var h=f.target;if(h&&3!==f.which&&!(f.Vg||f.timeStamp&&f.timeStamp===d)){d=f.timeStamp;h=Vc(h,["a","area"],100);if(!h)return f.returnValue;var k=f.defaultPrevented||!1===f.returnValue,l=al("lcl",k?"nv.mwt":"mwt",0),p;p=k?al("lcl","nv.ids",[]):al("lcl","ids",[]);if(p.length){var n=Xk(h,"gtm.linkClick",p);if(b(f,h,c)&&!k&&l&&h.href){var r=String(Sl(h,"rel")||""),t=!!ya(r.split(" "),function(v){return"noreferrer"===v.toLowerCase()});
t&&oc(36);var q=W((Sl(h,"target")||"_self").substring(1)),u=!0;if(Kl(n,Nk(function(){var v;if(v=u&&q){var w;a:if(t){var z;try{z=new MouseEvent(f.type)}catch(x){if(!c.createEvent){w=!1;break a}z=c.createEvent("MouseEvents");z.initEvent(f.type,!0,!0)}z.Vg=!0;f.target.dispatchEvent(z);w=!0}else w=!1;v=!w}v&&(q.location.href=Sl(h,"href"))}),l))u=!1;else return f.preventDefault&&f.preventDefault(),f.returnValue=!1}else Kl(n,function(){},l||2E3);return!0}}};Qc(c,"click",e,!1);Qc(c,"auxclick",e,!1)}function b(c,
d,e){if(2===c.which||c.ctrlKey||c.shiftKey||c.altKey||c.metaKey)return!1;var f=Sl(d,"href"),h=f.indexOf("#"),k=Sl(d,"target");if(k&&"_self"!==k&&"_parent"!==k&&"_top"!==k||0===h)return!1;if(0<h){var l=Il(f),p=Il(e.location);return l!==p}return!0}(function(c){Z.__lcl=c;Z.__lcl.b="lcl";Z.__lcl.g=!0;Z.__lcl.priorityOverride=0})(function(c){var d=void 0===c.vtp_waitForTags?!0:c.vtp_waitForTags,e=void 0===c.vtp_checkValidation?!0:c.vtp_checkValidation,f=Number(c.vtp_waitForTagsTimeout);if(!f||0>=f)f=2E3;
var h=c.vtp_uniqueTriggerId||"0";if(d){var k=function(p){return Math.max(f,p)};$k("lcl","mwt",k,0);e||$k("lcl","nv.mwt",k,0)}var l=function(p){p.push(h);return p};$k("lcl","ids",l,[]);e||$k("lcl","nv.ids",l,[]);Pl("lcl")||(a(),Ql("lcl"));I(c.vtp_gtmOnSuccess)})}();


var xo={};xo.macro=function(a){if(Uk.Qc.hasOwnProperty(a))return Uk.Qc[a]},xo.onHtmlSuccess=Uk.he(!0),xo.onHtmlFailure=Uk.he(!1);xo.dataLayer=ze;xo.callback=function(a){Vd.hasOwnProperty(a)&&va(Vd[a])&&Vd[a]();delete Vd[a]};function yo(){K[Nd.C]=xo;Ka(Wd,Z.a);zb=zb||Uk;Ab=Nb}
function zo(){Yc.gtm_3pds=!0;Yc.gtag_cs_api=!0;K=F.google_tag_manager=F.google_tag_manager||{};var a=!1;Ei(),a=!0;if(K[Nd.C]){var b=K.zones;b&&b.unregisterChild(Nd.C);}else{for(var c=data.resource||{},d=c.macros||[],e=0;e<d.length;e++)sb.push(d[e]);for(var f=c.tags||[],h=0;h<f.length;h++)vb.push(f[h]);for(var k=c.predicates||[],l=0;l<k.length;l++)ub.push(k[l]);for(var p=c.rules||[],n=0;n<p.length;n++){for(var r=p[n],t={},q=0;q<r.length;q++)t[r[q][0]]=Array.prototype.slice.call(r[q],1);tb.push(t)}xb=Z;yb=sm;yo();Tk();ah=!1;bh=0;if("interactive"==H.readyState&&!H.createEventObject||"complete"==H.readyState)dh();
else{Qc(H,"DOMContentLoaded",dh);Qc(H,"readystatechange",dh);if(H.createEventObject&&H.documentElement.doScroll){var u=!0;try{u=!F.frameElement}catch(x){}u&&eh()}Qc(F,"load",dh)}bk=!1;"complete"===H.readyState?dk():Qc(F,"load",dk);a:{if(!oe)break a;F.setInterval(pe,
864E5);}Td=(new Date).getTime();}}
(function(a){a()})(zo);

})()
