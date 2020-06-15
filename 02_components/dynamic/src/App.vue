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
import Question from "./components/Question.vue";
import Answer from "./components/Answer.vue";

export default {
  name: "App",
  data() {
    return {
      message: "Pergunta e Resposta",
      card: "Question",
    };
  },
  components: {
    Question,
    Answer,
  },
};
</script>

<style>
#app {
  font-family: Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
}
</style>
