const { checkFoundDoc } = require('../utils/validations');
const News = require('./model');

function getServerNews() {
  return new Promise((resolve, reject) => {
    News.find({})
      .lean()
      .then(resolve)
      .catch(reject);
  });
}

function getServerNew(id) {
  return new Promise((resolve, reject) => {
    News.findById(id)
      .lean()
      .then(checkFoundDoc)
      .then(resolve)
      .catch(reject);
  });
}

module.exports = {
  getServerNews,
  getServerNew,
};
