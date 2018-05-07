const data = require('./users_data');
const { MockModel } = require('../../utils/mock');

class UserModel extends MockModel {
  data = data;
}

module.exports = new UserModel();
