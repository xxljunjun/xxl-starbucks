<template>
  <div class="tab-swiper">
    <div class="first">
      <img src="../../statics/building.jpg" alt="" class="smalllogo" />
      <p class="text_1">Technical Support</p>
      <p class="text_2">
        Get in touch with us if you require assistance. We want to help you
        build wonderful apps!
      </p>
    </div>
    <div class="tabBars">
      <div
        :class="whoItem == item ? 'clickitem old' : 'old'"
        v-for="(item, index) in 4"
        :key="index"
        @click="chooseitem(item)"
      >
        Components
      </div>
    </div>
    <div class="clickConetent1 clickConetent" v-if="whoItem == 1">
      <div class="tab-txt">
        Over 150 components ready to use. Include only what you need, keep your
        apps lightweight!
      </div>
      <!-- 轮播图 -->
      <div class="swiper-box">
        <el-carousel indicator-position="outside">
          <el-carousel-item v-for="item in swiperArr" :key="item.id">
            <img :src="item.path" alt="" />
          </el-carousel-item>
        </el-carousel>
      </div>
      <div class="txt">
        <div class="margintxt">
          <div class="txt-inner" v-for="(item, index) in 9" :key="index">
            <p class="titles">Elements</p>
            <p class="txts">
              There are over 50 unique elements included, that can be bundled
              together to create even more variations.
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="clickConetent2 clickConetent" v-else-if="whoItem == 2">
      22222222222
    </div>
    <div class="clickConetent3 clickConetent" v-else-if="whoItem == 3">
      333333333333
    </div>
    <div class="clickConetent4 clickConetent" v-else-if="whoItem == 4">
      4444444444
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      whoItem: 1,
      swiperArr: [
        { id: 1, path: require('../../statics/swiper_1.jpg') },
        { id: 2, path: require('../../statics/swiper_2.jpg') },
        { id: 3, path: require('../../statics/swiper_3.jpg') },
        { id: 4, path: require('../../statics/swiper_4.jpg') },
        { id: 5, path: require('../../statics/swiper_5.jpg') },
        { id: 6, path: require('../../statics/swiper_6.jpg') },
        { id: 7, path: require('../../statics/swiper_7.jpg') },
        { id: 8, path: require('../../statics/swiper_8.jpg') },
        { id: 9, path: require('../../statics/swiper_9.jpg') },
        { id: 10, path: require('../../statics/swiper_10.jpg') },
      ],
    }
  },
  methods: {
    chooseitem(item) {
      console.log('111111111', item)
      this.whoItem = item
    },
  },
}
</script>

<style lang="scss" scoped>
.el-carousel__item h3 {
  color: #475669;
  font-size: 18px;
  opacity: 0.75;
  line-height: 300px;
  margin: 0;
}
/deep/.el-carousel__container {
  height: 400px;
}
/deep/.el-carousel__indicators {
  margin-top: 60px;
}
/deep/.el-carousel__item {
  display: flex;
  justify-content: center;
  background: #fff !important;
}
/deep/.el-carousel__arrow {
  width: 90px;
  height: 90px;
  background: #fff;
  border: 1px solid #d1d1d4;
  box-shadow: 0px 0px 10px 0px #d1d1d4;
  font-size: 30px;
  display: block !important;
  opacity: 1 !important;
}
/deep/.el-icon-arrow-left {
  &::before {
    color: #000;
  }
}
/deep/.el-icon-arrow-right {
  &::before {
    color: #000;
  }
}
/deep/.el-carousel:hover .el-carousel__arrow {
  background: #3f6ad8;
}
/deep/.el-carousel:hover .el-icon-arrow-right {
  &::before {
    color: #fff;
  }
}
/deep/.el-carousel:hover .el-icon-arrow-left {
  &::before {
    color: #fff;
  }
}
/deep/.el-carousel__button {
  width: 14px;
  height: 14px;
  border-radius: 50%;
}
/deep/.is-active {
  .el-carousel__button {
    background: #3f6ad8;
  }
}
.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
.tab-swiper {
  .first {
    display: flex;
    flex-direction: column;
    align-items: center;
    .smalllogo {
      width: 60px;
      height: 60px;
      border-radius: 50%;
      margin: 60px 0 25px;
    }
    .text_1 {
      color: #000;
      font-size: 22px;
      margin-bottom: 16px;
    }
    .text_2 {
      color: #8d99a4;
      font-size: 18px;
      margin-bottom: 35px;
    }
  }
  .tabBars {
    margin: 0 auto;
    width: 1200px;
    height: 80px;
    border-radius: 40px;
    box-sizing: border-box;
    border: 2px solid #eee;
    display: flex;
    align-items: center;
    justify-content: space-around;
    margin-bottom: 35px;
    .old {
      cursor: pointer;
      height: 50px;
      padding: 0 90px;
      border-radius: 25px;
      line-height: 50px;
    }
    .clickitem {
      background: #3f6ad8;
    }
  }
  .clickConetent {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .clickConetent1 {
    .tab-txt {
      font-size: 20px;
      color: #7f8b98;
      width: 650px;
      text-align: center;
      margin-bottom: 40px;
    }
    .swiper-box {
      width: 100%;
      height: 500px;
    }
    .txt {
      height: 550px;
      width: 100%;
      background: #fff;
      border-top: 4px solid #f7f7f8;
      .margintxt {
        width: 1200px;
        margin: 0 auto;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        align-items: center;
        .txt-inner {
          text-align: center;
          width: 360px;
          margin-top: 60px;
          .titles {
            font-size: 18px;
            color: #000;
          }
          .txts {
          }
        }
      }
    }
  }
}
</style>