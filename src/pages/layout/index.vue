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
    .xxl_aside{
        position: fixed;
        background: red;
        width: 450px;
        float: left;
        height: 100%;
        overflow: hidden;
    }
    .xxl_main{
        background: green;
        margin-left: 450px;
         height: 1000px;
    }
}
</style>