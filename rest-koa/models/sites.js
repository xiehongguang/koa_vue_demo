/**
 * Created by xiao22805378 on 2017/5/20.
 * 对数据库中的站点对象的属性操作
 */
// 引用db.js  通过db.js间接地定义Model
const db = require('../db')
const Sequelize = db.Sequelize

var sites = db.defineModel('site', {
  id: {
    type: Sequelize.INTEGER(100),
    autoIncrement: true,
    primaryKey: true
  },
  site_address: Sequelize.STRING(100),
  site_name: Sequelize.STRING(100),
  server_port: Sequelize.STRING(100),
  server_ip: Sequelize.STRING(100)
}, {
  timestamps: false
})

module.exports = {
  'sites': sites,
  'addSite': function (address, name, port, ip) {
    (async() => {
      var s = await sites.create({
        site_address: address,
        site_name: name,
        server_port: port,
        server_ip: ip
      })
      console.log('create: ' + JSON.stringify(s))
    })()
  },
  'selSite': function () {
    (async() => {
      var s = await sites.findAll()
      for (let site of s) {
        console.log(JSON.stringify(site))
      }
    })()
  }
}

