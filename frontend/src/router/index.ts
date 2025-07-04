import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  { path: '/', redirect: '/agents/view' },
  {
    path: '/agents/view',
    name: 'ViewAgents',
    component: () => import('../views/ViewAgents.vue')
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
