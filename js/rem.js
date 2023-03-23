function setRem(designWidth) {
    var args = typeof(designWidth) === "undefined" ? 750 : designWidth,
        doc = document,
        docEl = doc.documentElement,
        resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
        rem = null,
        tid = null,
        clientWidth = null,
        recalc = function() {
            clientWidth = docEl.clientWidth;
            rem = clientWidth * 30 / args;

            $('html').css('font-size', rem);
        };
    recalc();
    window.addEventListener(resizeEvt, recalc, false);
    window.addEventListener("pageshow", function(e) {
        if (e.persisted) { // 浏览器后退的时候重新计算
            clearTimeout(tid);
            tid = setTimeout(recalc, 300);
        }
    }, false);
}

setRem();