<template>
  <div id="trip">
    <div id="trip-title">
      <div id="trip_play">
        <i v-show="!play" class="iconfont op-bofang" @click="tripPlay"></i>
        <i v-show="play" class="iconfont op-zanting" @click="tripPlay"></i>
      </div>
      <ul id="trip_ul">
        <li v-for="trip in trips" :key="trip.trip_id" :tripIndex="trip.trip_index" :class="trip.trip_index == 0 ? 'adopt' : ''" >
          <img :src="handleImgUrl(trip.island_img)" @click="goTrip($event,trip.trip_index)" alt />
          <span  @click="goTrip($event,trip.trip_index)">{{ trip.trip_island_name }}</span>
          <i class="iconfont op-chakan" @click="eventPassing($event,trip.trip_index,trip.trip_id - 1)"></i>
        </li>
      </ul>
    </div>
    <div id="trip-ep">
      <ep ref="eventPass" v-show="showEP"></ep>
    </div>
    <div id="trip_wz">
      <div class="wz_box">
        <i class="iconfont op-weizhi"></i>
        <span>东海</span>
      </div>
    </div>
    <canvas id="op-canvas"></canvas>
  </div>
</template>

<script>
import tripObj from "../assets/js/trip";
import ep from "../components/EventPassing";
export default {
  data() {
    return {
      trips: null,
      // epDatas: null,
      play: false,
      showEP: false
    };
  },
  components: {
    ep
  },
  computed: {
    canStyle () {
      return `top:${this.can_top}px;right:${this.can_right}px;`;
    }

  },
  methods: {
    goTrip (e, index) {
      $(e.currentTarget).parent("li").addClass("adopt").prevAll().addClass("adopt").end().nextAll().removeClass("adopt");
      $("#trip_ul").animate({scrollTop: $("#trip_ul").scrollTop() + $(`li[tripIndex=${index}]`).offset().top - $("#trip_ul").offset().top}, 1000);
      tripObj.tripObj.trip_index = index;
      this.$refs.eventPass.handlePartner(this.trips[index > 7 ? index - 1 : index]);
      tripObj.tripObj.tripMove();
    },
    tripSetTitle(i, bool,index) {
      if (!bool) {
        this.play = false;
        return;
      }
      if (this.showEP) {
        this.$refs.eventPass.handlePartner(this.trips[index]);
      }
      $(`#trip_ul>li[tripIndex=${i}]`).addClass("adopt").prevAll().addClass("adopt").end().nextAll().removeClass("adopt");
      $("#trip_ul").animate({scrollTop: $("#trip_ul").scrollTop() + $(`li[tripIndex=${i}]`).offset().top - $("#trip_ul").offset().top}, 1000);
    },
    eventPassing (e,index,i) {
      this.goTrip(e,index);
      this.showEP = !this.showEP;
      // this.epDatas = this.trips[i];
      // console.log(this.epDatas);
      this.$refs.eventPass.handlePartner(this.trips[i]);
    },
    tripPlay () {
      this.play = !this.play;
      if (this.play) {
        tripObj.tripObj.startInterval(this.tripSetTitle);
      } else {
        tripObj.tripObj.endInterval();
      }
    },
    handleImgUrl(url) {
      var res = require(`../assets/images/${url}.png`);
      return res;
    }
  },
  mounted() {
    let t = this;
    t.opAxios.post("/api/queryAllTrip").then(data => {
      t.trips = data.data;
      tripObj.tripObj.init();
    });
  }
};
</script>

<style lang="less" scoped>
#trip {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  user-select: none;
  // background-image: url(../assets/images/备用.png);
  // background-repeat: no-repeat;
  // background-size: auto 100%;
  // background-position: 0% 0%;
  & > canvas {
    position: absolute;
    z-index: 1;
    right: -300px;
    top: 0px;
  }

  & > #trip_wz {
    position: absolute;
    z-index: 2;
    right: 30px;
    top: 50px;
    background-color: rgba(0, 0, 0, 0.6);
    padding: 5px 10px;
    border-radius: 10px;
    & > .wz_box {
      display: flex;
      justify-content: center;
      align-items: center;
      color: #1de9b6;
      & > i {
        font-size: 26px;
        margin-right: 5px;
      }
      & > span {
        font-size: 22px;
        font-weight: bold;
      }
    }

  }
  & > #trip-title {
    // position: absolute;
    margin-left: 60px;
    // width: 180px;
    height: 90%;
    padding: 10px;
    z-index: 2;
    display: flex;
    flex-flow: column;
    & > #trip_play {
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 10px 0px;

      & > i {
        font-size: 50px;
        font-weight: bold;
        cursor: pointer;
        color: #1de9b6;
        text-shadow: 0px 0px 5px #000;
        transition: all 0.3s;
        &:hover {
          color: #ea5506;
        }
      }
    }
    // box-sizing: border-box;
    & > ul {
      position: relative;
      width: 100%;
      flex: 1;
      // display: inline-block;
      // display: flex;
      // flex-flow: column;
      padding: 0px 40px 0px 30px;
      // // align-items: center;
      // flex-wrap: nowrap;
      overflow-x: hidden;
      overflow-y: auto;
      box-sizing: border-box;
      &::-webkit-scrollbar {
        width: 4px;
        height: 8px;
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
      & > li {
        position: relative;
        // float: left;
        background-color: rgba(0, 0, 0, 0.2);
        border-radius: 10px;
        // display: inline-block;
        white-space: nowrap;
        // width:
        // height: 100px;
        margin-bottom: 10px;
        padding: 10px 10px 0px 10px;
        box-sizing: border-box;
        display: flex;
        flex-flow: column;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        transition: all 0.2s;
        // border: 1px solid #0ff;
        &:last-child {
          margin-bottom: 0px;
          &::after {
            display: none;
          }
        }
        &::before {
          content: "";
          display: block;
          position: absolute;
          width: 10px;
          height: 10px;
          background-color: #ddd;
          border-radius: 50%;
          box-shadow: 0px 0px 6px 3px #000;
          left: -20px;
        }
        &::after {
          content: "";
          display: block;
          position: absolute;
          width: 0px;
          height: 0px;
          // background-color: rgb(206, 198, 198);
          left: -17px;
          top: calc(50% + 20px);
          border-radius: 3px;
          border-left: 4px dashed #949495;
          transition: all 1s linear;
        }
        &:hover {
          background-color: rgba(0, 0, 0, 0.6);
        }
        &:hover > span {
          background-image: -webkit-linear-gradient(
            right,
            #00ffff,
            #08b98d 20%,
            #00ffff 50%,
            #08b98d 70%,
            #00ffff
          );
          -webkit-text-fill-color: transparent;
          -webkit-background-clip: text;
          -webkit-background-size: 200% 100%;
          -webkit-animation: welcome 1s infinite linear;
        }
        &:hover > img {
          filter: brightness(100%);
        }
        & > img {
          width: 120px;
          height: 80px;
          filter: brightness(80%);
          transition: all 0.2s;
        }
        & > span {
          font-size: 16px;
          font-weight: bold;
          color: #fff;
          padding: 5px 0px;
          text-align: center;
        }
        & > i {
          width: 26px;
          height: 26px;
          display: flex;
          justify-content: center;
          align-items: center;
          box-sizing: border-box;
          padding: 2px;
          border-radius: 3px;
          font-size: 22px;
          font-weight: bold;
          color: #1de9b6;
          position: absolute;
          right: -30px;
          background-color: #000;
          transition: all 0.3s;
          &:hover {
            background-color: #ea5506;
          }
        }
        &.adopt {
          background-color: rgba(0, 0, 0, 0.6);
          & > span {
            background-image: -webkit-linear-gradient(
              right,
              #00ffff,
              #08b98d 20%,
              #00ffff 50%,
              #08b98d 70%,
              #00ffff
            );
            -webkit-text-fill-color: transparent;
            -webkit-background-clip: text;
            -webkit-background-size: 200% 100%;
            -webkit-animation: welcome 1s infinite linear;
          }
          & > img {
            filter: brightness(100%);
          }
          &::before {
            background-color: #ea5506;
            box-shadow: 0px 0px 6px 3px #1de9b6;
          }
          &::after {
            border-color: #ea5506;
            height: calc(100% - 20px);
          }
        }
      }
    }
  }
  & > #trip-ep {
    flex: 1;
    height: calc(90% - 75px);
    z-index: 2;
    margin-top: 55px;
    margin-right: 60px;
    padding: 10px;
    box-sizing: border-box;
  }
}
</style>
