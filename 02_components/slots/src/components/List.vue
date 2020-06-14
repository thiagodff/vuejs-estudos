<template>
  <div class="header">
    <slot name="header"></slot>

    <ul>
      <li>Home</li>
      <li>Products</li>
    </ul>
    <slot name="default"></slot>

    <slot name="footer" :company="company"></slot>
  </div>
</template>

<script>
export default {
  name: "List",
  data() {
    return {
      company: {
        name: "© Thiago",
      },
    };
  },
};
</script>

<style></style>
