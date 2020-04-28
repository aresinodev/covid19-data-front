<template>
  <div
    class="country-card-container border-solid rounded
    border-gray-400"
  >
    <div class="country-card-container__name">
      {{ country.name }}
    </div>

    <div class="country-card-container__data">
      <div
        class="data"
        style="border-top: 1px solid #d8d8d8; border-right: 1px solid #d8d8d8;"
      >
        <span class="data__title">
          CONFIRMADOS
        </span>
        <span class="data__quantity">{{ country.totalConfirmed }}</span>
      </div>

      <div
        class="data"
        style="border-top: 1px solid #d8d8d8; border-right: 1px solid #d8d8d8;"
      >
        <span class="data__title">
          FALLECIDOS
        </span>
        <span class="data__quantity">{{ country.totalDeaths }}</span>
      </div>

      <div class="data" style="border-top: 1px solid #d8d8d8;">
        <span class="data__title">RECUPERADOS</span>
        <span class="data__quantity">{{ country.totalRecovered }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CountryCard',
  props: {
    country: {
      type: Object,
      required: true
    }
  }
}
</script>

<style lang="scss">
.country-card-container {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 20rem;
  height: 12rem;
  border: 1px solid #d8d8d8;
  margin-top: 10px;

  &__name {
    font-size: 30px;
    font-weight: 800;
    text-transform: uppercase;
    width: 100%;
    height: 50%;
  }

  &__data {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    width: 100%;
    height: 50%;

    .data {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;
      width: 100%;

      &__title {
        font-size: 14px;
        font-weight: 800;
        text-transform: uppercase;
      }

      &__quantity {
        font-size: 14px;
        font-weight: 500;
      }
    }
  }
}
</style>
