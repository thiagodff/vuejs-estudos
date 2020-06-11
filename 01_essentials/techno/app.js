const vm = new Vue({
  el: "#app",
  data: {
    products: [],
    product: false,
    cart: [],
    alertMessage: "Item adicionado com sucesso",
    activeAlert: false,
    activeCart: false,
  },
  filters: {
    formatPrice(value) {
      return value.toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL"
      });
    }
  },
  computed: {
    cartTotal() {
      let totalPrice = 0;

      if (this.cart.length) {
        totalPrice = this.cart.reduce((accumulator, item) => {
          return accumulator + item.preco;
        }, 0);
      }

      return totalPrice;
    }
  },
  methods: {
    fetchProducts() {
      fetch('http://192.168.0.2:5501/01_essentials/techno/api/produtos.json')
        .then(response => response.json())
        .then(response => {
          this.products = response;
        });
    },
    fetchProduct(id) {
      fetch(`./api/produtos/${id}/dados.json`)
        .then(response => response.json())
        .then(response => {
          this.product = response;
        });
    },
    openModal(id) {
      this.fetchProduct(id);
      window.scrollTo({
        behavior: "smooth",
        top: 0,
      })
    },
    closeModal(event) {
      // console.log(event.target); // onde e clicado
      // console.log(event.currentTarget); // onde esta o evento atribuido
      if (event.target === event.currentTarget) {
        this.product = false;
      }
    },
    closeCart(event) {
      if (event.target === event.currentTarget) {
        this.activeCart = false;
      }
    },
    addItem() {
      this.product.estoque--;
      const { id, nome, preco } = this.product;
      this.cart.push({ id, nome, preco });

      this.alert(`${nome} adicionado ao carrinho.`, 1.5)
    },
    removeItem(index) {
      this.cart.splice(index, 1)
    },
    checkLocalStorage() {
      if (window.localStorage.cart)
        this.cart = JSON.parse(window.localStorage.cart);
    },
    compareStock() {
      const items = this.cart.filter(item => item.id === this.product.id);

      this.product.estoque -= items.length;
    },
    alert(message, time) {
      this.alertMessage = message;
      this.activeAlert = true;
      setTimeout(() => {
        this.activeAlert = false;
      }, time * 1000)
    },
    router() {
      const hash = document.location.hash;
      
      if (hash) {
        this.fetchProduct(hash.replace("#", ""));
      }
    }
  },
  watch: {
    product() {
      document.title = this.product.nome || "Techno";
      const hash = this.product.id || "";
      history.pushState(null, null, `#${hash}`);

      if (this.product)
        this.compareStock();
    },
    cart() {
      // localStorage.setItem('cart', JSON.stringify(this.cart));
      window.localStorage.cart = JSON.stringify(this.cart);
    },
  },
  created() {
    this.fetchProducts();
    this.router();
    this.checkLocalStorage();
  }
})