<template>
  <div id="prison">
    <div
      v-for="(item,index) in data"
      :key="index"
      :class="item.class"
      :title="item.level"
      @mouseover="titleover($event)"
      @mousemove="titlemove($event)"
      @mouseout="titleout($event)"
    ></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      data: [
        {
          level: "LEVEL·1 红莲地狱",
          class: "level-1"
        },
        {
          level: "LEVEL·2 猛兽地狱",
          class: "level-2"
        },
        {
          level: "LEVEL·3 饥饿地狱",
          class: "level-3"
        },
        {
          level: "LEVEL·4 灼热地狱",
          class: "level-4"
        },
        {
          level: "LEVEL·5 极寒地狱",
          class: "level-5"
        },
        {
          level: "LEVEL·5.5 新人妖乐园",
          class: "level-55"
        },
        {
          level: "LEVEL·6 无限地狱",
          class: "level-6"
        }
      ]
    };
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
  }
};
</script>

<style lang="less" scoped>
#prison {
  width: 100%;
  height: 100%;
  background-image: url(../assets/images/haididajianyubg.png);
  background-repeat: no-repeat;
  background-size: 100% 100%;
  position: relative;
  & > div {
    position: relative;
    cursor: pointer;
  }
  & > .level-1 {
    height: 11%;
    width: 12%;
    transform: translateX(322%) translateY(161%);
  }
  & > .level-2 {
    height: 11%;
    width: 17%;
    transform: translateX(212%) translateY(177%);
  }
  & > .level-3 {
    height: 11%;
    width: 21.5%;
    transform: translateX(157%) translateY(196%);
  }
  & > .level-4 {
    height: 12%;
    width: 21.5%;
    transform: translateX(157%) translateY(189%);
  }
  & > .level-5 {
    height: 11%;
    width: 26%;
    transform: translateX(120%) translateY(222%);
  }
  & > .level-55 {
    height: 11.5%;
    width: 12%;
    transform: translateX(102%) translateY(159%);
  }
  & > .level-6 {
    height: 12%;
    width: 31%;
    transform: translateX(93%) translateY(129%);
  }
}
</style>
