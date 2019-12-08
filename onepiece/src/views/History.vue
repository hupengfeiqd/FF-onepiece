<template>
  <!-- 历史正文 -->
    <div id="history">
        <div id="his_img"></div>
        <div id="history_wrapper">
          <ul>
            <li v-for="(item,index) in 30" :key="index" :class="[5,6,11,12].includes(item) ? 'hongse' : [13,14,15,19,20,21,25,26,27].includes(item) ? 'lanse lanse9' : 'lanse'" @click="[5,6,11,12].includes(item) ? handleRed($event) : null">
              <div class="history-front"></div>
              <div class="history-back"></div>
              <div class="history-left"></div>
              <div class="history-right"></div>
              <div class="history-top"></div>
              <div class="history-bottom"></div>
            </li>
            <div id="hongse_box">
                    <div id="hongse_content">
                        <div class="content_head">赤之石[路标历史正文]</div>
                        <div class="content_con">世界上一共有<span class="blueSpan">4块</span>，每块赤之石上记录着一个地点，在地图上将4个点<span
                                class="blueSpan">连结之时</span>，在中心浮现的就是最后之岛<span class="blueSpan">“拉夫德鲁”</span>。现在赤之石一块在佐乌由和之国的<span
                                class="blueSpan">光月一族</span>掌管，一块下落不明，剩下两块的占有者分别是<br /><router-link tag="p" :to="{name:'timing',params:{piraName:'BIG·MOM海贼团',pName:'夏洛特·玲玲'}}" class="fourEm">四皇BIG·MOM</router-link>与
                                <router-link tag="p" :to="{name:'timing',params:{piraName:'百兽海贼团',pName:'凯多'}}" class="fourEm">四皇凯多</router-link></div>
                    </div>
                </div>
                <div id="lanse_box">
                    <div id="lanse_content">
                        <div class="content_head">情报历史正文</div>
                        <div class="content_con"><span class="redSpan">世界政府</span>想要极力隐瞒的历史，是和之国<span class="redSpan">光月一族</span>的先人们在<span
                                class="redSpan">空白100年间</span>，将历史刻在无法被破坏的石头上，并且送到世界各地去。研究历史本文的行为被世界政府定义为犯罪。石碑上的文字只有石碑制造者——<span
                                class="redSpan">光月一族</span>与生活在<span class="redSpan">奥哈拉的学者</span>才能解读。因为长时间下来，光月一族解读历史正文的解读方法和石碑内容在桃之助父辈一代就已经失传了，再加上奥哈拉的毁灭，历史本文仅剩
                                <router-link tag="span" :to="{name:'timing',params:{piraName:'草帽海贼团',pName:'妮可·罗宾'}}" class="fourEm">罗宾</router-link>一人可以解读。其中<span class="redSpan">九块记录着具体的信息</span>，<span class="redSpan">四块</span>记录着最终之岛<span
                                class="redSpan">“拉夫德鲁”</span>的位置信息。将所记载的文字全部串联起来，就是<span class="redSpan">“真正的历史本文”</span>。</div>
                    </div>
                </div>
          </ul>
        </div>
        <div id="history_back" @click="hisBack" v-show="backBtn">返回</div>
    </div>
</template>

<script>
import lubiaobg from '../assets/images/lubiaodh.gif';
import lub from '../assets/images/lubiaodian.jpg';
export default {
  data() {
    return {
      backBtn: false,
      bgGif: `url(${lubiaobg}?+${Math.random()})`,
      bgLB: `url(${lub}`
    }
  },
  methods: {
    handleRed (e) {
      let t = this;
      $(e.currentTarget).toggleClass("checkedHongse");
      var count = $(".checkedHongse").length;
      if (count == 4) {
          $("#history").css("background-image",t.bgLB);
          $(".lanse").css("opacity", "0");
          $("#hongse_box,#lanse_box").css("opacity", "0");
          $(".hongse").css("visibility", "visible");
          $("#history_wrapper ul").css("visibility", "hidden");
          $(".checkedHongse").removeClass("checkedHongse");
          // $("#history").addClass("bgg");
          $(".hongse").eq(0).css({"position": "absolute", "width": "0px", "height": "0px", "left": "10%", "top": "42%"});
          $(".hongse").eq(1).css({"position": "absolute", "width": "0px", "height": "0px", "left": "30%", "top": "72%"});
          $(".hongse").eq(2).css({"position": "absolute", "width": "0px", "height": "0px", "left": "70%", "top": "35%"});
          $(".hongse").eq(3).css({"position": "absolute", "width": "0px", "height": "0px", "left": "85%", "top": "90%"});
          this.backBtn = true;
          setTimeout(function () {
              $("#his_img").css("background-image",t.bgGif);
              $(".hongse").stop().removeAttr("style");
          }, 1500);
      }
    },
    hisBack () {
      $("#his_img").css("background-image","none");
      $("#history").removeAttr("style");
      $(".lanse").css("opacity", "1");
      $("#hongse_box,#lanse_box").css("opacity", "1");
      $(".hongse").css("visibility", "none");
      $("#history_wrapper ul").css("visibility", "visible");
      this.backBtn = false;
    }
  }
}
</script>

<style lang="less" scoped>
  #history {
    width: 100%;
    height: 100%;
    user-select: none;
    background-image: url(../assets/images/history_bg.jpg);
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center center;
    font-size: 0px;
    box-sizing: border-box;
    &>#his_img {
      position: absolute;
      width: 100%;
      height: 100%;
      z-index: 1;
      background-repeat: no-repeat;
      background-size: cover;
      background-position: center center;
    }
    &.bgg {
      background-image: url(../assets/images/lubiaodian.jpg);
    }
    &.bggif {
      background-image: url(../assets/images/lubiaodh.gif) !important;
    }
    &>#history_wrapper{
        position: relative;
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        & > ul {
          position: relative;
          width: 764px;
          height: 640px;
          background-color: rgba(0, 0, 0, 0.6);
          & > li {
            width: 104px;
            height: 104px;
            // display: inline-block;
            box-sizing: border-box;
            margin: 20px 0px 0px 20px;
            color: #fff;
            position: relative;
            transform-style: preserve-3d;
            transition: transform 1s,left 1s,top 1s,width 1s,height 1s;
            cursor: pointer;
            z-index: 22;
            float: left;
            &:hover {
              transform: scale(1.1) rotateY(365deg) rotateX(-10deg);
              z-index: 10;
            }
            &.hongse{
              position: relative;
              left: 0;
              top: 0;
              width: 104px;
              height: 104px;
              &:hover ~ #hongse_box>#hongse_content {
                  opacity: 1;
              }
            }
            &.hongse>div:first-child {
                background-image: url(../assets/images/lubiao.jpg);
            }
            &.hongse>div:not(:first-child) {
                background-image: url(../assets/images/lubiao_bg.png);
            }
            &.lanse>div:first-child {
                background-image: url(../assets/images/lanselishi.png);
            }
            &.lanse>div:not(:first-child) {
                background-image: url(../assets/images/lanselishi_bg.png);
            }
            &.lanse9:hover ~ #lanse_box>#lanse_content {
                opacity: 1;
            }
            &>div {
              background-size: 100% 100%;
              background-repeat: no-repeat;
              height: 100%;
              width: 100%;
              position: absolute;
              text-align: center;
              color: #fff;
              &.history-front{
                transform:translateZ(52px);
              }
              &.history-back{
                transform:translateZ(-52px);
              }
              &.history-left{
                transform:rotateY(90deg) translateZ(-52px);
              }
              &.history-right{
                transform:rotateY(90deg) translateZ(52px);
              }
              &.history-top{
                transform:rotateX(90deg) translateZ(52px);
              }
              &.history-bottom{
                transform:rotateX(90deg) translateZ(-52px);
              }
            }

          }

          &>#hongse_box {
            position: absolute;
            border: 2px solid #e53935;
            right: 12px;
            top: 12px;
            width: 240px;
            height: 240px;
            border-radius: 5px;
            &:hover #hongse_content{
                opacity: 1;
                z-index: 1;
            }
          }
          &>#lanse_box {
            position: absolute;
            border: 2px solid rgb(186, 188, 189);
            left: 12px;
            bottom: 12px;
            width: 364px;
            height: 364px;
            border-radius: 5px;
            &:hover #lanse_content{
                opacity: 1;
            }
          }
        }
    }
    &>#history_back {
      position: absolute;
      bottom: 50px;
      right: 50px;
      background-color: rgba(0, 0, 0, 0.6);
      padding: 10px 20px;
      border-radius: 5px;
      font-size: 20px;
      font-weight: bold;
      color: #fff;
      cursor: pointer;
      z-index: 1;
    }
}

.checkedHongse>div {
    border: 2px solid #1de9b6;
}

#hongse_content {
    padding: 10px;
    width: 280px;
    /* height: 200%; */
    background-color: rgba(0, 0, 0, 0.6);
    position: absolute;
    top: -14px;
    right: -14px;
    // border-radius: 5px;
    transform: translateX(100%);
    transition: opacity 1s;
    color: #f44336;
    opacity: 0;
    border-top-right-radius: 15px;
    border-bottom-right-radius: 15px;
    display: flex;
    flex-flow:column;
    &:hover {
      opacity: 1;
    }
}
#lanse_content {
    padding: 10px;
    width: 280px;
    height: 100%;
    /* height: 140%; */
    background-color: rgba(0, 0, 0, 0.6);
    position: absolute;
    bottom: -14px;
    left: -14px;
    transform: translateX(-100%);
    transition: opacity 1s;
    color: #40c4ff;
    opacity: 0;
    border-top-left-radius: 15px;
    border-bottom-left-radius: 15px;
    display: flex;
    flex-flow:column;
    &:hover {
      opacity: 1;
    }
}

.content_head{
    text-align: center;
    font-size: 26px;
    border-bottom: 1px solid #fafafa;
    margin-bottom: 5px;
    padding: 5px 0px;
}
.content_con{
    font-size: 20px;
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
      background: #fff;
    }
}

.redSpan {
    color: #f44336;
    font-size: inherit;
}
.blueSpan{
    color: #40c4ff;
    font-size: inherit;
}
.fourEm {
    cursor: pointer;
    background-image: linear-gradient(to right, #f44336, #1de9b6 20%, #f44336 50%, #1de9b6 70%, #f44336);
    -webkit-text-fill-color: transparent;
    -webkit-background-clip: text;
    -webkit-background-size: 200% 100%;
    -webkit-animation: welcome 1s infinite linear;
    font-size: inherit;
}

</style>
