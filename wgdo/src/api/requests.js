import instanceRequest from '@/api/index.js';

//获取验证码
export const getPrimaryImg = async function (url, method = 'GET') {
    return await instanceRequest({
        url,
        method
    });
};
//登录
export const toLogin = async function (url, method = 'POST', data = {}) {
    return await instanceRequest({
        url,
        method,
        data
    })
}

//获取内容
export const getContentList = async function (params) {
    return await instanceRequest({
        url: '/content/hp/list?pageNum=1&pageSize=10',
        method: 'GET',
        params
    })
}