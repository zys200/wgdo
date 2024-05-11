<template>
    <div class="box">
        <div class="boxItem" v-for="t in logoPicData" :key="t.hpId">
            <a href="#">
                <img :src="'http://106.3.97.14:9002' + t.cover " alt="">
            </a>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'logoPic',
        props: ['logoPicData']
    }
</script>

<style scoped>
    .box {
        margin-top: 50px;
        width: 80.2vw;
        display: grid;
        justify-content: space-between;
        grid-template-columns: repeat(auto-fill, 229px);
        gap: 15px 0;
    }

    .box .boxItem {
        width: 228.59px;
        height: 76.2px;
        background-size: cover;
        background-position: center;
        opacity: .3;
    }

    .box .boxItem img {
        display: block;
        width: 100%;
        height: 100%;
        background-size: cover;
        background-position: center;
    }

    .box .boxItem:hover {
        opacity: 1;
    }
</style>