const Utils = require('../resources.utils');
const { clone } = require('../../utils/general');

describe('resources util test', () => {
  it('should has a module', () => {
    expect(Utils).toBeDefined();
  });

  describe('mapResourcesToUpdate function', () => {
    let resource;
    let quantities;
    beforeEach(() => {
      resource = {
        _id: 'foo',
        name: 'wood',
        quantity: 500,
      };
      quantities = [
        {
          _id: 'foo',
          quantity: 30,
        },
      ];
    });

    it('should return a promise', () => {
      const received = Utils.mapResourcesToUpdate(resource, quantities);

      expect(received).toBeInstanceOf(Promise);
    });

    it('should map correctly the resources', () => {
      const received = Utils.mapResourcesToUpdate(resource, quantities);
      const expectResource = clone(resource);
      expectResource.needRes = 30;

      return expect(received).resolves.toEqual(expectResource);
    });

    it('should send error on reject promise', () => {
      const quantitiesNotFound = [
        {
          _id: 'not-found',
          quantity: 300,
        },
      ];
      const received = Utils.mapResourcesToUpdate(resource, quantitiesNotFound);

      return expect(received).rejects.toThrowError('Dont find the resource.');
    });
  });

  describe('checkEnoughResource function', () => {
    it('should return a promise', () => {
      const received = Utils.checkEnoughResource();

      expect(received).toBeInstanceOf(Promise);
    });

    it('should resolve if resources are enough', () => {
      const resourceEnough = {
        _id: 'foo',
        name: 'wood',
        quantity: 500,
        needRes: 300,
      };
      const received = Utils.checkEnoughResource(resourceEnough);

      return expect(received).resolves.toEqual(resourceEnough);
    });

    it('should reject if there arent enough resources', () => {
      const resourceDontEnough = {
        _id: 'foo',
        name: 'wood',
        quantity: 500,
        needRes: 600,
      };
      const received = Utils.checkEnoughResource(resourceDontEnough);

      return expect(received).rejects.toThrowError('Dont have enought resources.');
    });
  });
});
