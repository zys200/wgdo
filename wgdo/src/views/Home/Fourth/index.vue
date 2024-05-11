<template>
    <div class="box">
        <div class="top">
            <div class="left">
                <div class="titleone">World Green Design Park</div>
                <div class="titletwo">
                    <div class="titletwoL">{{ $t('four.greendesign') }}</div>
                    <div class="tomore">
                        <a href="#">{{ $t('third.tomore') }}
                            <i class="iconfont icon-youjiantou"></i>
                        </a>
                    </div>
                </div>
                <div class="titlethrid">{{topDatas.title}}</div>
                <div class="leftdsc">
                    {{topDatas.intro}}
                </div>
                <div class="learnMore">
                    <a href="#">
                        {{ $t('four.tomore') }} <i class="iconfont icon-youjiantou"></i>
                    </a>
                </div>
            </div>
            <div class="right">
                <img :src="'http://106.3.97.14:9002' + topDatas.cover" alt="">
            </div>
        </div>
        <div class="bottoms">
            <div class="bootomsItem" v-for="item in bottomItemDatas" :key="item.hpId" :id="item.hpId"
                @mouseover="handleMouseOver">
                <div class="botImgs bottmsIsActive">
                    <img :src="'http://106.3.97.14:9002' + item.cover" alt="">
                </div>
                <div class="botTitle bottomsTitleActive">{{item.title}}</div>
            </div>
        </div>
    </div>
</template>

<script>
    import { mounted } from 'vue'
    import { getContentList } from '@/api/requests.js'

    export default {
        name: 'Fourth',
        data() {
            let topDatas = []
            let bottomItemDatas = []
            return {
                topDatas,
                bottomItemDatas
            }
        },
        mounted() { this.getFourthData() },
        methods: {
            getFourthData() {
                getContentList({ "moduleType": "1", "status": "1" }).then(res => {
                    if (res.data && Array.isArray(res.data.rows) && res.data.rows.length > 0) {
                        this.topDatas = res.data.rows[0]
                        this.bottomItemDatas = res.data.rows
                    }
                })
            },
            handleMouseOver(e) {
                this.bottomItemDatas.forEach(v => {
                    if (v.hpId == e.currentTarget.id) {
                        this.topDatas = v
                    }
                })
            }
        }
    }
</script>

<style scoped>
    .box {
        width: 100vw;
        height: 830.56px;
        overflow: hidden;
    }

    /* top */
    .top {
        margin: 56px auto 0;
        padding-top: 38px;
        padding-left: 38px;
        display: grid;
        justify-content: space-between;
        grid-template-columns: 1fr 1fr;
        width: 80.4vw;
        max-width: 80.4vw;
        width: 1177.26px;
        height: 427.47px;
        background: rgba(204, 204, 204, 0.1);
        overflow: hidden;
    }

    .top .left .titleone {
        left: 181.35px;
        top: 2375.85px;
        width: 511.29px;
        height: 42.67px;
        font-size: 32px;
        font-weight: 700;
        letter-spacing: 0.76px;
        line-height: 42.43px;
        color: rgba(255, 255, 255, 1);
        text-align: left;
    }

    .top .left .titletwo {
        display: flex;
        align-items: center;
    }

    .top .left .titletwo .titletwoL {
        left: 181.35px;
        top: 2418.52px;
        height: 42.67px;
        font-size: 32px;
        font-weight: 500;
        letter-spacing: 0.76px;
        line-height: 42.43px;
        color: rgba(255, 255, 255, 1);
        text-align: left;
        vertical-align: top;
    }

    .top .left .titletwo .tomore a {
        margin-top: 11px;
        margin-left: 15px;
        width: 60.96px;
        height: 42.67px;
        opacity: 1;
        font-size: 15.24px;
        font-weight: 500;
        letter-spacing: 0px;
        line-height: 42.67px;
        color: rgba(166, 225, 99, 1);
        text-align: right;
        vertical-align: top;
    }

    .titlethrid {
        margin-top: 75px;
        height: 26.67px;
        font-size: 19.81px;
        font-weight: 500;
        letter-spacing: 0.76px;
        line-height: 26.27px;
        color: rgba(255, 255, 255, 1);
        text-align: left;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap
    }

    .leftdsc {
        margin-top: 15px;
        width: 496.05px;
        height: 81.53px;
        font-size: 15.24px;
        font-weight: 400;
        letter-spacing: 0.76px;
        line-height: 20.21px;
        color: rgba(255, 255, 255, 0.8);
        text-align: left;
        overflow: hidden;
        text-overflow: ellipsis;
        -webkit-line-clamp: 4;
        display: -webkit-box;
        -webkit-box-orient: vertical;
    }

    .learnMore {
        margin-top: 15px;
        left: 181.35px;
        top: 2674.55px;
        width: 167.64px;
        height: 38.1px;
        opacity: 1;
        border-radius: 27.05px;
        background: rgba(166, 225, 99, 1);
        text-align: center;
    }

    .learnMore a {
        left: 694.16px;
        top: 1653.49px;
        width: 60.96px;
        height: 20.57px;
        opacity: 1;
        font-size: 15.24px;
        font-weight: 500;
        letter-spacing: 0px;
        line-height: 36px;
        color: rgba(90, 107, 81, 1);
        text-align: right;
    }

    .top .right {
        margin-top: -12px;
        width: 548.63px;
        height: 380.99px;
        background-size: cover;
        background-position: center;
        object-fit: cover;
    }

    .top .right img {
        width: 100%;
        height: 100%;
        background-size: cover;
        background-position: center;
    }

    /* bottoms */
    .bottoms {
        margin: 14px auto 0;
        width: 80.4vw;
        max-width: 80.4vw;
        display: grid;
        justify-content: space-between;
        grid-template-columns: repeat(auto-fill, 290px);
    }

    .bootomsItem {
        display: flex;
        flex-direction: column;
    }

    .bootomsItem .botImgs {
        left: 143.25px;
        top: 2778.94px;
        width: 289.55px;
        height: 220.97px;
    }

    .bottoms .botImgs img {
        width: 100%;
        height: 100%;
        background-size: cover;
        background-position: center;
    }

    .bootomsItem .botTitle {
        margin-top: 15px;
        width: 289.55px;
        left: 194.3px;
        top: 3015.15px;
        height: 20.57px;
        opacity: 1;
        font-size: 15.24px;
        font-weight: 400;
        letter-spacing: 0.76px;
        line-height: 20.21px;
        text-align: center;
        color: rgba(255, 255, 255, 1);
        vertical-align: top;
    }

    .bootomsItem .botImgs:hover {
        border: 3.05px solid rgba(166, 225, 99, 1);
    }

    .bootomsItem:hover .botTitle {
        color: rgba(166, 225, 99, 1);
    }
</style>