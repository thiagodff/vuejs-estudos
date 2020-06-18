<template>
  <div>
    <header>
      <nav>
        <router-link to="/" class="logo">
          <img src="@/assets/ranek.svg" alt="Ranked" />
        </router-link>

        <router-link class="btn" to="/login">Vender / Login</router-link>
      </nav>
    </header>
  </div>
</template>

<script>
export default {
  name: 'Header',
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
