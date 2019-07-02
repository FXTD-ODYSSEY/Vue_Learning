
import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex)

const state = {
  count: 0
}

const mutations = {
  // 增加mutation
  INCREMENT(state) {
    state.count++
  },
  DECREMENT(state) {
    state.count--
  }
}

const actions = {
  increment({ commit }) {
    // 提交到mutation
    commit('INCREMENT')
  },
  decrement({ commit }) {
    // 提交到mutation
    commit('DECREMENT')
  },
  incrementIfOdd({ commit, state }) {
    // 提交到mutation
    if (state.count % 2 === 1) {
      commit('INCREMENT')
    }
  },
  incrementAsync({ commit }) {
    // 提交到mutation
    setTimeout(() => {
      commit('INCREMENT')
    }, 1000);
  },
}

const getters = {
  evenOrOdd(state) {
    return state.count % 2 === 0 ? "偶数" : "奇数";
  }
}


export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters,
})