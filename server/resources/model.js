const mongoose = require('mongoose');
const mockData = require('./mock');
const { generateMockData } = require('../utils/mock');

const { Schema } = mongoose;

const resourceSchema = new Schema({
  name: String,
  quantity: Number,
  perSec: Number,
  incPerUpdate: Number,
});

const resourcesModel = mongoose.model('resources', resourceSchema);

generateMockData(resourcesModel, mockData);

module.exports = resourcesModel;
