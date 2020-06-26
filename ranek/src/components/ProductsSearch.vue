<template>
  <form action>
    <input name="search" id="search" placeholder="Buscar..." type="text" v-model="searchInput" />
    <input type="submit" value="Buscar" id="searchButton" @click.prevent="searchProduct" />
  </form>
</template>

<script>
export default {
  name: 'ProductsSearch',
  data() {
    return {
      searchInput: '',
    };
  },
  methods: {
    searchProduct() {
      this.$router.push({
        query: {
          q: this.searchInput,
        },
      });
    },
  },
};
</script>

<style scoped>
form {
  max-width: 600px;
  margin: 30px auto 60px auto;
  position: relative;
  padding: 0 10px;
}

#search {
  width: 100%;
  padding: 20px;
  border: none;
  border-radius: 4px;
}

#search:focus,
#search:hover {
  transform: scale(1.1);
}

#searchButton {
  width: 62px;
  height: 62px;
  background: url('../assets/search.svg') no-repeat center center;
  text-indent: -150px;
  border: none;
  cursor: pointer;
  position: absolute;
  top: 0px;
  right: 0px;
  box-shadow: none;
}
</style>
