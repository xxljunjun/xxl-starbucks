<template>
  <div id="app">
    <LayOut/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import LayOut from './pages/layout/index.vue'

@Component({
  components: {
    LayOut
  },
})
export default class App extends Vue {}
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
