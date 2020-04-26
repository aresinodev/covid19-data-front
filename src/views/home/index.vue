<template>
  <div class="home">
    <Browser />
    <CountryCard />
  </div>
</template>

<script>
// @ is an alias to /src
import Browser from '@/views/home/components/browser'
import CountryCard from '@/views/home/components/country-card'

export default {
  name: 'Home',
  components: {
    Browser,
    CountryCard
  }
}
</script>

<style lang="scss">
.home {
  width: 100vw;
}
</style>
