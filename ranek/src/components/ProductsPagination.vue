<template>
  <div>
    <ul v-if="pages > 1">
      <li v-for="page in rangePages" :key="page">
        <router-link :to="{ query: query(page) }">{{ page }}</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    productsTotal: {
      type: Number,
      default: 1,
    },
    productsPageLimit: {
      type: Number,
      default: 1,
    },
  },
  methods: {
    query(page) {
      return {
        // para manter os parametros anteriores do site, ex: busca de um produto
        ...this.$route.query,
        _page: page,
      };
    },
  },
  computed: {
    rangePages() {
      const currentPage = Number(this.$route.query._page);
      const range = 9;
      const offset = Math.ceil(range / 2);
      const pagesArray = [];

      for (let i = 1; i <= this.pages; i++) {
        pagesArray.push(i);
      }

      pagesArray.splice(0, currentPage - offset);
      pagesArray.splice(range, this.pages);

      return pagesArray;
    },
    pages() {
      const total = Math.ceil(this.productsTotal / this.productsPageLimit);
      return total !== Infinity ? total : 0;
    },
  },
};
</script>

<style scoped>
ul {
  grid-column: 1 / -1;
}

li {
  display: inline-block;
}

li a {
  padding: 2px 8px;
  border-radius: 4px;
  margin: 4px;
}

li a.router-link-exact-active,
li a:hover {
  background: #87f;
  color: #fff;
}
</style>