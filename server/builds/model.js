const mongoose = require('mongoose');

const { Schema } = mongoose;

const upgradeCostSchema = new Schema({
  _id: {
    type: Schema.Types.ObjectId,
    ref: 'resources',
  },
  name: String,
  quantity: Number,
  multi: Number,
});

const buildSchema = new Schema({
  name: String,
  description: String,
  imgSrc: String,
  level: Number,
  upgradeCost: [upgradeCostSchema],
});

module.exports = mongoose.model('builds', buildSchema);
