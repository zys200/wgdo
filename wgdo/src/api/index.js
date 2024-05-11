import axios from 'axios'
import router from '@/router/index.js'

const instanceRequest = axios.create({
    baseURL: 'http://106.3.97.14:9002/prod-api/',
    timeout: 1000,
    headers: {
        'Content-Type': 'application/json'
    }
})

instanceRequest.interceptors.request.use(config => {
    const stoken = sessionStorage.getItem('stoken')
    const token = localStorage.getItem('token');
    if (stoken) {
        config.headers = { 'Authorization': JSON.parse(stoken) }
    } else if (token) {
        config.headers = { 'Authorization': JSON.parse(token) };
    }
    return config
}, err => {
    return Promise.reject(err)
})

instanceRequest.interceptors.response.use(response => {
    response.headers['Access-Control-Allow-Origin'] = '*'
    if (response.data.code === 401) {
        setTimeout(() => {
            sessionStorage.clear('stoken')
            localStorage.clear('token');
        }, 1000);
        if (router.currentRoute.path !== '/login') {
            router.push('/login').then(() => {
                alert('登录信息已过期，请重新登录')
            })
        }
    }
    return response
}, error => Promise.reject(error))

export default instanceRequest