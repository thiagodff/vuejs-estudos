import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../views/Home.vue'
import Contact from '../views/Contact.vue'
import Courses from '../views/Courses.vue'
import Course from '../views/Course.vue'
import Class from '../views/Class.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/contato',
    name: 'Contact',
    component: Contact
  },
  {
    path: '/cursos',
    name: 'Courses',
    component: Courses
  },
  {
    path: '/cursos/:curso',
    name: 'Curso',
    component: Course,
    props: true,
    children: [
      {
        path: ':aula',
        name: 'Class',
        component: Class,
        props: true,
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
