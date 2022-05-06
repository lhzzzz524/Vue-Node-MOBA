import Vue from 'vue'
import VueRouter from 'vue-router'
import Main from "../views/main.vue"
import Edit from '../views/edit/categoriesEdit.vue'
import List from '../views/list/categoriesList.vue'

import ItemsEdit from '../views/goods/edit.vue'
import ItemsList from '../views/goods/list.vue'

import HerosEdit from '../views/heros/edit.vue'
import HerosList from '../views/heros/list.vue'

import ArticleEdit from '../views/article/edit.vue'
import ArticleList from '../views/article/list.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'main',
    component: Main,
    children: [
      {
        path: '/categories/create',
        name: 'create',
        component: Edit,
      },
      {
        path: '/categories/list',
        name: 'list',
        component: List,
      },
      {
        path: '/categories/edit/:id',
        name: 'edit',
        component: Edit,
        props: true
      },
      {
        path: '/items/create',
        name: 'itemsCreate',
        component: ItemsEdit,
      },
      {
        path: '/items/list',
        name: 'itemsList',
        component: ItemsList
      },
      {
        path: '/items/edit/:id',
        name: 'itemsEdit',
        component: ItemsEdit,
        props: true
      },
      {
        path: '/heros/create',
        name: 'herosCreate',
        component: HerosEdit,
      },
      {
        path: '/heros/list',
        name: 'herosList',
        component: HerosList
      },
      {
        path: '/heros/edit/:id',
        name: 'herosEdit',
        component: HerosEdit,
        props: true
      },
      {
        path: '/article/create',
        name: 'articleCreate',
        component: ArticleEdit,
      },
      {
        path: '/article/list',
        name: 'articleList',
        component: ArticleList
      },
      {
        path: '/article/edit/:id',
        name: 'articleEdit',
        component: ArticleEdit,
        props: true
      },
    ]
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
