<template>
  <div class="country-card-list-container">
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
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: space-around;
  justify-items: flex-start;
  flex-wrap: wrap;
  overflow-x: hidden;
  overflow-y: auto;
  max-height: 100vh;
  padding-bottom: 200px;
}

.country-card-list-container::-webkit-scrollbar {
  width: 0 !important;
  background: transparent;
}
</style>
