import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)  // 路由注册

const Home = () => import('@/pages/index.vue')

//登录注册模块
const Register =()=>import("@/pages/login/register.vue")
const Club =()=>import("@/pages/login/club.vue")
const Login =()=>import("@/pages/login/login.vue")

//菜单模块
const Menu = ()=>import('@/pages/menu/menu.vue')

const App = ()=>import('@/pages/app/app.vue')

const Map =()=>import('@/pages/map/map.vue')

const Prize =()=>import('@/pages/prize/prize.vue')

const routes = [
	{ path: '/home', component: Home },
	{ path: '/login', component: Login },
	{ path: '/register', component: Register },
	{ path: '/club', component: Club },
	{ path: '/menu', component: Menu },
	{ path: '/app', component: App },
	{ path: '/map', component: Map },
	{ path: '/prize', component: Prize },
]

export default new VueRouter({
	mode: 'history',
	routes: [
		...routes,
		{ path: '/*', redirect: '/home' }
	]
})