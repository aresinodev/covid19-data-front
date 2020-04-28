<template>
  <header class="p-5">
    <span class="title">
      <font-awesome-icon icon="virus" />
      Datos sobre el COVID-19
    </span>
  </header>
</template>

<script>
export default {
  name: 'Header'
}
</script>

<style lang="scss">
header {
  width: 100vw;
  background-color: #333333;
  top: 0;
  position: fixed;

  .title {
    font-size: 25px;
    font-weight: 800;
    color: #fff;
  }
}
</style>
