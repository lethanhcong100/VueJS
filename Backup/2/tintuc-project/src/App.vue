<template>
  <div id="app">
      <div id="wrapper">
        <!-- Header -->
        <Header/>

        <!-- Body -->
        <router-view/>

        <Footer/>

        <div class="dmtop" v-on:click="click()">Scroll to Top</div>
        
    </div><!-- end wrapper -->
    
  </div>
</template>

<script>


import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
export default {
  name: 'App',
  components:{
   
    Header,
    Footer
  },
  methods:{
    click(){
      jQuery('html, body').animate({scrollTop: '0px'}, 800);
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
