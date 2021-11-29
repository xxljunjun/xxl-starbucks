### xxl-starbucks

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm serve
```

### Compiles and minifies for production
```
npm build
```

### Lints and fixes files
```
npm lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

### 一、@vuew/cli搭建项目
+ npm run @vue/cli -g
+ vue create beauty-pc

### 二、安装sass
+ npm install node-sass@4.14.1 --save-dev
+ npm install sass-loader@8.0.2 --save-dev 

### 三、安装vue-router
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

### 四、集成element-UI
+ npm i element-ui -S

### 五、安装vuex
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

### 六、安装基于vue的地图插件
```
//暂时不支持typescript
npm install vue-amap --save
```
### 七、集成typescript
```js
vue add typescript
//采用vue-property-decorator和vue-class-component装饰器语法书写代码
import { 
  Vue, 
  Component, 
  Prop, 
  PropSync,
  Model,
  Watch,
  Emit, 
  Ref, 
  Provide, 
  ProvideReactive,
  Inject, 
  InjectReactive 
} from 'vue-property-decorator';

```
### 八、封装axios请求
```
cnpm install --save axios
```
### 九、安装mockjs
```
cnpm install mockjs -D
```
### 十、配置区分环境变量
+ 获取环境变量
```js
console.lgo('获取全局环境变量',process.env)
//.env.dev
"dev": "vue-cli-service serve --mode dev",

//.env.test
"dev": "vue-cli-service serve --mode test",

//.env.prod
"dev": "vue-cli-service serve --mode prod",

```
### 十一、安装vuex-class
```js
// npm install --save vuex-class
import {
  State,
  Getter,
  Action,
  Mutation,
  namespace
} from 'vuex-class'
const someModule = namespace('path/to/module')
export class MyComp extends Vue {
  @State('foo') stateFoo
  @State(state => state.bar) stateBar
  @Getter('foo') getterFoo
  @Action('foo') actionFoo
  @Mutation('foo') mutationFoo
  @someModule.Getter('foo') moduleGetterFoo
 
  // If the argument is omitted, use the property name
  // for each state/getter/action/mutation type
  @State foo
  @Getter bar
  @Action baz
  @Mutation qux
 
  created () {
    this.stateFoo // -> store.state.foo
    this.stateBar // -> store.state.bar
    this.getterFoo // -> store.getters.foo
    this.actionFoo({ value: true }) // -> store.dispatch('foo', { value: true })
    this.mutationFoo({ value: true }) // -> store.commit('foo', { value: true })
    this.moduleGetterFoo // -> store.getters['path/to/module/foo']
  }
}
```