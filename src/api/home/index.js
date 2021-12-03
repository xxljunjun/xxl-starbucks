import request from '@/api/axios'
export function getWeather(params) {
	return request({
		url: `/he/freeweather?city=${params.city}&appkey=${params.appkey}`,
		method: 'get',
	})
}

export function testmock() {
	return request({
		url: '/user/list',
		method: 'get'
	})
}

export function getProvince() {
	return request({
		url: '/location/province',
		method: 'get'
	})
}

export function getCityList() {
	return request({
		url: '/location/city',
		method: 'get'
	})
}

export function getCountylist() {
	return request({
		url: '/location/county',
		method: 'get'
	})
}
