<template>
  <div id="emgs">
    <div id="emgs-head">
      <!-- <i v-for="(item,index) in emgsDatas" :key="index" :class="item.icon" :title="item.name" @mouseover="titleover($event)" @mousemove="titlemove($event)" @mouseout="titleout($event)"></i> -->
      <i v-show="chaorenIcon" class="icon-emgs chaoren" title="超人系" @click="chaorenDesc = !chaorenDesc" @mouseover="titleover($event)" @mousemove="titlemove($event)" @mouseout="titleout($event)"></i>
      <i v-show="ziranIcon" class="icon-ziranxi ziran" title="自然系" @click="ziranDesc = !ziranDesc" @mouseover="titleover($event)" @mousemove="titlemove($event)" @mouseout="titleout($event)"></i>
      <i v-show="dongwuIcon" class="icon-dongwuxi dongwu" title="动物系" @click="dongwuDesc = !dongwuDesc" @mouseover="titleover($event)" @mousemove="titlemove($event)" @mouseout="titleout($event)"></i>
      <!-- <img v-for="(item,index) in emgsDatas" :key="index" :src="item.img" alt=""> -->
      <div v-show="chaorenDesc" class="gifBox">
        <img :src="bhz" alt="">
        <span>超人系·震震果实</span>
      </div>
      <div v-show="ziranDesc" class="gifBox">
        <img :src="as" alt="">
        <span>自然系·烧烧果实</span>
      </div>
      <div v-show="dongwuDesc" class="gifBox">
        <img :src="meg" alt="">
        <span>动物系幻兽种·鸟鸟果实不死鸟形态</span>
      </div>
    </div>
    <div id="emgs-text">
      <p v-show="emgsDesc">恶魔果实，被称作海上的秘宝，市场价至少有一亿贝利以上。它是海之恶魔的化身，食用后会得到不同的能力，但作为代价食用者都会被大海厌弃而成为旱鸭子。恶魔果实又有“海上恶魔的化身”的别称。</p>
      <p v-show="emgsDesc">分为三大类：超人系，动物系，自然系。恶魔果实不会出现重复的相同果实，当原果实能力者者死亡之后，才会再次出现。恶魔果实的形状就像是一般常见的水果,不同的是，从果皮到果肉上都布满了螺旋花纹。</p>
      <p v-show="chaorenDesc">超人系的恶魔果实会让食用者的身体拥有特殊能力。其能力类型五花八门，可以说除了自然系及动物系以外的果实都归类于此系。</p>
      <p v-show="chaorenDesc">超能力如：震震果实、重力果实、飘飘果实、手术果实等。</p>
      <p v-show="chaorenDesc">超人体如：橡胶果实、钻石果实、弹簧果实等，可以将自己身体变成特定物质或物体，也分为主动与被动。</p>
      <p v-show="chaorenDesc">造物如：蜡烛果实、毒毒果实、线线果实、饼干果实等，可以通过身体来创造出物体或物质。</p>
      <p v-show="chaorenDesc">局部异能如：肉球果实、吞吞果实、瞪瞪果实等，身体的某一部分被赋予能力。</p>
      <p v-show="chaorenDesc">支配如：石石果实、金金果实等，可以随意控制指定物质。</p>
      <p v-show="chaorenDesc">超人系也有“觉醒”这一层次，觉醒效果是会给周遭的事物带去影响。</p>
      <p v-show="ziranDesc">自然系恶魔果实目前共出现11个：烟雾果实、烧烧果实、沙沙果实、响雷果实、冰冻果实、暗暗果实、闪闪果实、岩浆果实、沼泽果实、瓦斯果实、雪雪果实。</p>
      <p v-show="ziranDesc">自然系被公认为三种恶魔果实里最强的一种，自然系的最大特点是可以让身体"元素化"，使物理攻击无效。目前除暗暗果实外都可以元素化。除了特殊克制能打到某些自然系实体外，只有武装色霸气、海楼石、暗暗果实能碰到自然系能力者的实体。"武装色霸气"如果不够强的话也是伤不到自然系的。元素化的防御力，因人而异。</p>
      <p v-show="ziranDesc">自然系为自然世界中某一种物质或现象，在空岛上，拥有自然系响雷果实的艾尼路曾说过："从古至今，人们把无法控制的自然现象，称为"神"的行为"，通过自然系恶魔果实拥有雷电力量的艾尼路，自诩为神。由于自身是雷的缘故，拥有雷电般的速度。运用心纲，以电波的形式可以听到人们的谈话内容，能力涵盖范围根据不断提升修炼，两年前的艾尼路的涵盖范围为一个小型国家。能做到的事情可谓真的是神一般无所不在的逆天能力。由此可见自然系的强大能力。而两年前海军本部最高战力的三位大将，都为自然系能力者</p>
      <p v-show="dongwuDesc">动物系恶魔果实由于具有生命特征，可以让人甚至没有生命的物品变形成动物，具有生命力，共有人型、兽型、人兽型的三段变身能力。</p>
      <p v-show="dongwuDesc">人型即普通形态。人兽型则是身体保留人形外貌变成野兽，也可以将身体部分部位变成野兽。变成人兽型后能力者身体能力会有所提升，动物特有的角、牙齿、爪、体毛、尾巴等身体部位都会被强化。兽型，即能力者完全变身成动物 ，拥有动物的所有特性。动物系中"肉食种"和"草食种"，凶暴程度也大小不一。</p>
      <p v-show="dongwuDesc">动物系果实有“觉醒”的力量，能力者觉醒后拥有强大生命力与恢复力。</p>
      <p v-show="dongwuDesc">动物系还可以分为三种类型，普通种、古代(远古种)、幻兽种(gif图为幻兽种"不死鸟"果实)。普通种为当下存在的动物，古代种为远古时期的动物，而幻兽种最为强大，是神话或传说中的生物甚至是怪物，除了拥有动物系的特性，还拥有特殊的能力，稀有程度比自然系还要高。</p>
    </div>
  </div>
</template>

<script>
import maergao from '../assets/images/maergao.gif';
import aisi from '../assets/images/aisi.gif';
import baihuzi from '../assets/images/baihuzi.gif';
export default {
  data () {
    return {
      // emgsDatas: [
      //   {
      //     name: "超人系",
      //     icon: "icon-emgs chaoren"
      //   },
      //   {
      //     name: "自然系",
      //     icon: "icon-ziranxi ziran"
      //   },
      //   {
      //     name: "动物系",
      //     icon: "icon-dongwuxi dongwu"
      //   }
      // ],
      bhz: baihuzi,
      as: aisi,
      meg: maergao,
      emgsDesc: true,
      chaorenIcon: true,
      chaorenDesc: false,
      ziranIcon: true,
      ziranDesc: false,
      dongwuIcon: true,
      dongwuDesc: false
    }
  },
  watch: {
    chaorenDesc () {
      this.emgsDesc = !this.emgsDesc;
      this.ziranIcon = !this.ziranIcon;
      this.dongwuIcon = !this.dongwuIcon;
    },
    ziranDesc () {
      this.emgsDesc = !this.emgsDesc;
      this.chaorenIcon = !this.chaorenIcon;
      this.dongwuIcon = !this.dongwuIcon;
    },
    dongwuDesc () {
      this.emgsDesc = !this.emgsDesc;
      this.ziranIcon = !this.ziranIcon;
      this.chaorenIcon = !this.chaorenIcon;
    }
  },
  methods: {
    // 自定义的title标签的三个事件
    titleover : function(data){
        this.$store.commit("titleover",data);
    },
    titlemove : function(data){
        this.$store.commit("titlemove",data);
    },
    titleout : function(data){
        this.$store.commit("titleout",data);
    }
  }
}
</script>

<style lang="less" scoped>
  #emgs {
    width: 100%;
    height: 100%;
    padding: 50px;
    box-sizing: border-box;
    display: flex;
    flex-flow: column;
    justify-content: center;
    align-items: center;
    background-image: url(../assets/images/emgsbg.png);
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center center;
    & > #emgs-head {
      width: 80%;
      display: flex;
      justify-content: center;
      align-items: center;
      &> i {
        position: relative;
        top: 0;
        left: 0;
        cursor: pointer;
        font-size: 220px;
        box-sizing: border-box;
        // filter: brightness(0%);
        margin: 0 3vw;
        color: #ff0;
        -webkit-text-fill-color: transparent;
        -webkit-background-clip: text;
        -webkit-background-size: 200% 100%;
        -webkit-animation: welcome 2s infinite linear;
        transition: all 0.2s;
        &:hover {
          filter: brightness(100%);
        }
        &.chaoren {
          background-image: -webkit-linear-gradient(left, #9933FF, #00e500 20%, #9933FF 50%, #00e500 70%, #9933FF);
        }
        &.ziran {
          background-image: -webkit-linear-gradient(left, #ff3300, #ff0 20%, #ff3300 50%, #ff0 70%, #ff3300);
        }
        &.dongwu {
          background-image: -webkit-linear-gradient(left, #ff7500, #2edfa3 20%, #ff7500 50%, #2edfa3 70%, #ff7500);
        }
      }
      &>div.gifBox {
        display: flex;
        flex-flow: column;
        justify-content: center;
        align-items: center;
        &>img {
          height: 220px;
          margin-left: 20px;
          border-radius: 5px;
        }
        &>span {
          text-align: center;
          font-size: 18px;
          font-weight: bold;
          color: #1de9b6;
          margin-top: 10px;
          text-shadow: 1px 1px 1px #000;
        }
      }
    }
    &>#emgs-text {
      width: 80%;
      box-sizing: border-box;
      padding: 20px;
      background-color: rgba(0, 0, 0, 0.6);
      border-radius: 5px;
      margin-top: 10px;
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
      &>p {
        font-size: 18px;
        font-weight: bold;
        text-indent: 2rem;
        color: #EE0;
        text-shadow: 1px 1px 1px #000;
        line-height: 26px;
        &:nth-of-type(2n) {
          color: #1de9b6;
        }
      }
    }
  }
</style>
