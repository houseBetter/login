<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <router-view/>
  </div>
</template>

<script>

export default {
  name: 'App',
  beforeMount(){
    // console.log(this.$el)
  },
  mounted(){
    // console.log(this.$el)
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
  /* margin-top: 60px; */
  margin:0px;
  padding:0px;
  width:100%;
  /* height:700px; */
  height:100%;


}
</style>
