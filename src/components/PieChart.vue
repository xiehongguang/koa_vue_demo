<template>
  <div class="pieChart">
    <h2>PieChart</h2>
    <PieChart></PieChart>
  </div>
</template>

<script>
  import PieChart from '../chart/PieChart.js'
  export default{
    name: 'pieChart',
    components: {
      PieChart
    }
  }
</script>
<style scoped>
  @import "../css/PieChart.css";
</style>
