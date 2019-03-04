<template>
  <div id="app">
    <h1 class="top-title">vue学习内容</h1>
    <!-- router-view将会把路由的内容渲染在此 -->
    <div class="contain">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  components: {
  }
}
</script>

<style>
@import "./css/setup.css";
body {
  background-color: rgb(247, 250, 241);
  /* background-image: url(./assets/bk.jpg);
  background-repeat: no-repeat;
  background-attachment: fixed;
      background-size:100% 100%; */
}
h1 {
  font:30px bold;
  padding: 5px;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin: 10px 10px;
  text-align: center;
}
p {
  text-align: left;
  text-indent:2em;
}
em {
  font-style: italic;
  font-size: larger;
}
.contain {
  margin: 10px 0px;
}
h1.top-title {
  background: teal;
  color: white;
  padding: 10px;
  text-align: center;
  font: 25px bold;
}
</style>

