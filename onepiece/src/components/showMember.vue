<template>
  <div id="showMember">
    <!-- <div class="mem-introduce">
      <div class="powerHead" :class="powerDatas.power_class">
        <i :class="powerDatas.power_icon"></i>
        <span>{{ powerDatas.power_name }}</span>
      </div>
      <div class="powerDescBox">
        <p
          v-for="(item, i) in powerDatas.power_desc ? powerDatas.power_desc.split('|') : powerDatas.power_desc"
          :key="i"
        >{{ item }}</p>
      </div>
    </div> -->
    <div class="mem-list">
      <ul>
        <li
          v-for="item in memberDatas"
          :key="item.id"
          :title="item.name"
          :pName="item.name"
          @mouseover="titleover($event)"
          @mousemove="titlemove($event)"
          @mouseout="titleout($event)"
        >
          <img :src="handleImgUrl(item.img_path)" :class="{ active:pirates && pirates.id == item.id }" @click="clickPerson($event,item.id)" />
          <!-- <span>{{ item.name }}</span> -->
        </li>
      </ul>
    </div>
    <div class="mem-content">
      <ul v-if="pirates">
        <!-- <li v-for="(key,value,index) in pirates" :key="index">{{ key }}</li> -->
        <li class="pir_name"><span>名字</span>{{ pirates.name }}</li>
        <li class="pir_title" v-if="pirates.title"><span>称号</span>{{ pirates.title }}</li>
        <li class="pir_powerIden" v-if="pirates.power_identity"><span>身份</span>{{ pirates.power_identity }}</li>
        <li class="pir_abStr"><span>果实类型</span>{{ pirates.abStr }}</li>
        <li class="pir_ability"><span>果实能力</span>{{ pirates.ability }}</li>
        <li class="pir_rewardGold"><span>悬赏金额</span>{{ pirates.reward_gold == 0 ? '未知' : pirates.reward_gold.toLocaleString() }}</li>
        <li class="pir_birLand" v-if="pirates.birth_land"><span>故乡</span>{{ pirates.birth_land }}</li>
        <li class="pir_intro"><span>人物简介</span><div>{{ pirates.introduce }}</div></li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    handleImgUrl(url) {
      var res = require(`../assets/images/${url}.png`);
      return res;
    },
    // 自定义title标签的三个事件
    titleover (data) {
      this.$store.commit("titleover", data);
    },
    titlemove (data) {
      this.$store.commit("titlemove", data);
    },
    titleout (data) {
      this.$store.commit("titleout", data);
    },
    clickPerson (e,id) {
      var pirates = this.$store.getters.getPersonInfoById(id);
      this.$store.commit("setShowPirates", pirates);
      // $(e.target).addClass("active").parent().siblings().find("img").removeClass("active");
    }
  },
  computed: {
    pirates () {
      return this.$store.state.showPirates;
    },
    memberDatas() {
      return this.$store.state.showMember;
    },
    powerDatas() {
      return this.$store.state.showPower;
    },
    showPerson() {
      return this.$store.state.showPerson;
    }
  }
};
</script>

<style lang="less" scoped>
#showMember {
  width: 100%;
  height: 100%;
  padding: 15px;
  box-sizing: border-box;
  display: flex;
  color: #fff;
  & > .mem-list {
    width: 210px;
    max-height: 100%;
    // background-color: olivedrab;
    overflow-y: auto;
    overflow-x: hidden;
    padding: 0px 20px;
    // box-shadow: 0 0 10px #000;
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
    & > ul {
      display: flex;
      flex-wrap: wrap;
      // padding-left: 10px;
      & > li {
        width: 83px;
        height: 83px;
        padding: 10px;
        display: flex;
        flex-flow: column;
        justify-content: center;
        align-items: center;
        & > img {
          width: 83px;
          height: 83px;
          border-radius: 50%;
          cursor: pointer;
          transition: all 0.05s;
          box-shadow: 0px 0px 10px 1px #fff;
          &:hover {
            transform: scale(1.1);
            box-shadow: 0px 0px 8px 4px #ff0;
          }
          &.active {
            box-shadow: 0px 0px 8px 4px #ff0;
          }
        }
        & > span {
          font-size: 16px;
          font-weight: bold;
        }
      }
      & > li:first-child {
        width: 186px;
        height: 100px;
        & > img {
          width: 100px;
          height: 100px;
        }
      }
    }
  }
  & > .mem-introduce {
    width: 237px;
    height: 100%;
    box-sizing: border-box;
    display: flex;
    flex-flow: column;
    justify-content: center;
    align-items: center;
    & > .powerHead {
      display: flex;
      flex-flow: column;
      justify-content: center;
      align-items: center;
      margin-bottom: 10px;
      -webkit-text-fill-color: transparent;
      -webkit-background-clip: text;
      -webkit-background-size: 200% 100%;
      -webkit-animation: welcome 1s infinite linear;
      &>span {
        font-size: 20px;
        white-space: nowrap;
        font-weight: bold;
      }
      &>i {
        font-size: 80px;
        margin-bottom: 10px;
      }
    }
    & > .powerDescBox {
      flex: 1;
      width: 100%;
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
      & > p {
        font-size: 16px;
        line-height: 18px;
        text-indent: 2em;
        color: #fff;
        text-shadow: 1px 1px 20px #76ff03;
      }
    }
  }
  & > .mem-content {
    flex: 2;
    height: 100%;
    margin-left: 10px;
    & > ul {
      width: 100%;
      height: 100%;
      display: flex;
      flex-flow: column;
      & > li {
        width: 100%;
        font-size: 20px;
        font-weight: bold;
        box-sizing: border-box;
        padding: 5px 10px;
        display: flex;
        align-items: center;
        &>span {
          font-size: inherit;
          color: #000;
          padding: 3px 5px;
          border-radius: 5px;
          margin-right: 7px;
          user-select: none;
        }
        &>div {
          flex: 1
        }
        &.pir_name {
          color: #ff3300;
          &>span { background-color: #ff3300; }
        }
        &.pir_title {
          color: #fff1cf;
          &>span { background-color: #fff1cf; }
        }
        &.pir_powerIden {
          color: #bce672;
          &>span { background-color: #bce672; }
        }
        &.pir_abStr {
          color: #cca4e3;
          &>span { background-color: #cca4e3; }
        }
        &.pir_ability {
          color: #00e500;
          &>span { background-color: #00e500; }
        }
        &.pir_rewardGold {
          color: #ff0;
          &>span { background-color: #ff0; }
        }
        &.pir_birLand {
          color: #2edfa3;
          &>span { background-color: #2edfa3;}
        }
        &.pir_intro {
          // padding: 10px;
          flex-flow: column;
          align-items: flex-start;
          // box-shadow: 0px 0px 10px #;
          &>span { background-color: #ffa726; margin-bottom: 10px; }
          &>div {
            font-size: inherit;
            color: #ffa726;
            overflow-y: auto;
            text-indent: 2em;
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
      }
    }
  }
}
.hf { background-image: linear-gradient(to right, #f44336, #880e4f 20%, #f44336 50%, #880e4f 70%, #f44336);}
.kd { background-image: linear-gradient(to right, #4a148c, #ab47bc 20%, #4a148c 50%, #ab47bc 70%, #4a148c);}
.bm { background-image: linear-gradient(to right, #e91e63, #ef9a9a 20%, #e91e63 50%, #ef9a9a 70%, #e91e63);}
.hhz { background-image: linear-gradient(to right, #000, #1de9b6 20%, #000 50%, #1de9b6 70%, #000);}
.bhz { background-image: linear-gradient(to right, #03a9f4, #fff 20%, #03a9f4 50%, #fff 70%, #03a9f4);}
</style>
