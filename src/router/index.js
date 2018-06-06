import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index'
import signin from '@/components/user/signin'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/todo',
      name: 'index',
      component: index
    },
    {
      path: '/',
      name: 'signin',
      component: signin
    }
  ]
})
