import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import tomorrowView from '../views/tomorrowView.vue'


// 購入ページの読み込み

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/tomorrowView',
    name: 'tomorrowView',
    component: tomorrowView
  },
  
 



]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router