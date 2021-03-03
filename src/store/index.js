import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    burgers: [
      { name: 'Burger 1' },
      { name: 'Burger 2' },
      { name: 'Burger 3' },
      { name: 'Burger 4' },
      { name: 'Burger 5' },
      { name: 'Burger 6' },
      { name: 'Burger 7' },
      { name: 'Burger 8' },
      { name: 'Burger 9' }
    ]
  },
  mutations: {},
  actions: {},
  modules: {}
})
