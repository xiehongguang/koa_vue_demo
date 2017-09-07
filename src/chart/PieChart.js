/**
 * Created by lenovo on 2017/5/18.
 */
import { Pie } from 'vue-chartjs'

export default Pie.extend({
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
    /* {
      value: 30,
      backgroundColor: 'F38630'
    }
    {
      value: 50,
      color: "#E0E4CC"
    }
    {
      value : 100,
        color: "#69D2E7"
    }
      props: {
        width: 10,
        Height: 10
      } */
      Labels: ['January', 'February', 'March'],
      datasets: [
        {
          label: ['first', 'second', 'third', 'fouth', 'fifth'],
          backgroundColor: ['#FC7F86', '#E0A8FC', '#05CBE1', '#FCCD4D', '#FC4DDA'],
          borderColor: '#FC2525',
          pointBackgroundColor: 'white',
          borderWidth: 1,
          pointBorderColor: 'white',
          data: [30, 40, 60, 70, 50]
        }
      ]
    },
      {
        responsive: true,
        maintainAspectRatio: false
        /* // Boolean - Whether we should show a stroke on each segment
       segmentShowStroke: true,

       // String - The colour of each segment stroke
       segmentStrokeColor: '#fff',

       // Number - The width of each segment stroke
       segmentStrokeWidth: 2,

       // Boolean - Whether we should animate the chart
       // animation: true,

       // Number - Amount of animation steps
       animationSteps: 100,

       // String - Animation easing effect
       animationEasing: 'easeOutBounce',

       // Boolean - Whether we animate the rotation of the Pie
       animateRotate: true,

       // Boolean - Whether we animate scaling the Pie from the centre
       animateScale: false,

       // Function - Will fire on animation completion.
       onAnimationComplete: null */
      }
    )
    /* eslint-disable */
  }
})
