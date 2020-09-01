<template>
<div id="app">
   <div id="wrapper">
      <!-- Header -->
      <CompHeader/>
      <!-- Body -->
      <!-- View body item, body index, body category -->
      <router-view>
         <!-- For các tin tức ở Index qua slot BodyIndex -->
         <div v-for="post in posts" slot="BodyIndex">
            <router-link to="/BodyItem">
               <hr class="invis">
               <div class="blog-box row" >
                  <div class="col-md-4">
                     <div class="post-media" v-on:click="post.counter += 1">
                        <router-link to="/BodyItem">
                           <!-- <img src="./upload/tech_blog_01.jpg" alt="" class="img-fluid"> -->
                           <img v-bind:src="require('./upload/' + post.images)" />
                           <div class="hovereffect"></div>
                        </router-link>
                     </div>
                     <!-- end media -->
                  </div>
                  <!-- end col -->
                  <div class="blog-meta big-meta col-md-8">
                     <h4 v-on:click="post.counter += 1">
                        {{post.title }}
                     </h4>
                     <p>Aenean interdum arcu blandit, vehicula magna non, placerat elit. Mauris et
                        pharetratortor. Suspendissea sodales urna. In at augue elit. Vivamus enim
                        nibh, maximus ac felis nec, maximus tempor odio.
                     </p>
                     <small class="firstsmall"><a class="bg-orange" href="tech-category-01.html"
                        title="">Gadgets</a></small>
                     <small >
                     21 July, 2017
                     </small>
                     <small><a href="tech-author.html" title="">by Matilda</a></small>
                     <small v-if="post.counter > 0">            
                     <i class="fa fa-eye"></i>
                     {{post.counter}}        
                     </small>
                  </div>
                  <!-- end meta -->           
               </div>
               <!-- end blog-box -->
            </router-link>
         </div>

      
      </router-view>  
      <CompFooter/>
      <div class="dmtop" v-on:click="click()">Scroll to Top</div>
   </div>
   <!-- end wrapper -->
</div>
</template>

<script>


import CompHeader from './components/CompHeader.vue'
import CompFooter from './components/CompFooter.vue'
export default {
  name: 'App',
  data(){
    return {
       posts: [
      { id: 1, title: 'Giới thiệu về Vue',images:'tech_blog_01.jpg', counter:0},
      { id: 2, title: 'Các khái niệm trong Vue',images:'tech_blog_02.jpg',counter:0 },
      { id: 3, title: 'Vue căn bản và vô cùng nâng cao',images:'tech_blog_03.jpg',counter:0}
    ]
      }
  },
  components:{
    CompHeader,
    CompFooter
  },
  methods:{
    click(){
      jQuery('html, body').animate({scrollTop: '100px'}, 800);
        return false;
    }
  }
}
</script>


<style>

@import 'https://fonts.googleapis.com/css?family=Poppins:300,400,500,600,700';
@import 'css/bootstrap.css';
@import 'css/font-awesome.min.css';
@import 'style.css';
@import'css/responsive.css';
@import'css/colors.css';

@import'css/version/tech.css';
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
