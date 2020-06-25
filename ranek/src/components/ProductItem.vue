<template>
  <div class="product" v-if="product">
    <router-link class="product-img" :to="{ name: 'Product', params: { id: product.id } }">
      <img v-if="product.fotos" :src="product.fotos[0].src" :alt="product.fotos[0].titulo" />
    </router-link>

    <div class="info">
      <p class="price">{{ product.preco | formatPrice }}</p>
      <h2 class="title">{{ product.nome }}</h2>
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProductItem',
  props: ['product'],
};
</script>

<style scoped>
.product {
  display: grid;
  grid-template-columns: minmax(100px, 200px) 1fr;
  grid-gap: 20px;
  margin-bottom: 40px;
  position: relative;
}

@media screen and (max-width: 620px) {
  .products {
    grid-template-columns: 1fr;
    grid-gap: 10px;
  }
}

.info {
  align-self: end;
}

.product-img {
  border-radius: 4px;
  overflow: hidden;
  height: 100px;
}
</style>
