<template>
  <div>
    <header>
      <nav>
        <router-link to="/" class="logo">
          <img src="@/assets/ranek.svg" alt="Ranked" />
        </router-link>

        <router-link v-if="$store.state.login" class="btn" to="/profile">{{ name }}</router-link>
        <router-link v-else class="btn" to="/login">Vender / Login</router-link>
      </nav>
    </header>
  </div>
</template>

<script>
export default {
  name: 'Header',
  computed: {
    name() {
      // tudo que vier depois de " " substitui por ""
      return this.$store.state.user.name.replace(/ .*/, '');
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 15px 20px;
  box-shadow: 0 2px 4px rgba(30, 60, 90, 0.1);
}

.logo {
  padding: 10px 0;
}

.logo img {
  width: 90px;
}
</style>
