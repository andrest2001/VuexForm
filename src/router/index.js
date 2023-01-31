import { createRouter, createWebHistory } from 'vue-router'
import formu from '../views/VistaFormu.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: formu
  },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
