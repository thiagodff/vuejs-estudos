<template>
  <div>
    <h1>{{ course }}</h1>
    <router-link :to="{ name: 'aulas' }">Aulas</router-link>

    <router-view></router-view>
  </div>
</template>

<script>
export default {
  props: ["curso"],
  computed: {
    course() {
      return this.$route.params.curso;
    }
  }
}
</script>

<style>

</style>