<template>
  <div>
    <p>Usuário: {{ user.name }}</p>
    <!-- <p>{{ $store.getters.userCompletedClasses }}</p> -->
    <p>{{ userCompletedClasses }}</p>
    <p>{{ userCompare('Thiago') }}</p>

    <input type="text" v-model="newUser">
    <button @click="handleClick">Alterar usuário</button>
  </div>
</template>

<script>
import { mapState, mapMutations, mapGetters } from 'vuex';

export default {
  name: 'User',
  data() {
    return {
      newUser: '',
    }
  },
  computed: {
    ...mapGetters(['userCompletedClasses', 'userCompare']),
    ...mapState(['user']),
    // user() {
    //   return this.$store.state.user;
    // }
  },
  methods: {
    ...mapMutations('user', ['CHANGE_USER']),
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