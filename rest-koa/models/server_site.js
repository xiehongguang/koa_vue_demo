// 数据库模板文件

// 引用db.js  通过db.js间接地定义Model
const db = require('../db')

module.exports = db.defineModel('site', {
  Id: db.ID,
  siteid: db.BIGINT,
  siteAddress: db.STRING(100),
  isServer: db.BOOLEAN,
  statusCode: db.BIGINT,
  errorTime: db.STRING(100),
  requestTime: db.BIGINT,
  errorDetial: db.STRING(1000),
  serverPort: db.BIGINT,
  siteName: db.STRING(100),
  ip: db.STRING(100),
  inserTime: db.BIGINT
})
