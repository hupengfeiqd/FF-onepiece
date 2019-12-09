<template>
  <div id="cmyh">
    <i class="icon-caomaohzq"></i>
    <router-link
      tag="img"
      v-for="(item,index) in caomaoyihuo"
      :src="item.img"
      :key="index"
      :class="[item.class,item.order]"
      :to="{name:'timing',params:{piraName:'草帽海贼团',pName:item.name}}"
      :title="item.name"
      @mouseover.native="titleover($event)"
      @mousemove.native="titlemove($event)"
      @mouseout.native="titleout($event)"
    ></router-link>
  </div>
</template>

<script>
export default {
  data() {
    return {
      caomaoyihuo: [
        {
          name: "蒙奇·D·路飞",
          img: require("../../assets/images/cmyhlufei.png"),
          class: "cmyh-lufei",
          order: "five"
        },
        {
          name: "罗罗诺亚·索隆",
          img: require("../../assets/images/cmyhsuolong.png"),
          class: "cmyh-suolong",
          order: "four"
        },
        {
          name: "乌索普",
          img: require("../../assets/images/cmyhwusuopu.png"),
          class: "cmyh-wusuopu",
          order: "three"
        },
        {
          name: "文斯莫克·山治",
          img: require("../../assets/images/cmyhshanzhi.png"),
          class: "cmyh-shanzhi",
          order: "four"
        },
        {
          name: "娜美",
          img: require("../../assets/images/cmyhnamei.png"),
          class: "cmyh-namei",
          order: "three"
        },
        {
          name: "托尼托尼·乔巴",
          img: require("../../assets/images/cmyhqiaoba.png"),
          class: "cmyh-qiaoba",
          order: "two"
        },
        {
          name: "妮可·罗宾",
          img: require("../../assets/images/cmyhluobin.png"),
          class: "cmyh-luobin",
          order: "two"
        },
        {
          name: "弗兰奇",
          img: require("../../assets/images/cmyhfulanqi.png"),
          class: "cmyh-fulanqi",
          order: "one"
        },
        {
          name: "布鲁克",
          img: require("../../assets/images/cmyhbuluke.png"),
          class: "cmyh-buluke",
          order: "one"
        }
      ]
    };
  },
  mounted() {
    $(function() {
      let timer = setTimeout(() => {
        // 弗兰奇、布鲁克出现
        let op = new Promise((res, rej) => {
          $(".one").show(700, () => {
            res();
          });
        });
        // 罗宾、乔巴出现
        op.then(() => {
          return new Promise((res, rej) => {
            $(".two").show(700, function() {
              res();
            });
          });
        })
        // 乌索普、娜美出现
          .then(() => {
            return new Promise((res, rej) => {
              $(".three").show(700, function() {
                res();
              });
            });
          })
          // 索隆、山治出现
          .then(() => {
            return new Promise((res, rej) => {
              $(".four").show(700, function() {
                res();
              });
            });
          })
          // 路飞出现
          .then(() => {
            return new Promise((res, rej) => {
              $(".five").show(700, function() {
                res();
              });
            });
          });
      }, 500);
    });
  },
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
  beforeRouteLeave(to, from, next) {
    var use = this.$store.state.myTitle.use;
    if (use) {
      this.$store.commit("titleout", true);
    }
    next();
  }
};
</script>

<style lang="less" scoped>
#cmyh {
  width: 100%;
  height: 100%;
  padding: 50px;
  box-sizing: border-box;
  background-color: rgba(0, 0, 0, 0.7);
  & > i {
    position: absolute;
    top: 10%;
    left: 50%;
    transform: translateX(-50%);
    font-size: 100px;
    background-image: linear-gradient(
      to right,
      #f44336,
      #1de9b6 20%,
      #f44336 50%,
      #1de9b6 70%,
      #f44336
    );
    -webkit-text-fill-color: transparent;
    -webkit-background-clip: text;
    -webkit-background-size: 200% 100%;
    -webkit-animation: welcome 1s infinite linear;
  }
  & > img {
    position: absolute;
    top: 50%;
    left: 50%;
    height: 55%;
    transition: filter 0.3s;
    cursor: pointer;
    display: none;
    filter: brightness(40%);
    &:hover {
      filter: brightness(100%);
      z-index: 10;
    }
  }
  & > .cmyh-lufei {
    z-index: 6;
    transform: translateX(-50%) translateY(-15%);
  }
  & > .cmyh-suolong {
    z-index: 5;
    transform: translateX(-110%) translateY(-25%);
  }
  & > .cmyh-shanzhi {
    z-index: 5;
    transform: translateX(30%) translateY(-25%);
  }
  & > .cmyh-namei {
    z-index: 4;
    transform: translateX(90%) translateY(-35%);
  }
  & > .cmyh-wusuopu {
    z-index: 4;
    transform: translateX(-160%) translateY(-35%);
  }
  & > .cmyh-qiaoba {
    z-index: 3;
    height: 40%;
    transform: translateX(150%) translateY(-20%);
  }
  & > .cmyh-luobin {
    z-index: 3;
    transform: translateX(-320%) translateY(-35%);
  }
  & > .cmyh-fulanqi {
    z-index: 2;
    height: 115%;
    transform: translateX(-100%) translateY(-66%);
  }
  & > .cmyh-buluke {
    z-index: 2;
    height: 70%;
    transform: translateX(6%) translateY(-52%);
  }
}
</style>
