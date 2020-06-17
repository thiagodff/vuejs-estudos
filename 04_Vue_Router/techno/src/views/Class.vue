<template>
  <div>
    <div v-if="loading">
      <Loading />
    </div>

    <transition>
      <div v-if="api">
        <h2>{{ api.nome }}</h2>

        <div class="video">
          <iframe
            :src="youtube"
            frameborder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          >
          </iframe>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import fetchData from '@/utils/fetchData.js';

export default {
  name: "Class",
  props: ['aula'],
  mixins: [fetchData],
  computed: {
    youtube() {
      return `https://www.youtube.com/embed/${this.api.youtube}`;
    }
  },
  created() {
    this.fetchData(`aula/${this.aula}`);
  },
  beforeRouteUpdate(to, from, next) {
    this.fetchData(`aula/${to.params.aula}`);
    next();
  }
}
</script>

<style>
.video {
  position: relative;
  padding-bottom: 56.25%;
}

.video iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
</style>