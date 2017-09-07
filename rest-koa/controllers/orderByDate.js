/**
 * Created by xiao22805378 on 2017/5/25.
 */
// 引入model文件,加载 所有在models/路径下的文件  注释:肖斌
const model = require('../model')
// 引入API错误提示文件  注释:肖斌
const APIError = require('../rest').APIError
// 新建全局的日期变量用于局部方法的操作  注释:肖斌
const date = new Date()
// 引入events模块，获取events暴露的connect实例  注释:肖斌
var events = model.events.connects

var db = require('../db')
var sequelize = db.seq

sequelize.where()
module.exports = {
  // 对时间进行筛选的功能路由  注释:肖斌
  'GET /api/event/:flag': async (ctx, next) => {
    // 获取路由传递的flag标志,判别筛选方式  注释:肖斌
    var flag = ctx.params.flag
    // flag : 1(一天) , 7(一周) , 3(3小时) , 30(一月)  注释:肖斌
    switch (flag) {
      // 标志一:取一天内的所有数据  注释:肖斌
      case '1':
        // 获取今天零点的时间戳  注释:肖斌
        var today = date.toDateString() // today -> 2017/05/27 周五(无时\分)  注释:肖斌
        var selStartDate = new Date(today) // 获取从今天00:00的完整时间戳  注释:肖斌
        // 进行筛选搜索
        var result = await events.findAll({
          where: {
            insertTime: {
              $gt: selStartDate, // 从今天零点开始，实际上是世界零时区的时间(昨天下午16:00)  注释:肖斌
              $lt: date // 到现在的时间(世界零时区的时间)  注释:肖斌
            }
          }
        })
        break
      // 标志二:取一周内的所有数据  注释:肖斌
      case '7':
        // 进行周数的处理(取值范围(1~7)) week->当前是周几  注释:肖斌
        var week = date.getDay() === 0 ? 7 : date.getDay()
        // 获取这周开始的当天 thatday -> 2017/05/22  注释:肖斌
        var Monday = new Date(date - (week - 1) * 24 * 60 * 60 * 1000)
        var startDate = new Date(Monday.toDateString())
        // 开始筛选搜索  注释:肖斌
        result = await events.findAll({
          where: {
            insertTime: {
              $gt: startDate,
              $lt: date
            }
          }
        })
        break
      case '3':
        // 获取当前时间的三小时前的时间  注释:肖斌
        var threeHourDate = new Date(date - 3 * 60 * 60 * 1000)
        result = await events.findAll({
          // 开始筛选搜索  注释:肖斌
          where: {
            insertTime: {
              $gt: threeHourDate + '',
              $lt: date + ''
            }
          }
        })
        break
      case '30':
        // 获取当前日期所在月份的天数 day->27  注释:肖斌
        var day = date.getDate()
        // 获取当前日期所在月份的第一天的日期  注释:肖斌
        var MonthFirstDay = new Date(date - day * 24 * 60 * 60 * 1000)
        var MOnStartDate = new Date(MonthFirstDay.toDateString())
        // 开始筛选搜索  注释:肖斌
        result = await events.findAll({
          where: {
            insertTime: {
              $gt: MOnStartDate,
              $lt: date
            }
          }
        })
        break
      default:
        // 输入的路由中flag不合法的友好提示:    注释:肖斌
        result = '输入的路由不正确,请重新输入'
        break
    }

    ctx.rest({
      res: result
    })
  },
  // 对时间进行筛选的功能路由(使用的是原生SQl)  注释:肖斌
  'GET /api/sql/:flag': async(ctx, next) => {
    var flag = ctx.params.flag
    switch (flag) {
      case '1':
        // 获取今天零点的时间戳  注释:肖斌
        var today = date.toDateString() // today -> 2017/05/27 周五(无时\分)  注释:肖斌
        var selStartDate = new Date(today) // 获取从今天00:00的完整时间戳  注释:肖斌
        // 进行筛选搜索
        var queryWords = 'select * from connect where insertTime <= "' + date.toLocaleString() + '" and insertTime >= "' + selStartDate.toLocaleString() + '"'
        var res = await sequelize.query(queryWords, {type: sequelize.QueryTypes.SELECT})
        ctx.rest({
          result: res
        })
        break
      case '7':
        // 进行周数的处理(取值范围(1~7)) week->当前是周几  注释:肖斌
        var week = date.getDay() === 0 ? 7 : date.getDay()
        // 获取这周开始的当天 thatday -> 2017/05/22  注释:肖斌
        var Monday = new Date(date - (week - 1) * 24 * 60 * 60 * 1000)
        var startDate = new Date(Monday.toDateString())
        // 开始筛选搜索  注释:肖斌
        queryWords = 'select * from connect where insertTime <= "' + date.toLocaleString() + '" and insertTime >= "' + startDate.toLocaleString() + '"'
        res = await sequelize.query(queryWords, {type: sequelize.QueryTypes.SELECT})
        ctx.rest({
          result: res
        })
        break
      case '3':
        // 获取当前时间的三小时前的时间  注释:肖斌
        var threeHourDate = new Date(date - 3 * 60 * 60 * 1000)
        queryWords = 'select * from connect where insertTime <= "' + date.toLocaleString() + '" and insertTime >= "' + threeHourDate.toLocaleString() + '"'
        res = await sequelize.query(queryWords, {type: sequelize.QueryTypes.SELECT})
          // 开始筛选搜索  注释:肖斌
        ctx.rest({
          result: res
        })
        break
      case '30':
        // 获取当前日期所在月份的天数 day->27  注释:肖斌
        var day = date.getDate()
        // 获取当前日期所在月份的第一天的日期  注释:肖斌
        var MonthFirstDay = new Date(date - day * 24 * 60 * 60 * 1000)
        var MOnStartDate = new Date(MonthFirstDay.toDateString())
        // 开始筛选搜索  注释:肖斌
        queryWords = 'select * from connect where insertTime <= "' + date.toLocaleString() + '" and insertTime >= "' + MOnStartDate.toLocaleString() + '"'
        res = await sequelize.query(queryWords, {type: sequelize.QueryTypes.SELECT})
        ctx.rest({
          result: res
        })
        break
      default:
        // 输入的路由中flag不合法的友好提示:    注释:肖斌
        res = '输入的路由不正确,请重新输入'
        ctx.rest({
          result: res
        })
        break
    }
  }
}
