<template>
  <div id="app">
    <label id='title'>动车组在线智能检测系统</label>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style scoped>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  color: #2c3e50;
}
#title{
  margin-left: 20px;
  margin-bottom: 10px;
  position: relative;
}
</style>
