<template>
    <div class="box">
        <div class="top">
            <div class="title">{{ $t('headernav.Conferenceactivity') }}</div>
            <div class="dsc">
                {{ $t('third.dsc') }} </div>
            <div class="tomore">
                <a href="#">{{ $t('third.tomore') }}<i class="iconfont icon-youjiantou"></i></a>
            </div>
        </div>
        <div class="content">
            <div class="contentCarousel">
                <el-carousel class="contenetEl">
                    <el-carousel-item v-for="item in carouselData" :key="item.hpId">
                        <img :src="'http://106.3.97.14:9002' + item.cover">
                        <div class="contentCarouselL">
                            <div class="contentCarouselLTitle">{{item.title}}</div>
                            <div class="contentCarouselLDsc">{{item.intro}}</div>
                        </div>
                    </el-carousel-item>
                </el-carousel>
            </div>
            <div class="contentRight">
                <div class="contentRightTop">
                    <div class="contentRightTile">
                        {{ $t('third.active') }} </div>
                    <div class="tmore">
                        <a href="#">{{ $t('third.tomore') }}<i class="iconfont icon-youjiantou"></i></a>
                    </div>
                </div>
                <div class="contentRightCont" v-if="rightListDatas.length > 0">
                    <div class="contentRightContItem" style="background: rgba(165, 214, 63, 0.6);">
                        <div class="contentRightL">
                            <div class="contentRightLMou">20-12</div>
                            <div class="contentRightLYear">2023</div>
                        </div>
                        <div class="contentRightR" v-if="rightListDatas.length > 0">
                            <div class="contentRightRTitle">{{ rightListDatas[0].title}}</div>
                            <div class="contentRightRText">
                                {{rightListDatas[0].intro}}
                            </div>
                        </div>
                    </div>
                </div>
                <div class="contentRightCont" v-if="rightListDatas.length > 1">
                    <div class="contentRightContItem" style="background-color: rgba(165,214,63,0.4);;">
                        <div class="contentRightL">
                            <div class="contentRightLMou">20-12</div>
                            <div class="contentRightLYear">2023</div>
                        </div>
                        <div class="contentRightR">
                            <div class="contentRightRTitle">{{rightListDatas[1].title}}</div>
                            <div class="contentRightRText">
                                {{rightListDatas[1].intro}}
                            </div>
                        </div>
                    </div>
                </div>
                <div class="contentRightCont" v-if="rightListDatas.length > 2">
                    <div class="contentRightContItem" style="background:rgba(165,214,63,0.2);">
                        <div class="contentRightL">
                            <div class="contentRightLMou">20-12</div>
                            <div class="contentRightLYear">2023</div>
                        </div>
                        <div class="contentRightR">
                            <div class="contentRightRTitle">{{rightListDatas[2].title}}</div>
                            <div class="contentRightRText">
                                {{ rightListDatas[2].intro }}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import { mounted } from 'vue'
    import { getContentList } from '@/api/requests.js'
    import Carousel from '@/components/Carousel.vue'

    export default {
        name: 'Third',
        components: { Carousel },
        data() {
            let carouselData = []
            let rightListDatas = []
            return {
                carouselData,
                rightListDatas
            }
        },
        mounted() { this.getThirdData() },
        methods: {
            getThirdData() {
                getContentList({ "moduleType": "3", "status": "0" }).then(res => {
                    this.carouselData = res.data.rows
                })
                getContentList({ "moduleType": "4", "status": "0" }).then(res => {
                    this.rightListDatas = res.data.rows
                })
            }
        }
    }
</script>

<style scoped>
    .box {
        overflow: hidden;
    }

    /* top */
    .top {
        margin-top: 76px;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .top .title {
        left: 665.97px;
        top: 1548.34px;
        height: 42.67px;
        opacity: 1;
        font-size: 32px;
        font-weight: 700;
        letter-spacing: 0.76px;
        line-height: 42.43px;
        color: rgba(51, 51, 51, 1);
        text-align: center;
        vertical-align: top;
    }

    .top .dsc {
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
    }

    /* content */
    .content {
        margin: 46px auto 0;
        width: 80.4vw;
        height: 472.43px;
        display: grid;
        justify-content: space-between;
        grid-template-columns: 61% auto;
    }

    .content .contentCarousel {
        position: relative;
        top: 0;
        left: 0;
        width: 723.88px;
        height: 472.43px;
    }

    :deep(.el-carousel__button) {
        transform: translate(0px, -224px)
    }

    .contenetEl img {
        display: block;
        width: 723.88px;
        height: 472.43px;
        background-size: cover;
        background-position: center;
    }

    .contenetEl :deep(.el-carousel__button) {
        left: 704.07px;
        top: 624.82px;
        width: 9.14px;
        height: 9.14px;
        opacity: 1;
        border-radius: 50%;
        background: rgba(255, 225, 255, 1);
    }

    .contenetEl :deep(.is-active .el-carousel__button) {
        background: rgba(166, 225, 99, 1);
    }

    .contenetEl :deep(.el-carousel__arrow) {
        display: none;
    }

    /* contentCarouselL */
    .contentCarouselL {
        position: absolute;
        left: 0;
        top: 297px;
        padding-left: 27px;
        width: 100%;
        height: 175.26px;
        opacity: 0;
        z-index: 100;
        background: rgba(0, 0, 0, 0.5);
    }

    .contentCarouselL:hover {
        opacity: 1;
    }

    .contentCarouselL .contentCarouselLTitle {
        margin-top: 28px;
        height: 35.05px;
        font-size: 25.91px;
        font-weight: 500;
        letter-spacing: 0.76px;
        line-height: 34.35px;
        color: rgba(255, 255, 255, 1);
        text-align: left;
    }

    .contentCarouselL .contentCarouselLDsc {
        margin-top: 11px;
        width: 669.78px;
        height: 41.15px;
        font-size: 15.24px;
        font-weight: 400;
        letter-spacing: 0.76px;
        line-height: 20.21px;
        color: rgba(255, 255, 255, 0.8);
        text-align: left;
        overflow: hidden;
        text-overflow: ellipsis;
    }

    /* contentRight */
    .content .contentRight {
        margin-left: 11px;
        flex: 1;
        justify-content: flex-end;
        width: 441.95px;
        min-width: 455.84px;
        width: 5;
        height: 472.43px;
        background: rgba(255, 255, 255, 1);
    }

    .content .contentRightTop {
        padding: 0 21px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 71px;
    }

    .content .contentRight .contentRightTop .contentRightTile {
        margin: 19px 0 19px 0px;
        height: 32.77px;
        font-size: 24.38px;
        font-weight: 600;
        letter-spacing: 0.76px;
        line-height: 32.33px;
        color: rgba(16, 16, 16, 1);
    }

    .content .contentRight .contentRightTop .tmore a {
        width: 60.96px;
        height: 20.57px;
        font-size: 15.24px;
        font-weight: 500;
        letter-spacing: 0px;
        line-height: 20.21px;
        color: rgba(153, 153, 153, 0.8);
    }

    .content .contentRight .contentRightCont {
        margin: 0 auto;
        width: 428.84px;
        height: 133px;
        overflow: hidden;
    }

    .content .contentRight .contentRightCont .contentRightContItem {
        display: flex;
        width: 100%;
    }

    .content .contentRight .contentRightCont .contentRightContItem .contentRightL {
        width: 88.39px;
        min-width: 88.39px;
        height: 133.35px;
    }

    .contentRightLMou {
        width: 100%;
        margin-top: 30px;
        padding-left: 12px;
        font-size: 24.38px;
        font-weight: 500;
        letter-spacing: 0.76px;
        line-height: 32.33px;
        color: rgba(16, 16, 16, 1);
        text-align: left;
    }

    .contentRightLYear {
        width: 100%;
        margin-top: 12px;
        padding-left: 12px;
        left: 25.15px;
        top: 146.3px;
        font-size: 16.76px;
        font-weight: 500;
        letter-spacing: 0.76px;
        line-height: 22.23px;
        color: rgba(16, 16, 16, 0.6);
        text-align: left;
    }


    .content .contentRight .contentRightCont .contentRightContItem .contentRightR {
        flex: 1;
        padding: 0 14px 0 11px;
        min-width: 429px;
        height: 100%;
        height: 472.43px;
        background: rgba(255, 255, 255, 1);
        border-top: 0.76px dashed rgba(182, 182, 182, 1);
        border-bottom: 0.76px dashed rgba(182, 182, 182, 1);
    }

    .contentRightRTitle {
        margin-top: 24px;
        height: 22.86px;
        font-size: 16.76px;
        font-weight: 500;
        letter-spacing: 0.76px;
        line-height: 22.23px;
        color: rgba(16, 16, 16, 1);
        text-align: left;
    }

    .contentRightRText {
        margin-top: 8px;
        width: 315.46px;
        height: 60.96px;
        font-size: 15.24px;
        font-weight: 400;
        letter-spacing: 0.76px;
        line-height: 20.21px;
        color: rgba(16, 16, 16, 0.8);
        text-align: justify;
        overflow: hidden;
        text-overflow: ellipsis;
        -webkit-line-clamp: 4;
    }
</style>