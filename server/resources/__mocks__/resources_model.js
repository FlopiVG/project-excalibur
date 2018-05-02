const data = require('./resources_data');
const { MockModel } = require('../../utils/mock');

class ResourceModel extends MockModel {
  data = data;
}

module.exports = new ResourceModel();
