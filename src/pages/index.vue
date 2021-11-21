<template>
  <div class="home">
    <img src="@/static/home/banner.jpg" alt="" class="banner" @click="goToClub"/>
    <div class="box">
      <div class="img_box" v-for="(item, index) in imgArr" :key="index" @click="goToOtherPage(item)">
        <img :src="item.path" alt="" />
      </div>
    </div>
    <div class="txt_box">
      <div class="txt_box_left">
        <div class="title">星享俱乐部</div>
        <div class="txt">
          开启您的星享之旅，星星越多、会员等级越高、好礼越丰富。<span
            class="more"
             @click="goToClub"
            >{{ "了解更多>" }}</span
          >
        </div>
        <div class="btn_box">
          <span class="register btn" @click="goToRegister">注册</span>
          <span class="login btn" @click="goToLogin">登录</span>
        </div>
      </div>
      <div class="txt_box_right"></div>
    </div>
    <div class="car">
      <h2 class="title">星巴克精选</h2>
      <p class="txt">在星巴克天猫旗舰店发现更多咖啡心意</p>
      <div class="car_large">
        <div class="care_box" v-for="(item, index) in box_Arr" :key="index" @click="goToOtherPage(item)">
          <img :src="item.path" alt="" class="top_img" />
          <p class="box_title">{{ item.title }}</p>
          <p>{{ item.txt }}</p>
          <p class='more'>{{ "了解更多>" }}</p>
        </div>
      </div>
    </div>
    <div class="buttom_box">
      <h2 class="title">1912 派克街 | 咖啡星讲堂</h2>
      <p class="txt_1">了解更多星巴克咖啡文化</p>
      <div class="swiper">
        <div class="swiper_box" v-for="(item, index) in last_Arr" :key="index" @click="goToOtherPage(item)">
          <img :src="item.path" alt="" class="top_img" />
          <span class="title_1">{{ item.title }}</span>
          <span class="txt">{{ item.txt }}</span>
        </div>
      </div>
      <p class="hui_box">
        <img src="@/static/home/icpicon.png" alt="" class="hui" />
        <a>沪公网安备 31010402000253号</a>
        <a>沪ICP备17003747号</a>
      </p>
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
      box_Arr: [
        {
          id: 1,
          path: require("@/static/home/top_1.png"),
          title: "会员星礼包",
          txt: "用一份心礼，让心意相随",
        },
        {
          id: 2,
          path: require("@/static/home/top_2.png"),
          title: "会员星礼包",
          txt: "用一份心礼，让心意相随",
        },
        {
          id: 3,
          path: require("@/static/home/top_3.png"),
          title: "会员星礼包",
          txt: "用一份心礼，让心意相随",
        },
        {
          id: 4,
          path: require("@/static/home/top_4.png"),
          title: "会员星礼包",
          txt: "用一份心礼，让心意相随",
        },
      ],
      last_Arr: [
        {
          id: 1,
          path: require("@/static/home/banner_1.jpg"),
          title: "咖啡的起源与培植",
          txt: "咖啡知识",
        },
        {
          id: 2,
          path: require("@/static/home/banner_1.jpg"),
          title: "咖啡调制",
          txt: "咖啡品鉴",
        },
        {
          id: 3,
          path: require("@/static/home/banner_1.jpg"),
          title: "手冲咖啡",
          txt: "咖啡知识",
        },
        {
          id: 4,
          path: require("@/static/home/banner_1.jpg"),
          title: "咖啡的起源与培植",
          txt: "咖啡品鉴",
        },
      ],
    };
  },
  methods: {
    goToOtherPage(item){
      console.log(item)
      window.open('http://localhost:8080/home')
    },
    goToRegister() {
      console.log("去注册");
      this.$router.push("/register");
      this.$store.commit("toChangeTabBarStatus", 4);
    },
    goToLogin() {
      console.log("去登录");
      this.$router.push("/login");
      this.$store.commit("toChangeTabBarStatus", 4);
    },
    goToClub(){
       this.$router.push("/club");
       this.$store.commit("toChangeTabBarStatus", 4);
    }
  },
};
</script>

<style lang="scss" scoped>
.home {
  color: #000;
  width: 100%;
  margin-bottom: 20px;
  .banner {
    width: 100%;
    height: 100%;
    display: block;
    cursor: pointer;
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
      img {
        width: 100%;
        // border: 1px solid #ccc;
        box-shadow: 1px 1px 4px #ccc;
        cursor: pointer;
        &:hover {
          box-shadow: 1px 1px 5px #ccc;
          transition: 0.3s;
          transform: translate(0, -3px);
        }
      }
    }
  }
  .txt_box {
    height: 250px;
    width: 100%;
    display: flex;
    .txt_box_left {
      margin-left: 200px;
      width: 340px;
      .title {
        margin: 25px 0 20px 0;
        color: #000;
        font-weight: 600;
        font-size: 22px;
      }
      .txt {
        margin-bottom: 20px;
        font-size: 16px;
        line-height: 36px;
        color: rgba(0, 0, 0, 0.56);
        .more {
          color: #c2a661;
          cursor: pointer;
        }
      }
      .btn_box {
        display: flex;
        .btn {
          display: inline-block;
          width: 80px;
          height: 40px;
          border-radius: 20px;
          border: 1px solid #1eb274;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #1eb274;
          cursor: pointer;
        }
        .register {
          margin-right: 10px;
        }
        .login {
        }
      }
    }
    .txt_box_right {
    }
  }
  .car {
    height: 350px;
    width: 100%;
    background: #eee;
    .title {
      margin: 0 0 20px 0;
      padding-top: 30px;
      text-align: center;
      font-weight: 500;
    }
    .txt {
      margin-bottom: 60px;
      text-align: center;
    }
    .car_large {
      display: flex;
      align-items: center;
      justify-content: center;
      .care_box {
        width: 140px;
        height: 160px;
        background: #fff;
        border: 1px solid #ccc;
        margin-right: 20px;
        cursor: pointer;
        position: relative;
        box-sizing: border-box;
        padding: 50px 20px 0 20px;
         &:hover {
          box-shadow: 1px 1px 5px #ccc;
          transition: 0.3s;
          transform: translate(0, -3px);
        }
        .more{
          color: #c2a661;
        }
        .box_title{
          font-weight: 600;
        }
        p {
          text-align: center;
          margin-bottom: 6px;
          font-size: 14px;
        }
        .top_img {
          width: 100px;
          height: 70px;
          position: absolute;
          top: -30px;
          left: 20px;
        }
      }
    }
  }
  .buttom_box {
    height: 360px;
    width: 100%;
    overflow: hidden;
    .swiper {
      height: 180px;
      width: 100%;
      display: flex;

      .top_img {
        width: 240px;
        height: 140px;
      }
      .swiper_box {
        height: 180px;
        width: 240px;
        background: #fff;
        margin-right: 20px;
        box-shadow: 1px 1px 4px #ccc;
        position: relative;
        cursor: pointer;
        &:first-child {
          margin-left: 20px;
        }
        .txt {
          position: absolute;
          top: 10px;
          left: 10px;
          display: inline-block;
          height: 30px;
          width: 70px;
          background: #c2a661;
          color: #fff;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .title_1 {
          display: inline-block;
          margin-left: 10px;
          margin-top: 5px;
        }
      }
    }
    .hui_box {
      margin: 20px 0 0 0;
      .hui {
        height: 20px;
        width: 20px;
        margin-right: 8px;
        position: relative;
        top: 5px;
      }
    }

    p {
      text-align: center;
    }
    .title {
      margin: 0 0 20px 0;
      padding-top: 30px;
      text-align: center;
      font-weight: 500;
    }
    .txt_1 {
      text-align: center;
      margin-bottom: 30px;
    }
  }
}
</style>