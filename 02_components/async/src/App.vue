<template>
  <div id="app">
    <h1>{{ message }}</h1>

    <keep-alive>
      <!-- keep-alive impede do componente que foi alterado seja destruido -->
      <component :is="card"></component>
    </keep-alive>

    <button @click="card = 'Answer'">Revelar Resposta</button>
    <button @click="card = 'Question'">Mostrar Pergunta</button>
  </div>
</template>

<script>
import Vue from "vue";
// Componente global assincrono, geralmente declarado no main.js
Vue.component("Answer", () => ({
  component: import("./components/Answer.vue"),
  // loading: LoadingComponent,
  // error: ErrorComponent,
  delay: 200,
  timeout: 3000,
}));

export default {
  name: "App",
  data() {
    return {
      message: "Pergunta e Resposta",
      card: "Question",
    };
  },
  components: {
    // import do componente de forma assincrona
    Question: () => import("./components/Question.vue"),
  },
};
</script>

<style>
#app {
  font-family: Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
}
</style>
