<template>
  <form class="add-product">
    <label for="name">Nome do Produto</label>
    <input type="text" name="name" id="name" v-model="product.nome" />

    <label for="price">Preço(R$)</label>
    <input type="number" name="price" id="price" v-model="product.preco" />

    <label for="images">Fotos</label>
    <input type="file" name="images" id="images" ref="images" />

    <label for="description">Descrição</label>
    <textarea type="text" name="description" id="description" v-model="product.descricao"></textarea>

    <input class="btn" type="button" value="Adicionar Produto" @click.prevent="addProduct" />
  </form>
</template>

<script>
import api from '@/services/api';

export default {
  name: 'Product',
  data() {
    return {
      product: {
        nome: '',
        preco: '',
        descricao: '',
        fotos: null,
        vendido: 'false',
      },
    };
  },
  methods: {
    async addProduct(event) {
      const product = {
        ...this.product,
        usuario_id: this.$store.state.user.id,
      };

      const button = event.currentTarget;
      button.setAttribute('disabled', '');
      button.value = 'Adicionando...';

      await api.post('/produto', product);
      await this.$store.dispatch('getUserProducts');

      button.removeAttribute('disabled', '');
      button.value = 'Adiconar Produto';
    },
  },
};
</script>

<style scoped>
.add-product {
  display: grid;
  grid-template-columns: 100px 1fr;
  align-items: center;
  margin-bottom: 60px;
}

.btn {
  grid-column: 2;
}
</style>