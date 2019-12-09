<template>
  <div id="paging">
    <div id="pag_before">
      <i class="iconfont op-before"></i>
    </div>
    <ul>
      <li
        v-for="(item,index) in pageNum < 8 ? pageNum : [1,'...',2,3,4,5]"
        :key="index"
        :page="item"
        :class="[item == 1 ? 'clickActive' : '',item != 1 && item != '...' ? 'moveItem' : '',item == '...' ? 'leftDian' : '']"
        v-show="item == '...' ? leftDian : true"
      >
        <span>{{ item }}</span>
      </li>
      <template v-if="pageNum > 7">
        <li class="rightDian" v-show="rightDian">
          <span>...</span>
        </li>
        <li :page="pageNum">
          <span>{{ pageNum }}</span>
        </li>
      </template>
    </ul>
    <div id="pag_after">
      <i class="iconfont op-after"></i>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      leftDian: false,
      rightDian: true
    };
  },
  props: ["pageNum"],
  methods: {
    useMove() {
      if (this.pageNum < 8) {
        return;
      }
      let t = this;
      let page = t.$parent.page;
      if (page >= 5 && page < t.pageNum - 3) {
        let str = '';
        for (var i = page - 2 ; i <= page + 2; i ++ ) {
          str += `<li page="${i}" class="moveItem">
                    <span>${i}</span>
                  </li>`;
        }
        $(".moveItem").remove();
        $(".leftDian").after(str);
      } else if (page < 5) {
        var leftStr = '';
        if (page <= 3) {
          for (var i = 2 ; i <= 5; i ++ ) {
          leftStr += `<li page="${i}" class="moveItem">
                    <span>${i}</span>
                  </li>`;
          }
        } else if (page == 4) {
          for (var i = 2 ; i <= 6; i ++ ) {
          leftStr += `<li page="${i}" class="moveItem">
                    <span>${i}</span>
                  </li>`;
          }
        }
        $(".moveItem").remove();
        $(".leftDian").after(leftStr);
      } else if (page >= t.pageNum - 3) {
        var leftStr = '';
        if (page >= t.pageNum - 2) {
          for (var i = t.pageNum - 4 ; i <= t.pageNum - 1; i ++ ) {
          leftStr += `<li page="${i}" class="moveItem">
                    <span>${i}</span>
                  </li>`;
          }
        } else if (page == t.pageNum - 3) {
          for (var i = t.pageNum - 5 ; i <= t.pageNum - 1; i ++ ) {
          leftStr += `<li page="${i}" class="moveItem">
                    <span>${i}</span>
                  </li>`;
          }
        }
        $(".moveItem").remove();
        $(".leftDian").after(leftStr);
      }
    },
    useDian() {
      if (this.pageNum < 8) { return; }
      let t = this;
      if (t.$parent.page >= 5) {
        t.leftDian = true;
      } else {
        t.leftDian = false;
      }
      if (t.$parent.page < t.pageNum - 3) {
        t.rightDian = true;
      } else {
        t.rightDian = false;
      }
    },
    useActive() {
      $(`li[page=${this.$parent.page}]`).addClass("clickActive").siblings().removeClass("clickActive");
    },
    tempUse () {
      this.useMove();
      this.useDian();
      this.useActive();
    }
  },
  mounted() {
    let t = this;
    // 点击页码
    $("#paging").on("click", "li:not(.rightDian):not(.leftDian)", function(e) {
      t.$parent.page = Number($(this).attr("page"));
      t.tempUse();
    });
    // 上一页
    $("#pag_before").on("click",function(){
      if(t.$parent.page == 2) {
        $("li[page=1]").addClass("clickActive");
      }
      if (t.$parent.page == 1) { return }
      t.$parent.page -= 1;
      t.tempUse();
    });
    // 下一页
    $("#pag_after").on("click",function(){
      if(t.$parent.page == t.pageNum - 1) {
        $(`li[page=${t.pageNum}]`).addClass("clickActive");
      } else if (t.$parent.page == t.pageNum) { return }
      t.$parent.page += 1;
      t.tempUse();
    });
  }
};
</script>

<style lang="less">
#paging {
  display: flex;
  width: auto;
  height: 30px;
  display: flex;
  flex-flow: row;
  justify-content: center;
  align-items: center;
  background-color: #000;
  box-shadow: 0px 0px 5px 1px #000;
  border-radius: 15px;
  overflow: hidden;
  & > ul {
    // width: auto;
    // height: 30px;
    display: flex;
    flex-flow: row;
    justify-content: center;
    align-items: center;
    // background-color: #000;
    // box-shadow: 0px 0px 4px 2px #000;
    & > li {
      font-size: 18px;
      color: #000;
      // text-shadow: 1px 1px 5px #000;
      font-weight: bold;
      // width: 60px;
      height: 30px;
      box-sizing: border-box;
      background-color: #1de9b6;
      padding: 5px 20px 5px 30px;
      margin-right: 5px;
      position: relative;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: all 0.25s;
      cursor: pointer;
      // &:last-child {
      //   margin-right: 0px;
      // }
      & > span {
        font-size: 20px;
      }
      &:hover {
        background-color: #000;
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
        // background-image: -webkit-linear-gradient(
        //   left,
        //   #c0f,
        //   #00ffff 25%,
        //   #c0f 50%,
        //   #00ffff 75%,
        //   #c0f
        // );
        -webkit-text-fill-color: transparent;
        -webkit-background-clip: text;
        -webkit-background-size: 200% 100%;
        -webkit-animation: welcome 0.5s infinite linear;
      }
      &:hover::after {
        background-color: #000;
      }

      &::before {
        content: "";
        display: block;
        position: absolute;
        left: -10px;
        // top: 0px;
        z-index: 98;
        transform: rotateZ(45deg);
        height: 20px;
        width: 20px;
        background-color: #000;
      }
      &::after {
        content: "";
        display: block;
        position: absolute;
        right: -10px;
        z-index: 99;
        transform: rotateZ(45deg);
        height: 20px;
        width: 20px;
        background-color: #1de9b6;
        transition: all 0.25s;
      }

    }
  }
  & > #pag_before,
  & > #pag_after {
    width: auto;
    padding: 5px 10px 5px 15px;
    font-size: 18px;
    color: #000;
    // text-shadow: 1px 1px 5px #000;
    font-weight: bold;
    // width: 60px;
    height: 30px;
    box-sizing: border-box;
    background-color: #1de9b6;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.25s;
    cursor: pointer;
    & > i {
      font-size: 24px;
      transition: all 0.25s;
    }
    &:hover {
      background-color: #000;
    }
    &:hover::after {
      background-color: #000;
    }
    &:hover > i {
      background-image: -webkit-linear-gradient(
              right,
              #00ffff,
              #08b98d 20%,
              #00ffff 50%,
              #08b98d 70%,
              #00ffff
            );
      // background-image: -webkit-linear-gradient(
      //   left,
      //   #c0f,
      //   #00ffff 25%,
      //   #c0f 50%,
      //   #00ffff 75%,
      //   #c0f
      // );
      -webkit-text-fill-color: transparent;
      -webkit-background-clip: text;
      -webkit-background-size: 200% 100%;
      -webkit-animation: welcome 0.5s infinite linear;
    }
  }
  & > #pag_before::after {
    content: "";
    display: block;
    position: absolute;
    right: -10px;
    z-index: 99;
    transform: rotateZ(45deg);
    height: 20px;
    width: 20px;
    background-color: #1de9b6;
    transition: all 0.25s;
  }
  & > #pag_before {
    margin-right: 5px;
  }
  & > #pag_after::before {
    content: "";
    display: block;
    position: absolute;
    left: -10px;
    // top: 0px;
    z-index: 98;
    transform: rotateZ(45deg);
    height: 20px;
    width: 20px;
    background-color: #000;
  }
  .clickActive {
    background-color: #000;
    &>span {
      background-image: -webkit-linear-gradient(
              right,
              #00ffff,
              #08b98d 20%,
              #00ffff 50%,
              #08b98d 70%,
              #00ffff
            );
      // background-image: -webkit-linear-gradient(
      //   left,
      //   #c0f,
      //   #00ffff 25%,
      //   #c0f 50%,
      //   #00ffff 75%,
      //   #c0f
      // );
      -webkit-text-fill-color: transparent;
      -webkit-background-clip: text;
      -webkit-background-size: 200% 100%;
      -webkit-animation: welcome 0.5s infinite linear;
    }
    &::after {
      background-color: #000;
    }
  }
}
</style>
