<template>
  <div class="country-detail-container p-4">
    <div class="country-detail-container__info">
      <span class="country-name w-2/5">
        {{ country.name ? country.name : '' }}
      </span>

      <div class="country-data w-3/5">
        <div class="country-data__data">
          <span class="title">CONFIRMADOS</span>
          <span class="figures">{{
            country.totalConfirmed | formatNumber(null, false)
          }}</span>
        </div>

        <div class="country-data__data">
          <span class="title">FALLECIDOS</span>
          <span class="figures">{{
            country.totalDeaths | formatNumber(null, false)
          }}</span>
        </div>

        <div class="country-data__data">
          <span class="title">RECUPERADOS</span>
          <span class="figures">{{
            country.totalRecovered | formatNumber(null, false)
          }}</span>
        </div>
      </div>
    </div>
    <div class="country-detail-container__statistics">
      <span class="header">Estadísticas</span>

      <div class="statistics mt-5">
        <div class="statistics__graphic">
          <span class="title">CONFIRMADOS</span>
          <apexcharts
            ref="confirmedChart"
            type="bar"
            :options="chartConfig"
            :series="countryConfirmedChart"
          />
        </div>

        <div class="statistics__graphic">
          <span class="title">FALLECIDOS</span>
          <apexcharts
            ref="deathsChart"
            type="bar"
            :options="chartConfig"
            :series="countryDeathsChart"
          />
        </div>

        <div class="statistics__graphic">
          <span class="title">RECUPERADOS</span>
          <apexcharts
            ref="recoveredChart"
            type="bar"
            :options="chartConfig"
            :series="countryRecoveredChart"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import { URL_API } from '@/constants'
import VueApexCharts from 'vue-apexcharts'

export default {
  name: 'CountryDetail',
  data() {
    return {
      figuresCountry: [],
      countryId: null,
      country: {},
      chartConfig: {
        chart: {
          id: 'basic-bar',
          toolbar: {
            show: false
          },
          width: '100%',
          height: 380
        },
        yaxis: {
          labels: {
            formatter: value =>
              this.$options.filters.formatNumber(value, null, false)
          }
        },
        xaxis: {
          categories: []
        },
        tooltip: {
          enabled: false
        }
      },
      countryConfirmedChart: [],
      countryDeathsChart: [],
      countryRecoveredChart: []
    }
  },
  components: {
    apexcharts: VueApexCharts
  },
  created() {
    this.$store.commit('changeCurrentRoute', this.$router.currentRoute.name)
    this.countryId = this.$route.params.id
    this.loadData()
  },
  methods: {
    async loadData() {
      try {
        const response = await axios.get(
          `${URL_API}countries/${this.countryId}`
        )
        this.country = response.data.country

        const figuresResponse = await axios.get(
          `${URL_API}figures/${this.countryId}`
        )
        this.figuresCountry = figuresResponse.data.figures

        const dates = this.figuresCountry.map(item =>
          this.getFormattedFullDate(item)
        )

        // Añadimos las fechas a las gráficas
        this.chartConfig['xaxis']['categories'] = dates

        this.refreshCategoriesXaxisChart(dates)
        this.loadChartsInfo()
      } catch (error) {
        console.error(error)
        this.$swal({
          title: 'Error',
          icon: 'error',
          text: 'Error al obtener datos del país'
        })
      }
    },
    loadChartsInfo() {
      // Confirmed
      this.countryConfirmedChart = [
        {
          name: 'Confirmados',
          data: this.figuresCountry.map(item =>
            this.getFormattedNumber(item.totalConfirmed)
          )
        }
      ]

      // Deaths
      this.countryDeathsChart = [
        {
          name: 'Fallecidos',
          data: this.figuresCountry.map(item =>
            this.getFormattedNumber(item.totalDeaths)
          )
        }
      ]

      // Recovered
      this.countryRecoveredChart = [
        {
          name: 'Recuperados',
          data: this.figuresCountry.map(item =>
            this.getFormattedNumber(item.totalRecovered)
          )
        }
      ]
    },
    getFormattedFullDate(item) {
      const year = new Date(item.dateCreated).getFullYear()
      const month =
        new Date(item.dateCreated).getMonth() + 1 < 10
          ? `0${new Date(item.dateCreated).getMonth() + 1}`
          : `${new Date(item.dateCreated).getMonth() + 1}`
      const day =
        new Date(item.dateCreated).getDate() < 10
          ? `0${new Date(item.dateCreated).getDate()}`
          : `${new Date(item.dateCreated).getDate()}`

      return `${day}-${month}-${year}`
    },
    refreshCategoriesXaxisChart(dates) {
      this.$refs.confirmedChart.updateOptions(
        {
          xaxis: {
            categories: dates
          }
        },
        true
      )

      this.$refs.deathsChart.updateOptions(
        {
          xaxis: {
            categories: dates
          }
        },
        true
      )

      this.$refs.recoveredChart.updateOptions(
        {
          xaxis: {
            categories: dates
          }
        },
        true
      )
    },
    getFormattedNumber(value) {
      return this.$options.filters.formatNumber(value, null, false)
    }
  }
}
</script>

<style lang="scss" scoped>
.country-detail-container {
  width: 100vw;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  &__info {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .country-name {
      font-size: 40px;
      font-weight: 900;
    }

    .country-data {
      display: flex;
      justify-content: space-around;
      align-items: center;

      &__data {
        display: flex;
        flex-direction: column;
        justify-content: flex-start;

        .title {
          font-size: 30px;
          font-weight: 900;
        }

        .figures {
          font-size: 30px;
          font-weight: 300;
        }
      }
    }
  }

  &__statistics {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;

    .header {
      width: 100%;
      font-size: 40px;
      font-weight: 900;
      text-align: left;
    }

    .statistics {
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;

      &__graphic {
        width: 33%;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;

        .title {
          width: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
          font-weight: 600;
        }
      }
    }
  }
}

@media (max-width: 1350px) {
  .country-detail-container {
    width: 100vw;
    height: 100%;
    overflow-x: hidden;
    overflow-y: auto;
    max-height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    &__info {
      width: 100%;
      display: flex;
      flex-direction: column;
      justify-content: flex-start;

      .country-name {
        font-size: 40px;
        font-weight: 900;
      }

      .country-data {
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        margin-top: 10px;

        &__data {
          display: flex;
          flex-direction: column;
          justify-content: flex-start;
          margin-top: 20px;

          .title {
            font-size: 20px;
            font-weight: 900;
          }

          .figures {
            font-size: 30px;
            font-weight: 300;
          }
        }
      }
    }

    &__statistics {
      width: 100%;
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      margin-top: 40px;

      .header {
        width: 100%;
        font-size: 40px;
        font-weight: 900;
        text-align: center;
      }

      .statistics {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;

        &__graphic {
          width: 100%;
          display: flex;
          flex-direction: column;
          justify-content: flex-start;

          .title {
            width: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            font-weight: 600;
          }
        }
      }
    }
  }
}

@media (max-width: 900px) {
  .country-detail-container {
    &__statistics {
      .statistics {
        &__graphic {
          width: 80%;
        }
      }
    }
  }
}

@media (max-width: 535px) {
  .country-detail-container {
    &__statistics {
      .statistics {
        &__graphic {
          width: 100%;
        }
      }
    }
  }
}
</style>
