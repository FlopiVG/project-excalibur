const mongoose = require('mongoose');

const { Schema } = mongoose;

const villageSchema = new Schema({
  name: String,
});

const villageModel = mongoose.model('villages', villageSchema);

module.exports = villageModel;
