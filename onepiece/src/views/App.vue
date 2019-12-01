<template>
  <div id="onepiece">
    <left-menu></left-menu>
    <router-link tag="div" to="/" id="op-logo">{{ logo }}</router-link>
    <div id="op-content">
      <router-view></router-view>
    </div>
    <div class='newtitle'><span></span></div>
  </div>
</template>

<script>
import '../assets/css/op.css'
import '../assets/icon/style.css'
// import '../assets/test/style.css'
import '../assets/iconfont/iconfont.css'
import LeftMenu from '../components/LeftMenu'
import axios from 'axios';

export default {
  mounted(){
    let t = this;
    // 初始化title标签
    t.$store.commit("initTitleDiv", $(".newtitle"));
    t.opAxios.post("/api/queryAllPirates")
    .then(function(data){
      t.$store.commit('allPerson',data.data);
    })
    t.opAxios.post("/api/queryPiratesPower")
      .then(data => {
        t.$store.commit('initPirates',data.data);
      })
  },
  data () {
    return {
      logo:"ONE PIECE"
    }
  },
  components:{
    "LeftMenu":LeftMenu
  }
}
</script>

<style lang="less" scoped>
  @op-blue: #2CBDF2;
  #onepiece {
    width: 100%;
    height: 100%;
    background-image: url(../assets/images/bizhi.png);
    background-size:100% 100%;
    &>#op-logo {
      user-select: none;
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
      font-weight: bold;
      z-index: 999;
      cursor: pointer;
      padding: 0px 20px;
      font-size: 36px;
      line-height: 50px;
      background-image: -webkit-linear-gradient(left, #C0F, #00FFFF 25%, #C0F 50%, #00FFFF 75%, #C0F);
      -webkit-text-fill-color: transparent;
      -webkit-background-clip: text;
      -webkit-background-size: 200% 100%;
      -webkit-animation: welcome 2s infinite linear;
    }
    &>#op-content {
      width: 100%;
      height: 100%;
      box-sizing: border-box;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
</style>
