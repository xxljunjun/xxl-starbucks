<template>
  <div class="home">
    <img src="../..//statics/building_2.jpg" alt="" class="topimg" />
    <!-- 一 -->
    <div class="top">
      <div class="top-text">
        <div :class="scrollStatus ? 'tabBar scrollTabBar' : 'tabBar'">
          <div class="left">
            <div class="logo" @click="toTOP">artchitect</div>
            <div
              v-for="(item, index) in tabBarArr"
              :key="index"
              :class="scrollStatus ? 'scrollItem' : 'item'"
              @click="scrolltoId(item.id)"
            >
              {{ item.title }}
            </div>
          </div>
          <div class="right">
            <div class="todemo">View Live Demo</div>
          </div>
        </div>
        <div :class="scrollStatus ? 'state scrollIstate' : 'state'">
          <p class="txt1">
            Modern Responsive Bootstrap 4 jQuery HTML Dashboard Template
          </p>
          <p class="txt2">
            ArchitectUI comes packed with elements, components and widgets
            nicely bundled together for perfect
            <span>consistency</span
            >,<span>scalability</span>,<span>modularity</span>,
          </p>
        </div>
      </div>
    </div>
    <!-- 二 -->
    <div class="content">
      <div class="content-inner">
        <p class="blue-txt">jQuery Bootstrap 4 HTML Version</p>
        <p class="black-txt">
          Use with whatever server side language you prefer. Plain HTML, powered
          by jQuery, HTML, Bootstrap 4 and Webpack (used for compiling SCSS and
          JS).
        </p>
        <div class="header-title">Dashboards Demos</div>
        <div class="demo-box">
          <div class="img-box" v-for="item in demoArr" :key="item.id">
            <div class="who">
              <img :src="item.path" alt="0" class="demoimg" />
              <div class="img-overly">view demo</div>
            </div>
          </div>
        </div>
        <div class="demo-bottom">
          <div class="txt-box" v-for="(item, index) in 2" :key="index">
            <h4>10 Different Dashboards Available</h4>
            <p>
              Architect comes packed with over 8 different types of dashboards -
              ready to use. If you get stuck, we're here to help.
            </p>
          </div>
        </div>
      </div>
    </div>
    <!-- 三 -->
    <div class="box">
      <img src="../../statics/building.jpg" alt="" class="smalllogo" />
      <p class="text_1">Technical Support</p>
      <p class="text_2">
        Get in touch with us if you require assistance. We want to help you
        build wonderful apps!
      </p>
      <p class="text_3">
        The documentation files can be found inside the template package folder.
      </p>
      <div class="line"></div>
      <div class="btn">Send us an email</div>
    </div>
    <!-- 四 -->
    <div class="tab">
      <TabSwiper />
    </div>
    <!-- 六 -->
    <div class="bottom">
      <img src="../../statics/building.jpg" alt="" class="smalllogo" />
      <p class="text_1">Purchase Architect UI Dashboard Template</p>
      <p class="text_2">
        You're making the smart choice. Enjoy a well built Bootstrap 4 Admin
        Template built for jQuery/HTML!
      </p>
      <div class="btn">
        <img src="../../statics/building.jpg" alt="" class="shop" />
        <div>Buy on DashboardPack</div>
      </div>
    </div>
    <!-- 七 -->
    <div class="last">
      <p>Copyright © 2021 ArchitectUI</p>
    </div>
  </div>
</template>

<script>
import TabSwiper from '@/components/tab-swiper.vue'
export default {
  components: {
    TabSwiper,
  },
  data() {
    return {
      scrollStatus: false,
      tabBarArr: [
        { id: 1, title: 'PREVIEWS' },
        { id: 2, title: 'FEATURES' },
        { id: 3, title: 'SUPPORT' },
        { id: 4, title: 'BUY NOW' },
      ],
      demoArr: [
        { id: 1, path: require('../../statics/xxl_1.jpg') },
        { id: 2, path: require('../../statics/xxl_2.jpg') },
        { id: 3, path: require('../../statics/xxl_3.jpg') },
        { id: 4, path: require('../../statics/xxl_4.jpg') },
        { id: 5, path: require('../../statics/xxl_5.jpg') },
        { id: 6, path: require('../../statics/xxl_6.jpg') },
        { id: 7, path: require('../../statics/xxl_7.jpg') },
        { id: 8, path: require('../../statics/xxl_8.jpg') },
        { id: 9, path: require('../../statics/xxl_9.jpg') },
      ],
    }
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll)
  },
  methods: {
    handleScroll() {
      //变量scrollTop是滚动条滚动时，距离顶部的距离
      var scrollTop =
        document.documentElement.scrollTop || document.body.scrollTop
      //变量windowHeight是可视区的高度(固定值)
      // var windowHeight =
      // document.documentElement.clientHeight || document.body.clientHeight
      //变量scrollHeight是滚动条的总高度(固定值)
      // var scrollHeight =
      // document.documentElement.scrollHeight || document.body.scrollHeight
      // console.log('00000000', scrollTop)
      // console.log('111111', windowHeight)
      // console.log('222222', scrollHeight)
      if (scrollTop > 0) {
        this.scrollStatus = true
      } else {
        this.scrollStatus = false
      }
    },
    toTOP() {
      let ele = document.getElementsByClassName('home')[0]
      ele.scrollIntoView({ block: 'start', behavior: 'smooth' })
    },
    scrolltoId(id) {
      //scrollIntoView的属性
      let ele = ''
      switch (id) {
        case 1:
          ele = document.getElementsByClassName('txt2')[0]
          ele.scrollIntoView({ block: 'start', behavior: 'smooth' })
          break
        case 2:
          ele = document.getElementsByClassName('btn')[0]
          ele.scrollIntoView({ block: 'start', behavior: 'smooth' })
          break
        case 3:
          ele = document.getElementsByClassName('txt-box')[0]
          ele.scrollIntoView({ block: 'start', behavior: 'smooth' })
          break
        case 4:
          ele = document.getElementsByClassName('bottom')[0]
          ele.scrollIntoView({ block: 'start', behavior: 'smooth' })
          break
        default:
          break
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.home {
  width: 100%;
  height: 100%;
  .topimg {
    position: fixed;
    width: 100%;
    z-index: -1;
    height: 1080px;
    top: 0;
  }
  .top {
    width: 100%;
    height: 650px;
    background: rgba(0, 0, 0, 0.8);
    .top-text {
      width: 100%;
      height: 650px;
      margin: 0 auto;
      .scrollTabBar {
        background: #fff;
        position: fixed;
        top: 0;
        z-index: 99;
      }
      .tabBar {
        display: flex;
        flex-direction: row;
        justify-content: center;
        width: 100%;
        margin: 0 auto;
        height: 110px;
        align-items: center;
        margin-bottom: 100px;
        transition: 0.3s;
        .left {
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          align-items: center;
          width: 800px;
          .logo {
            font-weight: 500;
            font-size: 24px;
            color: #bcbcbc;
            font-style: italic;
            cursor: pointer;
          }
          .scrollItem {
            color: #000;
            margin-right: 30px;
            font-weight: 500;
            cursor: pointer;
            &:last-child {
              color: #f7b924;
            }
          }
          .item {
            cursor: pointer;
            margin-right: 30px;
            color: #fff;
            font-weight: 500;
            &:last-child {
              color: #f7b924;
            }
          }
        }
        .right {
          width: 400px;
          height: 110px;
          position: relative;
          .todemo {
            cursor: pointer;
            position: absolute;
            right: 0;
            top: 30px;
            height: 44px;
            width: 160px;
            background: #f7b924;
            border-radius: 10px;
            border: 2px solid #101f45;
            line-height: 44px;
            text-align: center;
          }
        }
      }
      .scrollIstate {
        padding-top: 210px;
      }
      .state {
        margin: 0 auto;
        text-align: center;
        width: 755px;
        .txt1 {
          color: #fff;
          font-size: 40px;
          line-height: 55px;
          margin-bottom: 25px;
        }
        .txt2 {
          font-size: 22px;
          line-height: 34px;
          color: #b7bfc8;
          span {
            color: #fff;
          }
        }
      }
    }
  }
  .content {
    width: 100%;
    height: 1190px;
    background: #fff;
    margin: 0 auto;
    .content-inner {
      width: 1200px;
      height: 1190px;
      background: #fff;
      margin: 0 auto;
      position: relative;
      top: -110px;
      border-radius: 8px;
      display: flex;
      flex-direction: column;
      align-items: center;
      .blue-txt {
        margin: 35px 0 14px;
        color: #0026c4;
        font-size: 18px;
      }
      .black-txt {
        font-size: 14px;
        color: #000;
      }
      .header-title {
        margin: 80px 0 40px;
        font-size: 18px;
        color: #000;
      }
      .demo-box {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        flex-wrap: wrap;
        margin-bottom: 30px;
        padding: 0 40px;
        .img-box {
          width: 320px;
          height: 270px;
          border-radius: 8px;
          margin-bottom: 32px;
          box-sizing: border-box;
          box-shadow: 0px 10px 24px 2px #848484;
          cursor: pointer;
          background: #000;
          .who {
            position: relative;
            &:hover .demoimg {
              border-radius: 50px;
              transform: scale(1.2);
            }
            &:hover .img-overly {
              opacity: 1;
              transform: scale(1.2);
              border-radius: 50px;
            }
            .demoimg {
              width: 320px;
              height: 270px;
              border-radius: 8px;
              transition: 0.3s;
            }
            .img-overly {
              position: absolute;
              opacity: 0;
              width: 100%;
              height: 100%;
              background: rgba(0, 0, 0, 0.5);
              transition: all 0.2s;
              z-index: 6;
              left: 0;
              top: 0;
              color: #fff;
              text-align: center;
              display: flex;
              flex-direction: column;
              justify-content: center;
            }
          }
        }
      }
      .demo-bottom {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        .txt-box {
          width: 580px;
          height: 110px;
          border: 2px solid #f2f4f8;
          text-align: center;
          padding: 0 20px;
          box-sizing: border-box;
          border-radius: 6px;
          h4 {
            font-weight: normal;
            color: #000;
            margin: 15px 0;
            font-size: 18px;
          }
          p {
            color: #49545f;
          }
        }
      }
    }
  }
  .box {
    width: 100%;
    height: 425px;
    background: #f8f9fa;
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
      color: #2c2c2c;
      font-size: 18px;
      margin-bottom: 16px;
    }
    .text_3 {
      color: #033ace;
      font-size: 22px;
      margin-bottom: 55px;
    }
    .line {
      height: 2px;
      width: 1200px;
      background: #eaedf0;
    }
    .btn {
      cursor: pointer;
      width: 220px;
      height: 50px;
      background: #28b0cd;
      border-radius: 10px;
      margin-top: 26px;
      line-height: 50px;
      text-align: center;
      color: #fff;
      font-size: 18px;
    }
  }
  .tab {
    width: 100%;
    background: #fff;
  }
  .bottom {
    width: 100%;
    height: 430px;
    background: rgba(0, 0, 0, 0.7);
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
      color: #fff;
      font-size: 22px;
      margin-bottom: 16px;
    }
    .text_2 {
      color: #c2ccd6;
      width: 750px;
      font-size: 18px;
      margin-bottom: 16px;
      text-align: center;
      line-height: 26px;
    }
    .btn {
      cursor: pointer;
      width: 345px;
      height: 80px;
      background: #3ac47d;
      border-radius: 10px;
      margin-top: 26px;
      text-align: center;
      color: #fff;
      font-size: 18px;
      display: flex;
      align-items: center;
      justify-content: center;
      .shop {
        height: 24px;
        width: 24px;
        margin-right: 15px;
      }
    }
  }
  .last {
    height: 130px;
    width: 100%;
    background: #f1f4f6;
    p {
      text-align: center;
      padding-top: 55px;
    }
  }
}
</style>