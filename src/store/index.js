import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    currentRoute: ''
  },
  mutations: {
    changeCurrentRoute(state, route) {
      state.currentRoute = route
    }
  },
  actions: {},
  modules: {}
})
