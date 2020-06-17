<template>
  <div>
    <h1>Curso: {{ course + ' ' + curso }}</h1>
    <router-link :to="{ name: 'curso', params: { curso: 'javascript' } }">JavaScript</router-link>
    <router-link to="/cursos/vue">Vue</router-link>
    <router-link to="/cursos/react">React</router-link>

    <transition mode="out-in">
      <router-view :key="curso"></router-view>
    </transition>
  </div>
</template>

<script>
export default {
  props: ["curso"],
  computed: {
    course() {
      return this.$route.params.curso;
    } 
  },
}
</script>

<style>
.v-enter-active,
.v-leave-active {
  transition: all .3s;
}

.v-enter,
.v-leave-to {
  opacity: 0;
  transform: translate3d(-20px, 0, 0) scale(.2);
}
</style>