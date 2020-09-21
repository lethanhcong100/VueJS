<template>
<div id="app">
   <div id="wrapper">
      <!-- Header -->
      <CompHeader/>
      <!-- Body -->
      <!-- View body item, body index, body category -->
      <BodyIndex  v-if="this.$route.name == 'BodyIndex'"   />
      <BodyItem  v-if="this.$route.name == 'BodyItem'" />
      <BodyCategory  v-if="this.$route.name == 'BodyCategory'" />
       
      <CompFooter/>
      
   </div>
   <!-- end wrapper -->
</div>
</template>

<script>


import CompHeader from './components/CompHeader.vue'
import CompFooter from './components/CompFooter.vue'
import BodyIndex from './components/BodyIndex.vue'
import BodyItem from './components/BodyItem.vue'
import BodyCategory from './components/BodyCategory.vue'
export default {
  name: 'App',
  data(){
    return {
     
    msg:"App"
      }
  },
  components:{
    CompHeader,
    CompFooter,
    BodyIndex,
    BodyItem,
    BodyCategory
  },
 
 
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
