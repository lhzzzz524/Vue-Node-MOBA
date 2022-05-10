module.exports = app => {
  const express = require('express')
  const path = require('path')
  const jwt = require('jsonwebtoken')
  const assert = require('http-assert')
  require('express-async-errors')
  const AdminUser = require('../../models/AdminUser')
  const authMiddleware = require('../../middleware/auth')
  const resourceMiddleware = require('../../middleware/resource')
  const router = express.Router({
    mergeParams: true
  })

  //新建分类
  router.post('/', async (req, res) => {
    const model = await req.model.create(req.body)
    res.send(model)
  })

  //获取分类列表
  router.get('/', async (req, res) => {
    let items = {}
    if (req.model.modelName === 'Category') {
      items = await req.model.find().populate('parent').limit(10)
    } else {
      items = await req.model.find().limit(10)
    }
    res.send(items)
  })

  //渲染编辑分类页
  router.get('/:id', async (req, res) => {
    const model = await req.model.findById(req.params.id)
    res.send(model)
  })

  //提交编辑分类页（修改操作）
  router.put('/:id', async (req, res) => {
    await req.model.findByIdAndUpdate(req.params.id, req.body)
    res.send({
      success: true
    })
  })
  //删除分类
  router.delete('/:id', async (req, res) => {
    const model = await req.model.findByIdAndDelete(req.params.id)
    res.send(model)
  })

  app.use('/admin/api/rest/:resource', authMiddleware(), resourceMiddleware(), router)

  const multer = require('multer')
  //Multer 接受一个 options 对象，其中最基本的是 dest 属性将告诉 Multer 将上传文件保存在哪。如果你省略 options 对象，这些文件将保存在内存中，永远不会写入磁盘。
  const upload = multer({ dest: path.join(__dirname, '../../uploads') })
  app.post('/admin/api/upload', authMiddleware(), upload.single('file'), async (req, res) => {
    const file = req.file
    file.url = `http://localhost:3000/uploads/${file.filename}`
    res.send(file)
  })

  app.post('/admin/api/login', async (req, res) => {
    const { userName, passWord } = req.body
    //1.根据用户名找用户
    const user = await AdminUser.findOne({ userName }).select('+passWord')
    assert(user, 422, '账号或密码错误')
    //2.校验密码
    const isValid = require('bcryptjs').compareSync(passWord, user.passWord)
    assert(isValid, 422, '账号或密码错误')

    //3.返回token
    // 生成token 参数1:payload 可以存储用户信息 参数2:加密的key或者叫做密钥 参数3:其他选项 expiresIn表示有效期
    const token = jwt.sign({
      id: user._id
    }, app.get('secret'))
    res.send({ token })
  })


  app.use(async (err, req, res, next) => {
    res.status(err.statusCode || 500).send({
      message: err.message
    })
  })
}