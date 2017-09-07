module.exports = function (sequelize, DataTypes) {
  return sequelize.define('siteinfo', {
    id: {
      type: DataTypes.INTEGER(11), // 字段类型
      allowNull: false, // 是否允许为NULL
      primaryKey: true, // 主键
      autoIncrement: true // 是否自增
    },
    siteid: {
      type: DataTypes.INTEGER(11), // 字段类型
      allowNull: false // 是否允许为NULL
    },
    siteAddress: {
      type: DataTypes.STRING(100), // 字段类型
      allowNull: false // 是否允许为NULL
    },
    isServer: {
      type: DataTypes.bool, // 字段类型
      allowNull: false // 是否允许为NULL
    },
    statusCode: {
      type: DataTypes.INTEGER(11), // 字段类型
      allowNull: false // 是否允许为NULL
    },
    errorTime: {
      type: DataTypes.bool, // 字段类型
      allowNull: false // 是否允许为NULL
    },
    requestTime: {
      type: DataTypes.INTEGER(11), // 字段类型
      allowNull: false // 是否允许为NULL
    },
    errorDetial: {
      type: DataTypes.INTEGER(11), // 字段类型
      allowNull: false // 是否允许为NULL
    },
    serverPort: {
      type: DataTypes.INTEGER(11), // 字段类型
      allowNull: false // 是否允许为NULL
    },
    siteName: {
      type: DataTypes.INTEGER(11), // 字段类型
      allowNull: false // 是否允许为NULL
    },
    ip: {
      type: DataTypes.INTEGER(11), // 字段类型
      allowNull: false // 是否允许为NULL
    },
    inserTime: {
      type: DataTypes.INTEGER(11), // 字段类型
      allowNull: false // 是否允许为NULL
    }
  }, {
    tableName: 'server_site'
  })
}
