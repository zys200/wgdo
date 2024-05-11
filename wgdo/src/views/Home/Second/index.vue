<template>
    <div class="box">
        <div class="content">
            <div class="left">
                <div class="titleone">Organizational dynamics</div>
                <div class="titletwo">
                    <span class="titletwoF">{{ $t('second.zuzhidongtai') }}</span>
                    <span class="titletwoS">
                        <a href="#">{{ $t('second.more') }}<i class="iconfont icon-youjiantou"></i></a>
                    </span>
                </div>
                <div class="carouselS">
                    <el-carousel indicator-position="outside" arrow="always">
                        <el-carousel-item v-for="item in leftData" :key="item.hpId">
                            <a href="#">
                                <div class="leftimg">
                                    <img :src="'http://106.3.97.14:9002' + item.cover" alt="">
                                </div>
                                <div class="leftline"></div>
                                <div class="titlethr">
                                    {{item.title}}
                                </div>
                                <div class="titlefour">
                                    {{item.intro}}
                                </div>
                            </a>
                        </el-carousel-item>
                    </el-carousel>
                </div>
            </div>
            <div class="right">
                <div class="titone">
                    <div class="tiltonel">
                        <img src="@/static/imgs/lights.png">
                        <span>{{ $t('second.green') }}</span>
                    </div>
                    <div class="tiltoner">
                        <a href="">{{ $t('second.tomore') }}<i class="iconfont icon-youjiantou"></i></a>
                    </div>
                </div>
                <div class="titoneLine"></div>
                <div class="rightList" v-for="i in rightData" :key="i.hpId">
                    <div class="rightListTitle">
                        {{i.title}}
                    </div>
                    <div class="rightListContent">
                        {{i.intro}}
                    </div>
                    <div class="rightListLine"></div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import { mounted } from 'vue'
    import { getContentList } from '@/api/requests.js'

    export default {
        name: 'Second',
        data() {
            let leftData = []
            let rightData = []
            return {
                leftData,
                rightData
            }
        },
        mounted() {
            this.getSecondData()
        },
        methods: {
            getSecondData() {
                getContentList({ "moduleType": "1", "status": "1" }).then(res => {
                    this.leftData = res.data.rows
                })
                getContentList({ "moduleType": "2", "status": "1" }).then(res => {
                    this.rightData = res.data.rows
                })
            }
        }
    }
</script>

<style scoped>
    .box {
        padding-top: 76px;
        overflow: hidden;
        width: 100vw;
        height: 788.65px;
        display: flex;
    }

    .content {
        margin: 0 auto;
        width: 80.2vw;
        max-width: 80.2vw;
        display: flex;
    }

    .left {
        flex: 1;
    }

    .left .titleone {
        width: 522.72px;
        height: 42.67px;
        opacity: 1;
        font-size: 32px;
        font-weight: 700;
        letter-spacing: 0.76px;
        line-height: 42.43px;
        color: rgba(255, 255, 255, 1);
        text-align: left;
        vertical-align: top;
    }

    .left .titletwo {
        display: flex;
        align-items: center;
    }

    .left .titletwo .titletwoF {
        height: 42.67px;
        font-size: 32px;
        font-weight: 500;
        letter-spacing: 0.76px;
        line-height: 42.43px;
        color: rgba(255, 255, 255, 1);
        text-align: left;
    }

    .left .titletwo .titletwoS a {
        padding-left: 15px;
        left: 147px;
        width: 70.96px;
        height: 42.67px;
        font-size: 15.24px;
        font-weight: 500;
        letter-spacing: 0px;
        line-height: 41.9px;
        color: rgba(166, 225, 99, 1);
        text-align: right;
    }

    /* carousel */
    .carouselS {
        margin-top: 61px;
        width: 579.1px;
        height: 471px;
    }

    /* 按钮rgba */
    :deep(.el-carousel__button) {
        transform: translate(-276px, 0px);
        width: 9.14px;
        height: 9.14px;
        border-radius: 50%;
        background: rgba(255, 255, 255, 1);
    }

    :deep(.is-active .el-carousel__button) {
        background: rgba(166, 225, 99, 1);
    }

    /* 方向键 */
    :deep(.el-carousel__arrow) {
        position: relative;
        bottom: 0;
        right: 0;
        transform: translate(502px, 242px);
        width: 21.93px;
        height: 15.66px;
        border-radius: 0;
        background-color: #fff;
    }

    :deep(.el-carousel__arrow--left) {
        margin-right: 28px;
        width: 21.93px;
        height: 15.66px;
        background: url('@/static/imgs/topp.png');
        background-position: center;
        background-size: cover;
    }

    :deep(.el-carousel__arrow--right) {
        width: 21.93px;
        height: 15.66px;
        background: url('@/static/imgs/next.png');
        background-position: center;
        background-size: cover;
    }

    :deep(.el-carousel__arrow i) {
        display: none;
    }

    :deep([data-v-255e4c7d] .el-carousel__container) {
        height: 471px;
    }

    .leftimg {
        width: 579.1px;
        height: 274.31px;
    }

    .leftimg img {
        width: 100%;
        height: 100%;
        background-size: cover;
        background-position: center;
    }

    .leftline {
        margin-top: 35px;
        width: 579.1px;
        height: 0px;
        opacity: 1;
        border: 1.52px solid rgba(255, 255, 255, 1);
    }

    .titlethr {
        margin-top: 31px;
        width: 500.05px;
        height: 35.05px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        font-size: 25.91px;
        font-weight: 500;
        letter-spacing: 0.76px;
        line-height: 34.35px;
        color: rgba(255, 255, 255, 1);
        text-align: left;
    }

    .titlefour {
        margin-top: 11px;
        left: 143.25px;
        top: 1292.32px;
        width: 548.05px;
        height: 41.15px;
        opacity: 1;
        font-size: 15.24px;
        font-weight: 400;
        letter-spacing: 0.76px;
        line-height: 20.21px;
        color: rgba(255, 255, 255, 0.8);
        text-align: left;
    }

    /* right */
    .right {
        justify-content: flex-end;
        padding-left: 86px;
        width: 666px;
        border-left: 1px snow sienna;
    }

    .right .titone {
        display: flex;
        justify-content: space-between;
        align-items: center;
        left: 842.75px;
        top: 759.69px;
        height: 30.48px;
        font-size: 22.86px;
        font-weight: 600;
        letter-spacing: 0.76px;
        line-height: 30.31px;
        color: rgba(255, 255, 255, 1);
        text-align: left;
    }

    .right .tiltonel {
        display: flex;
        align-items: center;
    }

    .right .titone img {
        margin-right: 10px;
        width: 24.38px;
        height: 24.38px;
    }

    .right .titone .tiltoner a {
        padding-left: 15px;
        left: 147px;
        width: 70.96px;
        height: 42.67px;
        font-size: 15.24px;
        font-weight: 500;
        letter-spacing: 0px;
        line-height: 30.48px;
        color: rgba(166, 225, 99, 1);
    }

    .right .titoneLine {
        margin-top: 19px;
        width: 507.48px;
        height: 0px;
        opacity: 1;
        border: 0.76px solid rgba(255, 255, 255, 1);
    }

    .right .rightList .rightListTitle {
        margin-top: 23px;
        /* width: 280.41px; */
        height: 22.86px;
        opacity: 1;
        font-size: 16.76px;
        font-weight: 500;
        letter-spacing: 0.76px;
        line-height: 22.23px;
        color: rgba(255, 255, 255, 1);
        text-align: left;
        vertical-align: top;
    }

    .right .rightList .rightListContent {
        margin-top: 8px;
        width: 496.05px;
        /* height: 41.15px; */
        font-size: 15.24px;
        font-weight: 400;
        letter-spacing: 0.76px;
        line-height: 20.21px;
        color: rgba(255, 255, 255, 0.8);
        text-align: left;
        vertical-align: top;
    }

    .right .rightList .rightListLine {
        margin-top: 23px;
        /* width: 666px; */
        height: 0px;
        opacity: 1;
        border: 0.76px dashed rgba(255, 255, 255, 1);
    }
</style>