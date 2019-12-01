<template>
  <div id="cartoonInfo">
    <div id="cart_head">
      <ul>
        <router-link tag="li" v-for="(item,index) in cartData" :key="index" :to="item.router">
          <span>{{ item.cart_title }}</span>
        </router-link>
      </ul>
    </div>
    <div id="cart_content">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import '../assets/css/cartoon.css';
export default {
  data () {
    return {
      cartData: [
        {
          cart_title: "创作背景",
          router: "/cartoonInfo/createBackground"
        },
        {
          cart_title: "故事介绍",
          router: "/cartoonInfo/storyIntroduction"
        },
        {
          cart_title: "主角海贼团",
          router: "/cartoonInfo/roleIntroduction"
        },
        {
          cart_title: "用语解说",
          router: "/cartoonInfo/termDiction"
        },
        {
          cart_title: "出版信息",
          router: "/cartoonInfo/publishInfo"
        },
        {
          cart_title: "获奖记录",
          router: "/cartoonInfo/prizeRecord"
        },
        {
          cart_title: "漫画话数标题",
          router: "/cartoonInfo/cartoonTitle"
        },
        {
          cart_title: "动画集数标题",
          router: "/cartoonInfo/animationTitle"
        },
        {
          cart_title: "海贼王剧场版",
          router: "/cartoonInfo/theatreEdition"
        }
      ]
    }
  }
}
</script>

<style lang="less" scoped>
  #cartoonInfo {
    width: 100%;
    height: 100%;
    padding: 50px 40px 40px 80px;
    display: flex;
    flex-flow: column;
    box-sizing: border-box;
    &>#cart_head {
      width: 100%;
      padding: 5px 10px;
      box-sizing: border-box;
      &>ul {
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        &>li {
          // border: 2px solid #000;
          background-color: rgba(0, 0, 0, 0.4);
          border-radius: 10px;
          padding: 7px 12px;
          cursor: pointer;
          &:hover {
            background-color: rgba(0, 0, 0, 0.8);
          }
          &>span {
            font-size: 18px;
            font-weight: bold;
            color: #1de9b6;
            text-shadow: 1px 1px 2px #000;
            &:hover {
              text-shadow: none;
              background-image: -webkit-linear-gradient(left, #ff4081, #84ffff 20%, #ff4081 50%, #84ffff 70%, #ff4081);
              -webkit-text-fill-color: transparent;
              -webkit-background-clip: text;
              -webkit-background-size: 200% 100%;
              -webkit-animation: welcome 1s infinite linear;
            }
          }
        }
        &>li.op-active {
          background-color: rgba(0, 0, 0, 0.8);
          &>span {
            text-shadow: none;
            background-image: -webkit-linear-gradient(left, #ff4081, #84ffff 20%, #ff4081 50%, #84ffff 70%, #ff4081);
            -webkit-text-fill-color: transparent;
            -webkit-background-clip: text;
            -webkit-background-size: 200% 100%;
            -webkit-animation: welcome 1s infinite linear;
          }
        }
      }
    }
    &>#cart_content {
      padding: 10px;
      width: 100%;
      box-sizing: border-box;
      flex: 1;
      border: 2px solid #1de9b6;
      // background-color: rgba(0, 0, 0, 0.6);
      background-image: url(../assets/images/cartoon1.jpg);
      background-repeat: no-repeat;
      background-position: center center;
      background-size: cover;
      border-radius: 20px;
      overflow-y: auto;
      &::-webkit-scrollbar {
        width: 4px;
        height: 10px;
      }
      &::-webkit-scrollbar-thumb {
        border-radius: 15px;
        box-shadow: 0 0 5px 1px #000;
        background: #1de9b6;
      }
      &::-webkit-scrollbar-track {
        box-shadow: 0 0 5px 1px #000;
        border-radius: 15px;
        background: #ededed;
      }
    }
  }
</style>
