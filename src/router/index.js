import Vue from 'vue'
import VueRouter from 'vue-router'
//主页
const Home = () => import('@/views/home/Home')

//特效
const Effects = () => import('@/views/effects/Effects')
const LinearBall = () => import('@/views/effects/childCpms/LinearBall')
const ColorfulBall = () => import('@/views/effects/childCpms/ColorfulBall')

//游戏
const Game = () => import('@/views/game/Game')
const Game1 = () => import('@/views/game/childCpms/Game1')
const Game2 = () => import('@/views/game/childCpms/Game2')
const Game3 = () => import('@/views/game/childCpms/Game3')
const Game4 = () => import('@/views/game/childCpms/Game4')

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
    path: '/effects',
    component: Effects,
    children: [
      {
        path: 'linearBall',
        component: LinearBall,
        name: 'LinearBall'
      },
      {
        path: 'colorfulBall',
        component: ColorfulBall,
        name: 'ColorfulBall'
      },
      {
        path: 'colorfulBall',
        component: ColorfulBall,
        name: 'ColorfulBall'
      },
    ]
  },
  {
    path: '/game',
    component: Game,
    children: [
      {
        path: 'game1',
        component: Game1,
        name: 'Game1'
      },
      {
        path: 'game2',
        component: Game2,
        name: 'Game2'
      },
      {
        path: 'game3',
        component: Game3,
        name: 'Game3'
      },
      {
        path: 'game4',
        component: Game4,
        name: 'Game4'
      },
    ]
  },

]

const router = new VueRouter({
  routes
})

export default router
