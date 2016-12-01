import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    counters: []
  },
  mutations: {
    COUNTER_INCREMENT: ({ counters }, counterId) => {
      counters.splice(counterId, 1, counters[counterId] + 1)
    },
    COUNTER_DECREMENT: ({ counters }, counterId) => {
      counters.splice(counterId, 1, counters[counterId] - 1)
    },
    COUNTER_ADD: ({ counters }) => {
      counters.push(0)
    },
    COUNTER_REMOVE: ({ counters }, counterId) => {
      counters = counters.splice(counterId, 1)
    }
  },
  actions: {
    incrementCounter: ({ commit }, counterId) => commit('COUNTER_INCREMENT', counterId),
    decrementCounter: ({ commit }, counterId) => commit('COUNTER_DECREMENT', counterId),
    addCounter: ({ commit }) => commit('COUNTER_ADD'),
    removeCounter: ({ commit }, counterId) => commit('COUNTER_REMOVE', counterId)
  }
})

export default store
