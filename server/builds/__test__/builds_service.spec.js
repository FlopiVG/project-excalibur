const data = require('../__mocks__/builds_data');
const Service = require('../builds_service');
const mockModel = require('../__mocks__/builds_model');
const { mapUpgradeCost } = require('../builds_utils');
const { clone } = require('../../utils/general');

jest.mock('../builds_shared');

describe('builds service test', () => {
  let service;
  let mockResponse;

  beforeEach(() => {
    service = Service(mockModel);
    mockResponse = clone(data);
  });

  describe('get all builds', () => {
    it('should get all builds in model', async () => {
      const builds = await service.getUserBuilds();

      expect(builds).toEqual(await mapUpgradeCost(mockResponse));
    });
  });

  describe('get one build', () => {
    it('should get one build with given id', async () => {
      const expectedBuild = mockResponse[0];

      const build = await service.getUserBuild(expectedBuild._id);

      expect(build).toEqual(await mapUpgradeCost(expectedBuild));
    });
  });

  describe('update build', () => {
    it('should update a level build correctly', async () => {
      const expectedBuild = mockResponse[0];

      expect(expectedBuild.level).toEqual(1);
      expectedBuild.level += 1;

      const build = await service.upgradeUserBuild(expectedBuild._id);

      expect(build.level).toEqual(2);
      expect(build).toEqual(await mapUpgradeCost(expectedBuild));
    });
  });
});