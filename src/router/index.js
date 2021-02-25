import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Order from '../views/Order.vue'
import Gallery from '../views/Gallery.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About
    // // route level code-splitting
    // // this generates a separate chunk (about.[hash].js) for this route
    // // which is lazy-loaded when the route is visited.
    // component: () =>
    //   import(/* webpackChunkName: "about" */ "../views/About.vue")
  },
  {
    path: '/order',
    name: 'Order',
    component: Order
  },
  {
    path: '/gallery',
    name: 'Gallery',
    component: Gallery
  }
]

const router = new VueRouter({
  routes
})

export default router
