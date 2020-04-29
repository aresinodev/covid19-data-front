<template>
  <div
    class="grid grid-flow-row grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3
    xl:grid-cols-4 xl:grid-rows-3 lg:grid-rows-4 md:grid-rows-4 sm:grid-rows-4 container
    gap-2 country-card-list-container"
  >
    <CountryCard
      v-for="(country, index) in countries"
      :country="country"
      :key="index"
    />
  </div>
</template>

<script>
import CountryCard from '@/views/home/components/country-card'

export default {
  name: 'CountryCardList',
  props: {
    countries: Array
  },
  components: {
    CountryCard
  }
}
</script>

<style lang="scss">
.country-card-list-container {
  width: 100vw;
  height: calc(100vh - 178px);
  overflow-x: hidden;
  overflow-y: auto;
  max-height: calc(100vh - 178px);
  margin-bottom: 10px;
}

.country-card-list-container::-webkit-scrollbar {
  width: 0 !important;
  background: transparent;
}
</style>
