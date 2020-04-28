<template>
  <div class="loader-container" v-if="loading">
    <font-awesome-icon icon="spinner" spin />
  </div>
</template>

<script>
export default {
  name: 'Loader',
  props: {
    loading: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {}
  }
}
</script>

<style lang="scss">
.loader-container {
  margin-top: 10px;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 60px;
  color: #2d3748;
}
</style>
