<template>
  <div>
    <div v-if="loading">
      <Loading />
    </div>

    <transition>
      <div v-if="api" class="content">
        <div>
          <h1>Sobre a {{ api.titulo }}</h1>
          <p>{{ api.descricao }}</p>

          <router-link class="btn-course" tag="button" to="/cursos">Cursos</router-link>

          <div>
            <h2>Avaliações</h2>
            <ul>
              <li v-for="review in api.avaliacoes" :key="review.nome">
                <p>{{ review.nome }}</p>
                <p>{{ review.descricao }}</p>
              </li>
            </ul>
          </div>
        </div>
        <img src="@/assets/aprender.png" alt="aprenda">
      </div>
    </transition>
  </div>
</template>

<script>
import fetchData from '@/utils/fetchData.js';

export default {
  name: 'Home',
  mixins: [fetchData],
  created() {
    this.fetchData('home');
  }
}
</script>

<style scoped>
.btn-course {
  border: none;
  background: #4b8;
  border-radius: 4px;
  color: white;
  cursor: pointer;
  padding: 15px 40px;
  font-size: 1rem;
  margin-top: 10px;
  margin-bottom: 40px;
  box-shadow: 0 4px 2px rgba(0, 0, 0, 0.1);
  font-family: "Avenir", Arial, Helvetica, sans-serif;
}
</style>