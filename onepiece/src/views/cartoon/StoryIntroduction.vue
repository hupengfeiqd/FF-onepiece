<template>
  <div id="cbg">
    <div class="cz">
      <div class="cz-left">
        <img src="../../assets/images/gushijieshao.jpg" alt="">
        <span>第598话彩页（新世界开篇）</span>
      </div>
      <div class="cz-right">
        <h2>正片剧情</h2>
        <p>拥有财富、名声、权力，这世界上的一切的男人 “海贼王”哥尔·D·罗杰，在被行刑受死之前说了一句话，让全世界的人都涌向了大海。“想要我的宝藏吗？如果想要的话，那就到海上去找吧，我全部都放在那里。”，世界开始迎接“大海贼时代”的来临。</p>
        <p>时值“大海贼时代”，为了寻找传说中海贼王罗杰所留下的大秘宝“ONE PIECE”，无数海贼扬起旗帜，互相争斗。有一个梦想成为海贼王的少年叫路飞，他因误食“恶魔果实”而成为了橡皮人，在获得超人能力的同时付出了一辈子无法游泳的代价。十年后，路飞为实现与因救他而断臂的香克斯的约定而出海，他在旅途中不断寻找志同道合的伙伴，开始了以成为海贼王为目标的冒险旅程。</p>
      </div>
    </div>
    <div class="feiye">
      <h2>扉页连载</h2>
      <ul>
        <li>顺序</li>
        <li>名称</li>
        <li>连载话数</li>
      </ul>
      <ul v-for="(item,index) in datas" :key="index">
        <li>{{ index + 1 }}</li>
        <li>{{ item.name }}</li>
        <li>{{ item.cartoonNum }}</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      datas: [
        {
          name: "巴基冒险记",
          cartoonNum: "35 - 75话"
        },
        {
          name: "克比和贝鲁梅伯的奋斗日记",
          cartoonNum: "83 - 119话"
        },
        {
          name: "赞高的跳舞天国",
          cartoonNum: "126 - 172话"
        },
        {
          name: "小八的海底散步",
          cartoonNum: "182 - 228话"
        },
        {
          name: "瓦波尔的杂食万岁",
          cartoonNum: "236 - 262话"
        },
        {
          name: "艾斯的黑胡子大搜查线",
          cartoonNum: "272 - 305话"
        },
        {
          name: "涅槃一不留神的蓝海生活",
          cartoonNum: "314 - 348话"
        },
        {
          name: "Miss黄金周的作战名\"寻找巴洛克\"",
          cartoonNum: "359 - 413话"
        },
        {
          name: "他们的现状",
          cartoonNum: "424 - 427话  486 - 490话"
        },
        {
          name: "艾尼路的宇宙大作战",
          cartoonNum: "428 - 474话"
        },
        {
          name: "CP9的任务外报告",
          cartoonNum: "491 - 528话"
        },
        {
          name: "山治之身在地狱要保持平常心",
          cartoonNum: "543 - 544话"
        },
        {
          name: "罗宾之做得好过份啊",
          cartoonNum: "545 - 546话"
        },
        {
          name: "弗兰奇之本周的我真不行",
          cartoonNum: "548 - 549话"
        },
        {
          name: "乌索普之独自一人就会死的病",
          cartoonNum: "550 - 551话"
        },
        {
          name: "乔巴之我不是食物呀，混帐",
          cartoonNum: "552 - 554话"
        },
        {
          name: "娜美的天气报告",
          cartoonNum: "555 - 556话"
        },
        {
          name: "布鲁克一宿一短裤的报恩",
          cartoonNum: "557 - 558话"
        },
        {
          name: "索隆之那班家伙在哪里呀，真会添麻烦",
          cartoonNum: "559 - 560话"
        },
        {
          name: "世界的甲板上",
          cartoonNum: "613 - 668话"
        },
        {
          name: "卡里布的新世界狂笑曲",
          cartoonNum: "674 - 731话"
        },
        {
          name: "甚平的海侠孤旅",
          cartoonNum: "751 - 785话"
        },
        {
          name: "悬赏5亿的男人",
          cartoonNum: "805 - 838话"
        },
        {
          name: "不请自来的草帽大船团小故事",
          cartoonNum: "864 - 919话"
        },
        {
          name: "匪帮贝基的OH MY FAMILY",
          cartoonNum: "948话 - ？话"
        }
      ]
    }
  }
}
</script>
