// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router/router'//引用路由
import ElementUI from 'element-ui';//导入element UI库
import 'element-ui/lib/theme-chalk/index.css';//导入UI库所需的css
import store from './store/store'//引用vuex

Vue.config.productionTip = false
Vue.use(ElementUI);//使用element UI库

Vue.mixin({//全局混入对象
  created: function () {
    var myOption = this.$options.myOption;
    if (myOption) console.log("我用了全局混入对象" + myOption);
    // else console.log("我用了全局混入但没用混入对象");
  }
})
Vue.directive('modeA', {//全局自定义指令
  inserted: function (el, binding) {
    if (el.localName == "input") {//判断是否是input元素
      el.placeholder = "请输入" + binding.value;
      el.focus();
    }
  }
}
)
Vue.directive('red', {
  inserted: function (el) {
    if (el.localName == "p") {
      el.style.color = "red";
    }
  }
}
)
Vue.filter('happy', function (value) {
  return value + " 我是过滤内容";
}
)

/* eslint-disable no-new */
new Vue({
  router,//使用路由对象
  store,
  el: '#app',
  components: { App },
  template: '<App/>'
})
