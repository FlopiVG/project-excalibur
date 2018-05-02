function checkFoundDoc(doc) {
  return new Promise((resolve, reject) => {
    if (doc) resolve(doc);
    else reject(new Error('Dont found the resource.'));
  });
}

module.exports = {
  checkFoundDoc,
};
