<template>
  <div>
    <ul>
      <li>Aula 1</li>
      <li>Aula 2</li>
      <li>Aula 3</li>
      <li>Aula 4</li>
    </ul>
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

</style>