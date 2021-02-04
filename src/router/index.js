import { createRouter, createWebHashHistory } from 'vue-router'

import routers from './assemble'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: import('../views/Home.vue')
  },
  {
    path: '/text',
    name: 'Text',
    component: import('../views/Text.vue')
  },
  {
    path: '/index',
    name: 'Index',
    component: () => import('../views/index.vue'),
    children: [...routers]
  }
]

console.log(routes)

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
