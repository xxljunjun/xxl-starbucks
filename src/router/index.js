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