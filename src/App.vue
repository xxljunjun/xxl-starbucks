<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
  components: {},
}
</script>

<style lang="scss">
body {
  padding: 0;
  margin: 0;
}
p,
h4 {
  margin: 0;
}
img {
  /* 去除图片默认边框 */
  vertical-align: top;
  /* dispaly:block */
}
#app {
}
</style>
