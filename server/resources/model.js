const mongoose = require('mongoose');
const mockData = require('./mock');

const { Schema } = mongoose;

const resourceSchema = new Schema({
  name: String,
  quantity: Number,
  perSec: Number,
  incPerUpdate: Number,
});

const resourcesModel = mongoose.model('resources', resourceSchema);

if (process.env.MOCK) {
  resourcesModel
    .find({})
    .then((resources) => {
      if (resources.length === 0) return resourcesModel.insertMany(mockData);
      return Promise.resolve(null);
    })
    .then(isInit =>
    // eslint-disable-next-line no-console
      isInit && console.log('Resources model initialize with mock data.'))
    // eslint-disable-next-line no-console
    .catch(console.log);
}

module.exports = resourcesModel;
