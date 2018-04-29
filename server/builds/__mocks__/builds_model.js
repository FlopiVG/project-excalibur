const data = require('./builds_data');
const { clone } = require('../../utils/general');

const find = () => ({
  lean: () => Promise.resolve(clone(data)),
});

const findById = (_id) => {
  const searchData = clone(data).find(dat => dat._id === _id);

  return {
    lean: () => Promise.resolve(searchData),
  };
};

const findByIdAndUpdate = (_id, op) => {
  const searchData = clone(data).find(dat => dat._id === _id);
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
