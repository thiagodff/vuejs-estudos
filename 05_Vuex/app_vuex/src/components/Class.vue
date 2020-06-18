<template>
  <p>Aula: {{ completedClasses }} / {{ totalClasses }}</p>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'Class',
  data() {
    return {
      totalClasses: 25,
    }
  },
  computed: {
    ...mapState(['completedClasses']),
  },
}
</script>

<style>

</style>