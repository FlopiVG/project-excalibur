const Builds = require('./model');

let builds = Builds;

function getBuildsFromModel() {
  return new Promise((resolve) => {
    resolve(builds);
  });
}

function updateLevelFromModel(id) {
  return new Promise((resolve, reject) => {
    if (!builds.find(resource => resource.id === id)) {
      reject(new Error(`Dont find any resource with id ${id}`));
    }
    builds = builds.map((resource) => {
      if (resource.id !== id) return resource;
      return {
        ...resource,
        level: resource.level + 1,
      };
    });
    resolve(builds.find(build => build.id === id));
  });
}

module.exports = {
  getBuildsFromModel,
  updateLevelFromModel,
};
