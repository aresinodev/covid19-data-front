<template>
  <div class="home conatiner">
    <Browser />
    <Loader :loading="loading" />
    <CountryCardList :countries="countries" v-if="!loading" />
  </div>
</template>

<script>
// @ is an alias to /src
import Browser from '@/views/home/components/browser'
import CountryCardList from '@/views/home/components/country-card-list'
import Loader from '@/components/ui/Loader'
import axios from 'axios'
import { URL_API_DEV } from '@/constants'

export default {
  name: 'Home',
  data() {
    return {
      countries: [],
      loading: true
    }
  },
  components: {
    Browser,
    CountryCardList,
    Loader
  },
  created() {
    this.loadCountries()
  },
  methods: {
    async loadCountries() {
      try {
        const response = await axios.get(`${URL_API_DEV}countries/all`)
        this.countries = response.data.countries
        setTimeout(() => {
          this.loading = false
        }, 5000)
      } catch (error) {
        this.$swal({
          title: 'Error',
          icon: 'error',
          text: 'Error al obtener los países de la base de datos'
        })
      }
    }
  }
}
</script>

<style lang="scss">
.home {
  width: 100vw;
}
</style>
