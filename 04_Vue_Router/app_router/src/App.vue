<template>
  <div id="app">
    <h1 @click="showRoute">Hello VueJs</h1>
    <nav>
      <router-link to="/">Home</router-link>
      <router-link to="/cursos">Cursos</router-link>
      <router-link to="/acoes">Ações</router-link>
    </nav>

    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
  methods: {
    showRoute() {
      return console.log(this.$route);
    }
  },
  // beforeRouteEnter(to, from, next) {
  //   // antes de entrar no router, nao tem acesso ao this
  //   next((vm) => {
  //     console.log(vm); // aqui ele consegue ter acesso ao vm = this do componente  
  //   });
  // },
  // beforeRouteUpdate(to, from, next) {
  //   // quando o router ativo e atualiado
  // },
  // beforeRouteLeave(to, from, next) {
  //   console.log(to, from);
  //   // antes de sair do router
  //   // e possivel passar um caminho para o next, ex: next("/");
  // }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  color: #234;
  border: 4px solid;
  margin: 20px;
  padding: 20px
}

a {
  margin-right: 15px;
  color: #234;
}

nav {
  padding: 20px 0;
}

.router-link-exact-active {
  color: #4b8;
  font-weight: bold;
}

</style>
