<template>
    <div class="xxl_layout">
        <div class="xxl_aside">
             <Aside/>
        </div>
        <div class="xxl_main">
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
import Aside from './aside.vue'
    export default {
        data(){
            return{

            }
        },
        components:{
            Aside
        },
        methods:{

        }
    }
</script>

<style lang="scss" scoped>
.xxl_layout{
    color: #000;
     height: 100%;
     display: flex;
    .xxl_aside{
        position: fixed;
        width: 450px;
        float: left;
        height: 100%;
        // overflow: hidden;
    }
    .xxl_main{
        margin-left: 450px;
         flex: 1;
         overflow-x: hidden;
    }
}
</style>