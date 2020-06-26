<template>
  <section class="product-container">
    <transition mode="out-in">
      <div v-if="products&& products.length" class="products" key="products">
        <div v-for="(product, index) in products" :key="index" class="product">
          <router-link :to="{ name: 'Product', params: { id: product.id } }">
            <img v-if="product.fotos" :src="product.fotos[0].src" :alt="product.fotos[0].titulo" />
            <p class="price">{{ product.preco | formatPrice }}</p>
            <h2 class="title">{{ product.nome }}</h2>
            <p>{{ product.descricao }}</p>
          </router-link>
        </div>

        <ProductsPagination :productsTotal="productsTotal" :productsPageLimit="productsPageLimit" />
      </div>

      <div v-else-if="products && products.length === 0" key="productNotFound">
        <p class="no-results">Busca sem resultados. Tente buscar outro termo.</p>
      </div>

      <Loading v-else key="loading" />
    </transition>
  </section>
</template>

<script>
import ProductsPagination from '@/components/ProductsPagination';

import api from '@/services/api';
import getQueryParams from '@/helpers/getQueryParams';

export default {
  name: 'ProductsList',
  data() {
    return {
      products: null,
      productsPageLimit: 9,
      productsTotal: 0,
    };
  },
  components: {
    ProductsPagination,
  },
  computed: {
    url() {
      const query = getQueryParams(this.$route.query);

      return `?_limit=${this.productsPageLimit}${query}`;
    },
  },
  methods: {
    getProducts() {
      this.products = null;
      window.setTimeout(() => {
        api.get(`/produto${this.url}`).then(response => {
          this.productsTotal = Number(response.headers['x-total-count']);
          this.products = response.data;
        });
      }, 1000);
    },
  },
  watch: {
    url() {
      this.getProducts();
    },
  },
  created() {
    this.getProducts();
  },
};
</script>

<style scoped>
.products-contianer {
  max-width: 1000px;
  margin: 0 auto;
}

.products {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 30px;
  margin: 30px;
}

@media screen and (max-width: 620px) {
  .products {
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 10px;
    margin: 10px;
  }
}

.product {
  box-shadow: 0 4px 8px rgba(30, 60, 90, 0.1);
  padding: 10px;
  background: #fff;
  border-radius: 4px;
  transition: all 0.2s;
}

.product:hover {
  box-shadow: 0 6px 12px rgba(30, 60, 90, 0.2);
  transform: scale(1.1);
  position: relative;
  z-index: 1;
}

.product img {
  border-radius: 4px;
  margin-bottom: 20px;
}

.title {
  margin-bottom: 10px;
}

.price {
  color: #e80;
  font-weight: bold;
}

.no-results {
  text-align: center;
}
</style>
