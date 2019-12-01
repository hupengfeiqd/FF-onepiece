<template>
  <div id="fourEmperor">
    <router-link tag="div" :to="{name:'timing',params:{piraName:'红发海贼团',pName:'香克斯'}}" class="xks" title='"红发"香克斯' @mouseover.native="titleover($event)" @mousemove.native="titlemove($event)" @mouseout.native="titleout($event)">
      <img src="../../assets/images/shhongfabg.png">
    </router-link>
    <router-link tag="div" :to="{name:'timing',params:{piraName:'百兽海贼团',pName:'凯多'}}" class="kd" title='"百兽"凯多' @mouseover.native="titleover($event)" @mousemove.native="titlemove($event)" @mouseout.native="titleout($event)">
      <img src="../../assets/images/kaiduo3.png">
    </router-link>
    <router-link tag="div" :to="{name:'timing',params:{piraName:'BIG·MOM海贼团',pName:'夏洛特·玲玲'}}" class="bm" title='"BIG·MOM"夏洛特·玲玲' @mouseover.native="titleover($event)" @mousemove.native="titlemove($event)" @mouseout.native="titleout($event)">
      <img src="../../assets/images/shbigmombg.png">
    </router-link>
    <router-link tag="div" :to="{name:'timing',params:{piraName:'白胡子海贼团',pName:'爱德华·纽盖特(已逝)'}}" class="bhz" title='"白胡子"爱德华·纽盖特(已逝)' @mouseover.native="titleover($event)" @mousemove.native="titlemove($event)" @mouseout.native="titleout($event)">
      <img src="../../assets/images/shbaihuzibg.png">
    </router-link>
    <router-link tag="div" :to="{name:'timing',params:{piraName:'黑胡子海贼团',pName:'马歇尔·D·蒂奇'}}" class="hhz" title='"黑胡子"马歇尔·D·蒂奇' @mouseover.native="titleover($event)" @mousemove.native="titlemove($event)" @mouseout.native="titleout($event)">
      <img src="../../assets/images/shheihuzibg.png">
    </router-link>
  </div>
</template>

<script>
export default {
  methods: {
    // 自定义title标签的三个事件
    titleover(data) {
      this.$store.commit("titleover", data);
    },
    titlemove(data) {
      this.$store.commit("titlemove", data);
    },
    titleout(data) {
      this.$store.commit("titleout", data);
    }
  },
  beforeRouteLeave(to,from,next) {
    var use = this.$store.state.myTitle.use;
    if (use) {
      this.$store.commit("titleout", true);
    }
    next();
  }
}
</script>

<style lang="less" scoped>
  #fourEmperor {
      width: 100%;
      height: 100%;
      box-sizing: border-box;
      padding:50px;
      &>div {
        position: absolute;
        width: 100%;
        // min-width: 1400px;
        height: 100%;
        // border-radius: 20px;
        overflow: hidden;
        box-shadow: 0px 0px 5px 1px #1de9b6;
        cursor: pointer;

        &>img {
          width: 100%;
          height: 100%;
          // background-position: center center;
          filter: brightness(50%);
          transition: all 0.25s;
          // &:hover {
          //   filter: brightness(100%);
          //   transform: rotateZ(35deg) scale(1.2);
          // }
        }
        // &:hover {
        //     z-index: 4;
        // }
      }
      &>.xks {
        right: 0;
        bottom: 0;
        z-index: 3;
        transform: translateX(40%) translateY(45%) rotateZ(-35deg);
        &:hover {
          z-index: 10;
        }
        &>img {
          transform: translateX(-8%) translateY(-60%) rotateZ(35deg);
          &:hover {
            filter: brightness(100%);
            transform: translateX(-8%) translateY(-60%) rotateZ(35deg) scale(1.1);
          }
        }

       }
      &>.kd {
        top: 0;
        right: 0;
        z-index: 4;
        transform: translateX(-40%) translateY(45%) rotateZ(35deg);
        &:hover {
          z-index: 10;
        }
        &>img {
          transform: translateX(2%) translateY(-30%) rotateZ(-35deg);
          &:hover {
            filter: brightness(100%);
            transform: translateX(2%) translateY(-30%) rotateZ(-35deg) scale(1.1);
          }
        }
       }
      &>.bm {
        left: 0;
        bottom: 0;
        z-index: 2;
        transform: translateX(40%) translateY(-45%) rotateZ(35deg);
        &:hover {
          z-index: 10;
        }
        &>img {
          transform: translateX(9%) translateY(41%) rotateZ(-35deg);
          &:hover {
            filter: brightness(100%);
            transform: translateX(9%) translateY(41%) rotateZ(-35deg) scale(1.1);
          }
        }
       }
      &>.hhz {
        left: 0;
        top: 0;
        z-index: 5;
        transform: translateX(-40%) translateY(-45%) rotateZ(-35deg);
        &:hover {
          z-index: 10;
        }
        &>img {
          transform: translateX(0%) translateY(45%) rotateZ(35deg);
          &:hover {
            filter: brightness(100%);
            transform: translateX(0%) translateY(45%) rotateZ(35deg) scale(1.1);
          }
        }
       }
      &>.bhz {
        top: 50%;left: 50%;transform: translateX(-50%) translateY(-50%);z-index: 1;
        &>img {
          &:hover {
            filter: brightness(100%);
            transform: scale(1.1);
          }
        }
       }
  }
</style>
