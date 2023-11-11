import { createRouter, createWebHistory } from 'vue-router';
import AboutView from '@/views/AboutView.vue';

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
      path: '/about',
      name: 'about',
      component: AboutView,
    },
  ],
});

export default router;
