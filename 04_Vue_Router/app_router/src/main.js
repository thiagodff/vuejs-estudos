import Vue from 'vue'
import App from './App.vue'
import router from './router';

Vue.config.productionTip = false

// // executa sempre que uma rota e alterada
// router.beforeEach((to, from, next) => {
//   // console.log('to:', to);
//   // console.log('from:', from);
//   next();
// });

// // executa apos a rota ser montada
// router.afterEach((to, from) => {
// });

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
