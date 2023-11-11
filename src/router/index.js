import { createRouter, createWebHistory } from 'vue-router';
import StatusView from '@/views/StatusView.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: () => import('@/layouts/DefaultLayout.vue'),
      children: [
        //dashboard
        { path: '', component: () => import('@/views/dash/Test.vue') },
      ],
    },
    {
      path: '/status',
      name: 'status',
      component: StatusView,
    },
  ],
});

export default router;
