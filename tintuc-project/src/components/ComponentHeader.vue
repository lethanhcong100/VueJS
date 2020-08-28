<template>
  <div class="hello">
  
    <h2>Header</h2>
    <router-link to="/contact">Contact</router-link>
    <router-link to="/News">News</router-link>
    <!-- <h3> <router-view/> </h3> -->
  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App Contact'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

a {
  color: #42b983;
}
</style>