<template>
  <!--空一行是的代码更客观，容易找到相应的组件，以下的空行都是此作用-->
  <div class="totalVue">

    <!--导航栏-->
    <div class="toolBar">
      <md-toolbar class="md-dense"  >
        <md-button class="md-icon-button" @click.native="toggleLeftSidenav">
          <md-icon> menu </md-icon>
        </md-button>
        <h2 class="md-title center" >Server Monitor Report Server</h2>
        <div class="field-group">
          <md-input-container>
           <!-- 添加一个time_data方法，使每次点击下拉框的option时，不同的时间段显示不同的数据-->
            <select class="md-select" name="date" id="date" v-model="date" @click="time_data(date)" >
              <option class="md-option" value="one hour">one hour</option>
              <option class="md-option" value="one day">one day</option>
              <option class="md-option" value="one week">one week</option>
            </select>
          </md-input-container>
        </div>
      </md-toolbar>
    </div>
    <!--导航栏-->

    <!--侧拉框-->
    <md-sidenav class="md-left" ref="leftSidenav" @open="open('Left')" @close="close('Left')">
      <md-toolbar class="md-large">
        <div class="md-toolbar-container">
          <h5 class="md-title">Sidenav content</h5>
        </div>
      </md-toolbar>
      <div id="tabPanel">
        <div class="item">
          <div class="menutitle" @click="toggle()"><i class="icon-th-list"></i>&nbsp;{{parentItem}}</div>
          <div class="sildermun" v-show="status">
            <ul>
              <li v-for="(index,v) in childItems"><i class="icon-star"></i>&nbsp;{{v+index}}</li>
            </ul>
          </div>
        </div>
      </div>
      <p>vue  metrial drawer</p>
    </md-sidenav>
    <!--侧拉框-->

    <!--白框-->
    <div class="whiteFrame">
      <whiter-frame></whiter-frame>
    </div>
    <!--白框-->

    <!--柱状图-->
    <div class="barChart">
      <h2>BarChart</h2>
      <!--当responsive为false时，图表会按所定义的width和height来显示 柱状图的数据在barchartdatacollection中来设置-->
      <BarChart
        :chart-data="barchartdatacollection"
        :options="{responsive: false, maintainAspectRation: false}"
        :width="300"
        :height="400"
      ></BarChart>
    </div>
    <!--柱状图-->

    <!--曲线图-->
    <div class="lineChart">
      <h2>LineChart</h2>
      <!--当responsive为false时，图表会按所定义的width和height来显示 responsive为true时，图表会显示默认的宽度和高度 柱状图的数据在linechartdatacollection中来设置-->
      <lineChart
        :chart-data="linechartdatacollection"
        :options="{responsive: false, maintainAspectRation: false}"
        :width="200"
        :height="400"
      ></lineChart>
    </div>
    <!--曲线图-->
  </div>
</template>
<script>
  import whiterFrame from '../components/WhiteFrame.vue'
  import BarChart from '../chart/BarChart.js'
  import LineChart from '../chart/LineChart.js'
  export default{
    name: 'totalVue',
    components: {
      whiterFrame,
      BarChart,
      LineChart
    },
    data () {
      return {
        date: 'one hour',
        barchartdatacollection: null,
        linechartdatacollection: null,
        status: false,
        parentItem: '父级菜单',
        childItems: ['子级菜单', '子级菜单', '子级菜单', '子级菜单']
      }
    },
    methods: {
      /* 下拉框的点击事件 */
      time_data: function (date) {
        /* 所选中时间段是一小时 */
        if (date === 'one hour') {
          /* 柱状图的数据 */
          this.barchartdatacollection = {
            /* 横坐标 */
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
            datasets: [
              {
                label: 'Bar Chart',
                /* 柱状图图形的颜色 */
                backgroundColor: '#F9BFBF',
                /* 纵坐标的数据显示 */
                data: [40, 20, 12, 39, 10, 40, 39, 20, 40, 20, 12, 11]
              }
            ]
          }
          /* 柱状图的数据 */
          /* 曲线图的数据 */
          this.linechartdatacollection = {
            /* 横坐标 */
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
            datasets: [
              {
                label: 'Data One',
                borderColor: '#247189',
                pointBackgroundColor: 'white',
                borderWidth: 1,
                pointBorderColor: 'white',
                backgroundColor: 'rgba(255, 0, 0, 0.25)',
                /* 纵坐标的数据显示 */
                data: [40, 39, 10, 40, 39, 80, 40]
              }, {
                label: 'Data Two',
                borderColor: '#12586C',
                pointBackgroundColor: 'white',
                pointBorderColor: 'white',
                borderWidth: 1,
                backgroundColor: 'rgba(0, 231, 255, 0.25)',
                /* 纵坐标的数据显示 */
                data: [60, 55, 32, 10, 2, 12, 53]
              }
            ]
          }
          /* 曲线图的数据 */
        }
        /* 所选中时间段是一小时 */
        /* 所选中时间段是一天 */
        if (date === 'one day') {
          /* 柱状图的数据 */
          this.barchartdatacollection = {
            /* 横坐标 */
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
            datasets: [
              {
                label: 'Bar Chart',
                /* 柱状图图形的颜色 */
                backgroundColor: '#FFCE44',
                /* 纵坐标的数据显示 */
                data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
              }
            ]
          }
          /* 柱状图的数据 */
          /* 曲线图的数据 */
          this.linechartdatacollection = {
            /* 横坐标 */
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
            datasets: [
              {
                label: 'Data One',
                borderColor: '#AD532B',
                pointBackgroundColor: 'white',
                borderWidth: 1,
                pointBorderColor: 'white',
                backgroundColor: 'rgba(255, 0, 0, 0.25)',
                /* 纵坐标的数据显示 */
                data: [40, 39, 10, 40, 39, 80, 40]
              }, {
                label: 'Data Two',
                borderColor: '#502E0F',
                pointBackgroundColor: 'white',
                pointBorderColor: 'white',
                borderWidth: 1,
                backgroundColor: 'rgba(0, 231, 255, 0.25)',
                /* 纵坐标的数据显示 */
                data: [60, 55, 32, 10, 2, 12, 53]
              }
            ]
          }
          /* 曲线图的数据 */
        }
        /* 所选中时间段是一天 */
        /* 所选中时间段是一周 */
        if (date === 'one week') {
          /* 柱状图的数据 */
          this.barchartdatacollection = {
            /* 横坐标 */
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
            datasets: [
              {
                label: 'Bar Chart',
                /* 柱状图图形的颜色 */
                backgroundColor: '#f87979',
                /* 纵坐标的数据显示 */
                data: [40, 20, 12, 39, 10, 40, 39, 20, 40, 20, 12, 11]
              }
            ]
          }
          /* 柱状图的数据 */
          /* 曲线图的数据 */
          this.linechartdatacollection = {
            /* 横坐标 */
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
            datasets: [
              {
                label: 'Data One',
                borderColor: '#BF3636',
                pointBackgroundColor: 'white',
                borderWidth: 1,
                pointBorderColor: 'white',
                backgroundColor: 'rgba(255, 0, 0, 0.25)',
                /* 纵坐标的数据显示 */
                data: [40, 39, 10, 40, 39, 80, 40]
              }, {
                label: 'Data Two',
                borderColor: '#672727',
                pointBackgroundColor: 'white',
                pointBorderColor: 'white',
                borderWidth: 1,
                backgroundColor: 'rgba(0, 231, 255, 0.25)',
                /* 纵坐标的数据显示 */
                data: [10, 20, 30, 40, 50, 60, 70]
              }
            ]
          }
          /* 曲线图的数据 */
        }
        /* 所选中时间段是一天 */
      },
      /* getRandomInt () {
        return Math.floor(Math.random() * (50 - 5 + 1)) + 5
      } */
      /* 侧拉框的方法 */
      toggleLeftSidenav () {
        this.$refs.leftSidenav.toggle()
      },
      toggleRightSidenav () {
        this.$refs.rightSidenav.toggle()
      },
      closeRightSidenav () {
        this.$refs.rightSidenav.close()
      },
      open (ref) {
        console.log('Opened: ' + ref)
      },
      close (ref) {
        console.log('Closed: ' + ref)
      },
      toggle: function () {
        this.status = !this.status
      }
      /* 侧拉框的方法 */
    }
  }
</script>
<style>
  @import "../css/home.css";
  @import "../css/tooBar.css";
  @import "../css/barChart.css";
  @import "../css/lineChart.css";
  @import "../css/whiteFrame.css"
</style>
