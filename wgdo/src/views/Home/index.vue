<template>
    <div class="box">
        <div class="header">
            <div class="headerNav">
                <HeaderNav />
            </div>
            <Carousel width="100vw" height="685.7px" :carouselData="headerData" />
        </div>
        <div class="seconds">
            <Second />
        </div>
        <div class="thrid">
            <Third />
        </div>
        <div class="fourth">
            <Fourth />
        </div>
        <div class="five">
            <Five />
        </div>
        <div class="six">
            <Sixth />
        </div>
        <div class="footer">
            <Footers />
        </div>
    </div>
</template>

<script>
    import { mounted } from 'vue'
    import { getContentList } from '@/api/requests.js'
    import HeaderNav from '@/views/Home/Header/HeaderNav.vue'
    import Carousel from '@/components/Carousel.vue'
    import Second from '@/views/Home/Second/index.vue'
    import Third from '@/views/Home/Third/index.vue'
    import Fourth from '@/views/Home/Fourth/index.vue'
    import Five from '@/views/Home/Five/index.vue'
    import Sixth from '@//views/Home/Sixth/index.vue'
    import Footers from '@/views/Home/Footer/index.vue'

    export default {
        name: 'HomeS',
        components: { HeaderNav, Carousel, Second, Third, Fourth, Five, Sixth, Footers },
        data() {
            let headerData = []
            return {
                headerData,
            }
        },
        mounted() {
            this.getHeaderNav()
        },
        methods: {
            getHeaderNav() {
                getContentList({ "moduleType": "0", "status": "1" }).then(res => {
                    if (res.data && Array.isArray(res.data.rows) && res.data.rows.length > 0) {
                        this.headerData = res.data.rows
                    }
                })
            }
        }
    }
</script>

<style scoped>
    .box {
        width: 100vw;
    }

    .header {
        position: relative;
        left: 0px;
        top: 0px;
        width: 100%;
        height: 685.78px;
    }

    .headerNav {
        position: absolute;
        z-index: 100;
    }

    .headerBg {
        position: absolute;
        left: 0px;
        top: 0px;
        width: 100vw;
        height: 685.78px;
        opacity: 1;
        z-index: 99;
    }

    /* 走马灯height*/
    :deep(.el-carousel__container) {
        height: 685.78px;
    }

    /* seconds */
    .seconds {
        min-height: 788.65px;
        background: rgba(62, 73, 56, 1);
    }

    /* third */
    .thrid {
        min-height: 809.22px;
        background: rgba(242, 241, 221, 1);
    }

    /* fourth */
    .fourth {
        /* min-height: 830.56px; */
        background: rgba(62, 73, 56, 1);
    }

    /* five */
    .five {
        /* min-height: 1932.38px; */
        background-color: rgba(242, 241, 221, 1);
    }

    /* six */
    .six {
        /* height: 1620.73px; */
        /* min-height: 1620.73px; */
        background: rgba(62, 73, 56, 1);
    }

    /* footer */
    .footer {
        background: rgba(166, 225, 99, 1);
    }
</style>