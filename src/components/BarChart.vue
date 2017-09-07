<template>
  <div class="barChart">
    <h2>BarChart</h2>
    <BarChart></BarChart>
  </div>
</template>

<script>
  import BarChart from '../chart/BarChart.js'

  export default{
    name: 'barChart',
    components: {
      BarChart
    }
  }
</script>
<style scoped>
  @import "../css/barChart.css";
</style>
