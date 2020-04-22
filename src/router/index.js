import Vue from 'vue'
import VueRouter from 'vue-router'
import { ROUTES } from '@/constants'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: ROUTES.HOME.path,
    name: ROUTES.HOME.name,
    component: Home
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
