import Vue from 'vue'
import Vuex from 'vuex'
// import client from 'api-client'
// const client = require('api-client')
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    burgers: [
      {
        name: 'The Classic',
        description: 'Beef patty, home made sauce and mozzarella cheese.'
      },
      {
        name: 'The Grilled',
        description:
          'Beef patty smoked turkey bacon, BBQ sauce and spiced nacho cheese sauce.'
      },
      {
        name: 'The Mexican',
        description:
          'Mexican-style braised busket, salsa shredded iceberg lettuce and spiced nacho cheese sauce.'
      },
      {
        name: 'The Original',
        description:
          'US Angus Beef with american cheese, tomatoes, lettuce, onions, pickles,mustard and ketchup'
      },
      {
        name: 'The Swiss',
        description:
          'Provolone cheese, BBQ sauce, sauteed mushrooms, caramalized onions.'
      },
      {
        name: 'The Shrimp',
        description: 'Grilled minced shrimps patty, topped with tartar sauce.'
      },
      {
        name: 'The Veggi',
        description:
          'Tofu patty, tomatoes, pickles, sauteed mushrooms caramalized onions.'
      },
      {
        name: 'The KING',
        description: 'Use the ingredients you want and the amount you dream of.'
      }
    ]
  },
  mutations: {
    // setMenu(state, burgers) {
    //   state.burgers = burgers
    // }
  },
  actions: {
    // fetchMenu({ commit }) {
    //   return client.fetchMenu().then(burgers => commit('setMenu', burgers))
    // }
  },
  modules: {}
})
