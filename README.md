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

# 四、集成element-UI
+ npm i element-ui -S

# 五、安装vuex
+ npm install vuex --save
+ 新建store/index.js
import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const store = new Vuex.Store({
	state: {
		// state是存储中心，所有需要被共享或缓存的数据，都在这里定义
		status: true,
		token: "7758258",
	},
	getters: {
		// getters相当于组件的计算属性，它与state相关，当它所关系的state变量发生变化时，会自动重新计算
	},
	mutations: {
		// mutations是Vuex中专门用于更新state,同步任务
		toChaneStatus(state, pyylod) {
			console.log(state)
			console.log(pyylod)
		}
	},
	actions: {
		toChang(store, payload) {
			console.log(store)
			console.log(payload)
			store.commit("toChaneStatus", payload)
		}
		// actions是专门与后端api打交道的，异步任务;提交的是 mutation，而不是直接变更状态;可以包含任意异步操作。
	},
	modules: {
		//vuex分模块处理
	}
})
export default store
+ main.js
import store from './store'
const app = new Vue({
	store
})
app.$mount()