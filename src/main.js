import Vue from 'vue'
import App from './App.vue'
import router from './router/index.js'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import store from './store'

Vue.use(ElementUI);
Vue.config.productionTip = false

// 引入vue-amap
import AMap from 'vue-amap';
Vue.use(AMap);
// 初始化vue-amap
AMap.initAMapApiLoader({
  // 申请的高德key
  key: 'YOUR_KEY',
  // 插件集合
  plugin: ['']
});

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
