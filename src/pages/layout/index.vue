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

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import Aside from '@/pages/layout/aside.vue'
import { getWeather, testmock } from '@/api/home/index'
@Component({
  components: {
    Aside
  }
})
export default class Help extends Vue {
  mounted() {
    this.toGetWeather()
    this.toTestmock()
  }
  toGetWeather() {
    let params = {
      city: '深圳',
      appkey: "7a85fc9df58cd155f764e033a257d879"
    }
    getWeather(params).then(res => {
      console.log('获取天气', res)
    })
  }
  toTestmock() {
    testmock().then(res => {
      console.log('测试mock接口', res)
    })
  }
}
</script>

<style lang="scss" scoped>
.xxl_layout {
  color: #000;
  height: 100%;
  display: flex;
  .xxl_aside {
    position: fixed;
    width: 580px;
    float: left;
    height: 100%;
    // overflow: auto;
    // overflow: hidden;
  }
  .xxl_main {
    margin-left: 580px;
    flex: 1;
    overflow-x: hidden;
  }
}
</style>
