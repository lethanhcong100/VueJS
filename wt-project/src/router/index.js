import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/components/Main'
import AddCity from '@/components/AddCity'
import Detail from '@/components/Detail'
Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [{
            path: '/',
            name: 'Main',
            component: Main
        },
        {
            path:'/addcity',
            name:'AddCity',
            component:AddCity
        },
        {
            path:'/detail/:city',
            name:'Detail',
            component:Detail
        }
    ]
})
