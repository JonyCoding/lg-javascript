<template>
  <div>
    <h1>ref Parent</h1>

    <child ref="c"></child>
  </div>
</template>

<script>
import child from './04-Child'
export default {
  components: {
    child
  },
  mounted () {
    // 此时组件渲染完毕
    this.$refs.c.focus()
    this.$refs.c.value = 'hello input'
  }
}
</script>

<style>

</style>