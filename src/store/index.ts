import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import Phone from '@/types'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    phones: [],
    phonesByBrand: [],
    favourites: [] as string[]
  },
  mutations: {
    SET_PHONES(state, phones) {
      state.phones = phones
    },
    SET_PHONES_BY_BRAND(state, phones) {
      state.phonesByBrand = phones
    },
    SET_FAVOURITES(state, favourites) {
      state.favourites = favourites ? JSON.parse(favourites) : []
    }
  },
  actions: {
    getPhones({ commit }) {
      axios
      .get('https://raw.githubusercontent.com/TeliaSweden/frontend-interview-api/master/brands.json')
      .then(res => commit('SET_PHONES', res.data))
    },
    getPhonesByBrand({ commit }) {
      axios
      .get('https://raw.githubusercontent.com/TeliaSweden/frontend-interview-api/master/phones.json')
      .then(res => commit('SET_PHONES_BY_BRAND', res.data))
    },
    getFavourites({ commit }) {
      const favourites = localStorage.getItem('favouritePhones')
      commit('SET_FAVOURITES', favourites)
    },
    toggleFavourites ({ commit }, payload) {
      localStorage.setItem('favouritePhones', payload)
      commit('SET_FAVOURITES', payload)
    }
  },
  getters: {
    allPhones: (state) => state.phones,
    phonesByBrand: (state) => (brand: string) => {
      return state.phonesByBrand.filter((item: Phone) => item.brand === brand)
    },
    favourites: (state) => state.favourites
  }
})
