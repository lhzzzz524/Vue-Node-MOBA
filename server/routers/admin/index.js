module.exports = app => {
  const express = require('express')
  const category = require('../../models/category')
  const router = express.Router()

  router.post('/categories', async (req, res) => {
    const model = await category.create(req.body)
    res.send(model)
  })

  router.get('/categories', async (req, res) => {
    const model = await category.find().limit(10)
    res.send(model)
  })
  app.use('/admin/api', router)
}