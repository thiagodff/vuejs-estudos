import Vue from 'vue';
import Vuex from 'vuex';

import user from './modules/user';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    user,
  },
  state: {
    completedClasses: 10
  },
  getters: {
    // getters sao uma especie de computed properties para o vuex
    userCompletedClasses(state) {
      return `O usuário ${state.user.name} completou ao todo ${state.completedClasses} aulas`
    },
    // userCompare(state) {
    //   return function(compareUser) {
    //     return compareUser === state.user;
    //   }
    // },
    userCompare: (state) => (compareUser) => compareUser === state.user.name,
  }
});
