import Vuex from 'vuex'
import Vue from 'vue'
import router from '@/router/index.js'
import { i18n } from '@/lang/index.js'
import { getPrimaryImg, toLogin } from '@/api/requests.js'

Vue.use(Vuex)

const state = {
    userInfo: {
        account: 'admin',
        password: 'admin123',
        verify: '',
        primaryImg: '',
        code: -1000,
        type: false,
        token: ''
    },
    lang: {
        isEn: 'zh'
    }
}

const mutations = {
    getLocalLang({ lang }, l) {
        if (l) {
            lang.isEn = l === '中文' ? 'en' : 'zh'
            i18n.locale = lang.isEn
        }
        i18n.locale = lang.isEn
    }
}

const actions = {
    getImgs({ state }) {
        return new Promise((resolve, reject) => {
            getPrimaryImg('/captchaImage').then(res => {
                state.userInfo.verify = ''
                let binaryData = res.data.img
                state.userInfo.primaryImg = 'data:image/jpeg;base64,' + binaryData;
                state.userInfo.code = res.data.uuid
                resolve();
            }).catch(error => {
                reject(error);
            });
        });
    },
    onSubmit({ state }) {
        const loginData = {
            password: state.userInfo.password,
            username: state.userInfo.account,
            code: state.userInfo.verify,
            uuid: state.userInfo.code,
        }
        toLogin('/login', 'POST', loginData).then(res => {
            if (res.data.code === 500) {
                alert(res.data.msg)
                state.userInfo.password = ''
                state.userInfo.verify = ''
                this.getImgs()
                return
            }
            if (res.data.code === 200) {
                state.userInfo.token = res.data.token
                sessionStorage.setItem('stoken', JSON.stringify(res.data.token))
                if (state.userInfo.type) {
                    localStorage.setItem('token', JSON.stringify(state.userInfo.token))
                } else {
                    localStorage.clear('token')
                }
                setTimeout(() => {
                    router.push('/')
                }, 1000);
            } else {
                alert('登录失败，请检查用户名、密码和验证码是否正确')
                state.userInfo.password = ''
                state.userInfo.verify = ''
            }
        })
    }
}

export default new Vuex.Store({
    state,
    mutations,
    actions
})