const mongoose = require('mongoose');
const mockData = require('./__mocks__/villages_data');
const { generateMockData } = require('../utils/mock');

const { Schema } = mongoose;

const villageSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  builds: [
    {
      info: {
        type: Schema.Types.ObjectId,
        ref: 'builds',
      },
      level: Number,
    },
  ],
  resources: [
    {
      info: {
        type: Schema.Types.ObjectId,
        ref: 'resources',
      },
      quantity: Number,
    },
  ],
});

const villageModel = mongoose.model('villages', villageSchema);

generateMockData(villageModel, mockData);

module.exports = villageModel;
