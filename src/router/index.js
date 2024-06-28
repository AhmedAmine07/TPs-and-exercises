import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Login.vue';
import Register from '../views/Registration.vue';
import Dashboard from '../views/Dashboard.vue';
import EventDetail from '../views/EventDetail.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
  },
  {
    path: '/register',
    name: 'register',
    component: Register,
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    component: Dashboard,
  },
  {
    path: '/event/:eventId',
    name: 'eventDetail',
    component: EventDetail,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
