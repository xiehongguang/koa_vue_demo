import { Line, mixins } from 'vue-chartjs'
/* 初始化mixins为reactiveProp */
const { reactiveProp } = mixins
/* mixins能够提供对表数据进行动态的更新 当你改变datasets里的值时，chart.js没有提供动态的更新 需要用vue-chart.js 提供mixins来实现数据的更新 */
export default Line.extend({
    /* 在这里使用reactiveProp */
  mixins: [reactiveProp],
    /* 定义要传递的内容，数据，图表显示的要求，图表的宽度，图表的高度 */
  props: ['chartData', 'options', 'width', 'height'],
  data () {
    return {
      gradient: null,
      gradient2: null
    }
  },
  mounted () {
    this.gradient = this.$refs.canvas.getContext('2d').createLinearGradient(0, 0, 0, 450)
    this.gradient2 = this.$refs.canvas.getContext('2d').createLinearGradient(0, 0, 0, 450)
    this.gradient.addColorStop(0, 'rgba(255, 0,0, 0.5)')
    this.gradient.addColorStop(0.5, 'rgba(255, 0, 0, 0.25)')
    this.gradient.addColorStop(1, 'rgba(255, 0, 0, 0)')
    this.gradient2.addColorStop(0, 'rgba(0, 231, 255, 0.9)')
    this.gradient2.addColorStop(0.5, 'rgba(0, 231, 255, 0.25)')
    this.gradient2.addColorStop(1, 'rgba(0, 231, 255, 0)')
    this.renderChart({
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
      datasets: [
        {
          label: 'Data One',
          borderColor: '#FC2525',
          pointBackgroundColor: 'white',
          borderWidth: 1,
          pointBorderColor: 'white',
          backgroundColor: this.gradient,
          data: [40, 39, 10, 40, 39, 80, 40]
        }, {
          label: 'Data Two',
          borderColor: '#05CBE1',
          pointBackgroundColor: 'white',
          pointBorderColor: 'white',
          borderWidth: 1,
          backgroundColor: this.gradient2,
          data: [60, 55, 32, 10, 2, 12, 53]
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
    /* eslint-disable */
  }
}
)
/* eslint-disable */
