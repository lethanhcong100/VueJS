import Vue from 'vue'
import Router from 'vue-router'
import Contact from '@/components/Contact'
import News from '@/components/News'
Vue.use(Router)

export default new Router({
  routes: [
   
    {
      path: '/contact',
      name: 'Contact',
      component: Contact
    },
    {
      path: '/News',
      name: 'News',
      component: News
    }
  ]
})
