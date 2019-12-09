import Vue from 'vue';
import Vuex from 'vuex';
import myTitle from './myTitle'
import pirates from './pirates'

Vue.use(Vuex);

export const store = new Vuex.Store({
  strict: true,
  modules: {
    "myTitle":myTitle, // title效果
    "pirates":pirates  // 海贼
  },
  state: {
    person: null, // 海贼人物
    showPower: {
      power_name: null,
      power_icon: null,
      power_desc: null,
      power_class: null
    }, // 正在展示的海贼团信息
    showPirates: null,
    showMember: null, // 正在展示的海贼团成员
    showPerson: null // 正在展示的人
  },
  getters: {
    // 获得正在展示的海贼团成员信息
    getShowMember(state) {
      return state.showMember;
    },
    // 通过id差人物信息
    getPersonInfoById: (state) => (id) => {
      var data = null;
      state.person.some((ele) => {
        if (ele.id == id) {
          data = ele;
          return true;
        }
      });
      return data;
    },
    // 通过名字差人物信息
    getPersonIdByName : (state) => (name) => {
      var data = null;
      state.person.some((ele) => {
        if (ele.name == name) {
          data = ele.id
          return true;
        }
      });
      return data;
    }
  },
  mutations: {
    // 初始化所有人物
    allPerson(state, data) {
      var datas = typeof data === 'string' ? JSON.parse(data) : data;
      state.person = datas;
    },
    // 设置正在展示的海贼团成员
    setMember(state, data) {
      var datas = typeof data === 'string' ? JSON.parse(data) : data;
      state.showMember = datas;
    },
    // 设置正在展示的势力
    setPower(state, data) {
      state.showPower = data;
    },
    // 设置正在展示的海贼
    setShowPirates (state,data) {
      state.showPirates = data;
    },
    // 清除正在展示的海贼信息
    clearShowPirates (state) {
      state.showPirates = null;
    }
  }
});
