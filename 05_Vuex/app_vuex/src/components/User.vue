<template>
  <div>
    <p>Usuário: {{ user }}</p>
    <input type="text" v-model="newUser">
    <button @click="handleClick">Alterar usuário</button>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex';

export default {
  name: 'User',
  data() {
    return {
      newUser: '',
    }
  },
  computed: {
    ...mapState(['user']),
    // user() {
    //   return this.$store.state.user;
    // }
  },
  methods: {
    ...mapMutations(['CHANGE_USER']),
    handleClick() {
      // this.$store.commit("changeUser", {
      //   name: this.newUser
      // });
      this.CHANGE_USER({
        name: this.newUser
      });
    }
  }
}
</script>

<style>

</style>