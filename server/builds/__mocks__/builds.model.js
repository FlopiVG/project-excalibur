const data = require('./builds.data');

const find = () => ({
  lean: () => Promise.resolve(data),
});

const findById = (_id) => {
  const searchData = data.find(dat => dat._id === _id);
  return {
    lean: () => Promise.resolve(searchData),
  };
};

const findByIdAndUpdate = (_id, op) => {
  const searchData = data.find(dat => dat._id === _id);
  if (op.$inc) {
    Object.keys(op.$inc).forEach((key) => {
      searchData[key] += op.$inc[key];
    });
  }

  return Promise.resolve(searchData);
};

module.exports = {
  find,
  findById,
  findByIdAndUpdate,
};
