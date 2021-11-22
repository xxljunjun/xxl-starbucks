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

const Slect=()=>import('@/pages/select/select.vue')

const About=()=>import('@/pages/about/about.vue')

const Take=()=>import('@/pages/take/take.vue')

const Send=()=>import('@/pages/send/send.vue')

const Help=()=>import('@/pages/help/help.vue')

const routes = [
	{ path: '/home', component: Home },
	{ path: '/login', component: Login },
	{ path: '/register', component: Register },
	{ path: '/club', component: Club },
	{ path: '/menu', component: Menu },
	{ path: '/app', component: App },
	{ path: '/map', component: Map },
	{ path: '/select', component: Slect },
	{ path: '/about', component: About },
	{ path: '/take', component: Take },
	{ path: '/send', component: Send },
	{ path: '/help', component: Help },
	{ path: '/prize', component: Prize },
]

export default new VueRouter({
	mode: 'history',
	routes: [
		...routes,
		{ path: '/*', redirect: '/home' }
	]
})