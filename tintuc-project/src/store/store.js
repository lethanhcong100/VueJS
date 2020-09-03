import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
Vue.use(Vuex)

export const store = new Vuex.Store({

    state: {

        users: [],
        posts: [
            { id: 1, title: 'Giới thiệu về Vue', images: 'tech_blog_01.jpg', counter: 0 },
            { id: 2, title: 'Các khái niệm trong Vue', images: 'tech_blog_02.jpg', counter: 0 },
            { id: 3, title: 'Vue căn bản và vô cùng nâng cao', images: 'tech_blog_03.jpg', counter: 0 }
        ]
    },
    mutations: {
        FETCH_USERS(state, users) {
            state.users = users;
        }
    },
    actions:
    {
        fetchUsers() {
            axios.get('http://newsapi.org/v2/everything?' +
                'q=Apple&' +
                'from=2020-09-02&' +
                'sortBy=popularity&' +
                'apiKey=144b85025f184bad9bced80389f64bff')
                .then(response => {
                    store.commit('FETCH_USERS', response.data.articles);
                })
                .catch(e => {

                })
        }
    }

})