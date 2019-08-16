const header = {
  state: {
    isCollapse: true
  },
  mutations: {
    SET_ISCOLLAPSE: (state, bool) => {
      state.isCollapse = bool
    }
  },
  actions: {
    GET_ISCOLLAPSE ({ commit }, bool) {
      commit('SET_ISCOLLAPSE', bool)
    }
  }
}

export default header
