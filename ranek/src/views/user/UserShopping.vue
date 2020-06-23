<template>
  <section>
    <div v-if="shoppings.length">
      <h2>Compras</h2>
      <div class="product-wrapper" v-for="(shopping, index) in shoppings" :key="index">
        <ProductItem v-if="shopping.produto" :product="shopping.produto">
          <p class="seller">
            <span>Vendedor:</span>
            {{shopping.vendedor_id}}
          </p>
        </ProductItem>
      </div>
    </div>
    <div v-else>
      <h2>Compras</h2>
      <p>Nenhuma compra realizada.</p>
    </div>
  </section>
</template>

<script>
import { mapState } from 'vuex';
import api from '@/services/api';

import ProductItem from '@/components/ProductItem';

export default {
  name: 'UserShopping',
  components: {
    ProductItem,
  },
  data() {
    return {
      shoppings: [],
    };
  },
  computed: {
    ...mapState(['user', 'login']),
  },
  methods: {
    getShoppings() {
      api.get(`/transacao?comprador_id=${this.user.id}`).then(response => {
        this.shoppings = response.data;
      });
    },
  },
  watch: {
    login() {
      if (this.login) {
        this.getShoppings();
      }
    },
  },
  created() {
    if (this.login) {
      this.getShoppings();
    }
    document.title = 'Usuário | Compras';
  },
};
</script>

<style scoped>
.product-wrapepr {
  margin-bottom: 40px;
}

.seller span {
  color: #e80;
}

h2 {
  margin-bottom: 20px;
}
</style>