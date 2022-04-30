import Vue from 'vue'
import VueRouter from 'vue-router'
import Main from "../views/main.vue"
import Edit from '../views/edit/categoriesEdit.vue'
import List from '../views/list/categoriesList.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'main',
    component: Main,
    children: [
      {
        path: '/categories/create',
        name: 'edit',
        component: Edit,
      },
      {
        path: '/categories/list',
        name: 'list',
        component: List,
      }
    ]
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
