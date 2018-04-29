const mongoose = require('mongoose');
const mockData = require('./__mocks__/news.data');
const { generateMockData } = require('../utils/mock');

const { Schema } = mongoose;

const newsSchema = new Schema({
  title: String,
  text: String,
});

const newsModel = mongoose.model('news', newsSchema);

generateMockData(newsModel, mockData);

module.exports = newsModel;
