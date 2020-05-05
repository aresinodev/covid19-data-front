<template>
  <div class="country-card-list-container">
    <table
      class="table-auto mx-4 text-xs sm:text-base md:text-base lg:text-base xl:text-base"
    >
      <thead>
        <tr>
          <th class="px-4 py-2 bg-gray-900 text-white border-white border">
            País
          </th>
          <th class="px-1 bg-gray-900 text-white border-white border">
            Confirmados
          </th>
          <th class="px-1 bg-gray-900 text-white border-white border">
            Fallecidos
          </th>
          <th class="px-1 bg-gray-900 text-white border-white border">
            Recuperados
          </th>
          <th class="px-4 bg-gray-900 text-white border-white border">
            &nbsp;
          </th>
        </tr>
      </thead>
      <tbody>
        <CountryCard
          v-for="(country, $index) in countries"
          :key="$index"
          :country="country"
        />
      </tbody>
    </table>
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
  height: calc(100vh - 178px);
  overflow-x: hidden;
  overflow-y: auto;
  max-height: calc(100vh - 178px);
}

.country-card-list-container::-webkit-scrollbar {
  width: 0 !important;
  background: transparent;
}
</style>
