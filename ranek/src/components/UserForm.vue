<template>
  <form>
    <div class="user" v-if="showDataLogin">
      <label for="name">Nome</label>
      <input type="text" name="name" id="name" v-model="name" />

      <label for="email">Email</label>
      <input type="email" name="email" id="email" v-model="email" />

      <label for="password">Senha</label>
      <input type="password" name="password" id="password" v-model="password" />
    </div>

    <label for="cep">CEP</label>
    <input @keyup="fetchCep" type="text" name="cep" id="cep" v-model="cep" />

    <label for="street">Rua</label>
    <input type="text" name="street" id="street" v-model="street" />

    <label for="number">Número</label>
    <input type="text" name="number" id="number" v-model="number" />

    <label for="district">Bairro</label>
    <input type="text" name="district" id="district" v-model="district" />

    <label for="city">Cidade</label>
    <input type="text" name="city" id="city" v-model="city" />

    <label for="state">Estado</label>
    <input type="text" name="state" id="state" v-model="state" />

    <div class="button">
      <slot></slot>
    </div>
  </form>
</template>

<script>
import mapFields from '@/helpers/mapFields.js';
import getCep from '@/services/getCep';

export default {
  name: 'UserForm',
  methods: {
    fetchCep() {
      const cep = this.cep.replace(/\D/g, '');

      if (cep.length === 8) {
        getCep(this.cep).then(response => {
          this.street = response.data.logradouro;
          this.district = response.data.bairro;
          this.city = response.data.localidade;
          this.state = response.data.uf;
        });
      }
    },
  },
  computed: {
    name: {
      get() {
        return this.$store.state.user.name;
      },
      set(value) {
        return this.$store.commit('UPDATE_USER', { name: value });
      },
    },
    // retorna um objeto exatamente como o acima para cada field colocado
    ...mapFields({
      fields: [
        'email',
        'password',
        'cep',
        'street',
        'number',
        'district',
        'city',
        'state',
      ],
      base: 'user',
      mutation: 'UPDATE_USER',
    }),
    showDataLogin() {
      return !this.$store.state.login || this.$route.name === 'UserEdit';
    },
  },
};
</script>

<style scoped>
form,
.user {
  display: grid;
  grid-template-columns: 80px 1fr;
  align-items: center;
}

.user {
  grid-column: 1 / 3;
}

.button {
  grid-column: 2;
  margin-top: 20px;
}
</style>