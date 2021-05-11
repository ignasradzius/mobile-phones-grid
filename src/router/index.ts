import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Phones from '@/views/phones/Index.vue'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Phones',
    component: Phones
  },
  {
    path: '/phones/:id',
    name: 'Brand',
    component: () => import(/* webpackChunkName: "Brand" */ '@/views/phones/Brand.vue'),
    props: true
  },
  {
    path: '*',
    name: 'NotFound',
    component: () => import(/* webpackChunkName: "Error" */ '@/views/NotFound.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
