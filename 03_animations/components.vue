<template>
  <div class="app">
    <button @click="active = false">Say Goodbye</button>
    <button @click="active = true">Say Hi</button>

    <transition name="fade" mode="out-in">
      <p v-if="active" key="hi">Hello World</p>
      <p v-else key="bye  ">Goodbye World</p>
      <!-- Funciona da mesma forma com a tag component e nao precisa passar key -->
    </transition>
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: true
    };
  },
  methods: {}
};
</script>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 1s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
