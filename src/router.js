import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/read',
      name: 'read',
      props: ({ query }) => ({ url: query.url }),
      component: () => import(/* webpackChunkName: "readmode" */ './views/ReadMode.vue'),
    },
  ]
})
