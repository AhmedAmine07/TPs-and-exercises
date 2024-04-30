import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import JobDetails from '../views/JobDetails.vue';
import EditJob from '../views/EditJob.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/AddJOb',
    name: 'AddJOb',
    component: () => import('../views/AddJob.vue')
  },
  {
    path: '/job/:id',
    name: 'jobDetails',
    component: JobDetails
  },
  {
    path: '/edit-job/:id',
    name: 'editJob',
    component: EditJob
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
