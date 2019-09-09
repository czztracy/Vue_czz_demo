import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'
import i18n from '@/locale'
import 'element-ui/lib/theme-chalk/index.css'
import 'font-awesome/css/font-awesome.css'
import '@/utils/privilege'
import '@/icons'
import 'echarts/extension/bmap/bmap.js'
import echarts from 'echarts'

Vue.use(ElementUI)
Vue.prototype.$echarts = echarts
Vue.config.productionTip = false

new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount('#app')
