const request = require('supertest');
const app = require('express')();
const router = require('../builds.router');
const data = require('../__mocks__/builds.data');
const { clone } = require('../../utils/general');
const { mapUpgradeCost } = require('../builds.utils');

jest.mock('../builds.model');
jest.mock('../builds.shared');

describe('builds controllers test', () => {
  let mockData;
  beforeAll(() => {
    router(app);
  });

  beforeEach(() => {
    mockData = clone(data);
  });

  describe('GET to /api/builds', () => {
    it('should get all builds with 200 code', async () => {
      await request(app)
        .get('/api/builds')
        .expect(async (req) => {
          expect(req.status).toEqual(200);
          expect(req.body).toEqual(await mapUpgradeCost(mockData));
        });
    });
  });

  describe('GET to /api/build/:id', () => {
    it('should get build with 200 code', async () => {
      const expectedBuild = mockData[0];

      await request(app)
        .get(`/api/build/${expectedBuild._id}`)
        .expect(async (req) => {
          expect(req.status).toEqual(200);
          expect(req.body).toEqual(await mapUpgradeCost(expectedBuild));
        });
    });

    it('should get error and 500 code with no found id', async () => {
      await request(app)
        .get('/api/build/foo')
        .expect((req) => {
          expect(req.status).toEqual(500);
          expect(req.text).toEqual('Dont found the resource.');
        });
    });
  });

  describe('POST to /api/build/:id', () => {
    it('should increase level with 200 code', async () => {
      const expectedBuild = mockData[0];
      expectedBuild.level += 1;

      await request(app)
        .post(`/api/build/${expectedBuild._id}`)
        .expect(async (req) => {
          expect(req.status).toEqual(200);
          expect(req.body).toEqual(await mapUpgradeCost(expectedBuild));
        });
    });

    it('should get error and 500 code with no found id', async () => {
      await request(app)
        .post('/api/build/foo')
        .expect((req) => {
          expect(req.status).toEqual(500);
          expect(req.text).toEqual('Dont found the resource.');
        });
    });
  });
});
