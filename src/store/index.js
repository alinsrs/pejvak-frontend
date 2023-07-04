import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    serverAddress : '',
    phoneNumber : "",
    userID : "",
    token: "",
    addresses: '',
    provinces: '',
    cities: '',
    zones: '',
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
    },
    getAddresses(state) {
      return state.addresses
    },
    getProvinces(state) {
      return state.provinces
    },
    getCities(state) {
      return state.cities
    },
    getZones(state) {
      return state.zones
    },
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
    },
    setAddresses(state, payload) {
      state.token = payload
    },
    setProvinces(state, payload) {
      state.token = payload
    },
    setCities(state, payload) {
      state.token = payload
    },
    setZones(state, payload) {
      state.token = payload
    },
  },
  actions: {
  },
  modules: {
  }
})
