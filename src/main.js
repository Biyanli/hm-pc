import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import App from './App.vue'
// 导出挂载的实例
import router from '@/router'
// 日志的详细与否 生产环境 开发环境
Vue.config.productionTip = false
Vue.use(ElementUI)
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

// main.js 入口文件
// 职责：做全局范围内的配置和依赖  创建一个根VUE实例
