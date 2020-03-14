import Vue from 'vue'
import App from './App.vue'
// 日志的详细与否 生产环境 开发环境
Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')

// main.js 入口文件
// 职责：做全局范围内的配置和依赖  创建一个根VUE实例
