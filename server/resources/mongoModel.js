const mongoose = require('mongoose');

const { Schema } = mongoose;

const resourceSchema = new Schema({
  name: String,
  quantity: Number,
  perSec: Number,
  incPerUpdate: Number,
});

module.exports = mongoose.model('resources', resourceSchema);
