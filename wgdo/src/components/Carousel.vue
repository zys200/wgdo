<template>
    <div class="box">
        <el-carousel class="elc" :indicator-position="indicatorPosition || '' ">
            <el-carousel-item v-for="item in carouselData" :key="item.hpId">
                <img :src="'http://106.3.97.14:9002' + item.cover" :style="`width: ${width}; height: ${height};`">
                <div class="texts" v-if="item.intro">
                    <div class="textOne">
                        {{item.intro.slice(0,8)}}
                        <span class="GreenDesign">{{item.intro.slice(8,21)}}</span>
                        {{item.intro.slice(21)}}
                    </div>
                    <div class="textTwo">{{item.title}}</div>
                    <div class="carouselLink">
                        <a href="#">READ NOW<i class="iconfont icon-youjiantou"></i></a>
                    </div>
                </div>
            </el-carousel-item>
        </el-carousel>
    </div>
</template>

<script>
    export default {
        name: 'CarouselS',
        props: ['width', 'height', 'indicatorPosition', 'carouselData']
    }
</script>

<style scoped>
    .box {
        position: relative;
        top: 0;
        left: 0;
    }

    .elc {
        height: 685.78px;
    }

    img {
        display: block;
        width: 100vw;
        height: 685.78px;
        background-size: cover;
        background-position: center;
    }

    :deep(.el-carousel__button) {
        left: 704.07px;
        top: 624.82px;
        width: 9.14px;
        height: 9.14px;
        opacity: 1;
        border-radius: 50%;
        background: rgba(255, 225, 255, 1);
    }

    :deep(.is-active .el-carousel__button) {
        background: rgba(166, 225, 99, 1);
    }

    :deep(.el-carousel__arrow) {
        display: none;
    }

    /* text */
    .texts {
        position: absolute;
        top: 292px;
        z-index: 109;
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100vw;
    }

    .textOne {
        height: 26.67px;
        text-shadow: 0px 1.52px 3.05px rgba(0, 0, 0, 0.25);
        font-size: 19.81px;
        font-weight: 500;
        letter-spacing: 0.76px;
        line-height: 26.27px;
        color: rgba(166, 225, 99, 1);
        color: rgba(255, 255, 255, 1);
        text-align: center;
    }

    .GreenDesign {
        color: rgba(166, 225, 99, 1);

    }

    .textTwo {
        left: 208.02px;
        top: 337.56px;
        width: 100%;
        height: 51.05px;
        text-shadow: 0px 1.52px 3.05px rgba(0, 0, 0, 0.25);
        font-size: 38.1px;
        font-weight: 700;
        letter-spacing: 0.76px;
        line-height: 50.52px;
        color: rgba(255, 255, 255, 1);
        text-align: left;
        text-align: center;
    }

    .carouselLink a {
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 19px;
        width: 202.69px;
        height: 42.67px;
        line-height: 42.67px;
        border-radius: 21.34px;
        border: 1.52px solid rgba(255, 255, 255, 1);
        color: rgba(255, 255, 255, 1);
    }
</style>