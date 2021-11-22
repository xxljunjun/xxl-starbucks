<template>
  <div class="aside_box">
    <div class="tab_Bar">
      <div>
        <img src="@/assets/svg/logo.svg" alt="" class="logo" @click="refresh" />
      </div>
      <ul class="box" v-if="tabBarStatus !== 1">
        <li
          class="item"
          v-for="(item, index) in tabBarArr"
          :key="index"
          @click="clickTab(item)"
        >
          {{ item.txt }}
        </li>
      </ul>
      <div>
        <img
          src="@/assets/close.png"
          alt=""
          class="menu_1"
          @click="showMume"
          v-if="tabBarStatus == 1"
        />
        <img
          src="@/assets/svg/icon-hamburger.svg"
          alt=""
          class="menu"
          @click="showMume"
          v-else
        />
      </div>
    </div>
    <!--菜单栏的显示-->
    <div class="menulist" v-if="tabBarStatus == 1">
      <div class="menulist_top">
        <p
          v-for="(item, index) in list_1"
          :key="index"
          class="list_item"
          @click="goToPage_1(item)"
        >
          {{ item.txt }}
        </p>
      </div>
      <div class="menulist_middle">
        <p
          v-for="(item, index) in list_2"
          :key="index"
          class="list_item"
          @click="goToPage_2(item)"
        >
          {{ item.txt }}
        </p>
      </div>
      <div class="menulist_buttom content_buttom">
        <img src="@/assets/svg/icon-account.svg" alt="" class="man" />
        <span class="login btn" @click="goToLogin">登录</span>
        <span class="register btn" @click="goToRegister">注册</span>
      </div>
      <div class="last">
        <div class="last_item">English</div>
        <div class="last_item">隐私政策</div>
        <div class="last_item">使用条款</div>
      </div>
    </div>
    <div class="content" v-if="tabBarStatus == 2">
      <div class="content_top">
        <div class="txt">心情惬意，来杯咖啡吧 ☕</div>
      </div>
      <div class="content_buttom">
        <img src="@/assets/svg/icon-account.svg" alt="" class="man" />
        <span class="login btn" @click="goToLogin">登录</span>
        <span class="register btn" @click="goToRegister">注册</span>
      </div>
    </div>
    <div class="content_3" v-if="tabBarStatus == 3">
      <div class="content_3_title">菜单</div>
      <div
        v-for="(item, index) in menuArr"
        :key="index"
        class="content_3_item"
        :class="{ ischeck: item.istrue }"
      >
        {{ item.txt }}
      </div>
    </div>
    <div class="content_4" v-if="tabBarStatus == 4">
      <div class="content_4_title">登录或创建一个新帐户 🌟</div>
      <div
        v-for="(item, index) in countArr"
        :key="index"
        class="content_4_item"
        :class="{ ischeck: item.istrue }"
      >
        {{ item.txt }}
      </div>
    </div>
    <div class="content_5" v-if="tabBarStatus == 5">
      <div class="content_5_title">星巴克移动应用</div>
      <div
        v-for="(item, index) in appArr"
        :key="index"
        class="content_5_item"
        :class="{ ischeck: item.istrue }"
      >
        {{ item.txt }}
      </div>
    </div>
    <div class="content_6" v-if="tabBarStatus == 6">
      <div class="location">
        <img src="@/assets/svg/icon-account.svg" alt="" class="location_img" />
        <span class="local_txt">广东 深圳</span>
        <img src="@/assets/svg/icon-account.svg" alt="" class="arrow_img" />
      </div>
      <div class="inp_box">
        <el-input v-model="locationKeyWord" placeholder="输入地址查找门店" class="my_inp"></el-input>
        <div class="inp_txt">筛选</div>
      </div>
      <div class="local_box">
        <div class="local" v-for="(item, index) in 12" :key="index">
          <div class="left">
            <img src="@/assets/svg/icon-account.svg" alt="" class="local_left_img" />
          </div>
          <div class="middle">
            <p class="title">深圳华强北贸易店</p>
            <p>深圳市 广东省 深圳市 深圳市福田区华强北路</p>
            <p>深圳华强北贸易店</p>
          </div>
          <div class="right">
            <img src="@/assets/svg/icon-account.svg" alt="" class="local_right_img" />
          </div>
        </div>
      </div>
    </div>
    <div class="content_7" v-if="tabBarStatus == 7">
      <div class="content_7_title">星礼卡</div>
      <div
        v-for="(item, index) in prizeArr"
        :key="index"
        class="content_7_item"
        :class="{ ischeck: item.istrue }"
      >
        {{ item.txt }}
      </div>
    </div>
  </div>
</template>

<script>
/*
  tabBarStatus是vuex的全局变量
    1==>菜单栏的显示
    2==>登录注册
    3==>菜单列表
    4==>club俱乐部
    5==>移动app
    6==>门店
    7==>礼卡
*/
import { mapState } from "vuex";
export default {
  data() {
    return {
      locationKeyWord: "",
      prizeArr: [
        { id: 1, txt: "关于星礼卡", istrue: true },
        { id: 2, txt: "管理星礼卡", istrue: false },
        { id: 3, txt: "发票处理进度查询", istrue: false },
      ],
      appArr: [
        { id: 1, txt: "星巴克移动应用", istrue: true },
        { id: 2, txt: "星巴克 Apple Watch", istrue: false },
      ],
      countArr: [
        { id: 1, txt: "登录", istrue: true },
        { id: 2, txt: "注册", istrue: false },
        { id: 3, txt: "关于星享俱乐部", istrue: false },
      ],
      menuArr: [
        { id: 1, txt: "全部", istrue: true },
        { id: 2, txt: "饮料", istrue: false },
        { id: 3, txt: "美食", istrue: false },
        { id: 4, txt: "咖啡产品", istrue: false },
        { id: 5, txt: "商品", istrue: false },
      ],
      tabBarArr: [
        { id: 1, txt: "门店" },
        { id: 2, txt: "我的账户" },
        { id: 3, txt: "菜单" },
      ],
      list_1: [
        { id: 1, txt: "门店" },
        { id: 2, txt: "星享俱乐部" },
        { id: 3, txt: "菜单" },
      ],
      list_2: [
        { id: 1, txt: "星巴克移动应用" },
        { id: 2, txt: "星礼卡" },
        { id: 3, txt: "星巴克臻选™" },
        { id: 4, txt: "啡快™ － 在线点 到店取" },
        { id: 5, txt: "专星送™" },
        { id: 6, txt: "咖啡星讲堂" },
        { id: 7, txt: "上海烘焙工坊" },
        { id: 8, txt: "关于星巴克" },
        { id: 9, txt: "帮助中心" },
      ],
    };
  },
  computed: {
    ...mapState(["tabBarStatus"]),
  },
  methods: {
    changeStatusTrue() {
      this.$store.commit("toChangeTabBarStatus", 1);
    },
    changeStatusFalse() {
      this.$store.commit("toChangeTabBarStatus", 2);
    },
    showMume() {
      console.log("显示");
      if (this.tabBarStatus == 1) {
        this.changeStatusFalse();
      } else {
        this.changeStatusTrue();
      }
    },
    refresh() {
      console.log("刷新页面");
      // this.$router.go(0);
      this.changeStatusFalse();
      this.$router.push("/home");
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
    clickTab(item) {
      switch (item.id) {
        case 1:
          this.$router.push("/map");
          this.$store.commit("toChangeTabBarStatus", 6);
          break;
        case 2:
          this.$router.push("/login");
          this.$store.commit("toChangeTabBarStatus", 4);
          break;
        case 3:
          this.$router.push("/menu");
          this.$store.commit("toChangeTabBarStatus", 3); //菜单tabBar显示
          break;
        default:
          break;
      }
    },
    goToPage_1(item) {
      this.changeStatusFalse();
      switch (item.id) {
        case 1:
          this.$router.push("/map");
          this.$store.commit("toChangeTabBarStatus", 6);
          break;
        case 2:
          this.$router.push("/club");
          this.$store.commit("toChangeTabBarStatus", 4);
          break;
        case 3:
          this.$router.push("/menu");
          this.$store.commit("toChangeTabBarStatus", 3);
          break;
      }
    },
    goToPage_2(item) {
      this.changeStatusFalse();
      switch (item.id) {
        case 1:
          this.$router.push("/app");
          this.$store.commit("toChangeTabBarStatus", 5);
          break;
        case 2:
          this.$router.push("/prize");
          this.$store.commit("toChangeTabBarStatus", 7);
          break;
        case 3:
          break;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.aside_box {
  color: #000;
  width: 450px;
  height: 100%;
  // border-right: 1px solid #ccc;
  padding-top: 30px;
  box-sizing: border-box;
  box-shadow: 1px 1px 5px #ccc;
  .tab_Bar {
    // margin-top: 30px;
    height: 50px;
    width: 450px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    .box {
      display: flex;
      align-items: center;
      margin-left: -100px;
      .item {
        list-style: none;
        margin-right: 20px;
        cursor: pointer;
        font-weight: 600;
      }
    }
    .logo {
      height: 40px;
      width: 40px;
      margin: 0 30px 0 30px;
      cursor: pointer;
    }
    .menu {
      height: 24px;
      width: 24px;
      margin-right: 30px;
      // align-self: flex-end;
      cursor: pointer;
    }
    .menu_1 {
      height: 20px;
      width: 20px;
      margin-right: 30px;
      // align-self: flex-end;
      cursor: pointer;
    }
  }
  .content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    margin-left: 60px;
    height: 100%;
    .content_top {
      display: flex;
      align-items: center;
      margin-bottom: 30px;
      .txt {
        font-size: 26px;
        font-weight: 600;
      }
    }
  }
  .content_3 {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    margin-left: 100px;
    height: 100%;
    .content_3_title {
      font-weight: 600;
      font-size: 20px;
      margin-bottom: 30px;
    }
    .content_3_item {
      margin-bottom: 10px;
      padding-bottom: 2px;
      color: #979595;
      cursor: pointer;
      &.ischeck {
        border-bottom: 3px solid #1eb274;
        color: #000;
      }
    }
  }
  .content_4 {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    margin-left: 100px;
    height: 100%;
    .content_4_title {
      font-weight: 600;
      font-size: 22px;
      margin-bottom: 30px;
    }
    .content_4_item {
      margin-bottom: 10px;
      padding-bottom: 2px;
      color: #666666;
      cursor: pointer;
      &.ischeck {
        border-bottom: 3px solid #1eb274;
        color: #000;
      }
    }
  }
  .content_5 {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    margin-left: 100px;
    height: 100%;
    .content_5_title {
      font-weight: 600;
      font-size: 22px;
      margin-bottom: 30px;
    }
    .content_5_item {
      margin-bottom: 10px;
      padding-bottom: 2px;
      color: #666666;
      cursor: pointer;
      &.ischeck {
        border-bottom: 3px solid #1eb274;
        color: #000;
      }
    }
  }
  .content_6 {
    margin-top: 40px;
    box-sizing: border-box;
    height: 100%;
    overflow: auto;
    .location {
      padding-left:30px ;
      cursor: pointer;
      .location_img {
        height: 18px;
        width: 14px;
        margin-right: 10px;
      }
      .local_txt {
        font-size: 16px;
      }
      .arrow_img {
        margin-left: 5px;
        width: 6px;
        height: 6px;
      }
    }
    .inp_box {
      padding-left:30px ;
      display: flex;
      align-items: center;
      position: relative;
      .inp_txt {
        position: absolute;
        right: 30px;
        top: 10px;
        color: #1eb274 ;
        cursor: pointer;
      }
      ::v-deep.my_inp{
        width: 300px;
        border: 0;
        border-bottom: 1px solid #ccc ;
        input{
          border: 0;
        }
      }
    }
    .local_box {
      .title{
        font-weight: 600;
        margin-bottom: 10px;
      }
      p{
        font-size: 14px;
      }
      .local_left_img{
        margin-right: 20px;
      }
      .local_right_img{
        margin-left: 20px;
      }
      .local {
        cursor: pointer;
         padding: 0 30px;
        height: 150px;
        width: 450px;
        display: flex;
        align-items: center;
        &:hover {
          background: #f5f5f5;
        }
      }
    }
  }
  .content_7 {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    margin-left: 100px;
    height: 100%;
    .content_7_title {
      font-weight: 600;
      font-size: 22px;
      margin-bottom: 30px;
    }
    .content_7_item {
      margin-bottom: 10px;
      padding-bottom: 2px;
      color: #666666;
      cursor: pointer;
      &.ischeck {
        border-bottom: 3px solid #1eb274;
        color: #000;
      }
    }
  }
  .menulist {
    padding-left: 100px;
    margin-top: 40px;
    .list_item {
      height: 35px;
      line-height: 35px;
      font-weight: 600;
      font-size: 20px;
      margin-bottom: 10px;
      cursor: pointer;
    }
    .menulist_top {
      border-bottom: 1px solid #ccc;
      margin-top: 10px;
    }
    .menulist_middle {
      border-bottom: 1px solid #ccc;
      margin-top: 10px;
    }
    .menulist_buttom {
      margin-top: 20px;
      margin-bottom: 40px;
    }
  }
  .last {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    margin-bottom: 20px;
    .last_item {
      padding: 0 5px;
      border-right: 1px solid #ccc;
      cursor: pointer;
      color: #666666;
      &:last-child {
        border-right: none;
      }
    }
  }
}
.content_buttom {
  display: flex;
  align-items: center;
  .man {
    width: 40px;
    height: 25px;
    margin-right: 5px;
    cursor: pointer;
  }
  .btn {
    display: inline-block;
    color: #1eb274;
    font-size: 18px;
  }
  .login {
    margin-right: 30px;
    cursor: pointer;
  }
  .register {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 60px;
    height: 30px;
    border: 1px solid #1eb274;
    border-radius: 20px;
    cursor: pointer;
  }
}
</style>