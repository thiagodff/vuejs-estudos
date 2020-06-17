<template>
  <div>
    <div v-if="loading">
      <Loading />
    </div>

    <transition>
      <div v-if="api" class="content">
        <div>
          <h1>{{ api.titulo }}</h1>
          <p>{{ api.descricao }}</p>
        </div>

        <ul class="course-list">
          <li v-for="course in api.cursos" :key="course.id">
            <h2>
              <router-link :to="{ name: 'Curso', params: { curso: course.id } }">
                {{ course.nome }} - {{ course.totalAulas }} aulas | {{ course.horas }} horas
              </router-link>
            </h2>
            <p>{{ course.descricao }}</p>
          </li>
        </ul>
      </div>
    </transition>
  </div>
</template>

<script>
import fetchData from '@/utils/fetchData.js'

export default {
  name: 'Courses',
  mixins: [fetchData],
  created() {
    this.fetchData('cursos');
  }
}
</script>

<style>
.course-list li {
  margin-bottom: 40px;
}
</style>