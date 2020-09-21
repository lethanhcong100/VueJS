import Vue from 'vue'
import Router from 'vue-router'
import BodyIndex from '@/components/BodyIndex'
import BodyItem from '@/components/BodyItem'
import BodyCategory from '@/components/BodyCategory'
Vue.use(Router)

export default new Router({
   routes: [
    {
      path: '/',
      name: 'BodyIndex',
      component: BodyIndex
    },
    {
      path: '/BodyItem/:id',
      name: 'BodyItem',
      component: BodyItem,
      props: true
    },
    {
      path: '/BodyCategory',
      name: 'BodyCategory',
      component: BodyCategory
    }

  ]
})
