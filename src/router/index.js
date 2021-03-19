import Vue from 'vue'
import VueRouter from 'vue-router'
const Home = () => import('@/views/home/Home')
const Game1 = () => import('@/views/game1/Game1')
const Game2 = () => import('@/views/game2/Game2')
const Game3 = () => import('@/views/game3/Game3')
const Game4 = () => import('@/views/game4/Game4')

Vue.use(VueRouter)

const routes = [
  {
    path: '',
    redirect: '/home'
  },
  {
    path: '/home',
    component: Home
  },
  {
    path: '/game1',
    component: Game1
  },
  {
    path: '/game2',
    component: Game2
  },
  {
    path: '/game3',
    component: Game3
  },
  {
    path: '/game4',
    component: Game4
  },
]

const router = new VueRouter({
  routes
})

export default router
