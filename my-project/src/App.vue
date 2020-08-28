<template>
  <div id="app">
    <img src="./assets/logo.png">
  
    <!-- <router-view/> -->
    
    <HelloWorld/> 
    <News v-bind:msg="msg"></News>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import News from './components/News.vue'
export default {
  name: 'App',
   data () {
    return {
      msg: 'Hihi'
    }
  },
  components:{
    HelloWorld,
    News
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

</style>
