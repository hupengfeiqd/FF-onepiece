<template>
  <div id="ranking">
    <div id="ranking_content">
      <div class="rank_main">
        <ul>
          <li class="rank">排名</li>
          <li class="pic">头像</li>
          <li class="name">名字</li>
          <li class="reward_gold">
            <i class="icon-beili"></i>悬赏金
          </li>
          <li class="ability">
            <i class="icon-emgs"></i>果实能力
          </li>
          <li class="power">所属</li>
        </ul>
        <div class="rank_con">
          <ul v-for="(item,index) in pag_datas" :key="item.id">
            <li
              v-if="(page - 1) == 0 && index == 0"
              class="rank rank_one"
            >{{ (page - 1) * count + (index + 1) }}</li>
            <li
              v-else-if="(page - 1) == 0 && index == 1"
              class="rank rank_two"
            >{{ (page - 1) * count + (index + 1) }}</li>
            <li
              v-else-if="(page - 1) == 0 && index == 2"
              class="rank rank_three"
            >{{ (page - 1) * count + (index + 1) }}</li>
            <li v-else class="rank">{{ (page - 1) * count + (index + 1) }}</li>
            <li>
              <img :src="handleImgUrl(item.img_path)" class="picMove" alt />
            </li>
            <li
              class="name"
              :title="item.title"
              @mouseover="titleover($event)"
              @mousemove="titlemove($event)"
              @mouseout="titleout($event)"
            >{{ item.name }}</li>
            <li class="reward_gold">
              <i class="icon-beili"></i>
              {{ readRewardGold(item.reward_gold) }}
            </li>
            <li
              class="ability"
              :title="item.abStr"
              @mouseover="titleover($event)"
              @mousemove="titlemove($event)"
              @mouseout="titleout($event)"
            >{{ item.ability }}</li>
            <li :class="item.power_icon ? 'power' : ''">
              <i
                v-if="item.power_icon"
                :class="item.power_icon"
                :title="item.power_name"
                @mouseover="titleover($event)"
                @mousemove="titlemove($event)"
                @mouseout="titleout($event)"
              ></i>
              <span v-else style="font-size:18px;color:#ffa726;">{{ item.power_name }}</span>
              <!-- {{ item.power_name }} -->
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div id="ranking_paging">
      <paging :pageNum="pageNum"></paging>
    </div>
  </div>
</template>

<script>
import paging from '../../components/Paging';
export default {
  data() {
    return {
      page: 1,
      count: null,
      pag_datas: null,
      page_num: null,
      move_start: false,
      move_end: false
    };
  },
  components: {
    paging
  },
  computed: {
    pageNum () {
      return this.page_num;
    }
  },
  watch: {
    page () {
      let t = this;
      $(".rank_con>ul").animate({left:"40px",opacity:0},500,"linear",function(){
      });
      t.getPageData();

    }
  },
  methods: {
    handleImgUrl(url) {
      var res = require(`../../assets/images/${url}.png`);
      return res;
    },
    op_resize() {
      this.count = parseInt($(".rank_con").height() / 60);
    },
    // 自定义title标签的三个事件
    titleover(data) {
      this.$store.commit("titleover", data);
    },
    titlemove(data) {
      this.$store.commit("titlemove", data);
    },
    titleout(data) {
      this.$store.commit("titleout", data);
    },
    getPageData() {
      let t = this;
      let params = {
        page: t.page,
        count: t.count
      };
      t.opAxios.post("/api/pagingCount",params)
      .then(data => {
        t.page_num = data.data.pageNum;
      })
      t.opAxios.post("/api/paging", params).then(data => {
        t.move = true;
        t.pag_datas = data.data;
      });
    },
    // 读悬赏金
    readRewardGold: function(rew) {
      //得到悬赏金的长度
      var rgStr = String(rew).length;
      var rg = "";
      //得到万以下不包括万的数字
      var ge = rew % 10000;
      //得到亿以下不包括亿的数字
      var wan = ((rew - ge) / 10000) % 10000;
      //得到亿以上包括亿的数字
      var yi = ((rew - ge) / 10000 - wan) / 10000;
      if (rgStr > 8) {
        rg = yi + "亿";
        if (wan) {
          rg += wan + "万";
          if (ge) {
            rg += ge;
          }
        }
      } else if (rgStr > 4 && rgStr < 9) {
        rg = wan + "万";
        if (ge) {
          rg += ge;
        }
      } else {
        rg += ge;
      }
      return rg;
    }
  },
  mounted() {
    window.onresize = this.op_resize;
    this.op_resize();
    this.getPageData();
  }
};
</script>

<style lang="less" scoped>
#ranking {
  width: 100%;
  height: 100%;
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  padding: 50px 120px 30px;
  box-sizing: border-box;
  #ranking_content {
    // min-width: 1300px;
    width: 100%;
    min-width: 1200px;
    flex: 1;
    box-shadow: 0px 0px 8px 4px #000;
    border-radius: 25px;
    // min-height: 550px;
    background-image: url(../../assets/images/rankingbg.jpg);
    background-repeat: no-repeat;
    background-size: 100% 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    & > .rank_main {
      width: 82%;
      height: 96%;
      // background-color: rgba(0, 0, 0, 0.4);
      // background-color: #fff;
      display: flex;
      flex-flow: column;
      & > ul {
        width: 100%;
        height: 60px;
        display: flex;
        & > li {
          flex: 2;
          // width: 1;
          height: 60px;
          line-height: 40px;
          text-align: center;
          text-shadow: 1px 1px 3px #000;
          box-sizing: border-box;
          padding: 10px 0px;
          display: flex;
          justify-content: center;
          align-items: center;
          font-size: 18px;
          font-weight: bold;
          border-image: url(../../assets/images/topborder.png);
          border-image-slice: 0 0 100% 0;
          border-image-width: 10px;
          border-image-repeat: repeat;
          border-bottom: 1px solid;
        }
        & > li:nth-child(1),
        & > li:nth-child(2) {
          flex: 1;
        }
      }
      & > .rank_con {
        width: 100%;
        flex: 1;
        overflow: hidden;
        & > ul {
          width: 100%;
          height: 60px;
          display: flex;
          position: relative;
          left: 0px;
          opacity: 1;
          transition: all 0.4s;
          animation: leftMove 0.5s linear;
          & > li {
            flex: 2;
            height: 60px;
            line-height: 40px;
            text-align: center;
            box-sizing: border-box;
            padding: 10px 0px;
            font-size: 18px;
            font-weight: bold;
            text-shadow: 1px 1px 1px #000;
            display: flex;
            justify-content: center;
            align-items: center;
            // white-space: nowrap;
            // overflow: hidden;
            cursor: pointer;
            & > img {
              width: 50px;
              height: 50px;
              border-radius: 50%;
              box-shadow: 0px 0px 4px 2px #fff;
            }
            & > i {
              font-size: 34px;
              display: flex;
              justify-content: center;
              align-items: center;
            }
          }
          & > li:nth-child(1),
          & > li:nth-child(2) {
            flex: 1;
          }
        }
      }
    }
  }
  #ranking_paging {
    width: 100%;
    min-width: 1200px;
    height: 50px;
    margin-top: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
.rank_one {
    background-image: url(../../assets/images/one.png);
    background-size: 50px auto;
    background-position: center center;
    background-repeat: no-repeat;
    color: #ff0 !important;
    font-size: 36px !important;
  }
  .rank_two {
    background-image: url(../../assets/images/two.png);
    background-size: 50px auto;
    background-position: center center;
    background-repeat: no-repeat;
    color: #c0c0c0 !important;
    font-size: 32px !important;
  }
  .rank_three {
    background-image: url(../../assets/images/three.png);
    background-size: 50px auto;
    background-position: center center;
    background-repeat: no-repeat;
    color: #c69145 !important;
    font-size: 30px !important;
  }
.rank {
  color: #1de9b6;
}
.pic {
  color: #3eede7;
}
.name {
  color: red;
  flex: 3 !important;
}
.reward_gold {
  color: #ff0;
  &>i {
    font-size: 24px !important;
    margin-right: 5px;
  }
}
.ability {
  color: #7cfc60;
  display: flex;
  flex: 3 !important;
  justify-content: center;
  align-items: center;
  &>i {
    font-size: 28px !important;
    margin-right: 5px;
  }
}
.power {
  color: #ffa726;
  padding: 0px !important;
  display: flex;
  justify-content: center;
  align-items: center;
  & > i {
    background-image: url(../../assets/images/hzqbg.png);
    background-repeat: no-repeat;
    background-size: 100% 100%;
    color: #fff;
    width: 70px;
    height: 46px;
    box-sizing: border-box;
    padding: 3px 0px;
    display: inline-block;
    text-shadow: none;
  }
}
@keyframes leftMove {
  0% {
      left : -40px;
      opacity: 0;
  }
  100% {
      left : 0px;
      opacity: 1;
  }
}
</style>
