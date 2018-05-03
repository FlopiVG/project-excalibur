const data = require('./resources_data');
const { MockModel } = require('../../utils/mock');

class ResourceModel extends MockModel {
  constructor(props) {
    super(props);
    this.data = data;
  }
}

module.exports = new ResourceModel();
