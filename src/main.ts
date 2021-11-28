import Vue from 'vue'
import App from '@/App.vue'
import router from '@/router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import store from '@/store'
import '@/mock/index.js'
import AMap from 'vue-amap';

console.log('当前环境变量',process.env)
require("@/mock");
Vue.use(ElementUI);
Vue.use(AMap);// 引入vue-amap
// 初始化vue-amap
AMap.initAMapApiLoader({
  // 申请的高德key
  key: 'YOUR_KEY',
  // 插件集合
  plugin: ['']
});
Vue.config.productionTip = false
new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
