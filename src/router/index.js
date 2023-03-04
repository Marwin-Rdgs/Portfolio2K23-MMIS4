import { createRouter, createWebHistory } from 'vue-router'

import HomeView from '../pages/HomeView.vue'

import ProjetsView from '../pages/ProjetsView.vue'
import VeillesView from '../pages/VeillesView.vue'

import LoginView from '../pages/Accounts/LoginView.vue'
import SignView from '../pages/Accounts/SignView.vue'
import AdminView from '../pages/Accounts/AdminView.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {path: '/', name: 'home', component: HomeView},  
    {path: '/projets', name: 'projets', component: ProjetsView},  
    {path: '/veilles', name: 'veilles', component: VeillesView},  

    // Account
    {path: '/login', name: 'LoginView', component: LoginView},  
    {path: '/sign', name: 'SignView', component: SignView},  
    {path: '/admin', name: 'AdminView', component: AdminView},  
  ]
})

export default router
