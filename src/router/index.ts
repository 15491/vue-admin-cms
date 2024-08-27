import { createRouter, createWebHistory } from 'vue-router'
import { SyncRoutes, staticRoutes } from './routes'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [...SyncRoutes, ...staticRoutes]
})

export default router
