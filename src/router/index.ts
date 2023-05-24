import { createRouter, createWebHistory } from 'vue-router'
import home from '../views/index.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/home',
      name: 'home',
      component: home
    }
  ]
})

export default router
