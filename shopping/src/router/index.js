import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/login/Login.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/login',
    name: 'Home',
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },

  {
    path: '/mine',
    name: 'Mine',
    component: () => import('../views/mine/Mine.vue')
  },
  {
    path: '/sell',
    name: 'sell',
    component: () => import('../views/sell/Sell.vue')
  },
  {
    path: '/shopping',
    name: 'Shopping',
    component: () => import('../views/shopping/Shopping.vue')
  },
  {
    path: '/shoppingapp',
    name: 'Shoppingapp',
    redirect: '/purchase',
    component: () => import('../views/ShoppingApp.vue'),
    children: [{
      path: '/purchase',
      name: 'Purchase',
      component: () => import('../views/purchase/Purchase.vue')
    },]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})
router.beforeEach((to, from, next) => {
  // to 要去的
  // from 在哪来
  // next 运行函数
  if (to.path == '/login')
    return next()
  if (!window.sessionStorage.getItem('token')) {
    next('/login')
  } else {
    next()
  }
})

export default router
