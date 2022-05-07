const mongoose = require('mongoose')

const schema = new mongoose.Schema({
  name: {
    type: String
  },
  items: [{
    img: { type: String },
    imgUrl: { type: String }
  }]
})

module.exports = mongoose.model('Advertising', schema)