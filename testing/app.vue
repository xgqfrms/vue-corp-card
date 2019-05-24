<template>
    <div class="search-container">
        <div class="search-tabs-container">
           <div>
                <!-- error -->
                <CorpCard
                    corpObj=""
                />
                <!-- OK -->
                <CorpCard
                    :corpObj="corpObj"
                />
                <CorpCard
                    :corpObj="corpObj2"
                />
            </div>
        </div>
    </div>
</template>

<script>
    // "use strict";
    /**
     *
     * @author xgqfrms
     * @license MIT
     * @copyright xgqfrms
     *
     * @description CorpCard demo
     * @augments
     * @example
     * @link
     *
     */

    import defaultImage from "./imgs/default.png";
    import * as CorpCard from "../src/corp-card";
    export default {
        name: "app",
        props: [
            "appObj",
        ],
        components:{
            CorpCard,
        },
        data() {
            return {
                corpObj: {
                    corpId: "123456789",
                    corpName: "DD",
                    corpNameOther: "(中国) 信息技术有限公司",
                    corpOwner: "xiao ma",
                    corpMoney: "￥ 1,234,567, 890",
                    corpLogo: "",
                    corpShowHotFire: false,
                },
                corpObj2: {
                    corpId: "111222333",
                    corpName: "Alibaba",
                    corpNameOther: "(中国) 信息技术有限公司",
                    corpOwner: "Jack Ma",
                    corpMoney: "$ 1, 000, 000, 000",
                    corpLogo: defaultImage,
                    corpShowHotFire: true,
                },
                defaultImage: defaultImage,
            };
        },
        methods: {
            AutoSkipToSearchPage() {
                let url = window.location.origin;
                let hash = `search`;
            },
            getHighlightOthers(name = ``, type = `prefix`) {
                let result = ``;
                let key = this.input;
                key = key.trim().toLocaleUpperCase();
                let prefix = 0;
                let suffix = 0;
                if (name && name.length) {
                    if (name && name.length) {
                        if (type === `prefix`) {
                            prefix = name.toLocaleUpperCase().indexOf(key);
                            if(prefix >= 0) {
                                result = name.substr(0, prefix);
                            }
                        } else {
                            suffix = name.toLocaleUpperCase().lastIndexOf(key);
                            if(suffix >= 0) {
                                result = name.substr(suffix + key.length);
                            } else {
                                result = name;
                            }
                        }
                    }
                }
                return result;
            },
            getHighlightKeyword(name = ``) {
                // null
                let result = ``;
                let key = this.input || "";
                key = key.trim().toLocaleUpperCase();
                let prefix = 0;
                if (name && name.length) {
                    prefix = name.toLocaleUpperCase().indexOf(key);
                    if(prefix >= 0) {
                        result = name.substr(prefix, key.length);
                    }
                }
                return result;
            },
            init() {
                //init
            },
        },
        mounted() {
            this.init();
        },
        created() {
            try {
                if (this.appObj) {
                    // let {
                    //     corpId,
                    //     corpName,
                    //     corpNameOther,
                    //     corpOwner,
                    //     corpMoney,
                    //     corpLogo,
                    //     corpShowHotFire,
                    // } = this.appObj;
                    this.corpObj = this.appObj;
                    this.corpObj2 = this.appObj;
                } else {
                    throw new Error(`app 的 appObj 属性不可为空!`);
                }
            } catch (err) {
                console.error(`app 使用错误: \n`, err);
            }
        },
    };
</script>

<style lang="css">

.search-container {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
}
.search-tabs-container{
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    width: calc(100vw);
    margin-top: 42px;
    position: relative;
}

</style>
