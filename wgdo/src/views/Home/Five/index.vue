<template>
    <div class="box">
        <div class="boxa">
            <div class="boxaTitle">{{ $t('five.pingpaixiangmu') }}</div>
            <div class="boxaDsc">{{ $t('five.dsc') }}</div>
            <div class="tomore">
                <a href="#">
                    {{ $t('five.tomore') }} <i class="iconfont icon-youjiantou"></i>
                </a>
            </div>
            <div class="boxaImgs">
                <div class="boxaImgsL">
                    <img :src=" 'http://106.3.97.14:9002' + leftImg.cover" alt="">
                    <div class="boxaImgsLl">
                        <div class="boxaImgsLlTitle">{{leftImg.title}}</div>
                        <div class="boxaImgsLlDsc">{{leftImg.intro}}</div>
                        <div class="boxaImgsLlMore">
                            <LearnMore />
                        </div>
                    </div>
                </div>
                <div class="boxaImgsR">
                    <div class="boxaImgsRItem" v-for="item in rightImgLists" :key="item.hpId">
                        <img :src="'http://106.3.97.14:9002' + item.cover">
                        <div class="boxaTimgsRItemm">
                            <div class="boxaTmgsRItemmTitle">{{ $t('five.greenprice') }}</div>
                            <div class="boxaTmgsRItemmMore">
                                <LearnMore />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="boxb">
            <div class="boxbTitle">{{ $t('five.mingdan') }}</div>
            <div class="boxbDsc">
                <TitleStyle :isTitle="$t('titlestyle.fiveone')" :styles="boxTitleStyleB" :style2="style2" />
            </div>
            <div class="boxbInfo">
                <div class="boxbInfoItem" v-for="i in getPrice" :key="i.hpId">
                    <img :src=" 'http://106.3.97.14:9002' + i.cover" alt="">
                    <span>{{i.title}}</span>
                </div>
            </div>
        </div>
        <div class="boxc">
            <div class="boxcDsc">
                <TitleStyle :isTitle="$t('titlestyle.fivetwo')" :styles="boxTitleStyleB" :style2="style2" />
            </div>
            <div class="boxcInfo">
                <div class="boxcInfoItem" v-for="t in awardWinningOrganization" :key="t.hpId">
                    <img :src="'http://106.3.97.14:9002' + t.cover " alt="">
                    <span>{{t.title}}</span>
                </div>
            </div>
        </div>
        <div class="toLearnMore">
            <a href="#">
                {{ $t('five.seehistory') }} <i class="iconfont icon-youjiantou"></i>
            </a>
        </div>
    </div>
</template>

<script>
    import { mounted } from 'vue'
    import { getContentList } from '@/api/requests.js'
    import TitleStyle from '@/components/TitleStyle.vue'
    import LearnMore from '@/components/LearnMore.vue'

    export default {
        name: 'Five',
        components: { TitleStyle, LearnMore },
        data() {
            const boxTitleStyleB = {
                'margin': '0 30px',
                'width': '100%',
                'height': '36.57px',
                'font-size': '27.43px',
                'font-weight': '600',
                'letter-spacing': '0.76px',
                'line-height': '36.38px',
                'text-align': 'center',
                'color': '#3E4938',
                'vertical - align': 'top'
            }
            const style2 = {
                'background': '#3E4938'
            }
            let leftImg = []
            let rightImgLists = []
            let getPrice = []
            let awardWinningOrganization = []
            return {
                boxTitleStyleB,
                style2,
                leftImg,
                rightImgLists,
                getPrice,
                awardWinningOrganization
            }
        },
        mounted() {
            this.getFiveData()
        },
        methods: {
            getFiveData() {
                getContentList({ "moduleType": "6", "status": "0" }).then(res => {
                    if (res.data && Array.isArray(res.data.rows) && res.data.rows.length > 0) {
                        let [leftImg, ...rightImgLists] = res.data.rows
                        this.leftImg = leftImg
                        this.rightImgLists = rightImgLists
                    }
                })
                getContentList({ "moduleType": "7", "status": "0" }).then(res => {
                    this.getPrice = res.data.rows
                })
                getContentList({ "moduleType": "8", "status": "0" }).then(res => {
                    this.awardWinningOrganization = res.data.rows
                })
            }
        }
    }
</script>

<style scoped>
    .box {
        position: relative;
        top: 0;
        left: 0;
        width: 100%;
        overflow: hidden;
    }

    /* boxa */
    .boxa {
        width: 100vw;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    .boxa .boxaTitle {
        margin-top: 76px;
        height: 42.67px;
        font-size: 32px;
        font-weight: 700;
        letter-spacing: 0.76px;
        line-height: 42.43px;
        color: rgba(51, 51, 51, 1);
        text-align: left;
    }

    .boxa .boxaDsc {
        margin-top: 11px;
        width: 432.04px;
        font-size: 15.24px;
        font-weight: 400;
        letter-spacing: 0.76px;
        line-height: 20.21px;
        color: rgba(153, 153, 153, 0.8);
        text-align: center;
    }

    .tomore a {
        margin-top: 11px;
        width: 60.96px;
        height: 20.57px;
        font-size: 15.24px;
        font-weight: 500;
        letter-spacing: 0px;
        line-height: 20.21px;
        color: rgba(166, 225, 99, 1);
        text-align: right;
        vertical-align: top;
    }

    .boxa .boxaImgs {
        margin-top: 50px;
        display: grid;
        grid-template-columns: 1fr 1fr;
        width: 100vw;
    }

    .boxaImgsL {
        position: relative;
        top: 0;
        left: 0;
        width: 731.5px;
        height: 434.33px;
        background-size: cover;
        background-position: center;
        overflow: hidden;
    }

    .boxaImgsL img {
        display: block;
        width: 100%;
        height: 100%;
        background-size: cover;
        background-position: center;
    }

    .boxaImgsLl {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        opacity: 0;
        z-index: 100;
        display: flex;
        flex-direction: column;
        align-items: center;
        background: rgba(62, 73, 56, 0.9);
    }

    .boxaImgsLl:hover {
        opacity: .9;
    }

    .boxaImgsLl .boxaImgsLlTitle {
        margin-top: 124px;
        width: 469.53px;
        height: 53.49px;
        font-size: 32px;
        font-weight: 500;
        letter-spacing: 0.76px;
        line-height: 42.43px;
        color: rgba(255, 255, 255, 1);
        text-align: center;
    }

    .boxaImgsLl .boxaImgsLlDsc {
        margin-top: 15px;
        width: 515.86px;
        height: 41.15px;
        font-size: 15.24px;
        font-weight: 400;
        letter-spacing: 0.76px;
        line-height: 20.21px;
        color: rgba(255, 255, 255, 0.8);
        text-align: center;
        vertical-align: top;
        overflow: hidden;
        text-overflow: ellipsis;
        -webkit-line-clamp: 3;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        word-break: break-all;
    }

    .boxaImgsLl .boxaImgsLlMore {
        /* margin-top: 39px; */
        border-radius: 27.05px;
    }

    .boxaImgsR {
        background-size: cover;
        background-position: center;
        overflow: hidden;
        display: grid;
        grid-template-columns: 1fr 1fr;
    }

    .boxaImgsR .boxaImgsRItem {
        position: relative;
        top: 0;
        left: 0;
        width: 365.75px;
        height: 217.16px;
        overflow: hidden;
    }

    .boxaImgsR .boxaImgsRItem img {
        display: block;
        width: 100%;
        height: 100%;
        background-size: cover;
        background-position: center;
    }

    .boxaTimgsRItemm {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        opacity: 0;
        z-index: 100;
        display: flex;
        flex-direction: column;
        align-items: center;
        background: rgba(62, 73, 56, 0.9);
    }

    .boxaTimgsRItemm:hover {
        opacity: 1;
    }

    .boxaTimgsRItemm .boxaTmgsRItemmTitle {
        margin-top: 57px;
        width: 243.83px;
        /* height: 30.48px; */
        font-size: 25.91px;
        font-weight: 500;
        letter-spacing: 0.76px;
        line-height: 34.35px;
        color: rgba(255, 255, 255, 1);
        text-align: center;
        overflow: hidden;
        text-overflow: ellipsis;
        -webkit-line-clamp: 2;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        word-break: break-all;
    }

    /* .boxaTimgsRItemm .boxaTmgsRItemmMore {
        padding-top: 34px;
    } */

    /* boxb */
    .boxb {
        margin: 90px auto 0;
        width: 80.2vw;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .boxb .boxbTitle {
        height: 42.67px;
        font-size: 32px;
        font-weight: 700;
        letter-spacing: 0.76px;
        line-height: 42.43px;
        color: rgba(51, 51, 51, 1);
        vertical-align: top;
    }

    .boxb .boxbDsc {
        margin-top: 46px;
        height: 36.57px;
        font-size: 27.43px;
        font-weight: 600;
        letter-spacing: 0.76px;
        line-height: 36.38px;
        color: rgba(62, 73, 56, 1);
        vertical-align: top;
    }

    .boxb .boxbInfo {
        margin-top: 50px;
        width: 100%;
        display: grid;
        justify-content: space-between;
        grid-template-columns: repeat(auto-fill, 137px);
        gap: 16px 11px;
    }

    .boxb .boxbInfo .boxbInfoItem {
        width: 137.16px;
        height: 178.3px;
        opacity: 1;
        background: rgba(255, 255, 255, 1);
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    .boxb .boxbInfo .boxbInfoItem img {
        display: block;
        width: 137.16px;
        height: 143.25px;
        background-size: cover;
        background-position: center;
    }

    .boxb .boxbInfo .boxbInfoItem span {
        display: block;
        width: 100%;
        height: 35px;
        line-height: 35px;
        text-align: center;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap
    }

    .boxb .boxbInfo .boxbInfoItem:hover {
        background: #A6E163;
    }

    /* boxc */
    .boxc {
        margin: 77px auto 0;
        width: 80.2vw;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    .boxc .boxcDsc {
        height: 36.57px;
        font-size: 27.43px;
        font-weight: 600;
        letter-spacing: 0.76px;
        line-height: 36.57px;
        color: rgba(62, 73, 56, 1);
    }

    .boxc .boxcInfo {
        margin-top: 50px;
        width: 100%;
        display: grid;
        justify-content: space-between;
        grid-template-columns: repeat(auto-fill, 229px);
        gap: 10px 0;
    }

    .boxc .boxcInfo .boxcInfoItem {
        width: 228.59px;
        height: 111.25px;
        background: rgba(255, 255, 255, 1);
    }

    .boxc .boxcInfo .boxcInfoItem img {
        display: block;
        width: 228.59px;
        height: 76.2px;
        background-size: cover;
        background-position: center;
    }

    .boxc .boxcInfo .boxcInfoItem span {
        display: block;
        width: 228.59px;
        height: 35px;
        font-size: 15.24px;
        font-weight: 400;
        letter-spacing: 0.76px;
        line-height: 35px;
        color: rgba(16, 16, 16, 1);
        text-align: center;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }

    .boxc .boxcInfo .boxcInfoItem:hover {
        background: #A6E163;
    }

    /* 了解更多 */
    .toLearnMore {
        margin: 83px auto 91px;
        /* width: 228.59px; */
        max-width: 346px;
        height: 38.1px;
        opacity: 0.3;
        border-radius: 38.1px;
        border: 0.76px solid rgba(62, 73, 56, 1);
        text-align: center;
    }

    .toLearnMore a {
        /* width: 152.4px; */
        height: 24.38px;
        font-size: 18.29px;
        font-weight: 400;
        letter-spacing: 0.76px;
        line-height: 38.1px;
        color: rgba(56, 56, 56, 1);
        text-align: left;
    }

    .toLearnMore:hover {
        opacity: 1;
    }

    .toLearnMore:active {
        opacity: .8;
    }
</style>