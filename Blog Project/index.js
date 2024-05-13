import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import CreatPostView from '../views/CreatPostView.vue'
import PostDetailView from '../views/PostDetailView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  
  {
    path: '/CreatPostView',
    name: 'CreatPostView',
    component: CreatPostView
  },
  {
    path: '/PostDetailView/:id',
    name: 'PostDetailView',
    component: PostDetailView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
