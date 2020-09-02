<template>
<div>
   <section class="section first-section">
      <div class="container-fluid">
         <div class="masonry-blog clearfix">
            <div class="first-slot">
               <div class="masonry-box post-media">
                  <img src="../upload/tech_01.jpg" alt="" height="400">
                  <div class="shadoweffect">
                     <div class="shadow-desc">
                        <div class="blog-meta">
                           <h4>
                              <router-link to="/BodyItem">Say hello to real handmade office
                                 furniture! Clean & beautiful design
                              </router-link>
                           </h4>
                           <small>
                              <router-link to="/BodyItem">24 July, 2017</router-link>
                           </small>
                           <small><a href="tech-author.html" title="">by Amanda</a></small>
                        </div>
                        <!-- end meta -->
                     </div>
                     <!-- end shadow-desc -->
                  </div>
                  <!-- end shadow -->
               </div>
               <!-- end post-media -->
            </div>
            <!-- end first-side -->
            <div class="second-slot">
               <div class="masonry-box post-media">
                  <img src="../upload/tech_02.jpg" alt="" height="400">
                  <div class="shadoweffect">
                     <div class="shadow-desc">
                        <div class="blog-meta">
                           <span class="bg-orange"><a href="tech-category-01.html"
                              title="">Gadgets</a></span>
                           <h4>
                              <router-link to="/BodyItem">Do not make mistakes when choosing web
                                 hosting
                              </router-link>
                           </h4>
                           <small>
                              <router-link to="/BodyItem">03 July, 2017</router-link>
                           </small>
                           <small><a href="tech-author.html" title="">by Jessica</a></small>
                        </div>
                        <!-- end meta -->
                     </div>
                     <!-- end shadow-desc -->
                  </div>
                  <!-- end shadow -->
               </div>
               <!-- end post-media -->
            </div>
            <!-- end second-side -->
            <div class="last-slot">
               <div class="masonry-box post-media">
                  <img src="../upload/tech_03.jpg" alt="" height="400">
                  <div class="shadoweffect">
                     <div class="shadow-desc">
                        <div class="blog-meta">
                           <span class="bg-orange"><a href="tech-category-01.html"
                              title="">Technology</a></span>
                           <h4>
                              <router-link to="/BodyItem">The most reliable Galaxy Note 8 images
                                 leaked
                              </router-link>
                           </h4>
                           <small>
                              <router-link to="/BodyItem">01 July, 2017</router-link>
                           </small>
                           <small><a href="tech-author.html" title="">by Jessica</a></small>
                        </div>
                        <!-- end meta -->
                     </div>
                     <!-- end shadow-desc -->
                  </div>
                  <!-- end shadow -->
               </div>
               <!-- end post-media -->
            </div>
            <!-- end second-side -->
         </div>
         <!-- end masonry -->
      </div>
   </section>
   <section class="section">
      <div class="container">
         <div class="row">
            <div class="col-lg-9 col-md-12 col-sm-12 col-xs-12">
               <div class="page-wrapper">
                  <div class="blog-top clearfix">
                     <h4 class="pull-left">Recent News <a href="#"><i class="fa fa-rss"></i></a></h4>
                  </div>
                  <!-- end blog-top -->
                  <div class="blog-list clearfix">
                     <!-- For các tin tức array posts từ App.vue props qua-->
                     <div v-for="post in posts" v-bind:key="post.id" >
                        <router-link :to="{name: 'BodyItem', params: { id: post.id } }">
                           <hr class="invis">
                           <div class="blog-box row" >
                              <div class="col-md-4">
                                 <div class="post-media" v-on:click="post.counter += 1">
                                    <img v-bind:src="require('../upload/' + post.images)" class="img-fluid"/>
                                    <div class="hovereffect"></div>
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
                  </div>
                  <!-- end blog-list -->
               </div>
               <!-- end page-wrapper -->
               <hr class="invis">
               <div class="row">
                  <div class="col-md-12">
                     <nav aria-label="Page navigation">
                        <ul class="pagination justify-content-start">
                           <li class="page-item"><a class="page-link" href="#">1</a></li>
                           <li class="page-item"><a class="page-link" href="#">2</a></li>
                           <li class="page-item"><a class="page-link" href="#">3</a></li>
                           <li class="page-item">
                              <a class="page-link" href="#">Next</a>
                           </li>
                        </ul>
                     </nav>
                  </div>
                  <!-- end col -->
               </div>
               <!-- end row -->
            </div>
            <!-- end col -->
            <BannerRight/>
         </div>
         <!-- end row -->
      </div>
      <!-- end container -->
   </section>
</div>
</template>

<script>
import BannerRight from './BannerRight.vue'
export default {
  name: 'Index',
 
  data () {
    return {
      msg: 'Welcome to Your Vue.js App Contact',
    }
  },

  computed:{
     posts(){
        
        // Khi load sẽ lấy data trong store ra để for lặp các bài viết index
        return this.$store.state.posts;
     } 
  },
  components:{
      BannerRight
  },
 
}
</script>

<style>

</style>