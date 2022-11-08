import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import Home from '@/views/home/Home.vue'

//特效
const Effects = () => import('@/views/effects/Effects.vue')
const LinearBall = () => import('@/views/effects/childCpms/LinearBall.vue')
const ColorfulBall = () => import('@/views/effects/childCpms/ColorfulBall.vue')

//游戏
const Game = () => import('@/views/game/Game.vue')
const Game1 = () => import('@/views/game/childCpms/Game1.vue')
const Game2 = () => import('@/views/game/childCpms/Game2.vue')
const Game3 = () => import('@/views/game/childCpms/Game3.vue')
const Game4 = () => import('@/views/game/childCpms/Game4.vue')
const Game5 = () => import('@/views/game/childCpms/Game5.vue')

const routes: Array<RouteRecordRaw> = [
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
      {
        path: 'game5',
        component: Game5,
        name: 'Game5'
      }
    ]
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
