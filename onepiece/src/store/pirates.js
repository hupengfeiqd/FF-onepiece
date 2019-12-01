module.exports = {
  state: {
    pirates: null
  },
  mutations: {
    initPirates (state, data) {
      state.pirates = data;
    }
  }
}
