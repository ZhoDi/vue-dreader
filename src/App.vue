<template>
  <div id="app">
    <router-view />
  </div>
</template>


<script>
export default {
  name: "app"
};
</script>


<style>
html,
body {
  font-size: 20px;
}

body,
ul,
li {
  padding: 0;
  margin: 0;
}

a {
  text-decoration: none;
  color: #000;
}

li {
  list-style: none;
}

#app {
  font-family: -apple-system, BlinkMacSystemFont, "PingFang SC",
    "Helvetica Neue", STHeiti, "Microsoft Yahei", Tahoma, Simsun, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* display: flex;
  flex-direction: column; */
  /* justify-content: space-between;
  align-items: stretch; */
  color: #000;
  background-color: #fff;
  font-size: 0.8rem;
  width: 100vw;
  height: 100vh;
}
</style>
