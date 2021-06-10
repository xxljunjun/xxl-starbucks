<template>
  <div class="layout">
    <Left />
    <Right />
  </div>
</template>

<script>
import Left from './left.vue'
import Right from './right.vue'
export default {
  components: {
    Left,
    Right,
  },
}
</script>

<style lang="scss" scoped>
.layout {
  display: flex;
  flex-direction: row;
  height: 100%;
  width: 100%;
}
</style>