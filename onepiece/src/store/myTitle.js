module.exports = {
  state: {
    // 自定义title标签
    newTitle: null,
    titleDiv: null,
    use: false,
    temDiv: null,
    temTitle: null
  },
  mutations: {
    initTitleDiv (state, data) {
      state.titleDiv = data;
    },
    // title的移入事件
    titleover: (state, data) => {
      state.use = true;
      var _this = data.currentTarget;
      this.temDiv = data.currentTarget.className;
      this.temTitle = data.currentTarget.title;
      state.newTitle = _this.title;
      _this.title = "";
      state.titleDiv.css({ 'left': (data.clientX + 5 + 'px'), 'top': (data.clientY + 15 + 'px') }).show().find("span").text(state.newTitle);
    },
    // title的移动事件
    titlemove: (state, data) => {
      if (state.titleDiv) {
        state.titleDiv.css({
          'left': (data.clientX + 5 + 'px'),
          'top': (data.clientY + 15 + 'px')
        });
      }
    },
    // title的离开事件
    titleout: (state, data) => {
      state.use = false;
      state.temDiv = null;
      state.temTitle = null;
      if (data === true) {
        $("." + state.temDiv).attr("title",state.temTitle);
      } else {
        data.currentTarget.title = state.newTitle;
      }
      state.titleDiv.hide();
    }
  }
}
