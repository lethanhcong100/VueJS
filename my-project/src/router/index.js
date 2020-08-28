import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/HelloWorld'
import Contact from '@/components/Contact'
import News from '@/components/News'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/contact',
      name: 'Contact',
      component: Contact
    },
    {
      path: '/news',
      name: 'News',
      component: News
    }
  ]
})