"use strict";

/**
 *
 * @author xgqfrms
 * @license MIT
 * @copyright xgqfrms
 * @created 2019-05-23
 *
 * @description index.js
 * @augments
 * @example
 *
 */

import CorpCard from "./corp-card.vue";

export default {
    install(Vue, options) {
        Vue.component("crop-card", CorpCard);
    }
};
