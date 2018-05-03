const mongoose = require('mongoose');
const mockData = require('./__mocks__/users_data');
const { generateMockData } = require('../utils/mock');

const { Schema } = mongoose;

const userSchema = new Schema({
  name: {
    type: String,
    unique: true,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    validate: {
      validator: v => /\S+@\S+\.\S+/.test(v),
      message: '{VALUE} is not a valid email.',
    },
  },
});

const usersModel = mongoose.model('users', userSchema);

generateMockData(usersModel, mockData);

module.exports = usersModel;
