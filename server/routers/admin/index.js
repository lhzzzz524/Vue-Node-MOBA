module.exports = app => {
  const express = require('express')
  const path = require('path')
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
  // CRUD接口 通过资源路由 models 对应的mongodb里的表，然后给请求路径上挂载model 供子路由访问
  app.use('/admin/api/rest/:resource', async (req, res, next) => {
    const myModelName = require('inflection').classify(req.params.resource)
    req.model = require(`../../models/${myModelName}`)
    next()
  }, router)


  const multer = require('multer')
  //Multer 接受一个 options 对象，其中最基本的是 dest 属性将告诉 Multer 将上传文件保存在哪。如果你省略 options 对象，这些文件将保存在内存中，永远不会写入磁盘。
  const upload = multer({ dest: path.join(__dirname, '../../uploads') })
  app.use('/admin/api/upload', upload.single('file'), async (req, res) => {
    const file = req.file
    file.url = `http://localhost:3000/uploads/${file.filename}`
    res.send(file)
  })
}