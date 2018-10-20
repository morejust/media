import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Analyze from './views/Analyze.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/analyze',
      name: 'analyze',
      component: Analyze
    },
    {
      path: '/read',
      name: 'read',
      props: ({ query }) => ({ url: query.url }),
      component: () => import(/* webpackChunkName: "readmode" */ './views/ReadMode.vue')
    }
  ]
})
