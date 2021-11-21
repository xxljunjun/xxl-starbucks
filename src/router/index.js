import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)  // 路由注册

const Home = () => import('@/pages/index.vue')

//登录注册模块
const Register =()=>import("@/pages/login/register.vue")
const Club =()=>import("@/pages/login/club.vue")
const Login =()=>import("@/pages/login/login.vue")

const routes = [
	{ path: '/home', component: Home },
	{ path: '/login', component: Login },
	{ path: '/register', component: Register },
	{ path: '/club', component: Club },
]

export default new VueRouter({
	mode: 'history',
	routes: [
		...routes,
		{ path: '/*', redirect: '/home' }
	]
})