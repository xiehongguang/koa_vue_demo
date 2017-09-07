// 支持REST的middleware   给ctx添加一个rest()方法，直接输出JSON数据。
// http://www.liaoxuefeng.com/wiki/001434446689867b27157e896e74d51a89c25cc8b43bdb3000/0014735944539193ab2edd2740f44a79efb438a05e83727000
module.exports = {
  APIError: function (code, message) {
    this.code = code || 'internal:unknown_error'
    this.message = message || ''
  },
  restify: (pathPrefix) => {
    // REST API前缀，默认为/api/:
    pathPrefix = pathPrefix || '/api/'
    return async (ctx, next) => {
            // 是否是REST API前缀?
      if (ctx.request.path.startsWith(pathPrefix)) {
        console.log(`Process API ${ctx.request.method} ${ctx.request.url}...`);
         // 绑定rest()方法: 指定返回数据的格式  任何支持REST的异步函数
        ctx.rest = (data) => {
          // 指定json格式
          ctx.response.type = 'application/json'
          ctx.response.body = data
        }
        try {
          // await只是yield的别名
          await next()
        } catch (e) {
          console.log('Process API error...')
          ctx.response.status = 400
          ctx.response.type = 'application/json'
          ctx.response.body = {
            code: e.code || 'internal:unknown_error',
            message: e.message || ''
          }
        }
      } else {
        // 下一个中间件   等待下一个
        await next()
      }
    }
  }
}
