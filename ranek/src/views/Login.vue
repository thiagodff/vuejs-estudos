<template>
  <section class="login">
    <h1>Login</h1>
    <form action>
      <label for="email">Email</label>
      <input type="email" name="email" id="email" v-model="login.email" />

      <label for="password">Senha</label>
      <input type="password" name="password" id="password" v-model="login.password" />

      <button class="btn" @click.prevent="signIn">Entrar</button>
    </form>

    <p class="forget">
      <a href="/" target="__blank">Esqueci minha senha</a>
    </p>

    <CreateAcount />
  </section>
</template>

<script>
import CreateAcount from '@/components/CreateAcount';

export default {
  name: 'Login',
  components: {
    CreateAcount,
  },
  data() {
    return {
      login: {
        email: '',
        password: '',
      },
    };
  },
  methods: {
    signIn() {
      // como o json-server nao tem autenticacao iremos apenas simular um login
      this.$store.dispatch('getUser', this.login.email);
      this.$router.push({ name: 'Profile' });
    },
  },
};
</script>

<style scoped>
h1 {
  text-align: center;
  font-size: 2rem;
  margin-top: 40px;
  color: #87f;
}

.login {
  max-width: 500px;
  margin: 0 auto;
  padding: 0 20px;
}

form {
  display: grid;
}

.btn {
  width: 100%;
  max-width: 300px;
  margin-left: auto;
  margin-right: auto;
}

.forget {
  text-align: center;
  margin: 20px auto 0 auto;
}

.forget a:hover {
  color: #87f;
  text-decoration: underline;
}
</style>