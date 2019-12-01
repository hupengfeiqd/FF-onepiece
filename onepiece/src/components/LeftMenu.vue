<template>
  <div id="op_leftMenu">
    <ul>
      <router-link v-for="(item,i) in menuData" :key="i" tag="li" :to="item.router">
        <i :class="[item.icon,item.class]"></i>
        <div>
          <div class="childMenuTitle" :class="[item.class,item.children ? 'useBorderBottom' : '']">{{ item.name }}</div>
          <div class="childMenu">
            <router-link v-for="(cItem,cI) in item.children" class="acc" :key="cI" tag="div" :to="path=cItem.router">{{ cItem.name }}</router-link>
          </div>
        </div>
       </router-link>
    </ul>
  </div>
</template>

<script>
export default {
  data () {
    return {
      menuData: [
        {
          name:"海贼",
          icon:"icon-caomaohzq",
          router:"/pirates",
          class: "pirates",
          children: [
            {
              name: "大海贼时代",
              router: "/pirates/piratesTiming"
            },
            {
              name: "四皇",
              router: "/pirates/fourEmperor"
            },
            {
              name: "王下七武海(已废除)",
              router: "/pirates/qiWuHai"
            },
            {
              name: "极恶时代",
              router: "/pirates/superstar"
            },
            {
              name: "草帽一伙",
              router: "/pirates/strawHatGang"
            },
            {
              name: "悬赏金排行榜",
              router: "/pirates/moneyRanking"
            }
          ]
        },
        {
          name:"世界政府",
          icon:"icon-sjzf",
          router:"/worldGovt",
          class: "worldGovt",
          children: [
            {
              name: "海军本部『MARINE』",
              router: "/worldGovt/navybase"
            },
            {
              name: "秘密间谍机关『CIPHER-POL』",
              router: "/worldGovt/cipherPOL"
            },
            {
              name: "推进城『海底大监狱』",
              router: "/worldGovt/prison"
            }
          ]
        },
        {
          name:"革命军",
          icon:"icon-bedg",
          router:"/revolutionaryArmy",
          class: "revolutionaryArmy"
        },
        {
          name:"草帽一伙航线",
          icon:"iconfont op-trip",
          router:"/trip",
          class: "trip"
        },
        {
          name:"和之国",
          icon:"icon-hzg",
          router:"/hezhiguo",
          class: "hezhiguo"
        },
        {
          name:"历史正文",
          icon:"icon-lszw",
          router:"/history",
          class: "history"
        },
        {
          name:"恶魔果实",
          icon:"icon-emgs",
          router:"/devilFruit",
          class: "devilFruit"
        },
        {
          name:"古代兵器",
          icon:"icon-gdbq",
          router:"/ancientWeapon",
          class: "ancientWeapon"
        },
        {
          name:"地理设定",
          icon:"iconfont op-geography",
          router:"/geography",
          class: "geography"
        },
        {
          name:"漫画信息",
          icon:"iconfont op-cartoonInfo",
          router:"/cartoonInfo",
          class: "cartoonInfo"
        }
      ]
    }
  }
}
</script>

<style lang="less" scoped>
  #op_leftMenu {
    background-color: rgba(0, 0, 0, 0.6);
    height: 100%;
    display: flex;
    flex-flow: column;
    justify-content: center;
    align-items: center;
    position: absolute;
    color: #fff;
    // box-shadow: 0px 0px 5px #2CBDF2;
    width: 50px;
    transition: all 0.25s;
    z-index: 9999;
    &:hover {
        background-color: rgba(0, 0, 0, 0.9);
    }
    &>ul>li {
      // width: 50px;
      height: 42px;
      box-sizing: border-box;
      position: relative;
      // padding: 5px 10px;
      margin: 0px 10px 5px 10px;
      font-weight: bold;
      cursor: pointer;
      user-select: none;
      display: flex;
      justify-content: center;
      align-items: center;
      transition: all 0.15s;
      &::after {
        content: "";
        display: none;
        width: 8px;
        height: 8px;
        background-color: #fff;
        box-shadow: 0px 0px 10px 5px #1de9b6;
        border-radius: 50%;
        position: absolute;
        right: -9px;
        top: 50%;
        margin-top: -4px;
      }
      &>i {
        font-size: 30px;
        // margin-right: 15px;
        transition: all 0.15s;
        -webkit-text-fill-color: transparent;
        -webkit-background-clip: text;
        -webkit-background-size: 200% 100%;
        -webkit-animation: welcome 1.5s infinite linear;
      }
      &>div {
        font-size: 16px;
        background-color: rgba(0, 0, 0, 0.6);
        white-space: nowrap;
        position: absolute;
        top: 0px;
        right: -5px;
        overflow: hidden;
        transform: translateX(100%);
        // height: 40px;
        display: flex;
        width: 0px;
        // justify-content: center;
        // align-items: center;
        padding: 0px;
        box-sizing: border-box;
        border-top-right-radius: 5px;
        border-bottom-right-radius: 5px;
        transition: all 0.15s;
        display: flex;
        flex-flow: column;
        &>.childMenuTitle {
            font-size: 16px;
            line-height: 42px;
            text-align: center;
            font-weight: bold;
            // border-bottom: 1px solid #ccc;
            -webkit-text-fill-color: transparent;
            -webkit-background-clip: text;
            -webkit-background-size: 200% 100%;
            -webkit-animation: welcome 1.5s infinite linear;
        }
        &>.childMenu {
          // position: absolute;
          // bottom: 0px;
          // left: 0px;
          // transform: translateY(100%);
          display: flex;
          flex-flow: column;
          &>div {
            position: relative;
            font-size: 16px;
            line-height: 35px;
            color: #f0fcff;
            box-sizing: border-box;
            text-align: center;
            transition: all 0.15s;
            &:not(.op-active):hover {
              // text-shadow: 0px 0px 5px #0ff;
              background-image: -webkit-linear-gradient(
              right,
              #00ffff,
              #08b98d 20%,
              #00ffff 50%,
              #08b98d 70%,
              #00ffff
            );
              // background-image: -webkit-linear-gradient(left, #C0F, #00FFFF 25%, #C0F 50%, #00FFFF 75%, #C0F);
              -webkit-text-fill-color: transparent;
              -webkit-background-clip: text;
              -webkit-background-size: 200% 100%;
              -webkit-animation: welcome 1s infinite linear;
            }
          }
          &>div::after {
            content: "";
            display: none;
            width: 8px;
            height: 8px;
            background-color: #fff;
            box-shadow: 0px 0px 10px 5px #1de9b6;
            border-radius: 50%;
            position: absolute;
            right: -14px;
            top: 50%;
            margin-top: -4px;
          }
        }
      }
      &:hover>div {
        // text-shadow: 0px 0px 5px #00FFFF;
        background-color: rgba(0, 0, 0, 0.9);
        padding: 0px 10px;
        width: auto;
        overflow:unset;
      }
    }
    .op-active.acc {
      background-image: -webkit-linear-gradient(
              right,
              #00ffff,
              #08b98d 20%,
              #00ffff 50%,
              #08b98d 70%,
              #00ffff
            );
      // background-image: -webkit-linear-gradient(left, #C0F, #00FFFF 25%, #C0F 50%, #00FFFF 75%, #C0F);
      -webkit-text-fill-color: transparent;
      -webkit-background-clip: text;
      -webkit-background-size: 200% 100%;
      -webkit-animation: welcome 1s infinite linear;
    }
    .op-active::after {
      display: block !important;
    }
    .useBorderBottom {
      border-bottom: 1px solid #ccc;
    }
  }
  /* 海贼 */
.pirates {
    background-image: linear-gradient(to right, #f44336, #1de9b6 20%, #f44336 50%, #1de9b6 70%, #f44336);
}
/* 世界政府 */
.revolutionaryArmy {
    background-image: -webkit-linear-gradient(left, #7b1fa2, #fafafa 20%, #7b1fa2 50%, #fafafa 70%, #7b1fa2);
}
/* 革命军 */
.worldGovt {
    background-image: -webkit-linear-gradient(left, #81d4fa, #4b5cc4 20%, #81d4fa 50%, #4b5cc4 70%, #81d4fa);
}
/* 航线行程 */
.trip {
    background-image: -webkit-linear-gradient(left, #00c853, #ffff00 20%, #00c853 50%, #ffff00 70%, #00c853);
}
/* 和之国 */
.hezhiguo {
  background-image: -webkit-linear-gradient(left, #ff4081, #7b1fa2 20%, #ff4081 50%, #7b1fa2 70%, #ff4081);
}
/* 历史正文 */
.history {
  background-image: -webkit-linear-gradient(left, #ff2121,  #1de9b6 20%, #ff2121 50%,  #1de9b6 70%,#ff2121);
}
/* 恶魔果实 */
.devilFruit {
  background-image: -webkit-linear-gradient(left, #9933FF, #00e500 20%, #9933FF 50%, #00e500 70%, #9933FF);
}
/* 古代兵器 */
.ancientWeapon {
    background-image: -webkit-linear-gradient(left, #C0F, #00FFFF 25%, #C0F 50%, #00FFFF 75%, #C0F);
  // background-image: -webkit-linear-gradient(left, #ff2121, #e9bb1d 20%, #ff2121 50%, #e9bb1d 70%, #ff2121);
}
/* 地理设定 */
.geography {
  background-image: -webkit-linear-gradient(right, #996633, #1de9b6 20%, #996633 50%, #1de9b6 70%, #996633);
}
/* 漫画信息 */
.cartoonInfo {
  background-image: -webkit-linear-gradient(left, #ff4081, #84ffff 20%, #ff4081 50%, #84ffff 70%, #ff4081);
}

</style>
