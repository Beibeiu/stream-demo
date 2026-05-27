/*
 * @Description:
 * @Author: Bei
 * @Date: 2026-05-26 13:39:22
 * @LastEditTime: 2026-05-26 13:42:00
 * @LastEditors: Bei
 */
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'stream',
      component: () => import('../views/stream/index.vue'),
    },
    {
      path: '/stream',
      name: 'stream',
      component: () => import('../views/stream/index.vue'),
    },
  ],
})

export default router
