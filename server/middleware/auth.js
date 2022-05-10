module.exports = (options) => {
  const jwt = require('jsonwebtoken')
  const assert = require('http-assert')
  const AdminUser = require('../models/AdminUser')

  return async (req, res, next) => {
    const token = String(req.headers.authorization || '').split(' ').pop()
    assert(token, 401, '请先登录')
    // 解析token 参数1:token字符串 参数2:加密key(密钥) 参数3:设置一些解密的方法
    const { id } = jwt.verify(token, req.app.get('secret'))
    assert(id, 401, '无效的token')

    req.user = await AdminUser.findById(id)
    assert(req.user, 401, '请先登录')
    next()
  }
}