<template>
  <h1 @click="navigate">Home</h1>
</template>

<script>
export default {
  methods: {
    navigate() {
      this.$router.push("cursos");
    }
  }
}
</script>

<style>

</style>