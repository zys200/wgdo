<template>
    <div class="box">
        <div class="learnMore">
            <a href="#"> {{ $t('LearnMore.learnmore') }} <i class="iconfont icon-youjiantou"></i></a>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'LearnMore',
        props: ['linkList']
    }
</script>

<style scoped>
    .box {
        width: 100%;
    }

    .learnMore {
        margin-top: 39px;
        width: 10.2vw;
        height: 2.6vw;
        opacity: 1;
        border-radius: 27.05px;
        background: rgba(166, 225, 99, 1);
        text-align: center;
    }

    .learnMore:active {
        color: rgba(90, 107, 81, .9);
    }

    .learnMore a {
        width: 4.37vw;
        height: 1.4vw;
        opacity: 1;
        font-size: 15.24px;
        font-weight: 500;
        letter-spacing: 0px;
        line-height: 36px;
        color: rgba(90, 107, 81, 1);
        text-align: right;
    }
</style>