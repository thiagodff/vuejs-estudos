<template>
  <div>
    <p>Qual a capital do Brasil?</p>
  </div>
</template>

<script>
export default {
  name: "Question",
  destroyed() {
    console.log("componente pergunta destruido");
  },
};
</script>

<style></style>
