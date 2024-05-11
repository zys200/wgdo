import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import Home from '@/views/Home/index.vue'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
        meta: {
            isAuth: true
        }
    },
    {
        path: '/login',
        name: 'Login',
        component: () => import('@/views/Login/index.vue'),
        meta: {
            isAuth: true
        }
    }
]

const router = new VueRouter({
    routes,
    mode: 'history'
})


router.beforeEach((to, from, next) => {
    if (to.meta.isAuth) {
        let token = localStorage.getItem('token')
        let stoken = sessionStorage.getItem('stoken')
        if (to.path === '/login' || token || stoken) {
            next()
        } else {
            next('/login')
        }
    } else {
        next()
    }
})

export default router