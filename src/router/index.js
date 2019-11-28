import Vue from 'vue'
import VueRouter from 'vue-router'
import Bookrack from '../views/Bookrack'
import Category from '../views/Category'
import Rank from '../views/Rank'
import Search from '../views/Search'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'bookrack',
    component: Bookrack
  },
  {
    path: '/category',
    name: 'category',
    component: Category
  },
  {
    path: '/rank',
    name: 'rank',
    component: Rank
  },
  {
    path: '/search',
    name: 'search',
    component: Search
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router