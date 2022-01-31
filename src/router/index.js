import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/pages/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  }
]

const router = createRouter({
  // This is how you name the active classs to style. The default class name is router-link-active
  linkActiveClass: 'active-link',
  history: createWebHistory(),
  routes
})

export default router
