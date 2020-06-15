<template>
  <div class="app">
    <button @click="active = !active">Active</button>

    <transition
      name="fade"
      enter-active-class="animate"
      leave-active-class="animate-hidden"
      @enter="enter"
      appear
      :duration="1000"
    >
      <!-- :duration = duracao total que as classes de animacao serao mantidas -->
      <p v-if="active">Hello World</p>
    </transition>
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: true,
    };
  },
  methods: {
    enter(event) {
      event.classList.add("hi");
      console.log(event);
    },
  },
};
</script>

<style>
/* .fade-enter-active,
.fade-leave-active {
  transition: opacity 1s;
} */

.animate,
.animate-hidden {
  transition: opacity 1s;
}

.fade-enter,
/* v-leave e apenas para quando o elemento ja saiu da tela */
.fade-leave-to {
  opacity: 0;
}
</style>
