import Vue from 'vue'
import VueRouter from 'vue-router'
import BookRack from '@/views/bookrack/BookRack/'
import Category from '@/views/category/Category'
import Rank from '@/views/rank/Rank'
import Search from '@/views/search/Search'
import Home from '@/views/home/Home'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
    children: [
      {
        path: 'bookrack',
        name: 'bookrack',
        component: BookRack,
        meta: {
          keepAlive: true
        },
      },
      {
        path: 'category',
        name: 'category',
        component: Category,
        meta: {
          keepAlive: true
        },
      },
      {
        path: 'rank',
        name: 'rank',
        component: Rank,
        meta: {
          keepAlive: true
        },
      },
      {
        path: 'search',
        name: 'search',
        component: Search,
        meta: {
          keepAlive: true
        },
      }
    ]
  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router