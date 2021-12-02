<template>
    <div class="choose_location" v-if="selectBoxStatus" @click.stop>
        <p class="txt">当前定位:</p>
        <div class="local" @click="selectlocation">广州 深圳 福田</div>
        <p class="select_local">
            <span>选择其他 </span>
            <span>省份 </span>
            <span>> </span>
            <span>城市 </span>
            <span>> </span>
            <span>县区</span>
        </p>
        <div class="local_name">
            <p v-for='item in countryList' :key='item.id' class="xxl_p">
                <span class="zimu">{{item.txt}}</span>
                <span v-for='(val,index) in item.local' :key='index' class="my_name">{{val}}</span>
            </p>
        </div>
       <div class="bottom">
           <span class="bottom_txt">仅可搜索中国大陆地区门店</span>
            <span :class="status?'btn activity':'btn'" @click="comfire">确认</span>
       </div>
    </div>
</template>

<script lang='ts'>
import { Component, Vue,Prop,Watch } from "vue-property-decorator"
@Component({
})
export default class App extends Vue {
    status:Boolean=false
    countryList:Array<any>= [
        {id:1,txt:"A-G",local:["北京","安徽","福建","广东","重庆","福建"]},
        {id:2,txt:"H-",local:["河北","内蒙古","吉林","黑龙江","江苏","江西","河南","湖北"]},
        {id:3,txt:"K",local:["湖南","海南"]},
        {id:4,txt:"L-S",local:["山西","辽宁","上海","山东","四川","陕西"]},
        {id:5,txt:"T-Z",local:["天津","浙江","云南","西藏","新疆"]},
    ]
    @Prop() selectBoxStatus: Boolean | undefined | null;
    @Watch('selectBoxStatus',{ immediate: true, deep: true })
    onChildChanged(newValue: string) {
        console.log(newValue)
        if(!newValue){
            this.status = false
        }
    }
    mounted(){
        // console.log(this.selectBoxStatus)
    }
    selectlocation(){
        this.status = true
    }
    comfire(){
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
            border-radius: 2px;
            line-height: 25px;
            text-align: center;
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