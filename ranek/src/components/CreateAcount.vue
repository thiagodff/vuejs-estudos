<template>
  <section>
    <h2>Crie a Sua Conta</h2>

    <transition mode="out-in">
      <button v-if="!create" class="btn" @click="create = true">Criar conta</button>

      <UserForm v-else>
        <button class="btn btn-form" @click.prevent="createUser">Criar Conta</button>
      </UserForm>
    </transition>
  </section>
</template>

<script>
import UserForm from '@/components/UserForm';

export default {
  name: 'CreateAcount',
  data() {
    return {
      create: false,
    };
  },
  components: {
    UserForm,
  },
  methods: {
    async createUser() {
      try {
        await this.$store.dispatch('createUser', this.$store.state.user);
        await this.$store.dispatch('getUser', this.$store.state.user.email);
        this.$router.push({ name: 'Profile' });
      } catch (error) {
        console.log(error);
        alert('Erro ao criar conta, verifique sua conexão com a internet');
      }
    },
  },
};
</script>

<style scoped>
h2 {
  text-align: center;
  margin-top: 40px;
  margin-bottom: 10px;
}

.btn {
  width: 100%;
  max-width: 300px;
  margin-left: auto;
  margin-right: auto;
}

.btn-form {
  max-width: 100%;
}
</style>