<template>
  <div class="aside_box" :class="{xiaoshi:!status}">
    <div class="tab_Bar">
      <div>
        <img src="@/assets/logo.png" alt="" class="logo" @click="refresh"/>
      </div>
      <ul class="box" v-if="status">
        <li class="item" v-for="(item, index) in tabBarArr" :key="index">
          {{ item.txt }}
        </li>
      </ul>
      <div>
        <img src="@/assets/logo.png" alt="" class="menu" @click="showMume" />
      </div>
    </div>
    <div class="content" v-if="status">
      <div class="content_top">
        <div class="txt">心情惬意，来杯咖啡吧</div>
        <img src="@/assets/logo.png" alt="" class="coffe" />
      </div>
      <div class="content_buttom">
        <img src="@/assets/logo.png" alt="" class="man" />
        <span class="login btn">登录</span>
        <span class="register btn">注册</span>
      </div>
    </div>
    <div class="menulist" v-else>
      <div class="menulist_top">
        <p v-for="(item, index) in list_1" :key="index" class="list_item">
          {{ item.txt }}
        </p>
      </div>
      <div class="menulist_middle">
        <p v-for="(item, index) in list_2" :key="index" class="list_item">
          {{ item.txt }}
        </p>
      </div>
      <div class="menulist_buttom content_buttom">
        <img src="@/assets/logo.png" alt="" class="man" />
        <span class="login btn">登录</span>
        <span class="register btn">注册</span>
      </div>
      <div class="last">
          <div class="last_item">English</div>
          <div  class="last_item">隐私政策</div>
          <div  class="last_item">使用条款</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      status: true,
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
  methods: {
    showMume() {
      console.log("显示");
      this.status = !this.status;
    },
    refresh(){
        console.log('刷新页面')
    }
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
  &.xiaoshi{
      overflow: auto;
  }
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
      .item {
        list-style: none;
        margin-right: 30px;
        cursor: pointer;
        font-weight: 600;
      }
    }
    .logo {
      height: 50px;
      width: 50px;
      margin: 0 30px 0 30px;
      cursor: pointer;
    }
    .menu {
      height: 20px;
      width: 25px;
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
        font-size: 30px;
        font-weight: 600;
      }
      .coffe {
        height: 30px;
        width: 30px;
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
  .last{
      display: flex;
      align-items: center;
      justify-content: flex-start;
      margin-bottom: 20px;
      .last_item{
          padding: 0  5px;
          border-right: 1px solid #ccc;
          &:last-child{
              border-right:none;
          }
      }
  }
}
.content_buttom {
      display: flex;
      align-items: center;
      .man {
        width: 35px;
        height: 20px;
        margin-right: 5px;
        cursor: pointer;
      }
      .btn {
        display: inline-block;
        color: #1eb274;
        font-size: 20px;
      }
      .login {
        margin-right: 30px;
        cursor: pointer;
      }
      .register {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 70px;
        height: 40px;
        border: 1px solid #1eb274;
        border-radius: 20px;
        cursor: pointer;
      }
    }
</style>