/**
 * Created by xiao22805378 on 2017/5/20.
 * 对数据库内设备对象的相关属性的操作
 */
// 引用db.js  通过db.js间接地定义Model
const db = require('../db')
const Sequelize = db.Sequelize
// 定义模型devicec对应
var devices = db.defineModel('devices', {
  id: {
    type: Sequelize.INTEGER(100),
    autoIncrement: true,
    primaryKey: true
  }, // 设备唯一标志的id
  device_type: Sequelize.STRING(100), // 设备的类别
  device_IMEI: Sequelize.STRING(50), // 设备的IMEI码
  device_IP: Sequelize.STRING(100), // 设备连接的IP
  device_name: Sequelize.STRING(50)  // 设备的名称
}, {
  timestamps: false
})

var data = devices.findAll()

module.exports = {
  getDevices: () => {
    return data
  },
  'devices': devices,
  'addDev': function (type, IMEI, IP, name) {
    (async() => {
      var d = await devices.create({
        device_type: type,
        device_IMEI: IMEI,
        device_IP: IP,
        device_name: name
      })
      console.log('create: ' + JSON.stringify(d))
    })()
  // },
  // 'selDev': function () {
  //   (async() => {
  //     var d = await devices.findAll()
  //     for (let device of d) {
  //       console.log(JSON.stringify(device))
  //     }
  //   })()
  // }
  }
}
