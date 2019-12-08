<template>
  <div id="ani-title">
    <div id="ani-head">
      <div v-for="(item,index) in Math.ceil(datas ? datas.length / 20 : [])" :key="index" @click="showAnimation($event,index)">
        <span>{{ index * 20 + 1 }}-{{ index * 20 + 20 }}</span>
      </div>
    </div>
    <div id="ani-content">
      <div v-for="item in showDatas" :key="item.ani_id">
        {{ item.ani_num }} {{ item.ani_title }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      datas: null,
      showDatas:null
    }
  },
  methods: {
    showAnimation(e, index) {
      let t = this;
      let start = index * 20;
      let end = index * 20 + 19;
      $(e.currentTarget).addClass("choiceAni").siblings().removeClass("choiceAni");
      var newArr = t.datas.filter((ele, i) => {
        if (i >= start && i <= end) {
          return ele;
        }
      });
      t.showDatas = newArr;
    }
  },
  mounted () {
    let t = this;
    t.opAxios.post("/api/queryAllAnimation")
    .then(data => {
      t.datas = data.data;
      console.log(t.datas);
    })
  }
}
</script>

<style lang="less" scoped>
  #ani-title {
    width: 100%;
    height: 100%;
    display: flex;
    flex-flow: row;
    justify-content: center;
    &>#ani-head {
      flex: 1;
      padding: 10px;
      &>div {
        display: inline-block;
        padding: 7px 12px;
        background-color: rgba(0, 0, 0, 0.6);
        margin: 5px;
        border-radius: 5px;
        cursor: pointer;
        &:hover {
          background-color: rgba(0, 0, 0, 0.8);
        }
        &>span {
          color: #1de9b6;
          text-shadow: 1px 1px 1px #000;
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
      &>div.choiceAni {
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
    &>#ani-content {
      flex: 1;
      padding: 10px;
      display: flex;
      flex-wrap: wrap;
      flex-flow: column;
      justify-content: flex-start;
      align-items: flex-start;
      &>div {
        padding: 7px 12px;
        background-color: rgba(0, 0, 0, 0.6);
        margin: 5px;
        border-radius: 5px;
        cursor: pointer;
        color: #fff;
        text-shadow: 1px 1px 1px #000;
        &:hover {
          text-shadow: none;
          color: #1de9b6;
        }
      }
    }
  }
</style>
