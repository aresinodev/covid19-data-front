import Vue from 'vue'
import VueRouter from 'vue-router'
import { ROUTES } from '@/constants'

Vue.use(VueRouter)

const routes = [
  {
    path: ROUTES.HOME.path,
    name: ROUTES.HOME.name,
    component: () => import('@/views/home')
  },
  {
    path: ROUTES.COUNTRY_DETAIL.path,
    name: ROUTES.COUNTRY_DETAIL.name,
    component: () => import('@/views/country-detail')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
