<template>
  <div class="choose_location"
       v-if="selectBoxStatus"
       @click.stop>
    <p class="txt">当前定位:</p>
    <div class="local"
         @click="selectlocation">{{mapLocal}}</div>
    <p class="select_local">
      <span>选择其他 </span>
      <span :class="step ==1?'activity':'btns'"
            @click="chooseWho('province')">省份 </span>
      <span>> </span>
      <span :class="{activity:step ==2,forbide:cityList.length==0}"
            class="btns"
            @click="chooseWho('city')">城市 </span>
      <span>> </span>
      <span :class="{activity:step ==3,forbide:countryList.length==0}"
            class="btns"
            @click="chooseWho('county')">县区</span>
    </p>
    <div class="local_name"
         v-if="step ==1">
      <p v-for='item in provinceList'
         :key='item.id'
         class="xxl_p">
        <span class="zimu">{{item.txt}}</span>
        <span v-for='(val,index) in item.local'
              :key='index'
              class="my_name"
              :class="{activity:val.isselect}"
              @click="chooseProvince(val)">{{val.name}}</span>
      </p>
    </div>
    <div class="local_name"
         v-if="step ==2">
      <span v-for='item in cityList'
            :key='item.id'
            class="my_name"
            :class="{activity:item.isselect}"
            @click="chooseCity(item)">{{item.city}}</span>
    </div>
    <div class="local_name"
         v-if="step ==3">
      <span v-for='item in countryList'
            :key='item.id'
            class="my_name"
            :class="{activity:item.isselect}"
            @click="chooseCountry(item)">{{item.country}}</span>
    </div>
    <div class="bottom">
      <span class="bottom_txt">仅可搜索中国大陆地区门店</span>
      <span :class="status?'btn activity':'btn'"
            @click="comfire">确认</span>
    </div>
  </div>
</template>

<script lang='ts'>
import { Component, Vue,Prop,Watch } from "vue-property-decorator"
import { getProvince,getCityList,getCountylist} from '@/api/home/index'
interface dataObj{
    province:string,
    city:string,
    country:string
}
@Component({
})
export default class App extends Vue {
    mapLocal:string = '广州 深圳 福田'
    submitData:dataObj = {
        province:'',
        city:'',
        country:''
    }
    step:number = 1
    status:Boolean=false
    provinceList:Array<any>= []
    cityList:Array<any>= []
    countryList:Array<any>= []
    @Prop() selectBoxStatus: Boolean | undefined | null;
    @Watch('selectBoxStatus',{ immediate: true, deep: true })
    onboxHidden(newValue: string) {
        console.log(newValue)
        if(!newValue){
            this.status = false
            this.step = 1
            this.resetArr()
            this.cityList = []
            this.countryList = []
        }
    }
    mounted(){
        this.init()
    }
    init(){
        this.togetProvince()
    }
    /**
     * @function:获取省级列表
     */
    togetProvince(){
        getProvince().then((res:any)=>{
            console.log(res)
            if(res.code == 200){
                this.provinceList = res.data.provinceList
            }
        })
    }
     /**
     * @function:根据地理位置选择
     */
    selectlocation(){
        this.resetArr()
        this.status = true
        let arr:Array<any> = this.mapLocal.split(' ')
        this.submitData.province = arr[0]
        this.submitData.city = arr[1]
        this.submitData.country = arr[2]
    }
     /**
     * @function:重置数组中选中的项
     */
    resetArr(){
        this.cityList.forEach(item=>{
              item.isselect =false
          })
          this.provinceList.forEach(item=>{
            item.local.forEach((sum:any)=> {
                    sum.isselect = false
            })
        })
         this.countryList.forEach(item=>{
            item.isselect =false
          })
    }
    /**
     * @function:重置需要提交的数据
     */
    resetsubmitData(){
        this.submitData.province =''
        this.submitData.city = ''
        this.submitData.country =''
    }   
    /**
     * @function:选择省级
     */
    chooseProvince(val:any){
        this.status = true
        this.resetsubmitData()
        this.submitData.province = val.name
        this.step = 2
        this.provinceList
        this.provinceList.forEach(item=>{
            item.local.forEach((sum:any)=> {
                if(sum.name == val.name){
                    sum.isselect = true
                }else{
                    sum.isselect = false
                }
            })
        })
        this.togetCityList()
    }
    /**
     * @function:选择市级
     */
    chooseCity(val:any){
         this.submitData.city = val.city
          this.step = 3
          this.cityList.forEach(item=>{
              if(val.id == item.id){
                  item.isselect =true
              }else{
                   item.isselect =false
              }
          })
          this.togetCountylist()
    }
    /**
     * @function:选择县级
     */
    chooseCountry(val:any){
         this.submitData.country = val.country
          this.countryList.forEach(item=>{
              if(val.id == item.id){
                  item.isselect =true
              }else{
                   item.isselect =false
              }
          })
    }
    /**
     * @function:获取县级列表
     */
    togetCountylist(){
        getCountylist().then((res:any)=>{
            if(res.code ==200){
                 this.countryList = res.data.countryList
            }
        })
    }
    /**
     * @function:获取市级列表
     */
    togetCityList(){
        getCityList().then((res:any)=>{
            if(res.code ==200){
                 this.cityList = res.data.cityList
            }
        })
    }
    /**
     * @function:选择省、市、县
     */
    chooseWho(who:string){
        switch (who) {
            case 'province':
                this.step = 1
            break
            case 'city':
                if(this.cityList.length == 0){
                    return
                }
                this.step = 2
            break
            case 'county':
                 if(this.countryList.length == 0){
                    return
                }
                this.step = 3
            break
        }
    }
    /**
     * @function:该组件最后暴露出的方法和数据
     */
    comfire(){
        console.log("需要提交的数据",this.submitData)
        if(this.status){
            this.$emit('update:selectBoxStatus',false)
        }
        
    }
}
</script>

<style lang="scss" scoped>
.choose_location{
    padding: 16px 19px 21px;
    box-sizing: border-box;
    width: 520px;
    background: #fff;
    position: absolute;
    box-shadow: 1px 1px 10px #ccc;
    .txt{
        font-size: 12px;
        color: rgba(0, 0, 0, 0.56);
        margin: 20px 0 10px 0;
    }
    .local{
        display: inline-block;
        margin-top: 9px;
        padding: 3px 10px;
        background: #FFF;
        border: 1px solid #00A862;
        border-radius: 2px;
        line-height: normal;
        font-size: 14px;
        color: #00A862;
    }
    .select_local{
        font-size: 12px;
        color: rgba(0, 0, 0, 0.56);
        margin: 15px 0 15px 0 ;
        .btns{
            display: inline-block;
            color: #000;
        }
        .forbide{
            cursor:not-allowed;
            color: rgba(0, 0, 0, 0.56);
        }
        .activity{
             display: inline-block;
            color: #00A862;
            
        }
    }
    .local_name{
        font-size: 14px;
        .xxl_p{
            margin-bottom: 20px;
        }
        .my_name{
            display: inline-block;
             height: 25px;
            width: 48px;
            border-radius: 5px;
            line-height: 25px;
            text-align: center;
            &.activity{
                background: #00A862;
                color: #fff;
            }
        }
        .zimu{
            margin-right: 15px;
            display: inline-block;
            width: 30px;
        }
    }
    .bottom{
        display: flex;
        align-items: center;
        justify-content: space-between;
        .bottom_txt{
            font-size: 13px;
            color: rgba(0, 0, 0, 0.56);
        }
        .btn{
            display: inline-block;
            width: 60px;
            height: 30px;
            background: #ccc;
            border-radius: 15px;
            line-height: 30px;
            text-align: center;
            background: #f7f7f7;
            color: rgba(0, 0, 0, 0.38);
            cursor:not-allowed;
            &.activity{
                background: #00A862 ;
                color: #fff ;
                cursor: pointer;
            }
        }
    }
}
</style>