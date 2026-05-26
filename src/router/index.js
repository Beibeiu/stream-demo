/*
 * @Description:
 * @Author: Bei
 * @Date: 2026-05-26 13:39:22
 * @LastEditTime: 2026-05-26 13:42:00
 * @LastEditors: Bei
 */
import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue'),
    },
    {
      path: '/stream',
      name: 'stream',
      component: () => import('../views/stream/index.vue'),
    },
  ],
})

export default router
