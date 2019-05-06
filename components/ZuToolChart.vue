<template>
  <div class="chart-container">
    <canvas id="zuToolChart"></canvas>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'
import Chart from 'chart.js'

@Component
export default class ZuToolChart extends Vue {
  @Prop({ required: true }) forecastData!: any

  mounted() {
    const ctx = 'zuToolChart'

    const labels: string[] = this.forecastData.list.map(element => {
      const dateObj = new Date(element.dt * 1000)
      // eslint-disable-next-line prettier/prettier
      return `${dateObj.getMonth() + 1}-${dateObj.getDate()} ${dateObj.getHours()}`
    })

    const data: number[] = this.forecastData.list.map(element => element.main.pressure)

    new Chart(ctx, {
      type: 'line',
      data: {
        labels: labels,
        datasets: [
          {
            label: this.forecastData.city.name,
            data: data,
            backgroundColor: 'rgba(135, 206, 250, 0.2)', // skyblue
            borderColor: 'rgba(135, 206, 250, 0.8)' // skyblue
          }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          yAxes: [
            {
              scaleLabel: {
                display: true,
                labelString: 'hPa'
              }
            }
          ],

          xAxes: [
            {
              scaleLabel: {
                display: true,
                labelString: 'Date'
              }
            }
          ]
        }
      }
    })
  }
}
</script>

<style scoped>
.chart-container {
  position: relative;
  height: 40vh;
  width: 80vw;
}
</style>
