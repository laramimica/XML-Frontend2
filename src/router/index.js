import Vue from 'vue'
import VueRouter from 'vue-router'

import LoginForm from '../components/LoginForm.vue'

Vue.use(VueRouter);

const routes = [
  {
    path: '/LoginForm',
    name: 'login-form',
    component: LoginForm
  }
]

const router = new VueRouter({
  
    routes
  
})

export default router