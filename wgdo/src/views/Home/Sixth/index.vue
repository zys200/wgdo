<template>
    <div class="box">
        <div class="boxa">
            <div class="boxaTitle">{{ $t('six.huoban') }}</div>
            <div class="boxaDsc">{{ $t('six.dsc') }}</div>
            <div class="contentInfo">
                <logoPic :logoPicData="sixOne" />
            </div>
        </div>
        <div class="boxb">
            <div class="boxbTop">
                <TitleStyle :isTitle="$t('titlestyle.sixone')" :styles="boxTitleStyleB" :style2="style2" />
            </div>
            <div class="boxbContent">
                <div class="boxbContentItem" v-for="t in sixTwo" :key="t.hpId">
                    <img :src="'http://106.3.97.14:9002' + t.cover " alt="">
                    <div class="dsc">{{t.title}}</div>
                </div>
            </div>
        </div>
        <div class="boxc">
            <div class="boxcTitle">
                <TitleStyle :isTitle="$t('titlestyle.sixtwo')" :styles="boxTitleStyleB" :style2="style2" />
            </div>
            <div class="boxcContent">
                <logoPic :logoPicData="sixThree" />
            </div>
        </div>
        <div class="boxd">
            <div class="boxdTitle">
                <TitleStyle :isTitle="$t('titlestyle.sixthree')" :styles="boxTitleStyleB" :style2="style2" />
            </div>
            <div class="boxdContent">
                <logoPic :logoPicData="sixFour" />
            </div>
        </div>
    </div>
</template>

<script>
    import { mounted } from 'vue'
    import { getContentList } from '@/api/requests.js'
    import TitleStyle from '@/components/TitleStyle.vue'
    import logoPic from '@/components/logoPic.vue'

    export default {
        name: 'Sixth',
        components: { TitleStyle, logoPic },
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
                'color': 'rgba(255, 255, 255, 1)',
                'vertical - align': 'top'
            }
            const style2 = {
                'background': '#fff'
            }
            let sixOne = []
            let sixTwo = []
            let sixThree = []
            let sixFour = []
            return {
                boxTitleStyleB,
                style2,
                sixOne,
                sixTwo,
                sixThree,
                sixFour
            }
        },
        mounted() {
            this.getSixData()
        },
        methods: {
            getSixData() {
                getContentList({ "moduleType": "9", "status": "0" }).then(res => {
                    this.sixOne = res.data.rows
                })
                getContentList({ "moduleType": "10", "status": "0" }).then(res => {
                    // console.log(res.data.rows);
                    this.sixTwo = res.data.rows
                })
                getContentList({ "moduleType": "11", "status": "0" }).then(res => {
                    this.sixThree = res.data.rows
                })
                getContentList({ "moduleType": "12", "status": "0" }).then(res => {
                    this.sixFour = res.data.rows
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
    }

    .boxa {
        margin: 0 auto;
        width: 80.2vw;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    .boxa .boxaTitle {
        margin-top: 77px;
        height: 42.67px;
        font-size: 32px;
        font-weight: 700;
        letter-spacing: 0.76px;
        line-height: 42.43px;
        color: rgba(255, 255, 255, 1);
        vertical-align: top;
    }

    .boxa .boxaDsc {
        margin-top: 11px;
        width: 432.04px;
        height: 41.15px;
        font-size: 15.24px;
        font-weight: 400;
        letter-spacing: 0.76px;
        line-height: 20.21px;
        color: rgba(255, 255, 255, 0.8);
        text-align: center;
        vertical-align: top;
    }

    .boxa .contentInfo {
        width: 100%;
    }

    /* boxb */
    .box .boxb {
        margin-top: 46px;
        width: 100vw;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    .boxb .boxbTop {
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .boxb .boxbContent {
        margin-top: 50px;
        width: 100vw;
        display: grid;
        justify-content: space-between;
        grid-template-columns: repeat(auto-fill, 285px);
        gap: 10px 0;
    }

    .boxb .boxbContent .boxbContentItem {
        position: relative;
        width: 285.04px;
        height: 198.11px;
    }

    .boxb .boxbContent .boxbContentItem img {
        display: block;
        width: 100%;
        height: 100%;
        background-size: cover;
        background-position: center;
    }

    .boxb .boxbContent .boxbContentItem .dsc {
        position: absolute;
        bottom: 0;
        width: 100%;
        height: 45.42px;
        line-height: 45.42px;
        text-align: center;
        color: rgba(255, 255, 255, 1);
        background: rgba(255, 225, 255, .5);
    }

    .boxb .boxbContent .boxbContentItem:hover .dsc {
        background: rgba(166, 225, 99, 1);
    }

    /* boxc */
    .box .boxc {
        margin: 0 auto;
        width: 80.2vw;
        margin-top: 76px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    .boxc .boxcTitle {
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .boxc .boxcContent {
        width: 80.2vw;
    }

    /* boxd */
    .boxd {
        margin: 0 auto;
        padding-bottom: 91px;
        width: 80.2vw;
        margin-top: 76px;
        padding-bottom: 90px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    .boxd .boxdTitle {
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .boxd .boxdContent {
        width: 80.2vw;
    }
</style>