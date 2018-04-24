const mongoose = require('mongoose');
const mockData = require('./mock');

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

if (process.env.MOCK) {
  buildsModel
    .find({})
    .then((builds) => {
      if (builds.length === 0) return buildsModel.insertMany(mockData);
      return Promise.resolve(null);
    })
    .then(isInit =>
    // eslint-disable-next-line no-console
      isInit && console.log('Builds model initialize with mock data.'))
    // eslint-disable-next-line no-console
    .catch(console.log);
}

module.exports = buildsModel;
