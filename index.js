function isMobile(){
    var browser = {
        versions: function() {
            var u = navigator.userAgent,
                app = navigator.appVersion;
            return { //移动终端浏览器版本信息
                trident: u.indexOf('Trident') > -1, //IE内核
                presto: u.indexOf('Presto') > -1, //opera内核
                webKit: u.indexOf('AppleWebKit') > -1, //苹果、谷歌内核
                gecko: u.indexOf('Gecko') > -1 && u.indexOf('KHTML') == -1, //火狐内核
                mobile: !!u.match(/AppleWebKit.*Mobile.*/), //是否为移动终端
                ios: !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/), //ios终端
                android: u.indexOf('Android') > -1 || u.indexOf('Linux') > -1, //android终端或者uc浏览器
                iPhone: u.indexOf('iPhone') > -1, //是否为iPhone或者QQHD浏览器
                iPad: u.indexOf('iPad') > -1, //是否iPad
                webApp: u.indexOf('Safari') == -1 //是否web应该程序，没有头部与底部
            };
        }(),
        language: (navigator.browserLanguage || navigator.language).toLowerCase()
    }

    if (browser.versions.mobile || browser.versions.ios || browser.versions.android ||
        browser.versions.iPhone || browser.versions.iPad) {

        return true;
    } else {
        return false;
    }
}

var env = {
    isInXiami: navigator.userAgent.match(/(AliApp)\((XM)\/([0-9.]+)\)*/),
    isInApp: navigator.userAgent.match(/(AliApp)\((AENT)\/([0-9.]+)\)*/),
    isAndroid: navigator.userAgent.match(/(Android);?[\s\/]+([\d.]+)?/),
    isIOS: navigator.userAgent.match(/(iPhone\sOS)\s([\d_]+)/),
    isInWechat: navigator.userAgent.match(/.*?(MicroMessenger\/([0-9.]+))\s*/),
    isInWeibo: navigator.userAgent.match(/.*?(Weibo\_\_([0-9.]+))\s*/),
    isDingTalk: navigator.userAgent.match(/(AliApp)\((DingTalk)\/([0-9.]+)\)*/),
    isMobile:isMobile
}

module.exports = env;