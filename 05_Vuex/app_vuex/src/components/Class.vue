<template>
  <div>
    <p>Aula: {{ completedClasses }} / {{ totalClasses }}</p>

    <p>Altere o usuário enviando uma action</p>
    <input type="text" v-model="newUser">
    <button @click="changeUser({ name: newUser })">Alterar usuário</button>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';

export default {
  name: 'Class',
  data() {
    return {
      totalClasses: 25,
      newUser: '',
    }
  },
  computed: {
    ...mapState(['completedClasses']),
  },
  methods: {
    ...mapActions('user', [
      'changeUser'
    ]),
    handleClick() {
      this.$store.dispatch('user/changeUser', { name: this.newUser });
    }
  }
}
</script>

<style>

</style>