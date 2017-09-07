/**
 * Created by xiao22805378 on 2017/5/20.
 * 对数据库中监测事件对象的相关属性操作
 */
// 引用db.js  通过db.js间接地定义Model
const db = require('../db')
const Sequelize = db.Sequelize
var event = db.defineModel('connect', {
  id: {
    type: Sequelize.INTEGER(100),
    autoIncrement: true,
    primaryKey: true
  },
  deviceId: Sequelize.INTEGER(100),
  siteId: Sequelize.INTEGER(100),
  isServer: Sequelize.STRING(1),
  statusCode: Sequelize.INTEGER(100),
  errorTime: Sequelize.STRING(100),
  errorDetail: Sequelize.STRING(1000),
  insertTime: {
    type: Sequelize.DATE(6),
    default: Date.now()
  },
  requestTime: Sequelize.BIGINT(20)

}, {
  timestamps: false
})

module.exports = {
  'connects': event,
  'addEvent': function (deviceId, siteId, isServer, statusCode, errorTime, errorDetail, insertTime, reuestTime) {
    (async() => {
      var d = await event.create({
        deviceId: deviceId,
        siteId: siteId,
        isServer: isServer,
        statusCode: statusCode,
        errorTime: errorTime,
        errorDetail: errorDetail,
        insertTime: insertTime,
        requestTime: reuestTime
      })
      console.log('create: ' + JSON.stringify(d))
    })()
  },
  'selEvent': function () {
    (async() => {
      var d = await event.findAll()
      return d
    })()
  }
}
