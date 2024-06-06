import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Recipes from '../views/Recipes.vue'
import RecipeDetail from '../views/RecipeDetail.vue'
import AddRecipe from '../views/AddRecipe.vue'
import EditRecipe from '../views/EditRecipe.vue'
import Login from '../views/Login.vue'
import Signup from '../views/Signup.vue'
import UserProfile from '../views/UserProfile.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/recipes',
    name: 'Recipes',
    component: Recipes
  },
  {
    path: '/recipes/:id',
    name: 'RecipeDetail',
    component: RecipeDetail
  },
  {
    path: '/add-recipe',
    name: 'AddRecipe',
    component: AddRecipe
  },
  {
    path: '/edit-recipe/:id',
    name: 'EditRecipe',
    component: EditRecipe
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/signup',
    name: 'Signup',
    component: Signup
  },
  {
    path: '/profile',
    name: 'UserProfile',
    component: UserProfile
  },
  {
    path: '/contact',
    name: 'Contact',
    component: { template: '<div>Contact Page</div>' } // Dummy component
  },
  {
    path: '/legal',
    name: 'Legal',
    component: { template: '<div>Legal Page</div>' } // Dummy component
  },
  {
    path: '/social',
    name: 'Social',
    component: { template: '<div>Social Page</div>' } // Dummy component
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
