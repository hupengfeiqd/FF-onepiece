<template>
  <div id="the-edition">
    <div v-for="(item,index) in datas" :key="index" :title="item.title" @mouseover="titleover($event)" @mousemove="titlemove($event)" @mouseout="titleout($event)">
      <img :src="item.img" alt="">
      <span>{{ item.title }}</span>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      datas: [
        {
          img: require('../../assets/images/juchangban/kuangrexingdong.jpg'),
          title: "航海王：狂热行动"
        },
        {
          img: require('../../assets/images/juchangban/huangjincheng.jpg'),
          title: "航海王之黄金城"
        },
        {
          img: require('../../assets/images/juchangban/huangjindao.jpg'),
          title: "航海王：黄金岛冒险"
        },
        {
          img: require('../../assets/images/juchangban/fatiaodao.jpg'),
          title: "航海王：发条岛的冒险"
        },
        {
          img: require('../../assets/images/juchangban/zhenshoudao.jpg'),
          title: "航海王：珍兽岛的乔巴王国"
        },
        {
          img: require('../../assets/images/juchangban/siwangjintou.jpg'),
          title: "航海王：死亡尽头的冒险"
        },
        {
          img: require('../../assets/images/juchangban/beizuzhoudeshengjian.jpg'),
          title: "航海王：被诅咒的圣剑"
        },
        {
          img: require('../../assets/images/juchangban/shenmidao.jpg'),
          title: "航海王：祭典男爵与神秘岛"
        },
        {
          img: require('../../assets/images/juchangban/jiguancheng.jpg'),
          title: "航海王：机关城的机械巨兵"
        },
        {
          img: require('../../assets/images/juchangban/alabasitan.jpg'),
          title: "航海王：阿拉巴斯坦战记沙漠王女与海贼们"
        },
        {
          img: require('../../assets/images/juchangban/qiaobashenshi.jpg'),
          title: "航海王：冬季绽放、奇迹的樱花"
        },
        {
          img: require('../../assets/images/juchangban/qiangzheshijie.jpg'),
          title: "航海王：强者世界"
        },
        {
          img: require('../../assets/images/juchangban/zhuixuncaomao.jpg'),
          title: "航海王：追寻草帽"
        },
        {
          img: require('../../assets/images/juchangban/z.jpg'),
          title: "航海王剧场版：Z"
        }
      ]
    }
  },
  methods: {
    // 自定义title标签的三个事件
    titleover (data) {
      this.$store.commit("titleover", data);
    },
    titlemove (data) {
      this.$store.commit("titlemove", data);
    },
    titleout (data) {
      this.$store.commit("titleout", data);
    }
  }
}
</script>

<style lang="less" scoped>
  #the-edition {
    width: 100%;
    height: 100%;
    &>div {
      display: inline-block;
      width: 160px;
      margin: 5px 10px;
      box-sizing: border-box;
      border-radius: 5px;
      padding: 10px;
      // background-color: rgba(29, 233, 182, 0.6);
      background-color: rgba(0, 0, 0, 0.6);
      cursor: pointer;
      &>img {
        width: 140px;
      }
      &>span {
        display: block;
        width: 100%;
        font-size: 18px;
        color: #fff;
        word-break: break-all;
        font-weight: bold;
        text-align: center;
        margin-top: 5px;
        text-shadow: 1px 1px 1px #000;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
    }
  }
</style>
