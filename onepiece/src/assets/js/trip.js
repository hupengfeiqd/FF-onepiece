const tripObj = {
  tripArr: null,
  trip_index: 0,
  wid: 0,
  can_w: 5000,
  can_h: 2110,
  can: null,
  posi: null,
  ctx: null,
  opImg: null,
  meilihao: null,
  meili_tem: null,
  sangni: null,
  lufei: null,
  gaobie: null,
  timer: null,
  init () {
    // 初始化属性
    this.initAttr();
    // 初始化插入canvas的图片
    this.initImage();
  },
  initAttr () {
    let t = this;
    t.wid = $("#trip").width();
    t.can = document.getElementById("op-canvas");
    t.posi = document.getElementById("trip_wz");
    $(t.can).attr({"width": t.can_w + "px", "height": t.can_h + "px"});
    t.ctx = t.can.getContext("2d");
    t.initTripArr();
  },
  initTripArr () {
    let t = this;
    t.tripArr = [
      { // 初始风车村
        bg:[0,-300],
        meili: [t.can_w - 640,190,110,55],
        lufei: [t.can_w - 640,190,t.can_w - 640,190],
        line: [t.can_w - 640,190,t.can_w - 640,190]
      },
      { // 1.谢尔兹镇
        bg:[0,-300],
        meili: [t.can_w - 680,340,110,55],
        lufei: [t.can_w - 640,190,t.can_w - 680,340],
        line: [t.can_w - 600,215,t.can_w - 640,310]
      },
      { // 2.橘子镇
        bg:[0,-300],
        meili: [t.can_w - 850,450,110,55],
        lufei: [t.can_w - 680,340,t.can_w - 850,450],
        line: [t.can_w - 685,375,t.can_w - 780,450]
      },
      { // 3.西罗布村
        bg:[0,-300],
        meili: [t.can_w - 1020,530,110,55],
        lufei: [t.can_w - 850,450,t.can_w - 1020,530],
        line: [t.can_w - 840,485,t.can_w - 950,530]
      },
      { // 4.海上餐厅巴拉蒂
        bg:[-50,-550],
        meili: [t.can_w - 1020,530,t.can_w - 1480,540,110,55],
        line: [t.can_w - 1060,540,t.can_w - 1430,550]
      },
      { // 5.可可亚西村
        bg:[0,-550],
        meili: [t.can_w - 1480,540,t.can_w - 1430,360,110,55],
        line: [t.can_w - 1440,515,t.can_w - 1340,410]
      },
      { // 5.罗格镇
        bg:[-250,-1100],
        meili: [t.can_w - 1430,360,t.can_w - 2250,760,110,55],
        line: [t.can_w - 1370,400,t.can_w - 2090,720]
      },
      { // 6.颠倒山
        bg:[-680,-1500],
        meili: [t.can_w - 2250,760,t.can_w - 2550,1070,110,55],
        line: [t.can_w - 2180,780,t.can_w - 2490,1110]
      },
      { // 7.双子岬
        bg:[-700,-1200],
        meili: [t.can_w - 2550,1070,t.can_w - 1900,1080,110,55],
        line: [t.can_w - 2480,1115,t.can_w - 1850,1132]
      },
      { // 8.威士忌山峰
        bg:[-700,-1100],
        meili: [t.can_w - 1900,1080,t.can_w - 1750,1150,110,55],
        line: [t.can_w - 1800,1110,t.can_w - 1730,1120]
      },
      { // 9.小花园
        bg:[-700,-1000],
        meili: [t.can_w - 1750,1150,t.can_w - 1620,1050,110,55],
        line: [t.can_w - 1680,1120,t.can_w - 1620,1075]
      },
      { // 10.磁鼓岛
        bg:[-700,-900],
        meili: [t.can_w - 1620,1050,t.can_w - 1500,1180,110,55],
        line: [t.can_w - 1560,1100,t.can_w - 1510,1165]
      },
      { // 11.阿拉巴斯坦王国
        bg:[-700,-750],
        meili: [t.can_w - 1500,1180,t.can_w - 1370,1090,110,55],
        line: [t.can_w - 1420,1165,t.can_w - 1370,1120]
      },
      { // 12.加雅岛
        bg:[-700,-400],
        meili: [t.can_w - 1370,1090,t.can_w - 1160,1210,110,55],
        line: [t.can_w - 1290,1130,t.can_w - 1220,1210]
      },
      { // 13.空岛
        bg:[-700,-400],
        meili: [t.can_w - 1160,1210,t.can_w - 1160,1130,110,55],
        line: [t.can_w - 1090,1245,t.can_w - 1090,1170]
      },
      { // 14.长链岛
        bg:[-700,-300],
        meili: [t.can_w - 1160,1130,t.can_w - 1020,1090,110,55],
        line: [t.can_w - 1110,1120,t.can_w - 1045,1100]
      },
      { // 15.七水之都
        bg:[-700,-150],
        meili: [t.can_w - 1020,1090,t.can_w - 870,1170,110,55],
        line: [t.can_w - 930,1100,t.can_w - 860,1140]
      },
      { // 16.司法岛
        bg:[-700,0],
        meili: [t.can_w - 870,1170,t.can_w - 700,1170,110,55],
        line: [t.can_w - 750,1170,t.can_w - 660,1190]
      },
      { // 17.返回七水之都
        bg:[-700,0],
        meili: [t.can_w - 700,1170,t.can_w - 810,1100,110,55],
        line: [t.can_w - 660,1170,t.can_w - 750,1150],
        gaobie: [t.can_w - 870,1010,150,100]
      },
      { // 18.恐怖三诡帆船
        bg:[-700,0],
        meili: [t.can_w - 810,1100,t.can_w - 690,1030,110,80],
        line: [t.can_w - 790,1130,t.can_w - 700,1080]
      },
      { // 19.香波地群岛
        bg:[-700,0],
        meili: [t.can_w - 690,1040,t.can_w - 500,1040,110,80],
        line: [t.can_w - 570,1060,t.can_w - 500,1060]
      },
      { // 20.拍飞到亚马逊·百合
        bg:[-700,0],
        meili: [t.can_w - 500,1040,t.can_w - 500,1040,110,80],
        lufei: [t.can_w - 500,1040,t.can_w - 770,1320],
        line: [0,0,0,0]
      },
      { // 21.推进城
        bg:[-700,0],
        meili: [t.can_w - 500,1040,t.can_w - 500,1040,110,80],
        lufei: [t.can_w - 770,1320, t.can_w - 530, 1320],
        line: [0,0,0,0]
      },
      { // 22.海军本部
        bg:[-700,0],
        meili: [t.can_w - 500,1040,t.can_w - 500,1040,110,80],
        lufei: [t.can_w - 530, 1320, t.can_w - 430, 1180],
        line: [0,0,0,0]
      },
      { // 23.回亚马逊·百合修行2年
        bg:[-700,0],
        meili: [t.can_w - 500,1040,t.can_w - 500,1040,110,80],
        lufei: [t.can_w - 430, 1180, t.can_w - 770,1320],
        line: [0,0,0,0]
      },
      { // 24.回到香波地群岛
        bg:[-700,0],
        meili: [t.can_w - 500,1040,t.can_w - 500,1040,110,80],
        lufei: [t.can_w - 770,1320,t.can_w - 500,1070],
        line: [0,0,0,0]
      },
      { // 25.前往海底一万米的鱼人岛
        bg:[-700,0],
        meili: [t.can_w - 500,1040,t.can_w - 260,1200,110,80],
        line: [t.can_w - 370,1070,t.can_w - 260,1200]
      },
      { // 26.庞克哈萨德
        bg:[-700, -(t.can_w - t.wid)],
        meili: [t.can_w - 4800,1080,t.can_w - 4660,1180,110,80],
        line: [t.can_w - 4800,1080,t.can_w - 4660,1180]
      },
      { // 27.德雷斯罗萨
        bg:[-700, -(t.can_w - t.wid)],
        meili: [t.can_w - 4660,1180,t.can_w - 4450,1060,110,80],
        line: [t.can_w - 4545,1180,t.can_w - 4440,1115]
      },
      { // 27.德雷斯罗萨
        bg:[-700, -(t.can_w - t.wid)],
        meili: [t.can_w - 4450,1060,t.can_w - 4200,1100,110,80],
        line: [t.can_w - 4310,1080,t.can_w - 4220,1100]
      },
      { // 27.万国
        bg:[-700, -(t.can_w - t.wid - 350)],
        meili: [t.can_w - 4200,1100,t.can_w - 3900,1185,110,80],
        line: [t.can_w - 4070,1135,t.can_w - 3940,1175]
      },
      { // 27.和之国
        bg:[-700, -(t.can_w - t.wid - 750)],
        meili: [t.can_w - 3900,1185,t.can_w - 3610,1070,110,80],
        line: [t.can_w - 3730,1175,t.can_w - 3590,1105]
      }
    ]
  },
  initImage () {
    let t = this;
    t.opImg = new Image();
    t.opImg.src = require('../images/hx5.png');
    // 梅里号
    t.meilihao = new Image();
    t.meilihao.src = require('../images/meilihao.png');
    // 梅里号翻转
    t.meili_tem = new Image();
    t.meili_tem.src = require('../images/meilihao_tem.png');
    // 桑尼号
    t.sangni = new Image();
    t.sangni.src = require('../images/sangnihao.png');
    // 路飞
    // 告别梅里号
    t.gaobie = new Image();
    t.gaobie.src = require('../images/gaobiemeili.png');
    t.opImg.onload = function () {
      t.ctx.drawImage(t.opImg,0,0,5000,2110);
      t.lufei = new Image();
      t.lufei.src = require('../images/canvaslufei.png');
      t.lufei.onload = function () {
        t.ctx.drawImage(t.lufei,t.can_w - 640,190,50,50);
        t.ctx.setLineDash([7,5]);
        t.ctx.lineWidth = 5;
      }
    }
  },
  startInterval (callback) {
    let t = this;
    t.timer = setInterval(function() {
      if (t.trip_index < t.tripArr.length - 1) {
        t.trip_index ++;
        callback(t.trip_index,true,t.trip_index > 7 ? t.trip_index - 1 : t.trip_index);
        t.tripMove(t.trip_index);
      } else {
        callback(t.trip_index,false);
        clearInterval(t.timer);
      }
    },3000);
  },
  endInterval () {
    clearInterval(this.timer);
  },
  tripMove () {
    let t = this;
    if (!t.tripArr) { return }
    let i = t.trip_index;
    t.setPosition(i);
    let count = 0;
    // 背景
    var bg_t,bg_r,bt_now,br_now,bt_fore,br_fore,tt,r
    if (i != 0) {
      bg_t = Math.abs(t.tripArr[i].bg[0] - t.tripArr[i - 1].bg[0]) / 60;
      bg_r = Math.abs(t.tripArr[i].bg[1] - t.tripArr[i - 1].bg[1]) / 60;
      bt_now = t.tripArr[i].bg[0];
      br_now = t.tripArr[i].bg[1];
      bt_fore = t.tripArr[i - 1].bg[0];
      br_fore = t.tripArr[i - 1].bg[1];
      tt = bt_fore;
      r = br_fore;
    }
    // 船
    var c_w = Math.abs(Math.abs(t.tripArr[i].meili[2] - t.tripArr[i].meili[0]) / 60);
    var c_h = Math.abs(Math.abs(t.tripArr[i].meili[3] - t.tripArr[i].meili[1]) / 60);
    var c_now_w = t.tripArr[i].meili[2];
    var c_now_h = t.tripArr[i].meili[3];
    var w = t.tripArr[i].meili[0];
    var h = t.tripArr[i].meili[1];
    // 航线
    var l_now_x = (t.tripArr[i].line[2] - t.tripArr[i].line[0]) / 60;
    var l_now_y = (t.tripArr[i].line[3] - t.tripArr[i].line[1]) / 60;
    var lx = t.tripArr[i].line[0];
    var ly = t.tripArr[i].line[1];
    var x = lx;
    var y = ly;
    // 路飞
    var lufei_x,lufei_y,lufX,lufY,l_x,l_y;
    if ([0,1,2,3,21,22,23,24,25].indexOf(i) != -1) {
      lufei_x = (t.tripArr[i].lufei[2] - t.tripArr[i].lufei[0]) / 60;
      lufei_y = (t.tripArr[i].lufei[3] - t.tripArr[i].lufei[1]) / 60;
      lufX = t.tripArr[i].lufei[0];
      lufY = t.tripArr[i].lufei[1];
      l_x = lufX;
      l_y = lufY;
    }
    var nw_w = 0;
    var nw_h = 0;
    requestAnimationFrame(animation);
    function animation () {
      count ++;
      // 背景
      if (bt_now > bt_fore) { tt += bg_t; }
      else { tt += -bg_t; }
      if (br_now > br_fore) { r += bg_r;}
      else { r += -bg_r; }
      // 船
      if (c_now_w > w) { w += c_w; }
      else { w -= c_w; }
      if (c_now_h > h) { h += c_h; }
      else { h += -c_h; }
      // 航线
      x += l_now_x;
      y += l_now_y;
      // 路飞
      if ([0,1,2,3,21,22,23,24,25].indexOf(i) != -1) {
        l_x += lufei_x;
        l_y += lufei_y;
      }
      if (i == 26) {
        nw_w += 0.55;
        nw_h += 0.38;
      }

      t.ctx.clearRect(0,0,t.can_w,t.can_h);
      t.ctx.drawImage(t.opImg,0,0,5000,2110);
      // ctx.shadowColor = "#250d00";
      t.beforeAllLine(i);
      t.ctx.beginPath();
      t.ctx.moveTo(lx,ly);
      t.ctx.lineTo(x,y);
      t.ctx.save();
      if ([14,15].indexOf(i) != -1) {
        t.ctx.strokeStyle = "#00f";
      } else {
        t.ctx.strokeStyle = "#ea5506";
      }
      t.ctx.stroke();
      t.ctx.restore();
      t.ctx.beginPath();

      // ctx.shadowColor = "none";
      if (i > 7) {
        if (i >= 19) {
          if (i == 26) {
            t.ctx.drawImage(t.sangni, w, h, t.tripArr[i].meili[4] - nw_w, t.tripArr[i].meili[5] - nw_h);
          } else if (i == 27) {
            t.ctx.drawImage(t.sangni, w, h, t.tripArr[i].meili[4] + nw_w, t.tripArr[i].meili[5] + nw_h);
          } else {
            t.ctx.drawImage(t.sangni, w, h, t.tripArr[i].meili[4], t.tripArr[i].meili[5]);
          }
        } else {
          t.ctx.drawImage(t.meili_tem, w, h, t.tripArr[i].meili[4], t.tripArr[i].meili[5]);
        }
        if ([0,1,2,3,21,22,23,24,25].indexOf(i) != -1) {
          t.ctx.drawImage(t.lufei, l_x, l_y, 50, 50);
        }
      } else {
        if ([0,1,2,3,21,22,23,24,25].indexOf(i) != -1) {
          t.ctx.drawImage(t.lufei, l_x, l_y, 50, 50);
        } else {
          t.ctx.drawImage(t.meilihao, w, h, t.tripArr[i].meili[4], t.tripArr[i].meili[5]);
        }
      }
      if (i != 0) {
        t.can.style.top = tt + "px";
        t.can.style.right = r + "px";
      } else {
        t.can.style.top = t.tripArr[i].bg[0] + "px";
        t.can.style.right = t.tripArr[i].bg[1] + "px";
      }

      if (count < 60) {
        requestAnimationFrame(animation);
      } else {
        count = 0;
        nw_w = 0;
        nw_h = 0;
        if (i == 7) {
          t.trip_index ++;
          t.tripMove();
        }
        if (i == 18) {
          t.gaobieMove(i);
        }
        // trip_index ++;
        // setTimeout(function() {
        //   if (trip_index < tripArr.length) {
        //     tripMove(trip_index);
        //   }
        // },2000)
      }
    }
  },
  beforeAllLine(i) {
    let t = this;
    for (var line = 1 ; line < i; line ++ ) {
      t.ctx.beginPath();
      t.ctx.save();
      if ([14,15].indexOf(line) != -1) {
        t.ctx.strokeStyle = "#00f";
      } else {
        t.ctx.strokeStyle = "#ea5506";
      }
      t.ctx.moveTo(t.tripArr[line].line[0],t.tripArr[line].line[1]);
      t.ctx.lineTo(t.tripArr[line].line[2],t.tripArr[line].line[3]);
      t.ctx.stroke();
      t.ctx.restore();
    }
  },
  gaobieMove (i) {
    let t = this;
    t.ctx.clearRect(0,0,t.can_w,t.can_h);
    t.ctx.drawImage(t.opImg,0,0,5000,2110);
    t.beforeAllLine(i);
    t.ctx.drawImage(t.gaobie,...t.tripArr[i].gaobie);
  },
  setPosition(i) {
    if (i <= 7) {
      $(this.posi).find("span").text("东海");
    } else if (i > 7 && i <= 26) {
      $(this.posi).find("span").text("伟大航路");
    } else if (i > 26) {
      $(this.posi).find("span").text("新世界");
    }
  }
}

export default {
  tripObj
}
