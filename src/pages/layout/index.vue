<template>
  <div class="xxl_layout">
    <div class="xxl_aside">
      <Aside />
    </div>
    <div class="xxl_main">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import Aside from "./aside.vue";
import { getWeather,testmock } from "../../api/home/index";
export default {
  data() {
    return {};
  },
  components: {
    Aside,
  },
  mounted() {
    let params = {
      city: "深圳",
      appkey: "7a85fc9df58cd155f764e033a257d879",
    };
    getWeather(params).then((res) => {
      console.log("获取天气", res);
    });
    testmock().then(res=>{
      console.log('测试mock接口',res)
    })
  },
  methods: {},
};
</script>

<style lang="scss" scoped>
.xxl_layout {
  color: #000;
  height: 100%;
  display: flex;
  .xxl_aside {
    position: fixed;
    width: 450px;
    float: left;
    height: 100%;
    // overflow: auto;
    // overflow: hidden;
  }
  .xxl_main {
    margin-left: 450px;
    flex: 1;
    overflow-x: hidden;
  }
}
</style>