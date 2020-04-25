import Vue from 'vue'
import VueRouter from 'vue-router'

import LoginForm from '../components/LoginForm.vue'
import AgentRegistrationForm from '../components/AgentRegistrationForm'

Vue.use(VueRouter);

const routes = [
  {
    path: '/LoginForm',
    name: 'login-form',
    component: LoginForm
  }, 
  {
    path: '/AgentRegirstrationForm',
    name: 'agent-registration',
    component: AgentRegistrationForm
  }
]

const router = new VueRouter({
  
    routes
  
})

export default router