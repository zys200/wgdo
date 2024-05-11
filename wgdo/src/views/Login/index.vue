<template>
    <div class="box">
        <div class="logo">
            <a href="/">
                <img class="logoImg"
                    src="https://img.js.design/assets/img/656e8dc581ed4034e8a418ee.png#680cdd771a71f03f8da7ef2659786ac3">
                <div class="logoDsc">
                    <div class="logoDscTop">世界绿色设计组织</div>
                    <div class="logoDscBot">World Green Design Organization</div>
                </div>
            </a>
        </div>
        <div class="main">
            <div class="title">{{$t('login.title')}}</div>
            <div class="inp">
                <el-form ref="loginForm" :model="$store.state.userInfo" :rules="loginRules" label-width="auto"
                    style="max-width: 600px">
                    <div class="boxItem">
                        <div class="icons"><i class="iconfont icon-Account"></i></div>
                        <el-form-item class="passInp" prop="account">
                            <el-input v-model="$store.state.userInfo.account" type="primary"
                                :placeholder="$t('login.one')" />
                        </el-form-item>
                    </div>
                    <div class="boxItem">
                        <div class="icons"><i class="iconfont icon-lock"></i></div>
                        <el-form-item class="passInp" prop="password">
                            <el-input v-model="$store.state.userInfo.password" type="password"
                                :placeholder="$t('login.two')" />
                        </el-form-item>
                    </div>
                    <div class="verify">
                        <div class="boxItem">
                            <div class="icons"><i class="iconfont icon-dunpai"></i></div>
                            <el-form-item class="passInp" prop="verify">
                                <el-input v-model="$store.state.userInfo.verify" type="primary"
                                    :placeholder="$t('login.three')" />
                            </el-form-item>
                        </div>
                        <div class="vfy" @click="$store.dispatch('getImgs')">
                            <img :src="$store.state.userInfo.primaryImg" alt="验证码图片">
                        </div>
                    </div>
                    <div class="checked">
                        <el-checkbox v-model="$store.state.userInfo.type"
                            name="type"><span>{{$t('login.autoLogin')}}</span></el-checkbox>
                    </div>
                    <el-form-item class="submit">
                        <el-button type="primary" @click="toClick">登录</el-button>
                    </el-form-item>
                </el-form>
            </div>
        </div>
    </div>
</template>

<script>
    import { mounted, beforeDestroy } from 'vue'

    export default {
        name: 'LoginS',
        data() {
            let loginRules = {
                account: [
                    { required: true, message: '请输入用户名', trigger: 'blur' },
                    { min: 1, max: 16, message: '用户名长度在 1 到 16 个字符', trigger: 'blur' }
                ],
                password: [
                    { required: true, message: '请输密码', trigger: 'blur' },
                    { min: 1, max: 16, message: '密码长度在 1 到 16 个字符', trigger: 'blur' }
                ],
                verify: [
                    { required: true, message: '请输验证码', trigger: 'blur' },
                    { min: 1, max: 6, message: '密码长度在 1 到 6 个字符', trigger: 'blur' }
                ]
            }
            return {
                loginRules
            }
        },
        mounted() {
            this.$i18n.locale = this.$store.state.lang.isEn;
            console.log(this.$i18n.locale);
            this.$store.dispatch('getImgs');
            window.addEventListener('keyup', this.keyUp)
        },
        methods: {
            toClick() {
                this.$refs.loginForm.validate((valid) => {
                    if (valid) {
                        this.$store.dispatch('onSubmit');
                    } else {
                        alert('请先填写表单内容')
                    }
                })
            },
            keyUp(e) {
                if (e.keyCode === 13) {
                    this.$refs.loginForm.validate((valid) => {
                        if (valid) {
                            this.$store.dispatch('onSubmit');
                        } else {
                            alert('请先填写表单内容')
                        }
                    })
                }
            }
        },
        beforeDestroy() {
            window.removeEventListener('keyup', this.keyUp, false);
        }
    }
</script>

<style scoped>
    .box {
        position: relative;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
        background: url('https://img.js.design/assets/img/6629d3bf1f0c469d4eebe48c.jpg#c863c4d205f04dd970125940a1bd316d');
        background-repeat: no-repeat;
        background-size: cover;
        overflow: hidden;
    }

    /* logo */
    .box .logo a {
        padding: 53px 0 0 53px;
        display: flex;
    }

    .box .logo .logoImg {
        display: block;
        margin: 25.91px 12px 0px 0px;
        min-width: 48.77px;
        max-width: 48.77px;
        min-width: 38.1px;
        max-width: 48.77px;
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;
        object-fit: scale-down;
    }

    .box .logo .logoDsc {
        display: flex;
        flex-direction: column;
        margin-top: 29px;
    }

    .box .logo .logoDsc .logoDscTop {
        left: 204.02px;
        top: 28.96px;
        width: 152.4px;
        height: 20.57px;
        font-size: 15.24px;
        font-weight: 500;
        letter-spacing: 3.81px;
        line-height: 20.21px;
        color: rgba(255, 255, 255, 1);
        text-align: left;
    }

    .box .logo .logoDsc .logoDscBot {
        left: 204.02px;
        right: 49.53px;
        width: 152.4px;
        height: 12.19px;
        font-size: 9.14px;
        font-weight: 500;
        letter-spacing: 0px;
        line-height: 12.12px;
        color: rgba(255, 255, 255, 1);
        text-align: left;
    }

    /* main */
    .main {
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(-13vw, 26vh);
        width: 304.79px;
        height: 295.65px;
    }

    .main .title {
        top: 0px;
        width: 100%;
        height: 15.24px;
        font-size: 15.24px;
        font-weight: 700;
        letter-spacing: 0px;
        line-height: 15.24px;
        color: rgba(7, 20, 40, 1);
        text-align: center;
    }

    .main .inp {
        margin-top: 30px;
    }

    .main .inp .el-form {
        width: 100%;
        height: 100%;
    }

    .main .inp .el-form .boxItem {
        display: flex;
        margin-bottom: 18px;
        width: 305px;
        height: 37px;
        border-radius: 1.52px;
        background-color: rgba(255, 255, 255, 1);
    }

    .main .inp .el-form .boxItem .icons {
        padding: 8px 14px;
        height: 37px;
    }

    .main .inp .el-form .boxItem .icons i {
        border: .5px dashed rgba(125, 133, 146, 1);
    }

    .main .inp .el-form .boxItem .icons i {
        width: 8.95px;
        height: 9.48px;
        opacity: 0.5;
        background: rgba(125, 133, 146, .1);
    }

    .main .inp .el-form .boxItem .passInp {
        flex: 1;
        height: 37px;
    }

    :deep(.el-input__wrapper) {
        padding: 0;
        background-color: rgba(0, 0, 0, 0);
        box-shadow: none;
    }

    :deep(.el-input__inner) {
        opacity: 0.5;
        height: 37px;
        font-size: 12.19px;
        font-weight: 400;
        letter-spacing: 0px;
        line-height: 12.19px;
        color: rgba(125, 133, 146, 1);
        text-align: left;
        border: none;
        overflow: hidden;
    }

    /* verify */
    .main .inp .el-form .verify {
        display: flex;
        gap: 0 12px;
        width: 304.79px;
        height: 37px;
    }

    .verify .vfy {
        width: 85.34px;
        height: 36.57px;
        border-radius: 1.52px;
        background: rgba(229, 229, 229, 1);
    }

    .verify .vfy img {
        width: 100%;
        height: 100%;
        background-size: cover;
        background-position: center;
        overflow: hidden;
    }

    /* checked */
    .checked {
        display: flex;
        align-items: center;
        margin-top: 16px;
        height: 12.19px;
    }

    .checked .el-checkbox {
        height: 12.19px;
        line-height: 12.19px;
    }

    .checked .el-checkbox span {
        left: 18.29px;
        top: 0px;
        width: 42.67px;
        height: 12.19px;
        font-size: 10.67px;
        font-weight: 400;
        letter-spacing: 0px;
        line-height: 12.19px;
        color: rgba(7, 20, 40, 1);
        text-align: left;
    }

    :deep(.el-checkbox__label) {
        height: 12.19px;
        line-height: 12.19px;
        border-radius: 1.52px;
        padding: 4px 3px;
    }

    .checked span {
        height: 12.19px;
        line-height: 12.19px;
        font-size: 10.67px;
        font-weight: 400;
        letter-spacing: 0px;
        line-height: 12.19px;
        color: rgba(7, 20, 40, 1);
    }

    :deep(.el-checkbox__inner.is-checked) {
        background-size: cover;
        background-repeat: no-repeat;
        border: none;
        border-radius: 0;
        filter: brightness(0) invert(1);
        width: 4px;
        height: 5px;
    }

    :deep(.el-checkbox__input.is-checked .el-checkbox__inner) {
        background-color: rgba(54, 151, 81, 1);
        background-image: url('@/static/imgs/dagou.png');
        background-repeat: no-repeat;
        background-position: center;
    }

    /* :deep(.el-checkbox__input.is-checked .el-checkbox__inner::after) {} */

    :deep(.el-checkbox__inner:hover) {
        box-shadow: none;
    }

    /* button */
    .main .inp .el-form .submit .el-button {
        margin-top: 38px;
        width: 304.79px;
        height: 36.57px;
        text-align: center;
        border-radius: 1.52px;
        background: rgba(54, 151, 81, 1);
        color: #fff;
        border: none;
    }
</style>