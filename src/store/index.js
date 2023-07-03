import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    serverAddress : '',
    phoneNumber : "",
    userID : "",
    token: ""
  },
  getters: {
    getServerAddress(state) {
      return state.serverAddress
    },
    getPhoneNumber(state) {
      return state.phoneNumber
    },
    getUserId(state) {
      return state.userID
    },
    getToken(state) {
      return state.token
    }
  },
  mutations: {
    setPhoneNumber(state,payload){
      state.phoneNumber = payload
    },
    setUserID(state, payload) {
      state.userID = payload
    },
    setToken(state, payload) {
      state.token = payload
    }
  },
  actions: {
  },
  modules: {
  }
})
