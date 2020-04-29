<template>
  <div class="browser-container container p-2">
    <input
      @keypress.enter="searchCountriesByTerm"
      id="textToSearch"
      type="text"
      class="w-1/2 lg:w-2/5 xl:w-2/5 md:w-2/5 shadow appearance-none border rounded py-2 px-3 
      text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
    />
    <button
      @click="searchCountriesByTerm"
      class="bg-gray-800 text-white font-bold py-2 px-4 rounded focus:outline-none"
    >
      Buscar
      <font-awesome-icon icon="search" />
    </button>
  </div>
</template>

<script>
export default {
  name: 'Browser',
  methods: {
    searchCountriesByTerm() {
      this.$emit(
        'searchCountriesByTerm',
        document.querySelector('#textToSearch').value
      )
    }
  }
}
</script>

<style lang="scss">
.browser-container {
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;

  button {
    margin-left: 5px;
  }
}
</style>
