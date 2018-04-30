const mockModel = require('../__mocks__/resources.model');
const data = require('../__mocks__/resources_data');
const Service = require('../resources.service');
const { clone } = require('../../utils/general');

describe('resource service test', () => {
  let service;

  beforeEach(() => {
    service = Service(mockModel);
  });
  it('should has a module', () => {
    expect(service).toBeDefined();
  });

  describe('get all resources', () => {
    it('should get all resources', async () => {
      const received = await service.getUserResources();

      expect(received).toEqual(data);
    });
  });

  describe('get one resource', () => {
    it('should get one resource with given id', async () => {
      const expected = data[0];
      const received = await service.getUserResource(expected._id);

      expect(received).toEqual(expected);
    });
  });

  describe('update resource', () => {
    let woodId;
    beforeEach(() => {
      woodId = data.find(d => d.name === 'wood')._id;
    });
    it('should update resource correctly', async () => {
      const reqQuant = [
        {
          _id: woodId,
          quantity: 200,
        },
      ];
      const received = await service.updateUserResources(reqQuant);
      const expected = clone(data.filter(d => d.name === 'wood'));
      expected[0].quantity -= 200;

      expect(received).toEqual(expected);
    });

    it('should get error if dont have enough resources', () => {
      const reqQuant = [
        {
          _id: woodId,
          quantity: 8000,
        },
      ];
      const received = service.updateUserResources(reqQuant);

      return expect(received).rejects.toThrowError('Dont have enought resources.');
    });
  });

  describe('update resources tick', () => {
    it('should increase resources', () => {
      const received = service.updateResourcesNextTick();

      return expect(received).resolves.toEqual('Ok.');
    });
  });
});
