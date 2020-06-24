<template>
  <section>
    <div class="product" v-if="product">
      <ul class="pictures" v-if="product.fotos">
        <li v-for="(picture, index) in product.fotos" :key="index">
          <img :src="picture.foto" :alt="picture.titulo" />
        </li>
      </ul>

      <div class="info">
        <h1>{{ product.name }}</h1>
        <p class="price">{{ product.preco | formatPrice }}</p>
        <p class="description">{{ product.descricao }}</p>

        <transition mode="out-in" v-if="product.vendido === 'false'">
          <button class="btn" v-if="!finalize" @click.prevent="finalize = true">Comprar</button>
          <Checkout v-else :product="product" />
        </transition>
        <button class="btn btn-disabled" disabled v-else>Produto Vendido</button>
      </div>
    </div>
    <Loading v-else />
  </section>
</template>

<script>
import api from '@/services/api';

import Checkout from '@/components/Checkout';

export default {
  name: 'Product',
  data() {
    return {
      product: null,
      finalize: false,
    };
  },
  props: ['id'],
  components: {
    Checkout,
  },
  methods: {
    getProduct() {
      api.get(`/produto/${this.id}`).then(response => {
        this.product = response.data;
        document.title = this.product.nome;
      });
    },
  },
  created() {
    this.getProduct();
  },
};
</script>

<style scoped>
.product {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 30px;
  max-width: 900px;
  padding: 60px 20px;
  margin: 0 auto;
}

.pictures {
  /* vai da linha 1 ate a 3, ou seja, vai ocupar 2 linhas */
  grid-row: 1 / 3;
}

.info {
  /* vai fazer a info do produto acompanhar o scroll da tela, com 20 px de distancia do topo */
  position: sticky;
  top: 20px;
}

.price {
  color: #e80;
  font-weight: bold;
  font-size: 1.5rem;
  margin-bottom: 40px;
}

.description {
  font-size: 1.2rem;
}

img {
  margin-bottom: 30px;
  box-shadow: 0 4px 8px rgba(30, 60, 90, 0.2);
  border-radius: 4px;
}

.btn {
  margin-top: 60px;
  width: 200px;
}

@media screen and (max-width: 500px) {
  .product {
    grid-template-columns: 1fr;
  }

  .pictures {
    grid-row: 2;
  }

  .info {
    position: initial;
  }
}
</style>