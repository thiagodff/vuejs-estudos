<template>
  <section>
    <UserForm>
      <button class="btn" @click.prevent="editUser">Atualizar Dados</button>
    </UserForm>
  </section>
</template>

<script>
import api from '@/services/api';

import UserForm from '@/components/UserForm';

export default {
  name: 'UserEdit',
  components: {
    UserForm,
  },
  methods: {
    editUser() {
      api
        .put(`/usuario/${this.$store.state.user.id}`, this.$store.state.user)
        .then(() => {
          this.$store.dispatch('getUser');
          this.$router.push({ name: 'Profile' });
        })
        .catch(error => {
          console.log(error.response);
        });
    },
  },
  created() {
    document.title = 'Usuário | Editar';
  },
};
</script>

<style scoped>
.btn {
  width: 100%;
}
</style>