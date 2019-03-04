// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router/router'//引用路由
import ElementUI from 'element-ui';//导入element UI库
import 'element-ui/lib/theme-chalk/index.css';//导入UI库所需的css

Vue.config.productionTip = false
Vue.use(ElementUI);//使用element UI库

/* eslint-disable no-new */
new Vue({
  router,//使用路由对象
  el: '#app',
  components: { App },
  template: '<App/>'
})
