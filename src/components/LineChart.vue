<template>
  <div class="lineChart">
    <h2>LineChart</h2>
    <LineChart></LineChart>
  </div>
</template>

<script>
  import LineChart from '../chart/LineChart.js'
  export default{
    name: 'lineChart',
    components: {
      LineChart
    }
  }
</script>
<style scoped>
  @import "../css/lineChart.css";
</style>
