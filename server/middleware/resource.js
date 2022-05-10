module.exports = options => {
  // CRUD接口 通过资源路由 models 对应的mongodb里的表，然后给请求路径上挂载model 供子路由访问
  return async (req, res, next) => {
    const myModelName = require('inflection').classify(req.params.resource)
    req.model = require(`../models/${myModelName}`)
    next()
  }
}