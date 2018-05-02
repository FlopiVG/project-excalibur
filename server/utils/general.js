const clone = item => JSON.parse(JSON.stringify(item));

const removeMongoKeys = (docs) => {
  if (docs.length) {
    return docs.map(removeMongoKeys);
  }
  const { _id, __v, ...rest } = docs;
  return {
    ...rest,
  };
};

module.exports = {
  clone,
  removeMongoKeys,
};
