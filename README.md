# beauty-pc

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn serve
```

### Compiles and minifies for production
```
yarn build
```

### Lints and fixes files
```
yarn lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

# 一、@vuew/cli搭建项目
+ npm run @vue/cli -g
+ vue create beauty-pc

# 二、安装sass
+ npm install node-sass@4.14.1 --save-dev
+ npm install sass-loader@8.0.2 --save-dev 

# 三、安装vue-router
+ npm install vue-router
+ 在main.js文件中
import router from './router/index.js'
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
+ 在router/index.js文件中
import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)  // 路由注册

const Home = () => import('@/pages/index.vue')

const routes = [
	{ path: '/home', component: Home },
]

export default new VueRouter({
	mode: 'history',
	routes: [
		...routes,
		{ path: '/*', redirect: '/home' }
	]
})

# 四、完成功能滚动条、滑入放大、tab切换功能,轮播图功能，scrollIntoView功能


# 五、集成element-UI
+ npm i element-ui -S