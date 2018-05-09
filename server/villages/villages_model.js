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
  idUser: {
    type: Schema.Types.ObjectId,
    ref: 'users',
  },
  builds: [
    {
      idBuild: {
        type: Schema.Types.ObjectId,
        ref: 'builds',
      },
      level: Number,
    },
  ],
  resources: [
    {
      idResource: {
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
