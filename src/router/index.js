import Vue from 'vue'
import VueRouter from 'vue-router'
import BookRack from '@/views/bookrack/BookRack/'
import Category from '@/views/category/Category'
import Rank from '@/views/rank/Rank'
import Search from '@/views/search/Search'
import BookInfo from '@/components/BookInfo'
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
  },
  {
    path:'/book/:bookId',
    name:'book',
    component:BookInfo,
    meta:{
      keepAlive:false
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router