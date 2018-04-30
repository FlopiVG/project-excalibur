const mapResourcesToUpdate = (resource, resourcesQuantities) =>
  new Promise((resolve, reject) => {
    resourcesQuantities.forEach((res) => {
      if (res._id.toString() === resource._id.toString()) {
        resolve({ ...resource, needRes: res.quantity });
      }
    });
    reject(new Error('Dont find the resource.'));
  });

const checkEnoughResource = resource =>
  new Promise((resolve, reject) => {
    if (resource.quantity > resource.needRes) {
      resolve(resource);
    }
    reject(new Error('Dont have enought resources.'));
  });

module.exports = {
  mapResourcesToUpdate,
  checkEnoughResource,
};
