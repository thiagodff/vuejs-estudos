import Vue from 'vue';
import VueRouter from 'vue-router';

import Home from '../views/Home.vue';
import Product from '../views/Product.vue';
import Login from '../views/Login.vue';

import Profile from '../views/user/Profile.vue';
import UserProducts from '../views/user/UserProducts.vue';
import UserEdit from '../views/user/UserEdit.vue';
import UserSales from '../views/user/UserSales.vue';
import UserShopping from '../views/user/UserShopping.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/produto/:id',
    name: 'Product',
    component: Product,
    props: true,
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
  },

  {
    path: '/profile',
    component: Profile,
    meta: {
      login: true,
    },
    children: [
      {
        path: '',
        name: 'Profile',
        component: UserProducts,
      },
      {
        path: 'compras',
        name: 'UserShopping',
        component: UserShopping,
      },
      {
        path: 'vendas',
        name: 'UserSales',
        component: UserSales,
      },
      {
        path: 'edit',
        name: 'UserEdit',
        component: UserEdit,
      },
    ],
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  scrollBehavior() {
    return window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  },
});

router.beforeEach((to, from, next) => {
  // vai executar para toda rota que tiver o meta.login como true
  // if (to.matched.some(record => record.meta.login)) {
  //   if (token exist on local storage) {
  //     next();
  //   } else {
  //     next('/login');
  //   }
  // }
  next();
});

export default router;
