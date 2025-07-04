import { createRouter, createWebHistory } from 'vue-router';
import ViewAgents from '../views/ViewAgents.vue';
import AddAgent from '../views/AddAgent.vue';
import UpdateAgent from '../views/UpdateAgent.vue';
import DeleteAgent from '../views/DeleteAgent.vue';

const routes = [
  { path: '/', redirect: '/agents/view' },
  {
    path: '/agents/view',
    name: 'ViewAgents',
    component: () => import('../views/ViewAgents.vue')
  },
  { path: '/agents/add', name: 'AddAgent', component: AddAgent },
  { path: '/agents/update', name: 'UpdateAgent', component: UpdateAgent },
  { path: '/agents/delete', name: 'DeleteAgent', component: DeleteAgent }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
