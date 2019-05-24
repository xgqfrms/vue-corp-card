"use strict";

/**
 *
 * @author xgqfrms
 * @license MIT
 * @copyright xgqfrms
 *
 * @description PxtoRem & auto set root font-size responsively according to Devices width
 * @augments
 * @example
 * @link
 * @created 2019-05-23
 *
 */

const PxtoRem = () => {
    console.log(`333`);
    (function(doc, win) {
        console.log(`666`);
        let docEl = doc.documentElement;
        let resizeEvt = ("orientationchange" in window) ? "orientationchange" : "resize";
        let recalc = function() {
            let clientWidth = docEl.clientWidth;
            if (!clientWidth) return;
            // default 16px = 1rem; => 1px = 1/16rem (0.0625rem);
            docEl.style.fontSize = 100 * (clientWidth / 750) + "px";
            // 750px PS & customized 100px = 1rem; => 1px = 1/100rem(0.01rem);
        };
        if (!doc.addEventListener) {
            return;
        }
        win.addEventListener(resizeEvt, recalc, false);
        doc.addEventListener("DOMContentLoaded", recalc, false);
    })(document, window);
    console.log(`999`);
};



export default PxtoRem;

export {
    PxtoRem,
};

