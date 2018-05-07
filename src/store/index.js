import Vue from 'vue'
import Vuex from 'vuex'
import foobars from './modules/foobars'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    foobars
  }
})
