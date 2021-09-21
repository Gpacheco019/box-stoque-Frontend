import Vue from 'vue'
import VueRouter from 'vue-router'

import Category from '../views/Category.vue'
import categoria from '../views/categoria.vue'


Vue.use(VueRouter);


const routes = [
  {
    path: '/categorias',
    name: 'Category',
    component: Category    
  },
  {
    path: '/categoriasb',
    name: 'Categoriab',
    component: categoria    
  },
]

const router = new VueRouter({
  routes,
  mode: 'history'
})


export default router;
