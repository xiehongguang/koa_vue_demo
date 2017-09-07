import { Bar, mixins } from 'vue-chartjs'
/* 初始化mixins为reactiveProp */
const { reactiveProp } = mixins
/* mixins能够提供对表数据进行动态的更新 当你改变datasets里的值时，chart.js没有提供动态的更新 需要用vue-chart.js 提供mixins来实现数据的更新 */
export default Bar.extend({
  /* 在这里使用reactiveProp */
  mixins: [reactiveProp],
  /* 定义要传递的内容，数据，图表显示的要求，图表的宽度，图表的高度 */
  props: ['chartData', 'options', 'width', 'height'],
  data () {
    return {
      gradient: null
    }
  },
  mounted () {
    this.gradient = this.$refs.canvas.getContext('2d').createLinearGradient(0, 0, 0, 450)
    this.gradient.addColorStop(0, 'rgba(255, 0,0, 0.5)')
    this.gradient.addColorStop(0.5, 'rgba(255, 0, 0, 0.25)')
    this.gradient.addColorStop(1, 'rgba(255, 0, 100, 0.3)')
    // Overwriting base render method with actual data.
    this.renderChart({
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
      datasets: [
        {
          label: 'Bar Chart',
          backgroundColor: this.gradient,
          data: [40, 20, 12, 39, 10, 40, 39, 20, 40, 20, 12, 11]
        }
      ]
    },
      {
        responsive: true,
        maintainAspectRatio: false
      },
      /* 重写了renderChart方法 打开页面有默认数据，传递options，width，height来设置图表的宽和高 chartData用来设置传递横纵坐标的数据 */
      this.renderChart(this.chartData, this.options, this.width, this.height)
   )
    /* 无默认数据，传递options，width，height来设置图表的宽和高 chartData用来设置传递横纵坐标的数据 */
    /* this.renderChart(this.chartData, this.options, this.width, this.height) */
  }
})
