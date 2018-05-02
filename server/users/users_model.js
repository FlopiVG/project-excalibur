const mongoose = require('mongoose');
const mockData = require('./__mocks__/users_data');
const { generateMockData } = require('../utils/mock');

const { Schema } = mongoose;

const userSchema = new Schema({
  name: String,
  password: String,
  email: String,
});

const usersModel = mongoose.model('users', userSchema);

generateMockData(usersModel, mockData);

module.exports = usersModel;
