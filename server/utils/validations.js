function checkFoundDoc(doc, msg = 'Dont found the resource.') {
  return new Promise((resolve, reject) => {
    if (doc && !doc.length) resolve(doc);
    else reject(new Error(msg));
  });
}

module.exports = {
  checkFoundDoc,
};
