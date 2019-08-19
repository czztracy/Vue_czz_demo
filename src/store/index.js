import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters'
import header from '@/store/modules/header'
import user from '@/store/modules/user'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    header,
    user
  },
  getters
})

export default store
