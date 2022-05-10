const express = require('express')
const path = require('path')

const app = express()

app.set('secret', '1af133riqcg3ug1')

app.use('/uploads', express.static(path.join(__dirname, '/uploads')))
app.use(express.json())
app.use(require('cors')())

require('./routers/admin')(app)
require('./plugins/db')(app)

app.listen(3000, () => {
  console.log('http://localhost:3000');
})