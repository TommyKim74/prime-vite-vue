import { createRouter, createWebHistory } from 'vue-router';
import StatusView from '@/views/StatusView.vue';
import PerformanceView from '@/views/PerformanceView.vue';
import EventsView from '@/views/EventsView.vue';
import HistoryView from '@/views/HistoryView.vue';
import PredictionView from '@/views/PredictionView.vue';

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
    {
      path: '/performance',
      name: 'performance',
      component: PerformanceView,
    },
    {
      path: '/event',
      name: 'event',
      component: EventsView,
    },
    {
      path: '/history',
      name: 'history',
      component: HistoryView,
    },
    {
      path: '/prediction',
      name: 'prediction',
      component: PredictionView,
    },
  ],
});

export default router;
