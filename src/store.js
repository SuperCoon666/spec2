// src/store.js
import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    darkMode: false,
    lightTheme: {
      backgroundColor: '#eef2f1',
      textColor: '#181d1c',
    },
    darkTheme: {
      backgroundColor: '#181d1c',
      textColor: '#eef2f1',
    },
  },
  mutations: {
    setDarkMode(state, payload) {
      state.darkMode = payload;
    },
  },
  getters: {
    currentTheme: (state) => {
      return state.darkMode ? state.darkTheme : state.lightTheme;
    },
  },
});
