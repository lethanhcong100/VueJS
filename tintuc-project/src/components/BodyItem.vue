<template>
<div>
   <section class="section single-wrapper">
      <div class="container">
         <div class="row">
            <div class="col-lg-9 col-md-12 col-sm-12 col-xs-12">
               <div class="page-wrapper">
                  <div class="blog-title-area text-center">
                     <ol class="breadcrumb hidden-xs-down">
                        <li class="breadcrumb-item"><a href="#">Home</a></li>
                        <li class="breadcrumb-item"><a href="#">Blog</a></li>
                        <li class="breadcrumb-item active">Top 10 phone applications and 2017 mobile design awards</li>
                     </ol>
                     <span class="color-orange"><a href="tech-category-01.html" title="">Technology</a></span>
                     <h3>Top 10 phone applications and 2017 mobile design awards</h3>
                     <div class="blog-meta big-meta">
                        <small><a href="tech-single.html" title="">21 July, 2017</a></small>
                        <small><a href="tech-author.html" title="">by Jessica</a></small>
                        <small><a href="#" title=""><i class="fa fa-eye"></i> 2344</a></small>
                     </div>
                     <!-- end meta -->
                     <div class="post-sharing">
                        <ul class="list-inline">
                           <li><a href="#" class="fb-button btn btn-primary"><i class="fa fa-facebook"></i> <span class="down-mobile">Share on Facebook</span></a></li>
                           <li><a href="#" class="tw-button btn btn-primary"><i class="fa fa-twitter"></i> <span class="down-mobile">Tweet on Twitter</span></a></li>
                           <li><a href="#" class="gp-button btn btn-primary"><i class="fa fa-google-plus"></i></a></li>
                        </ul>
                     </div>
                     <!-- end post-sharing -->
                  </div>
                  <!-- end title -->
                  <img src="../upload/tech_menu_08.jpg" alt="" width="745">
                  <div class="blog-content">
                     <div class="pp">
                        <p>In lobortis pharetra mattis. Morbi nec nibh iaculis, <a href="#">bibendum augue a</a>, ultrices nulla. Nunc velit ante, lacinia id tincidunt eget, faucibus nec nisl. In mauris purus, bibendum et gravida dignissim, venenatis commodo lacus. Duis consectetur quis nisi nec accumsan. Pellentesque enim velit, ut tempor turpis. Mauris felis neque, egestas in lobortis et,iaculis at nunc ac, rhoncus sagittis ipsum. </p>
                        <p>Donec nec metus sed leo sollicitudin ornare sed consequat neque. Aliquam iaculis neque quis dui venenatis, eget posuere felis viverra. Ut sit amet feugiat elit, nec elementum velit. Sed eu nisl convallis, efficitur turpis eu, euismod nunc. Proin neque enim, malesuada non lobortis nec, facilisis et lectus. Ie consectetur. Nam eget neque ac ex fringilla dignissim eu ac est. Nunc et nisl vel odio posuere. </p>
                        <p>Vivamus non condimentum orci. Pellentesque venenatis nibh sit amet est vehicula lobortis. Cras eget aliquet eros. Nunc lectus elit, suscipit at nunc sed, finibus imperdiet ipsum. Maecenas dapibus neque sodales nulla finibus volutpat. Integer pulvinar massa vitae ultrices posuere. Proin ut tempor turpis. Mauris felis neque, egestas in lobortis et, sodales non ante. Ut vestibulum libero quis luctus tempus. Nullam eget dignissim massa. Vivamus id condimentum orci. Nunc ac sem urna. Aliquam et hendrerit nisl massa nunc. </p>
                     </div>
                     <!-- end pp -->
                     <img src="../upload/tech_menu_09.jpg" width="745" alt="" >
                     <div class="pp">
                        <p>Vivamus non condimentum orci. Pellentesque venenatis nibh sit amet est vehicula lobortis. Cras eget aliquet eros. Nunc lectus elit, suscipit at nunc sed, finibus imperdiet ipsum. Maecenas dapibus neque sodales nulla finibus volutpat. Integer pulvinar massa vitae ultrices posuere. Proin ut tempor turpis. Mauris felis neque, egestas in lobortis et, sodales non ante. Ut vestibulum libero quis luctus tempus. Nullam eget dignissim massa. Vivamus id condimentum orci. Nunc ac sem urna. Aliquam et hendrerit nisl massa nunc. </p>
                        <p>Vivamus non condimentum orci. Pellentesque venenatis nibh sit amet est vehicula lobortis. Cras eget aliquet eros. Nunc lectus elit, suscipit at nunc sed, finibus imperdiet ipsum. Maecenas dapibus neque sodales nulla finibus volutpat. Integer pulvinar massa vitae ultrices posuere. Proin ut tempor turpis. Mauris felis neque, egestas in lobortis et, sodales non ante. Ut vestibulum libero quis luctus tempus. Nullam eget dignissim massa. Vivamus id condimentum orci. Nunc ac sem urna. Aliquam et hendrerit nisl massa nunc. </p>
                     </div>
                     <!-- end pp -->
                  </div>
                  <!-- end content -->
                  <!-- Bắt đầu phần comment -->
                  <CompComment/>
               </div>
               <!-- end page-wrapper -->
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
import CompComment from './CompComment.vue'
export default {
  name: 'Item',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App Contact'
    }
  },
  components:{
      BannerRight,
      CompComment
  },
  created(){
       jQuery('html, body').animate({scrollTop: '100px'}, 0);
        return false;
  }
}
</script>

<style>

</style>