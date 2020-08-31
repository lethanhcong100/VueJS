<template>
  <div id="app">
      <div id="wrapper">
        <!-- Header -->
        <CompHeader/>

        <!-- Body -->
        <router-view/>

        <CompFooter/>

        <div class="dmtop" v-on:click="click()">Scroll to Top</div>
        
    </div><!-- end wrapper -->
    
  </div>
</template>

<script>


import CompHeader from './components/CompHeader.vue'
import CompFooter from './components/CompFooter.vue'
export default {
  name: 'App',
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
