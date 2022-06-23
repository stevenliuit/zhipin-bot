/*
 * @Date: 2022-06-06 21:24:50
 * @LastEditors: lks
 * @LastEditTime: 2022-06-18 00:09:43
 * @FilePath: \electron_frame\src\view\src\router\index.ts
 */
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({ 
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: 'loading'
    },
    {
      path: '/loading',
      name: 'loading',
      component: ()=>import('..//views/Loading//index.vue')
    },
    {
      path: '/home',
      name: 'home',
      component: ()=>import('..//views/Index//index.vue')
    }
  ]
})

export default router
