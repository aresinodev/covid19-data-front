<template>
  <tr>
    <td class="border px-4 py-2">{{ country.name }}</td>
    <td class="border px-4 py-2">
      {{ country.totalConfirmed | formatNumber(null, false) }}
    </td>
    <td class="border px-4 py-2">
      {{ country.totalDeaths | formatNumber(null, false) }}
    </td>
    <td class="border px-4 py-2">
      {{ country.totalRecovered | formatNumber(null, false) }}
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
  filters: {
    formatNumber: function(value, decimals, euro) {
      if (value) {
        const string = decimals ? value.toFixed(decimals) : value.toString()
        const x = string.split('.')
        let x1 = x[0]
        const x2 = x.length > 1 ? ',' + x[1] : ''
        const rgx = /(\d+)(\d{3})/
        while (rgx.test(x1)) {
          x1 = x1.replace(rgx, '$1' + '.' + '$2')
        }

        return x1 + (!decimals ? '' : x2) + (euro ? '€' : '')
      } else {
        return '0' + (!decimals ? '' : ',00') + (euro ? '€' : '')
      }
    }
  }
}
</script>
