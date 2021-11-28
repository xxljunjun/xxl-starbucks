import request from '@/api/axios'
export function getWeather(params) {
	return request({
		url: `/he/freeweather?city=${params.city}&appkey=${params.appkey}`,
		method: 'get',
	})
}

export function testmock() {
	return request({
		url: `/user/list`,
		method: 'get'
	})
}
