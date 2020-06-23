<template>
  <section>
    <div v-if="sales.length">
      <h2>Vendas</h2>
      <div class="product-wrapper" v-for="(sale, index) in sales" :key="index">
        <ProductItem v-if="sale.produto" :product="sale.produto">
          <p class="seller">
            <span>Comprador:</span>
            {{sale.comprador_id}}
          </p>
        </ProductItem>
        <div class="address">
          <h3>Entrega:</h3>
          <ul v-if="sale.endereco">
            <li v-for="(value, key) in sale.endereco" :key="key">{{ key }}: {{ value }}</li>
          </ul>
        </div>
      </div>
    </div>
    <div v-else>
      <h2>Vendas</h2>
      <p>Nenhuma venda realizada.</p>
    </div>
  </section>
</template>

<script>
import { mapState } from 'vuex';
import api from '@/services/api';

import ProductItem from '@/components/ProductItem';

export default {
  name: 'UserSales',
  components: {
    ProductItem,
  },
  data() {
    return {
      sales: [],
    };
  },
  computed: {
    ...mapState(['user', 'login']),
  },
  methods: {
    getSales() {
      api.get(`/transacao?vendedor_id=${this.user.id}`).then(response => {
        this.sales = response.data;
      });
    },
  },
  watch: {
    login() {
      if (this.login) {
        this.getSales();
      }
    },
  },
  created() {
    if (this.login) {
      this.getSales();
    }
    document.title = 'Usuário | Vendas';
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

.address {
  display: grid;
  grid-template-columns: minmax(100px, 200px) 1fr;
  grid-gap: 20px;
  margin-bottom: 60px;
}

h2 {
  margin-bottom: 20px;
}

h3 {
  margin: 0;
  justify-self: end;
}

@media screen and (max-width: 500px) {
  .address {
    grid-template-columns: 1fr;
    grid-gap: 10px;
  }

  h3 {
    justify-self: start;
  }
}
</style>