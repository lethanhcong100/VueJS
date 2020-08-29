import Vue from 'vue'
import Router from 'vue-router'
import BodyIndex from '@/components/BodyIndex'
import BodyItem from '@/components/BodyItem'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'BodyIndex',
      component: BodyIndex
    },
    {
      path: '/BodyItem',
      name: 'BodyItem',
      component: BodyItem
    }

  ]
})
