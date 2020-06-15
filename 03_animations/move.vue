<template>
  <div class="app">
    <button @click="filerAZ">A-Z</button>
    <button @click="filerZA">Z-A</button>

    <transition-group tag="ul">
      <li v-for="name in names" :key="name">
        {{ name }}
      </li>
    </transition-group>
  </div>
</template>

<script>
export default {
  data() {
    return {
      names: [
        "Thiago",
        "Diego",
        "Michel",
        "Alexandre"
      ]
    };
  },
  methods: {
    filerAZ() {
      this.names.sort();
    },
    filerZA() {
      this.names.sort().reverse();
    }
  }
};
</script>

<style>
/* o Vue usa o transform para fazer a transicao */
.v-move {
  transition: transform 0.3s;
}

li {
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  background: white;
  padding: 20px;
  max-width: 200px;
  margin-bottom: 10px;
}
</style>
