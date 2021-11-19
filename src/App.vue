<template>
  <div id="app">
    <LayOut/>
  </div>
</template>

<script>
import LayOut from '@/pages/layout/index.vue'
export default {
  name: 'App',
  components: {
    LayOut
  },
}
</script>

<style lang="scss">
*{
  padding: 0;
  margin: 0;
}
html,body{
   height: 100%;
}
#app{
   height: 100%;
}
</style>
