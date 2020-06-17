import Vue from 'vue';
import Router from 'vue-router';

import Home from './views/Home.vue';
import Courses from './views/Courses.vue';
import Course from './views/Course.vue';
import Class from './views/Class.vue';
import Stocks from './views/Stocks.vue';

// Lazzy load
const DataStocks = () => 
  import(/* webpackChunkName: "DadosAcao" */'./views/DataStocks.vue');
  // todos os imports com mesmo webpackChunkName serao carregados juntos em um arquivo

Vue.use(Router);

export default new Router({
  mode: "history",
  // base: "app", // acrescenta /app/ em todas as rotas abaixo
  base: process.env.BASE_URL, // padrao vem como "/"
  routes: [
    {
      path: "/",
      component: Home,
    },
    {
      path: "*",
      redirect: "/"
    },
    {
      path: "/acoes",
      component: Stocks,
      children: [
        {
          path: ":simbolo",
          component: DataStocks,
          props: true,
        }
      ]
    },
    {
      path: "/cursos",
      component: Courses,
      props: true,
      // beforeEnter: (to, from) => {
      //   // executa antes da rota '/cursos' ser montada
      // },
      children: [
        {
          name: "curso",
          path: ":curso",
          component: Course,
          props: true,
          children: [
            {
              name: "aulas",
              path: "aulas",
              component: Class,

            }
          ]
        }    
      ]
    },
  ],
  // scrollBehavior(to, from, savedPosition) {
  //   // retorna o usuário para essa posição da página quando ele realizar alguma navegação
  //   return {
  //     x: 0,
  //     y: 0,
  //   }
  // }
});
