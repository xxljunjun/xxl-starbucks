const getProvince = {
    url: '/location/province',
    type: 'get',
    response: () => {
        return {
            code: 200,
            data: {
                provinceList:[
                    {id:1,txt:"A-G",local:[
                        {isselect:false,name:"北京"},
                        {isselect:false,name:"安徽"},
                        {isselect:false,name:"福建"},
                        {isselect:false,name:"广东"},
                        {isselect:false,name:"重庆"},
                        {isselect:false,name:"贵州"}
                        ]},
                    {id:2,txt:"H-",local:[
                        {isselect:false,name:"河北"},
                        {isselect:false,name:"内蒙古"},
                        {isselect:false,name:"吉林"},
                        {isselect:false,name:"黑龙江"},
                        {isselect:false,name:"江苏"},
                        {isselect:false,name:"江西"},
                         {isselect:false,name:"河南"},
                        {isselect:false,name:"湖北"}
                    ]},
                    {id:3,txt:"K",local:[
                        {isselect:false,name:"湖南"},
                        {isselect:false,name:"海南"},
                    ]},
                    {id:4,txt:"L-S",local:[
                        {isselect:false,name:"山西"},
                        {isselect:false,name:"辽宁"},
                        {isselect:false,name:"上海"},
                        {isselect:false,name:"山东"},
                        {isselect:false,name:"四川"},
                        {isselect:false,name:"陕西"},
                    ]},
                    {id:5,txt:"T-Z",local:[
                        {isselect:false,name:"天津"},
                        {isselect:false,name:"浙江"},
                        {isselect:false,name:"云南"},
                        {isselect:false,name:"西藏"},
                        {isselect:false,name:"新疆"},
                    ]},
                ]
            }
        }
    }
}
const getCityList = {
    url: '/location/city',
    type: 'get',
    response: () => {
        return {
            code: 200,
            data: {
                cityList:[
                    {id:1,city:'不限',isselect:false},
            {id:2,city:'广州',isselect:false},
            {id:3,city:'韶关',isselect:false},
            {id:4,city:'深圳',isselect:false},
            {id:5,city:'珠海',isselect:false},
                ]
            }
        }
    }
}
const getCountylist = {
    url: '/location/county',
    type: 'get',
    response: () => {
        return {
            code: 200,
            data: {
                countryList:[
                    {id:1,country:'不限',isselect:false},
            {id:2,country:'南雄',isselect:false},
            {id:3,country:'乐昌',isselect:false},
            {id:4,country:'武江',isselect:false},
            {id:5,country:'浈江',isselect:false},
                ]
            }
        }
    }
}

module.exports = [
    getProvince,
    getCityList,
    getCountylist
]