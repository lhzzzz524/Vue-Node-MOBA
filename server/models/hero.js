const mongoose = require('mongoose')

const schema = new mongoose.Schema({
  name: { type: String },
  photo: { type: String },
  title: { type: String },
  categories: [{ type: mongoose.SchemaTypes.ObjectId, ref: 'Category' }],
  scores: {
    difficult: { type: Number },
    skills: { type: Number },
    attack: { type: Number },
    survive: { type: Number },
  },
  skills: [{
    icon: { type: String },
    name: { type: String },
    description: { type: String },
    tips: { type: String }
  }],
  goods1: [{ type: mongoose.SchemaTypes.ObjectId, ref: 'Item' }],
  goods2: [{ type: mongoose.SchemaTypes.ObjectId, ref: 'Item' }],
  usageTips: { type: String },
  battleTips: { type: String },
  teamTips: { type: String },
  partner: [{
    hero: { type: mongoose.SchemaTypes.ObjectId, ref: 'Hero' },
    description: { type: mongoose.SchemaTypes.ObjectId, ref: 'Item' }
  }]
})

module.exports = mongoose.model('Hero', schema)