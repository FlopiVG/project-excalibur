const mockModel = require('../__mocks__/users_model');
const data = require('../__mocks__/users_data');
const Service = require('../users_service');

describe('users service test', () => {
  let service;

  beforeEach(() => {
    service = Service(mockModel);
  });
  it('should has a module', () => {
    expect(service).toBeDefined();
  });

  describe('get all users', () => {
    it('should get all users', async () => {
      const received = await service.getAllModelUsers();

      expect(received).toEqual(data);
    });
  });
});
