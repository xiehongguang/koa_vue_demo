/**
 * Created by Administrator on 2017/5/27.
 */
// 每次请求都用到，且每次仅仅只改变其值的变量在外部声明

// 引入设备devices模块
const devices = require('../models/devices')
// 引入站点sites模块
const sites = require('../models/sites')
// 引入事件events模块
const events = require('../models/events')
// 获取当前时间
var time = new Date()
/*
 deviceid是刚刚插入devices表中的那条数据的id
 siteid是刚刚插入site表中的那条数据的id
 devicenewrecord是本次请求插入devices表的一条记录
 sitenewrecord是本次请求插入sites表的一条记录
 */
var deviceid, siteid, devicenewrecord, sitenewrecord
// 通过sites调用sites模块的sites，从而得到对site表的映射
var sitesmapped = sites.sites
// 通过devices调用devices模块的devices，从而得到对devices表的映射
var devicesmapped = devices.devices
// 对外公开的接口
module.exports = {
  // 通过POST方法来接收数据
  'POST /api/input/': async(ctx, next) => {
    // 获取POST请求传来的数据
    var messages = ctx.request.header.message
    // 将接受的数据转换成JSON格式
    var messagejson = JSON.parse(messages)
    // 获取当前时间
    time = new Date()
    // 向devices表中插入一条数据
    await devicesmapped.create({
      device_type: messagejson.device_type,
      device_IMEI: messagejson.device_IMEI,
      device_IP: messagejson.device_IP,
      device_name: messagejson.device_name
    }).then(function (p) {
      // 获取出刚刚插入的那条数据的id
      deviceid = p.id
      console.log('create: ' + JSON.stringify(p))
    })
    // 向sites表中插入一条数据
    await sitesmapped.create({
      site_address: messagejson.site_address,
      site_name: messagejson.site_name,
      server_port: messagejson.server_port,
      server_ip: messagejson.server_ip
    }).then(function (p) {
      // 获取出刚刚插入的那条数据的id
      siteid = p.id
      console.log('create: ' + JSON.stringify(p))
    })
    // 调用events模块下的addEvent()方法来向connect表中插入数据
    events.addEvent(deviceid, siteid, messagejson.isServer, messagejson.statusCode, messagejson.errorTime, messagejson.errorDetail, time, messagejson.requestTime)
  }
}
