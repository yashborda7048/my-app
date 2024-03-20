import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import TabsPage from '../views/TabsPage.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/apps/projects'
  },
  {
    path: '/apps/',
    component: TabsPage,
    children: [
      {
        path: '',
        redirect: '/apps/projects'
      },
      {
        path: 'projects',
        component: () => import('@/views/Tab1Page.vue'),
        name: 'projects'
      },
      {
        path: 'chats',
        component: () => import('@/views/Tab2Page.vue'),
        name: 'chats'
      },
      {
        path: 'settings',
        component: () => import('@/views/Tab3Page.vue'),
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
