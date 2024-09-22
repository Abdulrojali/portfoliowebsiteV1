import { createRouter, createWebHistory } from 'vue-router'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: ()=>import("@/views/landingpage.vue")
    },
    {
      path: '/porto',
      name: 'porto',
      component: ()=>import("@/views/portfolio.vue")
    },
  ]
})

export default router
