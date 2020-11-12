import Vue from 'vue'
import Router from 'vue-router'
import Yonghgl from './views/Yonghgl.vue'
import Denglv from './views/Denglv.vue'
import Juesgl from './views/Juesgl.vue'
import Quanxgl from './views/Quanxgl.vue'
import Fangwxx from './views/Fangwxx.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Denglv',
      component: () => import( './views/Denglv.vue')
    },
    {
      path: '/Shou',
      component: () => import( './views/Shou.vue')
    },
    {
      path:'/Yonghgl',
      component: () => import('./views/Yonghgl.vue')
    },
    {
      path:'/Juesgl',
      component: () => import('./views/Juesgl.vue')
    },
    {
      path:'/Quanxgl',
      component: () => import('./views/Quanxgl.vue')
    },
    {
      path:'/Fangwxx',
      component: () => import('./views/Fangwxx.vue')
    }
  ]
})
