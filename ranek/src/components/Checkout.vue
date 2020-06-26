<template>
  <section>
    <h2>Endereço de Envio</h2>
    <UserForm>
      <button class="btn" @click.prevent="finalizeCheckout">Finalizar Compra</button>
    </UserForm>
  </section>
</template>

<script>
import { mapState } from 'vuex';
import api from '@/services/api';

import UserForm from '@/components/UserForm';

export default {
  name: 'Checkout',
  components: {
    UserForm,
  },
  props: ['product'],
  computed: {
    ...mapState(['user']),
    compra() {
      return {
        comprador_id: this.user.email,
        vendedor_id: this.product.usuario_id,
        produto: this.product,
        endereco: {
          cep: this.user.cep,
          rua: this.user.street,
          numero: this.user.number,
          bairro: this.user.district,
          cidade: this.user.city,
          estado: this.user.state,
        },
      };
    },
  },
  methods: {
    createTransaction() {
      return api.post('/transacao', this.compra).then(() => {
        this.$router.push({ name: 'UserShopping' });
      });
    },
    async createUser() {
      try {
        await this.$store.dispatch('createUser', this.$store.state.user);
        await this.$store.dispatch('getUser', this.$store.state.user.email);
        await this.createTransaction();
      } catch (error) {
        console.log(error);
        alert('Erro ao criar conta, verifique sua conexão com a internet');
      }
    },
    finalizeCheckout() {
      if (this.$store.state.login) {
        this.createTransaction();
      } else {
        this.createUser();
      }
    },
  },
};
</script>

<style scoped>
h2 {
  margin-top: 40px;
  margin-bottom: 20px;
}

.btn {
  background: #e80;
}
</style>