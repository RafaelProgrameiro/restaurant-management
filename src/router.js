import Home from './views/Home.vue'
import Login from './views/Login.vue'
import SignUp from './views/SignUp.vue'
import AddRestaurant from './views/AddRestaurant.vue'
import UpdateRestaurant from './views/UpdateRestaurant.vue'
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/signup',
    name: 'signup',
    component: SignUp
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/add-restaurant',
    name: 'addRestaurant',
    component: AddRestaurant
  },
  {
    path: '/update-restaurant',
    name: 'updateRestaurant',
    component: UpdateRestaurant
  }
]

const router = createRouter ({
  history: createWebHistory(),
  routes
})

export default router