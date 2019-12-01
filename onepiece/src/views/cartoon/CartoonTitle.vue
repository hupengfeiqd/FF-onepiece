<template>
  <div id="cart-title">
    <div id="cart-head">
      <div v-for="(item,index) in Math.ceil(datas ? datas.length / 20 : [])" :key="index" @click="showCartoon($event,index)">
        <span>{{ index * 20 + 1 }}-{{ index * 20 + 20 }}</span>
      </div>
    </div>
    <div id="cart-content">
      <div v-for="item in showDatas" :key="item.cartoon_id">
        <a :href="item.cartoon_href" target="_blank">{{ item.cartoon_num }} {{ item.cartoon_title }}</a>
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
    showCartoon(e, index) {
      let t = this;
      let start = index * 20;
      let end = index * 20 + 19;
      $(e.currentTarget).addClass("choiceCartoon").siblings().removeClass("choiceCartoon");
      var newArr = t.datas.filter((ele, i) => {
        if (i >= start && i <= end) {
          return ele;
        }
      });
      t.showDatas = newArr;
      console.log(newArr);
    }
  },
  mounted () {
    let t = this;
    t.opAxios.post("/api/queryAllCartoon")
    .then(data => {
      t.datas = data.data;
      console.log(t.datas);
    })
  }
}
</script>

<style lang="less" scoped>
  #cart-title {
    width: 100%;
    height: 100%;
    &>#cart-head {
      padding: 10px;
      display: flex;
      flex-wrap: wrap;
      &>div {
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
      &>div.choiceCartoon {
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
    &>#cart-content {
      padding: 10px;
      display: flex;
      flex-wrap: wrap;
      &>div {
        padding: 7px 12px;
        background-color: rgba(0, 0, 0, 0.6);
        margin: 5px;
        border-radius: 5px;
        cursor: pointer;
        &:hover>a {
          text-decoration: underline;
        }
        &>a {
          color: #fff;
        }
      }
    }
  }
</style>
