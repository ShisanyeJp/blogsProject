import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Home from '@/views/home/Home.vue'


Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'home',
    // component: () => import('@/views/login.vue'),
    component:Home,
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/login.vue'),
    // redirect:'Home'
  },
  {
    path: '/regist',
    name: 'regist',
    component: () => import('@/views/regist.vue')
  },
  {
    path: '/home/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '@/views/home/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
