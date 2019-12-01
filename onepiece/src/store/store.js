import Vue from 'vue';
import Vuex from 'vuex';
import myTitle from './myTitle'
import pirates from './pirates'

Vue.use(Vuex);

export const store = new Vuex.Store({
  strict: true,
  modules: {
    "myTitle":myTitle,
    "pirates":pirates
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
    getShowMember(state) {
      return state.showMember;
    },
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
    allPerson(state, data) {
      var datas = typeof data === 'string' ? JSON.parse(data) : data;
      state.person = datas;
    },
    setMember(state, data) {
      var datas = typeof data === 'string' ? JSON.parse(data) : data;
      state.showMember = datas;
    },
    setPower(state, data) {
      state.showPower = data;
    },
    setShowPirates (state,data) {
      state.showPirates = data;
    },
    clearShowPirates (state) {
      state.showPirates = null;
    }
  }
});
