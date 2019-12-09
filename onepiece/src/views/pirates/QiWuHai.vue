<template>
    <!-- 王下七武海 -->
    <div class="qwh">
        <router-link tag="div" v-for="(qwh,index) in datas" v-bind:key="index" :to="qwh.router" :class="qwh.className" :title="qwh.title"
          @mouseover.native="titleover($event)" @mousemove.native="titlemove($event)" @mouseout.native="titleout($event)">
          <div class="shadow"><span v-html="qwh.name"></span></div>
        </router-link>
    </div>
</template>

<script>
export default {
    data () {
      return {
        datas: [
          { name : "鹰<br/>眼",title : "乔拉可尔·米霍克",className : "yingyan", router:{name:'',params:{piraName: "",pName: ""}}},
          { name : "暴<br/>君",title : "巴索罗米·熊",className : "xiong", router:{name:'',params:{piraName: "",pName: ""}}},
          { name : "女<br/>帝",title : "波雅·汉库克",className : "nvdi", router:{name:'timing',params:{piraName: "九蛇海贼团",pName: "波雅·汉库克"}}},
          { name : "千<br/>两<br/>道<br/>化",title : "巴基",className : "baji", router:{name:'',params:{piraName: "",pName: ""}}},
          { name : "白<br/>胡<br/>子<br/>二<br/>世",title : "爱德华·威布尔",className : "baihuzitwo", router:{name:'',params:{piraName: "",pName: ""}}},
          { name : "J<br/>O<br/>K<br/>E<br/>R",title : "唐吉诃德·多弗朗明哥",className : "joker", router:{name:'timing',params:{piraName: "唐吉诃德家族",pName: "唐吉诃德·多弗朗明哥"}}},
          { name : "月<br/>光",title : "莫利亚",className : "yueguang", router:{name:'timing',params:{piraName: "莫利亚海贼团",pName: "莫利亚"}}},
          { name : "沙<br/>鳄<br/>鱼",title : "克洛克达尔",className : "shaeyu", router:{name:'timing',params:{piraName: "巴洛克工作社",pName: "克洛克达尔"}}},
          { name : "海<br/>侠",title : "甚平",className : "haixia", router:{name:'timing',params:{piraName: "草帽海贼团",pName: "甚平"}}},
          { name : "死<br/>亡<br/>外<br/>科<br/>医<br/>生",title : "特拉法尔加·D·瓦铁尔·罗",className : "luo", router:{name:'timing',params:{piraName: "红心海贼团",pName: "特拉法尔加·D·瓦铁尔·罗"}}},
          { name : "黑<br/>胡<br/>子",title : "马歇尔·D·蒂奇",className : "heihuzi", router:{name:'timing',params:{piraName: "黑胡子海贼团",pName: "马歇尔·D·蒂奇"}}}
        ]
      }
    },
    methods : {
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
    },
    // 处理title效果，如果没移出发生跳转，则善后处理
    beforeRouteLeave(to,from,next) {
      var use = this.$store.state.myTitle.use;
      if (use) {
        this.$store.commit("titleout", true);
      }
      next();
    }
}
</script>

<style lang="less" scoped>
    .qwh {
        width: 85%;
        height: 55%;
        display: flex;
        flex-flow: row;
        &>div {
            flex: 1;
            transition: flex 1s;
            background-repeat: no-repeat;
            background-size: cover;
            background-position: center center;
            box-shadow: 0px 0px 5px #fff;
            border-radius: 15px;
            overflow: hidden;
            cursor: pointer;
            &>div {
                width: 100%;
                height: 100%;
                background-color: rgba(0, 0, 0, 0.7);
                transition: background-color 0.8s;
                display: flex;
                justify-content: left;
                align-items:flex-end;
                box-sizing: border-box;
                &>span {
                  font-size: 30px;
                  color: #fff;
                  text-shadow: 0px 0px 10px #0ff;
                  padding: 0px 0px 20px 20px;
                  transition: font-size 0.3s;
                }
            }
        }
        &>div:not(:last-child) {
            margin-right: 3px;
        }
        &>div:hover {
            flex: 4;
        }
        &>div:hover>div {
            background-color: transparent;
        }
        &>div:hover>div>span {
            // color: #000;
            font-size: 36px;
            text-shadow: none;
            background-image: linear-gradient(to right, #000, #1de9b6 20%, #000 50%, #1de9b6 70%, #000);
            -webkit-text-fill-color: transparent;
            -webkit-background-clip: text;
            -webkit-background-size: 200% 100%;
            -webkit-animation: welcome 1.5s infinite linear;
        }
        &>div.yingyan {
            background-image: url(../../assets/images/yingyanbg.jpg);
            background-position: 40% center;
        }
        &>div.nvdi {
            background-image: url(../../assets/images/nvdibg.jpg);
            background-position: 63% center;
        }
        &>div.shaeyu {
            background-image: url(../../assets/images/keluokedaerbg.jpg);
            background-position: 58% center;
        }
        &>div.joker {
            background-image: url(../../assets/images/jokerbg.png);
            background-position: 45% center;
        }
        &>div.haixia {
            background-image: url(../../assets/images/shenpingbg.jpg);
            background-position: 58% center;
        }
        &>div.xiong {
            background-image: url(../../assets/images/xiongbg.png);
            background-position: 65% center;
        }
        &>div.baji {
            background-image: url(../../assets/images/bajibg.jpg);
            background-position: 55% center;
        }
        &>div.yueguang {
            background-image: url(../../assets/images/moliyabg.jpg);
            background-position: 57% center;
        }
        &>div.luo {
            background-image: url(../../assets/images/luobg.jpg);
            background-position: 60% center;
        }
        &>div.heihuzi {
            background-image: url(../../assets/images/heihuzibg.png);
            background-position: 40% center;
        }
        &>div.baihuzitwo {
            background-image: url(../../assets/images/baihuziershibg.png);
            background-position: 45% center;
        }

    }
</style>
