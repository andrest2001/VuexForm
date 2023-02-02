import { createRouter, createWebHistory } from 'vue-router'
import formu from '../views/VistaFormu.vue'
import tabla from '../views/VistaDatos.vue'
const routes = [
  {
    path: '/',
    name: 'home',
    component: formu
  },
  {
    path:'/datos',
    name:'datos',
    component:tabla
  }

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
