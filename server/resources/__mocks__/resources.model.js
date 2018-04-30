const data = require('./resources_data');
const { clone } = require('../../utils/general');

class ResourceModel {
  find = () => ({
    lean: () => this.lean(clone(data)),
  });

  findById = (_id) => {
    const searchData = data.find(dat => dat._id === _id);

    return {
      lean: () => this.lean(clone(searchData)),
    };
  };

  lean = doc => Promise.resolve(clone(doc));

  findByIdAndUpdate = async (_id, op) => {
    const searchData = await this.findById(_id).lean();

    if (op.$inc) {
      Object.keys(op.$inc).forEach((key) => {
        searchData[key] += op.$inc[key];
      });
    }

    return Promise.resolve(clone(searchData));
  };
}

module.exports = new ResourceModel();
