// 统一Model的定义：规则  如何定义Model
const Sequelize = require('sequelize')

const uuid = require('node-uuid')

// const config = require('./config/default_db')

const config = require('./config/dbconfig')

console.log('init sequelize...')

function generateId () {
  return uuid.v4()
}

var sequelize = new Sequelize(config.database, config.username, config.password, {
  host: config.host,
  dialect: config.dialect,
  pool: {
    max: 5,
    min: 0,
    idle: 10000
  }
}) // 初始化对数据库的映射

const ID_TYPE = Sequelize.INTEGER // 模块自定义的ID类型

/**
 * 封装了定义模块的方法,建立公有的模块对私有的数据进行操作
 * @param name 对应映射的表名
 * @param attributes 对应表的字段
 * @returns {Model} 返回定义好的模块
 */
function defineModel (name, attributes) {
  var attrs = {}
  for (let key in attributes) {
    let value = attributes[key]
    if (typeof value === 'object' && value['type']) {
      value.allowNull = value.allowNull || false
      attrs[key] = value
    } else {
      attrs[key] = {
        type: value,
        allowNull: false
      }
    }
  }
    // id 自增
  attrs.id = {
    type: ID_TYPE,
    autoIncrement: true,
    primaryKey: true
  }
  console.log('model defined for table: ' + name + '\n' + JSON.stringify(attrs, function (k, v) {
    if (k === 'type') {
      for (let key in Sequelize) {
        if (key === 'ABSTRACT' || key === 'NUMBER') {
          continue
        }
        let dbType = Sequelize[key]
        if (typeof dbType === 'function') {
          if (v instanceof dbType) {
            if (v._length) {
              return `${dbType.key}(${v._length})`
            }
            return dbType.key
          }
          if (v === dbType) {
            return dbType.key
          }
        }
      }
    }
    return v
  }, '  '))

  return sequelize.define(name, attrs, {
    tableName: name,
    timestamps: false,
    hooks: {
      beforeValidate: function (obj) {
      }
    }
  })
}

// Sequelize支持的基本数据类型
const TYPES = ['STRING', 'INTEGER', 'BIGINT', 'TEXT', 'DOUBLE', 'DATEONLY', 'BOOLEAN']

// 包装下定义模块的方法，添加了一些回调响应的方法,例如自动新建数据库，测试当前的环境是否适配数据库
var exp = {
  defineModel: defineModel,
  sync: () => {
        // only allow create ddl in non-production environment:
    if (process.env.NODE_ENV !== 'production') {
      sequelize.sync({ force: true })
    } else {
      throw new Error('Cannot sync() when NODE_ENV is set to \'production\'.')
    }
  }
}

for (let type of TYPES) {
  exp[type] = Sequelize[type]
}

exp.ID = ID_TYPE
exp.generateId = generateId
exp.Sequelize = Sequelize
    // 将定义模块的方法暴露给其他调用该模块的模块们
module.exports = exp
    /**
     * 注释:肖斌
     * 修改:注释了自动生成version,CreateAt,UpdateAt三个字段的相关语句,添加了对defineModel函数的解释
     */
