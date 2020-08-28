import Vue from 'vue'
import Vuex from 'vuex'
import ui from './modules/ui'
import weather from './modules/weather'
Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
    modules: {
        ui,
        weather
    },
    strict: debug
})
