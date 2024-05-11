<template>
    <div class="box">
        <span :style="style2"></span>
        <span :style="style2"></span>
        <span :style="style2"></span>
        <span :style="style2"></span>
        <div class="boxTitle" :style="styles">{{isTitle}}</div>
        <span :style="style2"></span>
        <span :style="style2"></span>
        <span :style="style2"></span>
        <span :style="style2"></span>
    </div>
</template>

<script>
    export default {
        name: 'TitlsStyle',
        props: ['isTitle', 'styles', 'style2']
    }
</script>

<style scoped>
    .box {
        width: 100%;
        display: flex;
        align-items: center;
    }

    .box .boxTitle {
        width: 100%;
    }

    .box span {
        border-radius: 50%;
        /* background: rgb(255, 255, 255); */
        transform: rotate(180deg);
        opacity: 1;
    }

    .box span:not(:nth-child(4), span:last-child) {
        margin-right: 6px;
    }

    .box span:first-child,
    span:last-child {
        width: 1.52px;
        height: 1.52px;
    }

    .box span:nth-child(2),
    span:nth-last-child(2) {
        width: 3.05px;
        height: 3.05px;
    }

    .box span:nth-child(3),
    span:nth-last-child(3) {
        width: 4.57px;
        height: 4.57px;
    }

    .box span:nth-child(4),
    span:nth-last-child(4) {
        width: 6.1px;
        height: 6.1px;
    }
</style>