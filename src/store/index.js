import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters'
import header from '@/store/modules/header'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    header
  },
  getters
})

export default store
