<template>
    <div class="box">
        <div class="hTop">
            <div class="logo">
                <img class="logoImg"
                    src="https://img.js.design/assets/img/656e8dc581ed4034e8a418ee.png#680cdd771a71f03f8da7ef2659786ac3">
                <div class="logoDsc">
                    <div class="logoDscTop">世界绿色设计组织</div>
                    <div class="logoDscBot">World Green Design Organization</div>
                </div>
            </div>
            <div class="right">
                <div class="search">
                    <i class="iconfont icon-sousuo scarchI"></i>
                    <el-input class="searchIn" v-model="searchInp" :placeholder="$t('headernav.search')" />
                </div>
                <div class="rightList">
                    <div class="login"><a href="login">Login</a></div>
                    <div class="loginO"></div>
                    <div class="sed">Be our merber</div>
                    <div class="langs" @click="changeLang">
                        <div class="lang">{{lang}}</div>
                        <div class="langO"><i class="iconfont icon-xiangxiajiantou"></i></div>
                    </div>
                </div>
            </div>
        </div>
        <div class="hBottom">
            <a href="">{{$t('headernav.Aboutus')}}</a>
            <a href="">{{$t('headernav.Conferenceactivity')}}</a>
            <a href="">{{$t('headernav.Mediacenter')}}</a>
            <a href="">{{$t('headernav.Academicresearch')}}</a>
            <a href="">{{$t('headernav.Public welfare project')}}</a>
            <a href="">{{$t('headernav.International Green Award')}}</a>
            <a href="">{{$t('headernav.WGDO Green Research Institute')}}</a>
            <a href="">{{$t('headernav.Green leaf label')}}</a>
            <!-- <a href="#" v-for="(item, index) in bannerNavList" :key="index">
                {{ item }}
            </a> -->
        </div>
    </div>
</template>

<script>
    import { mounted } from 'vue'

    export default {
        name: 'HeaderNav',
        data() {
            let searchInp = ''
            let bannerNavList = [
                '关于我们',
                '会议活动',
                '媒体中心',
                '学术研究',
                '公益项目',
                '国际绿奖',
                'WGDO绿研院',
                '绿叶标'
            ]
            let isText1Visible = true
            let lang = 'En'
            return {
                searchInp,
                bannerNavList,
                isText1Visible,
                lang,
            }
        },
        mounted() {
            this.isText1Visible = false
        },
        methods: {
            changeLang() {
                this.isText1Visible = !this.isText1Visible
                this.isText1Visible == true ? this.lang = '中文' : this.lang = 'En'
                this.$store.commit('getLocalLang', this.lang);
            }
        }
    }
</script>

<style scoped>
    .box {
        width: 100vw;
        height: 143.25px;
        background-color: rgba(0, 0, 0, .5);
        overflow: hidden;
    }

    .hTop {
        margin: 0 auto;
        width: 80.2vw;
        display: flex;
    }

    /* logo */
    .hTop .logo {
        display: flex;
        left: 0;
    }

    .hTop .logo .logoImg {
        display: block;
        margin: 25.91px 12px 0px 0px;
        width: 48.77px;
        height: 38.1px;
        background-repeat: no-repeat;
        background-size: cover;
        object-fit: scale-down;
    }

    .hTop .logo .logoDsc {
        display: flex;
        flex-direction: column;
        margin-top: 29px;
    }

    .hTop .logo .logoDsc .logoDscTop {
        left: 204.02px;
        top: 28.96px;
        width: 252.4px;
        height: 20.57px;
        font-size: 15.24px;
        font-weight: 500;
        letter-spacing: 3.81px;
        line-height: 20.21px;
        color: rgba(255, 255, 255, 1);
        text-align: left;
    }

    .hTop .logo .logoDsc .logoDscBot {
        left: 204.02px;
        top: 49.53px;
        width: 252.4px;
        height: 12.19px;
        font-size: 9.14px;
        font-weight: 500;
        letter-spacing: 0px;
        line-height: 12.12px;
        color: rgba(255, 255, 255, 1);
        text-align: left;
    }

    .right {
        flex: 1;
        display: flex;
        justify-content: flex-end;
    }

    .right .search {
        display: flex;
        margin-top: 33.53px;
        width: 131.06px;
        height: 30.48px;
        border-radius: 15.24px;
        border: 0.76px solid rgba(255, 255, 255, 1);
    }

    .right .search .scarchI {
        margin: 7px 2px 5px 7px;
        width: 16.44px;
        height: 16.44px;
        color: rgba(255, 255, 255, 1);
    }

    /* input */
    .right .search .searchIn {
        margin-left: -5px;
        width: 104px;
    }

    :deep(.el-input__wrapper) {
        background-color: rgba(0, 0, 0, 0);
        box-shadow: none;
    }

    :deep(.el-input__inner) {
        background-color: rgba(255, 255, 255, 0);
        height: 30.48px;
        border: none;
    }

    .right .rightList {
        display: flex;
        align-items: center;
    }

    .right .rightList .login {
        margin: 38px 0 0 23px;
        width: 39.62px;
        height: 18.29px;
        font-size: 13.72px;
        font-weight: 400;
        letter-spacing: 0.76px;
        line-height: 18.19px;
        color: rgba(255, 255, 255, 1);
    }

    .login a {
        color: #FFFFFF;
    }

    .right .rightList .loginO {
        margin: 39px 0 0 11px;
        width: 10.67px;
        height: 0px;
        transform: rotate(90deg);
        border: 0.76px solid rgba(255, 255, 255, 1);
    }

    .right .rightList .sed {
        margin: 40px 0px 0 11px;
        min-width: 104.68px;
        height: 18.29px;
        font-size: 13.72px;
        font-weight: 400;
        letter-spacing: 0.76px;
        line-height: 18.19px;
        color: rgba(166, 225, 99, 1);
    }

    .right .rightList .langs {
        display: flex;
        justify-content: center;
        align-items: center;
        margin-left: 23px;
    }

    .right .rightList .langs .lang {
        margin-top: 40px;
        /* width: 40.29px; */
        height: 18.29px;
        font-size: 13.72px;
        font-weight: 400;
        letter-spacing: 0.76px;
        line-height: 18.19px;
        color: rgba(255, 255, 255, 1);
    }

    .right .rightList .langs .langO i {
        display: inline-block;
        margin: 43px 12px 0px 2%;
        width: 6.25px;
        height: 4.04px;
        color: rgba(255, 255, 255, 1);
    }

    /* bottom */
    .hBottom {
        margin: 0 auto;
        width: 85.5vw;
        max-width: 86.2vw;
        height: 79.25px;
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(70px, 1fr));
        gap: 10px;
        overflow: hidden;
    }

    .hBottom a {
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;
        max-width: 180px;
        font-size: 16.76px;
        font-weight: 500;
        letter-spacing: 0.76px;
        line-height: 22.23px;
        color: rgba(255, 255, 255, 1);
        /* text-align: left; */
        vertical-align: top;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }

    .hBottom a:hover {
        color: rgba(166, 225, 99, 1);
    }

    .hBottom a::after {
        content: "";
        position: absolute;
        height: 12px;
        width: 1px;
        background-color: #FFFFFF;
        right: 0;
    }

    .hBottom a:last-child::after {
        background-color: rgba(255, 255, 255, 0);
    }
</style>