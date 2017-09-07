// 如何导入Model
// 自动扫描并导入所有Model
const fs = require('fs')
const db = require('./db')
const path = require('path')

var modelpath = path.join(__dirname, '/models')
let files = fs.readdirSync(modelpath)

let jsfiles = files.filter((f) => {
  return f.endsWith('.js')
}, files)

module.exports = {}

for (let f of jsfiles) {
  console.log(`import model from file ${f}...`)
  let name = f.substring(0, f.length - 3)
  let eachfilepath = path.join(modelpath, f)
  module.exports[name] = require(eachfilepath)
}

module.exports.sync = () => {
  db.sync()
}
