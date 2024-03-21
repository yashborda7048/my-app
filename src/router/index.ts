import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import Layout from '../views/Layout.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/projects'
  },
  {
    path: '/',
    component: Layout,
    children: [
      {
        path: '',
        redirect: '/projects'
      },
      {
        path: 'projects',
        component: () => import('@/views/Projects.vue'),
        name: 'projects'
      },
      {
        path: 'chats',
        component: () => import('@/views/Chats.vue'),
        name: 'chats'
      },
      {
        path: 'settings',
        component: () => import('@/views/Settings.vue'),
        name: 'settings'
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
