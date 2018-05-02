const { clone } = require('./general');

function generateMockData(model, mockData) {
  if (process.env.MOCK) {
    model
      .find({})
      .then((data) => {
        if (data.length === 0) return model.insertMany(mockData);
        return Promise.resolve(null);
      })
      .then(isInit =>
        isInit &&
          // eslint-disable-next-line no-console
          console.log(`${model.modelName} model initialized with mock data.`))
      // eslint-disable-next-line no-console
      .catch(console.log);
  }
}

class MockModel {
  data = [];
  find = () => ({
    lean: () => this.lean(clone(this.data)),
  });

  findById = (_id) => {
    const searchData = this.data.find(dat => dat._id === _id);

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

module.exports = {
  generateMockData,
  MockModel,
};
