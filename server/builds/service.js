// const Builds = require('./model');
const Build = require('./model');

// const builds = Builds;

/* function calculeTotalCost(build) {
  const { cost, level } = build;
  return {
    ...build,
    foodCost: Math.floor(cost.food.quantity * (cost.food.multi * level)),
    woodCost: Math.floor(cost.wood.quantity * (cost.wood.multi * level)),
  };
} */

function getBuildsFromModel() {
  return new Promise((resolve, reject) => {
    Build.find({})
      .then(builds => resolve(builds))
      .catch(error => reject(error));
  });
}

/* function updateLevelFromModel(id) {
  return new Promise((resolve, reject) => {
    if (!builds.find(build => build.id === id)) {
      reject(new Error(`Dont find any build with id ${id}`));
    }
    builds = builds.map((build) => {
      if (build.id !== id) return build;
      return {
        ...build,
        level: build.level + 1,
      };
    });
    resolve(builds.map(calculeTotalCost).find(build => build.id === id));
  });
} */

module.exports = {
  getBuildsFromModel,
  // updateLevelFromModel,
};
