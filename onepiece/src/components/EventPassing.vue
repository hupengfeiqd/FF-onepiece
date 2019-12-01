<template>
  <div id="event-passing">
    <div id="ep-head">
      <img :src="epDatas ? handleImgUrl(epDatas.island_img) : '#'" alt="">
      <div class="ep-head-right">
        <span>{{ epDatas ? epDatas.island_blue + "·" + epDatas.trip_island_name : '' }}</span>
        <p>{{ epDatas ? epDatas.event_passing : '' }}</p>
      </div>
    </div>
    <div id="ep-content">
      <div class="ep-con-left">
        <div v-show="caomao" class="ep-con-left-head">
          <i class="icon-caomaohzq"></i>
          <span>草帽一伙</span>
        </div>
        <div class="ep-partner" v-show="caomao">
          <img v-for="item in caomao" :src="handleImgUrl(item.img_path)" :key="item.id" alt="" :title="item.name" @mouseover="titleover($event)" @mousemove="titlemove($event)" @mouseout="titleout($event)">
        </div>
        <div class="ep-con-left-add" v-show="add">
          <span>新增/回归伙伴</span>
        </div>
        <div class="ep-partner-add" v-show="add">
          <div v-for="item in add" :key="item.id">
            <img :src="handleImgUrl(item.img_path)" alt="" :title="item.name" @mouseover="titleover($event)" @mousemove="titlemove($event)" @mouseout="titleout($event)">
          </div>
        </div>
        <div class="ep-con-left-leave" v-show="leave">
          <span>离开/失散伙伴</span>
        </div>
        <div class="ep-partner-leave" v-show="leave">
          <div v-for="item in leave" :key="item.id">
            <img :src="handleImgUrl(item.img_path)" alt="" :title="item.name" @mouseover="titleover($event)" @mousemove="titlemove($event)" @mouseout="titleout($event)">
          </div>
        </div>
      </div>
      <div class="ep-con-right">
        <div class="ep-con-right-head">
          <i :class="epDatas ? epDatas.enemy_icon : ''"></i>
          <span>敌方：{{ epDatas ? epDatas.enemy_name : '' }}</span>
        </div>
        <div class="ep-enemy">
          <img v-for="item in right" :src="handleImgUrl(item.img_path)" :key="item.id" alt="" :title="item.name" @mouseover="titleover($event)" @mousemove="titlemove($event)" @mouseout="titleout($event)">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      epDatas: null,
      caomao: null,
      add: null,
      leave: null,
      right: null
    }
  },
  methods: {
    handleImgUrl(url) {
      if (!url) { return }
      var res = require(`../assets/images/${url}.png`);
      return res;
    },
    handlePartner (data) {
      this.epDatas = data;
      if (!this.epDatas) { return }
      let t = this;
      var partner = data.partner ? data.partner.split(",") : null;
      var enemy = data.enemy ? data.enemy.split(",") : null;
      var add = data.partner_add ? data.partner_add.split(",") : null;
      var leave = data.partner_leave ? data.partner_leave.split(",") : null;
      if (partner) {
        t.opAxios.post("/api/queryPersonByName",partner)
        .then(data => {
          t.caomao = data.data;
        });
      } else {
        t.caomao = null;
      }
      if (enemy) {
        t.opAxios.post("/api/queryPersonByName",enemy)
        .then(data => {
          t.right = data.data;
        })
      } else {
        t.right = null;
      }
      if (add) {
        t.opAxios.post("/api/queryPersonByName",add)
        .then(data => {
          t.add = data.data;
        });
      } else {
        t.add = null;
      }
      if (leave) {
        t.opAxios.post("/api/queryPersonByName",leave)
        .then(data => {
          t.leave = data.data;
        });
      } else {
        t.leave = null;
      }
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
    }
  }
}
</script>

<style lang="less" scoped>
  #event-passing {
    width: 100%;
    height: 100%;
    display: flex;
    flex-flow: column;
    align-items: center;
    color: #fff;
    & > #ep-head {
      width: 100%;
      padding:10px;
      box-sizing: border-box;
      display: flex;
      align-items: center;
      background-color: rgba(0, 0, 0, 0.6);
      margin-bottom: 10px;
      &>img {
        width: 150px;
        height: 100px;
      }
      &>div.ep-head-right {
        flex: 1;
        &>span {
          font-size: 26px;
          font-weight: bold;
          border-bottom: 1px solid #ccc;
          padding: 5px 0px;
          text-shadow: 1px 1px 3px #000;
        }
        &>p {
          font-size: 16px;
          font-weight: bold;
          margin-top: 10px;
          max-height: 100px;
          overflow-y: auto;
          text-shadow: 1px 1px 3px #000;
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
            background: #fff;
          }
        }
      }
    }
    & > #ep-content {
      width: 100%;
      padding:10px;
      box-sizing: border-box;
      background-color: aquamarine;
      background-color: rgba(0, 0, 0, 0.6);
      display: flex;
      & > .ep-con-left {
        flex: 1;
        border-right: 1px solid #000;
        margin-right: 5px;
        & > .ep-con-left-head {
          display: flex;
          align-items: center;
          height: 30px;
          box-sizing: border-box;
          padding: 0px 5px;
          & > i {
            font-size: 30px;
            margin-right: 5px;
            color: #ff0;
            text-shadow: 1px 1px 5px #000;
          }
          & > span {
            text-shadow: 1px 1px 3px #000;
            font-size: 20px;
            font-weight: bold;
          }
        }
        & > .ep-partner {
          padding: 10px 5px;
          max-height: 180px;
          overflow-y: auto;
          &::-webkit-scrollbar {
            /*滚动条整体样式*/
            width: 4px; /*高宽分别对应横竖滚动条的尺寸*/
            height: 10px;
          }
          &::-webkit-scrollbar-thumb {
            /*滚动条里面小方块*/
            border-radius: 15px;
            -webkit-box-shadow: 0 0 5px rgba(0, 0, 0, 1);
            background: #ff0;
          }
          &::-webkit-scrollbar-track {
            /*滚动条里面轨道*/
            -webkit-box-shadow: 0 0 7px rgba(0, 0, 0, 1);
            border-radius: 15px;
            background: #ededed;
          }
          & > img {
            width: 40px;
            height: 40px;
            border-radius: 50%;
            margin: 5px;
            box-shadow: 0px 0px 5px 2px #0ff;
            cursor: pointer;
            transition: all 0.25s;
            &:hover {
              transform: scale(1.2);
            }
          }
        }
        & > .ep-partner-add, & > .ep-partner-leave {
          padding: 10px 0px;
          max-height: 120px;
          overflow-y: auto;
          &::-webkit-scrollbar {
            /*滚动条整体样式*/
            width: 4px; /*高宽分别对应横竖滚动条的尺寸*/
            height: 10px;
          }
          &::-webkit-scrollbar-thumb {
            /*滚动条里面小方块*/
            border-radius: 15px;
            -webkit-box-shadow: 0 0 5px rgba(0, 0, 0, 1);
            background: #ff0;
          }
          &::-webkit-scrollbar-track {
            /*滚动条里面轨道*/
            -webkit-box-shadow: 0 0 7px rgba(0, 0, 0, 1);
            border-radius: 15px;
            background: #ededed;
          }
          &>div {
            position: relative;
            display: inline-block;
            &>img {
              width: 40px;
              height: 40px;
              border-radius: 50%;
              margin: 5px;
              box-shadow: 0px 0px 5px 2px #0ff;
              cursor: pointer;
              transition: all 0.25s;
              &:hover {
                transform: scale(1.2);
              }
            }
          }

        }
        & > .ep-partner-add {
          &>div::after {
            content: "";
            display: block;
            background-color: #0f0;
            width: 8px;
            height: 8px;
            border-radius: 50%;
            box-shadow: 0px 0px 6px 3px #0f0;
            font-weight: bold;
            position: absolute;
            right: 0;
            top: 0;
          }
        }
        & > .ep-partner-leave {
          &>div::after {
            content: "";
            display: block;
            background-color: red;
            width: 5px;
            height: 5px;
            border-radius: 50%;
            box-shadow: 0px 0px 3px 2px red;
            font-weight: bold;
            position: absolute;
            right: 0;
            top: 0;
          }
        }
        & > .ep-con-left-add,& > .ep-con-left-leave {
          display: flex;
          align-items: center;
          & > span {
            font-size: 20px;
            font-weight: bold;
          }
        }
        & > .ep-con-left-add {
          & > span {
            color: #0f0;
          }
        }
        & > .ep-con-left-leave {
          & > span {
            color: red;
          }
        }
      }
      & > .ep-con-right {
        flex: 1;
        & > .ep-con-right-head {
          display: flex;
          align-items: center;
          height: 30px;
          box-sizing: border-box;
          padding: 0px 5px;
          & > i {
            font-size: 30px;
            margin-right: 5px;
            color: red;
            text-shadow: 1px 1px 5px #1de9b6;
          }
          & > span {
            text-shadow: 1px 1px 3px #000;
            font-size: 20px;
            font-weight: bold;
          }
        }
        & > .ep-enemy {
          padding: 10px 5px;
          max-height: 180px;
          overflow-y: auto;
          &::-webkit-scrollbar {
            /*滚动条整体样式*/
            width: 4px; /*高宽分别对应横竖滚动条的尺寸*/
            height: 10px;
          }
          &::-webkit-scrollbar-thumb {
            /*滚动条里面小方块*/
            border-radius: 15px;
            -webkit-box-shadow: 0 0 5px rgba(0, 0, 0, 1);
            background: #ff0;
          }
          &::-webkit-scrollbar-track {
            /*滚动条里面轨道*/
            -webkit-box-shadow: 0 0 7px rgba(0, 0, 0, 1);
            border-radius: 15px;
            background: #ededed;
          }
          & > img {
            width: 40px;
            height: 40px;
            border-radius: 50%;
            margin: 5px;
            box-shadow: 0px 0px 5px 2px red;
            cursor: pointer;
            transition: all 0.25s;
            &:hover {
              transform: scale(1.2);
            }
          }
        }
      }
    }
  }
</style>
