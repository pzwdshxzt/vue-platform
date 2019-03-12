import Vue from 'vue'
import Router from 'vue-router'
import Index from "./views/Index";
import Category from "./views/Category"
import Me from "./views/Me"
import ShoppingCar from "./views/ShoppingCar"

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Index
    },
    {
      path: '/category',
      name: 'category',
      component: Category
    },
    {
        path: '/me',
        name: 'me',
        component: Me
    },
    {
        path: '/shoppingCar',
        name: 'shoppingCar',
        component: ShoppingCar
    }
  ]
})
