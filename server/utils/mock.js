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

module.exports = {
  generateMockData,
};
