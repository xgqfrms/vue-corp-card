<template>
    <div
        v-if="isShowCorpCard"
        @click="AutoSkipToPage(`vue-corp-card`)"
        @dblclick="AutoSkipToPage(`vue-corp-card`)"
        class="corp-card-container">
        <div
            v-if="corpShowHotFire"
            class="corp-card-fire">
            <span class="corp-card-text"></span>
        </div>
        <div class="corp-card-logo">
            <img
                :src="corpLogo"
                alt=""
                class="corp-card-logo-img"
            />
        </div>
        <div class="corp-card-right">
            <span class="corp-card-right-title">
                <span class="corp-card-right-title-key">
                    {{corpName}}
                </span>
                <span class="corp-card-right-title-value">
                    {{corpNameOther}}
                </span>
            </span>
            <p class="corp-card-right-content">
                <span class="corp-card-right-content-key">法定代表人</span>
                <span class="corp-card-right-content-key">注册资本</span>
            </p>
            <p class="corp-card-right-content">
                <span class="corp-card-right-content-value">
                    {{corpOwner}}
                </span>
                <span class="corp-card-right-content-value">
                    {{corpMoney}}
                </span>
            </p>
        </div>
        <div class="corp-card-line"></div>
        <div class="corp-card-footer">
            <span class="corp-card-footer-key">品牌</span>
            <span class="corp-card-footer-value">
                {{corpName}}
            </span>
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
     * @description  CorpCard
     * @augments
     * @example
     * @link
     * @created 2019-05-22
     *
     */
    import defaultImage from "./imgs/default.png";
    export default {
        props: [
            "corpObj",
        ],
        name: "CorpCard",
        data() {
            return {
                isShowCorpCard: true,
                corpId: "",
                corpName: "",
                corpNameOther: "",
                corpOwner: "",
                corpMoney: "",
                corpLogo: defaultImage,
                corpShowHotFire: false,
                corpDefaultObj: {
                    corpId: "123456789",
                    corpName: "DD",
                    corpNameOther: "(中国) 信息技术有限公司",
                    corpOwner: "xiao ma",
                    corpMoney: "￥ 1,234,567, 890",
                    corpLogo: "",
                    corpShowHotFire: true,
                },
            };
        },
        methods: {
            AutoSkipToPage(hash =``) {
                cosnole.log(`hash =`, hash);
            },
        },
        mounted() {
            // props
        },
        created() {
            try {
                if (this.corpObj) {
                    let {
                        corpId,
                        corpName,
                        corpNameOther,
                        corpOwner,
                        corpMoney,
                        corpLogo,
                        corpShowHotFire,
                    } = this.corpObj;
                    this.corpId = corpId ? corpId : "";
                    this.corpName = corpName ? corpName : "";
                    this.corpNameOther = corpNameOther ? corpNameOther : "";
                    this.corpOwner = corpOwner ? corpOwner : "";
                    this.corpMoney = corpMoney ? corpMoney : "";
                    this.corpLogo = corpLogo ? corpLogo : defaultImage;
                    this.corpShowHotFire = corpShowHotFire ? corpShowHotFire : false;
                    this.isShowCorpCard = true;
                } else {
                    this.isShowCorpCard = false;
                    // let {
                    //     corpId,
                    //     corpName,
                    //     corpNameOther,
                    //     corpOwner,
                    //     corpMoney,
                    //     corpLogo,
                    //     corpShowHotFire,
                    // } = this.corpDefaultObj
                    // this.corpId = corpId ? corpId : "";
                    // this.corpName = corpName ? corpName : "";
                    // this.corpNameOther = corpNameOther ? corpNameOther : "";
                    // this.corpOwner = corpOwner ? corpOwner : "";
                    // this.corpMoney = corpMoney ? corpMoney : "";
                    // this.corpLogo = corpLogo ? corpLogo : defaultImage;
                    // this.corpShowHotFire = corpShowHotFire ? corpShowHotFire : false;
                    // this.isShowCorpCard = true;
                    throw new Error(`CorpCard 的 corpObj 属性不可为空!`);
                }
            } catch (err) {
                console.error(`CorpCard 使用错误: \n`, err);
            }
        },
    };
</script>


<style lang="css">
html{
    --highlight-color:rgba(255, 148, 62, 1);
    font-family:PingFangSC-Regular;
    font-weight:400;
    font-size: 100px;
}
.corp-card-container{
    position: relative;
    display: flex;
    flex-flow: row wrap;
    justify-content: flex-start;
    align-items: stretch;
    align-content: stretch;
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    width: calc(100vw);
    height: calc(2.9rem);
    border-bottom: 0.2rem solid rgba(249,248,253,1);
}
.corp-card-logo{
    order: 0;
    flex: 0 1 auto;
    margin: 0.32rem;
    margin-right: 0.2rem;
    height: 1.9rem;
    height: calc(1.9rem - 0.64rem);
}
.corp-card-logo-img{
    width: 0.64rem;
    height: 0.64rem;
}
.corp-card-right{
    order: 1;
    flex: 0 1 auto;
    line-height: 0.28rem;
    height: 0.28rem;
    font-size: 0.34rem;
    width: 6.34rem;
    height: calc(1.9rem - 0.42rem);
    margin-top: 0.42rem;
}
.corp-card-right-title{
    width: 6.34rem;
}
.corp-card-right-title-key{
    color:var(--highlight-color);
    /* color:rgba(25,31,37,1); */
    font-weight: 600;
}
.corp-card-right-title-value{
    color:rgba(25,31,37, 0.5);
}
.corp-card-right-content{
    line-height: 0.40rem;
    height: 0.40rem;
    font-size: 0.28rem;
    width: 6.34rem;
    margin-top: 0.1rem;
    margin-bottom: 0.1rem;
}
.corp-card-right-content-key{
    color:rgba(25,31,37,0.4);
    width: 2.86rem;
    min-width: 2.86rem;
    display: inline-block;
}
.corp-card-right-content-value{
    color:rgba(25,31,37,1);
    width: 2.86rem;
    min-width: 2.86rem;
    display: inline-block;
    font-weight: 600;
}
.corp-card-line {
    order: 3;
    flex: 0 1 auto;
    width: 7.5rem;
    height: 2px;
    background:rgba(25,31,37,0.08);
    margin: 0;
    padding: 0;
}
.corp-card-footer{
    order: 4;
    flex: 0 1 auto;
    height: 0.8rem;
}
.corp-card-footer-key{
    font-size: 0.24rem;
    line-height: 0.34rem;
    height: 0.34rem;
    width: 0.76rem;
    min-width: 0.76rem;
    color:rgba(25,31,37,0.4);
    display: inline-block;
    margin: 0.24rem 0 0.22rem 0.32rem;
}
.corp-card-footer-value{
    font-size: 0.24rem;
    line-height: 0.34rem;
    height: 0.34rem;
    min-width: 0.5rem;
    font-weight: 600;
    color:rgba(25,31,37,1);
}
.corp-card-fire{
    position: absolute;
    top: 0;
    right: 0;
    width: 0;
    height: 0;
    border-width: 0.32rem;
    border-style: solid;
    border-color: rgba(255,148,62,1) rgba(255,148,62,1) transparent transparent;
    cursor: pointer;
}
.corp-card-text{
    display: inline-block;
    transform: translateX(0.03rem) translateY(-0.25rem);
}
.corp-card-text::after{
    content: "🔥";
    display: block;
    color: #fff;
    background: transparent;
}

</style>

