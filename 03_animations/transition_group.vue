<template>
  <div class="app">
    <!-- por padrao a tag e span -->
    <transition-group tag="ul">
      <li v-for="(product, index) in cart" :key="product.name">
        {{ product.name }}: {{ product.price }}
        <button @click="removeProduct(index)">X</button>
      </li>
    </transition-group>
  </div>
</template>

<script>
export default {
  data() {
    return {
      cart: [
        {
          name: "Notebook",
          price: 2999
        },
        {
          name: "Smartphone",
          price: 1999
        }
      ]
    };
  },
  methods: {
    removeProduct(index) {
      this.cart.splice(index, 1);
    }
  }
};
</script>

<style>
.v-enter-active,
.v-leave-active {
  transition: all .3s;
}

.v-enter,
.v-leave-to {
  opacity: 0;
  transform: translate3d(-20px, 0, 0);
}
</style>
