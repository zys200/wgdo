import Vue from 'vue'
import App from './App.vue'
import { Input, Form, FormItem, Carousel, CarouselItem, Checkbox, Button } from 'element-ui';
import '@/style.css'
import '@/static/iconfonts/index.css'
import { i18n } from '@/lang/index.js'
import router from '@/router/index.js'
import store from '@/store/index.js'

Vue.use(Input).use(Form).use(FormItem).use(Carousel).use(CarouselItem).use(Checkbox).use(Button)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount('#app')