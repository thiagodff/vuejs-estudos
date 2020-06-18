export default {
  // para disparar uma action ou realizar uma mutation, precisamos utilizar "user/changeUser"
  namespaced: true,
  state: {
    name: "Thiago"
  },
  mutations: {
    CHANGE_USER(state, payload) {
      state.name = payload.name;
    }
  },
  actions: {
    changeUser(context, payload) {
      // o principal uso de actions e para realizar acoes assincronas como o fetch
      // context tem acesso ao commit, dispatch, getters e ao estado para realizar verificacoes
      context.commit('CHANGE_USER', payload);
    }
  },
}