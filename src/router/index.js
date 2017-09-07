import Vue from 'vue'
import Router from 'vue-router'
import LineChart from '@/components/LineChart'
import BarChart from '@/components/BarChart'

Vue.use(Router)

export default new Router({
  routes: [
    //  {
    //   // 动态路径参数 以冒号开头
    //   path: '/',
    //   name: 'toolbar',
    //   component: toolbar
    // },
    // {
    //  // 动态路径参数 以冒号开头
    // path: '/',
    //  name: 'lineAndBarChart',
    //  component: lineAndBarChart
    // },
    {
      // 动态路径参数 以冒号开头
      path: '/',
      name: 'LineChart',
      component: LineChart
    },
    {
      path: '/',
      name: 'BarChart',
      component: BarChart
    }
  ]
})
