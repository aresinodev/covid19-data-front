<template>
  <header class="p-5">
    <span v-if="checkCountryDetailRoute" class="back" @click="$router.go(-1)">
      <font-awesome-icon icon="arrow-left" />
    </span>
    <span
      class="title"
      :style="{ width: checkCountryDetailRoute ? '90%' : '100%' }"
    >
      <font-awesome-icon icon="virus" />
      Datos sobre el COVID-19
    </span>
  </header>
</template>

<script>
export default {
  name: 'Header',
  computed: {
    checkCountryDetailRoute() {
      return this.$store.state.currentRoute === 'countryDetail'
    }
  }
}
</script>

<style lang="scss">
header {
  width: 100vw;
  display: flex;
  jusfity-content: flex-start;
  align-items: center;
  background-color: #333333;
  top: 0;

  .back {
    cursor: pointer;
    color: #fff;
    font-size: 20px;
    text-align: left;
  }

  .title {
    font-size: 22px;
    font-weight: 800;
    color: #fff;
    text-align: center;
  }
}
</style>
