<template>
  <tr>
    <td class="border px-4 py-2">{{ country.name }}</td>
    <td class="border">
      {{ country.totalConfirmed | formatNumber(null, false) }}
    </td>
    <td class="border">
      {{ country.totalDeaths | formatNumber(null, false) }}
    </td>
    <td class="border">
      {{ country.totalRecovered | formatNumber(null, false) }}
    </td>
    <td class="border">
      <span class="detail-link" @click="goToDetail(country._id)">
        <font-awesome-icon icon="eye" />
      </span>
    </td>
  </tr>
</template>

<script>
export default {
  name: 'CountryCard',
  props: {
    country: {
      type: Object,
      required: true
    }
  },
  methods: {
    goToDetail(countryId) {
      this.$router.push({ name: 'countryDetail', params: { id: countryId } })
    }
  }
}
</script>

<style lang="scss" scoped>
.detail-link {
  cursor: pointer;
}
</style>
