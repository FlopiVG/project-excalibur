const mongoose = require('mongoose');
const mockData = require('./builds.mock');
const { generateMockData } = require('../utils/mock');

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

const buildsModel = mongoose.model('builds', buildSchema);

generateMockData(buildsModel, mockData);

module.exports = buildsModel;
