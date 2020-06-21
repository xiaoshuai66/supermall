import Vue from 'vue'
import VueRouter from 'vue-router'

const Home = () => import('views//home/Home.vue');
const Category = () => import('../views/category/Category.vue');
const Cart = () => import('../views/cart/Cart.vue');
const Profile = () => import('../views/profile/Profile.vue');
const Detail = () => import('../views/detail/Detail.vue');

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    component: Home
  },
  {
    path: '/home',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Home
  },
  {
    path: '/category',
    component: Category
  },
  {
    path: '/cart',
    component: Cart
  },
  {
    path: '/profile',
    component: Profile
  },
  {
    path: '/detail/:id',
    component: Detail
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
