<template>
  <div id="app">
    <h1>Ola Vuex</h1>
    <User/>
    <Course/>
  </div>
</template>

<script>
import User from './components/User.vue';
import Course from './components/Course.vue';

export default {
  name: 'App',
  components: {
    User,
    Course,
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
