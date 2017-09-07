<template>
  <div id="app">
    <div id="container">
         <div id="totalVue">
            <totalVue></totalVue>
         </div>
        <pieChart></pieChart>
    </div>
  </div>
</template>

<script>
import pieChart from './components/PieChart.vue'
import totalVue from './components/Home.vue'

export default {
  name: 'app',
  components: {
    pieChart,
    totalVue
  }
}
</script>

<style>
@import "css/app.css";
</style>
