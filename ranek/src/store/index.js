import Vue from 'vue';
import Vuex from 'vuex';

import api from '@/services/api';

Vue.use(Vuex);

export default new Vuex.Store({
  strict: true,
  state: {
    login: false,
    user: {
      id: '',
      name: '',
      email: '',
      password: '',
      cep: '',
      street: '',
      number: '',
      district: '',
      city: '',
      state: '',
    },
    user_products: [],
  },
  mutations: {
    UPDATE_LOGIN(state, payload) {
      state.login = payload;
    },
    UPDATE_USER(state, payload) {
      state.user = Object.assign(state.user, payload);
    },
    UPDATE_USER_PRODUCT(state, payload) {
      state.user_products = payload;
    },
    ADD_USER_PRODUCT(state, payload) {
      // unshift adiciona item na primeria posição do array
      state.user_products.unshift(payload);
    },
  },
  actions: {
    getUserProducts(context) {
      return api
        .get(`/produto?usuario_id=${context.state.user.id}`)
        .then(response => {
          context.commit('UPDATE_USER_PRODUCT', response.data);
        });
    },
    getUser(context, payload) {
      return api.get(`/usuario/${payload}`).then(response => {
        context.commit('UPDATE_USER', response.data);
        context.commit('UPDATE_LOGIN', true);
      });
    },
    createUser(context, payload) {
      context.commit('UPDATE_USER', { id: payload.email });
      return api.post('/usuario', payload);
    },
    logout(context) {
      context.commit('UPDATE_USER', {
        id: '',
        name: '',
        email: '',
        password: '',
        cep: '',
        street: '',
        number: '',
        district: '',
        city: '',
        state: '',
      });
      context.commit('UPDATE_LOGIN', false);
    },
  },
  modules: {},
});
