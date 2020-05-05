<template>
  <div class="home">
    <Browser @searchCountriesByTerm="searchCountriesByTerm" />
    <Loader :loading="loading" />
    <CountryCardList :countries="countries" v-if="countries.length > 0" />
    <span v-if="countries.length === 0" class="home__no-countries">
      No hay países
    </span>
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
    this.$store.commit('changeCurrentRoute', this.$router.currentRoute.name)
    this.loadCountries()
  },
  methods: {
    async loadCountries() {
      this.loading = true
      try {
        const response = await axios.get(`${URL_API_DEV}countries/all`)
        this.countries = response.data.countries
        this.loading = false
      } catch (error) {
        this.$swal({
          title: 'Error',
          icon: 'error',
          text: 'Error al obtener los países de la base de datos'
        })
      }
    },
    async searchCountriesByTerm(value) {
      this.loading = true

      if (value !== '') {
        try {
          const response = await axios.get(
            `${URL_API_DEV}countries/all/${value}`
          )

          console.log('Respuesta', response)

          if (
            response &&
            response.data &&
            response.data.countries &&
            response.data.countries.length > 0
          ) {
            this.countries = response.data.countries
            this.loading = false
          } else {
            this.countries = []
            console.log('Longitud', this.countries.length)
            this.loading = false
          }
        } catch (error) {
          this.loading = false
          this.$swal({
            title: 'Error',
            icon: 'error',
            text: 'Error al obtener los países de la base de datos'
          })
        }
      } else {
        this.loading = false
        this.loadCountries()
      }
    }
  }
}
</script>

<style lang="scss">
.home {
  // width: 100vw;
  height: calc(100vh - 122px);
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  &__no-countries {
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 800;
  }
}
</style>
