const data = require('./__mocks__/builds.data');
const {
  getUserBuilds,
  getUserBuild,
  upgradeUserBuild,
} = require('./builds.service');

jest.mock('./builds.model');
jest.mock('./builds.shared');

describe('builds service with mock data', () => {
  xit('should get all builds in model', () =>
    getUserBuilds()
      .then(builds => expect(builds).toEqual(data))
      .catch(error => expect(error).toBeFalsy()));

  xit('should get one build with given id', () =>
    getUserBuild(data[0]._id)
      .then(build => expect(build).toEqual(data[0]))
      .catch(error => expect(error).toBeFalsy()));

  xit('should update a build correctly', () => {
    expect(data[0].level).toEqual(1);

    return upgradeUserBuild(data[0]._id)
      .then(build => expect(build.level).toEqual(2))
      .catch(error => expect(error).toBeFalsy());
  });
});
