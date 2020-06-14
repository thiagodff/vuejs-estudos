<template>
  <div id="app">
    <h1>{{ message }}</h1>

    <List>
      <template v-slot:header>
        <h1>This is a header child</h1>
      </template>

      <template v-slot:default>
        <h3>Default slot get others child elements</h3>

        <ul>
          <li>hi</li>
        </ul>
      </template>

      <!-- shorthand -->
      <template #footer="{ company }">
        <h3>{{ company.name }} Footer slot child</h3>
      </template>
    </List>
  </div>
</template>

<script>
import List from "./components/List.vue";

export default {
  name: "App",
  data() {
    return {
      message: "Hello VueJs",
    };
  },
  components: {
    List,
  },
};
</script>

<style>
#app {
  font-family: Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
}
</style>
