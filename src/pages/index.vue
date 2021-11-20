<template>
  <div class="home">
    <img src="@/static/home/banner.jpg" alt="" class="banner" />
    <div class="box">
      <div class="img_box" v-for="(item, index) in imgArr" :key="index">
        <img :src="item.path" alt="" />
      </div>
    </div>
     <div class="txt_box">
       <div class="txt_box_left">11111111</div>
       <div class="txt_box_right">22222222</div>
     </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      imgArr: [
        { id: 1, path: require("@/static/home/banner_1.jpg") },
        { id: 2, path: require("@/static/home/banner_2.jpg") },
        { id: 3, path: require("@/static/home/banner_3.jpg") },
      ],
    };
  },
  methods: {},
};
</script>

<style lang="scss" scoped>
.home {
  color: #000;
  .banner {
    width: 100%;
    height: 100%;
    display: block;
  }
  .box {
    display: flex;
    width: 100%;
    padding: 25px 0;
    justify-content: space-evenly;
    background-image: linear-gradient(-45deg, #f5f5f5, #f5f5f5, #fff);
    .img_box {
      width: 30%;
      display: flex;
      align-items: center;
      img{
        width: 100%;
        // border: 1px solid #ccc;
        box-shadow: 1px 1px 4px #ccc;
        cursor: pointer;
        &:hover{
          box-shadow: 1px 1px 5px #ccc;
          transition: .3s;
          transform: translate(0,-3px);
        }
      }
    }
  }
  .txt_box{
    height: 250px;
    width: 100%;
    display: flex;
    background: red;
  }
}
</style>