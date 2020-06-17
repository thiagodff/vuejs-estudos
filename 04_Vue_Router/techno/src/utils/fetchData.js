export default {
  data() {
    return {
      api: null,
      loading: true,
    }
  },
  methods: {
    fetchData(url) {
      this.loading = true;
      this.api = null;

      fetch(`http://localhost:3000/${url}`)
        .then(response => response.json())
        .then(response => {
          this.api = response;
          this.loading = false;
        });
    }
  },
}