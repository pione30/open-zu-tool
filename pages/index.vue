<template>
  <section class="container">
    <div>
      <h1 class="title">
        open-zu-tool
      </h1>
      <zu-tool-chart :forecast-data="forecastData" />
    </div>
  </section>
</template>

<script lang="ts">
import ZuToolChart from '~/components/ZuToolChart.vue'

export default {
  components: {
    ZuToolChart
  },
  data() {
    return {
      forecastData: {}
    }
  },
  async asyncData() {
    const { default: axios } = await import(/* webpackChunkName: 'axios' */ 'axios')
    const response = await axios.get('https://api.openweathermap.org/data/2.5/forecast', {
      params: {
        id: process.env.OPEN_WEATHER_MAP_CITY_ID,
        appid: process.env.OPEN_WEATHER_MAP_API_KEY
      }
    })

    return { forecastData: response.data }
  }
}
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
    'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 50px;
  color: #35495e;
  letter-spacing: 1px;
}
</style>
