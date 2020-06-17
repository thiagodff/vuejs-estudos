<template>
  <div>
    <h2>Dados da empresa</h2>

    <p v-if="loading">Loading ...</p>
    <p v-else>{{ quote }}</p>
  </div>
</template>

<script>
export default {
  props: ["simbolo"],
  data() {
    return {
      loading: true,
      quote: null,
    }
  },
  methods: {
    fetchStocks() {
      this.loading = true;
      this.quote = null;

      setTimeout(() => {
        fetch(`https://api.iextrading.com/1.0/stock/${this.simbolo}/book/quote`)
        .then(response => response.json())
        .then(response => {
          this.quote = response;
          this.loading = false;
        });
      }, 200);
    },
  },
  created() {
    this.fetchStocks();
  },
  watch: {
    $route: "fetchStocks"
  },
  // beforeRouteUpdate(to, from, next) {
  //   this.fetchStocks(to.params.simbolo);
  //   next();
  // }
}
</script>

<style>

</style>