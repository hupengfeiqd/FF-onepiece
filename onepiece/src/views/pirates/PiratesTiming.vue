<template>
    <div id="pirates">
      <div class="pira_left">
        <div class="left_box">
          <router-link v-for="item in datas" :key="item.power_id" tag="div" :powerName="item.power_name" :to="{name:'timing',params:{piraName:item.power_name,pName:item.person_name}}">
            <div v-if="item.power_icon" class="hzq_box">
              <i :class="item.power_icon"></i>
              <span>{{ item.power_name }}</span>
            </div>
          </router-link>
        </div>
      </div>
      <div class="pira_right">
        <router-view></router-view>
      </div>
    </div>
</template>

<script>
export default {
    data () {
      return {
        datas: null
      }
    },
    methods: {
      goAnchor (piraName) {
        this.$el.querySelector(`div[powerName=${piraName}]`).scrollIntoView();
      }
    },
    beforeRouteEnter(to, from, next) {
      next(vm => {
        vm.goAnchor(to.params.piraName);
      })
    },
    updated() {
      let t = this;
      let params = t.$route.params;

      let pId = t.$store.getters.getPersonIdByName(params.pName);
      t.opAxios.post('/api/queryPiratesByPowerName',{'powerName':params.piraName})
      .then(data => {
        t.$store.commit("setMember",data.data);
        params.pName = data.data[0].name;
        t.$store.commit("clearShowPirates");
        if (pId) {
          var pirates = t.$store.getters.getPersonInfoById(pId);
          t.$store.commit("setShowPirates", pirates);
        }
      });
    },
    mounted () {
      let t = this;
      t.datas = t.$store.state.pirates.pirates;
    }
}
</script>

<style lang="less" scoped>
    #pirates {
        width: 100%;
        height: 100%;
        padding: 60px 40px 60px 80px;
        box-sizing: border-box;
        display: flex;
        &>.pira_left {
          height: 100%;
          box-sizing: border-box;
          padding: 15px 0px;
          background-color: rgba(0, 0, 0, 0.6);
          border-top-left-radius: 15px;
          border-bottom-left-radius: 15px;
          &>.left_box {
            height: 100%;
            overflow-y: auto;
            display: flex;
            flex-flow: column;
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
            &>div {
              display: inline-block;
              height: 100px;
              margin: 5px 10px;
              box-sizing: border-box;
              color: #000;
              padding: 10px;
              cursor: pointer;
              background-image: url(../../assets/images/hzqbg.png);
              background-size: 100% 100%;
              background-repeat: no-repeat;
              &:hover>.hzq_box {
                background-image: linear-gradient(to right, #f44336, #1de9b6 20%, #f44336 50%, #1de9b6 70%, #f44336);
                // background-image: -webkit-linear-gradient(left, #4b5cc4, #00FFFF 25%, #4b5cc4 50%, #00FFFF 75%, #4b5cc4);
                -webkit-text-fill-color: transparent;
                -webkit-background-clip: text;
                -webkit-background-size: 200% 100%;
                -webkit-animation: welcome 1s infinite linear;
              }
              &>.hzq_box {
                padding: 5px;
                display: flex;
                flex-flow: column;
                justify-content: center;
                align-items: center;
                &>i {
                  font-size: 40px;
                  color: #fff;
                }
                &>span {
                  font-size: 16px;
                  font-weight: bold;
                  color: #fff;
                }
              }
              &.op-active>.hzq_box {
                background-image: linear-gradient(to right, #f44336, #1de9b6 20%, #f44336 50%, #1de9b6 70%, #f44336);
                // background-image: -webkit-linear-gradient(left, #4b5cc4, #00FFFF 25%, #4b5cc4 50%, #00FFFF 75%, #4b5cc4);
                -webkit-text-fill-color: transparent;
                -webkit-background-clip: text;
                -webkit-background-size: 200% 100%;
                -webkit-animation: welcome 1s infinite linear;
              }
            }
          }

        }
        &>.pira_right {
          flex: 1;
          height: 100%;
          background-color: rgba(0, 0, 0, 0.6);
          border-top-right-radius: 15px;
          border-bottom-right-radius: 15px;
        }
    }
</style>
