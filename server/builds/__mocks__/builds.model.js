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

module.exports = {
  find,
  findById,
};
