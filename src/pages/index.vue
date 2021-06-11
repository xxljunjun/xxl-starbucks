<template>
  <div class="home">
    <img src="@imgs/img_1.jpg" alt="" class="banner" />
    <div class="imgbox">
      <img src="@imgs/img_2.jpg" alt="" class="imgs" />
      <img src="@imgs/img_3.jpg" alt="" class="imgs" />
      <img src="@imgs/img_4.jpg" alt="" class="imgs" />
    </div>
    <div class="content"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {}
  },
  methods: {},
  components: {},
}
</script>

<style lang="scss" scoped>
.home {
  width: 1330px;
  overflow-y:auto;
  height:1000px;
  background:#f7f7f7;
  .banner {
    width: 1330px;
    height: 625px;
  }
  .imgbox {
    display: flex;
    flex-direction: row;
    justify-content:space-between;
    padding:0 25px;
    margin:25px 0;
    .imgs {
      width: 410px;
      height: 260px;
    }
  }
  .content{
    height:270px;
    background:#fff;
  }
}
</style>