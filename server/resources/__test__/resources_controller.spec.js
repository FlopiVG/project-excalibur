const request = require('supertest');
const app = require('express')();
const router = require('../resources.router');
const data = require('../__mocks__/resources_data');
const bodyParser = require('body-parser');
const { clone } = require('../../utils/general');

jest.mock('../resources.model');

describe('resources controller test', () => {
  beforeAll(() => {
    app.use(bodyParser.urlencoded({ extended: false }));
    app.use(bodyParser.json());
    router(app);
  });

  it('should has a module', () => {
    expect(router).toBeDefined();
  });

  describe('GET to /api/resources', () => {
    it('should get all resources with status 200', async () => {
      await request(app)
        .get('/api/resources')
        .expect((res) => {
          expect(res.status).toEqual(200);
          expect(res.body).toEqual(data);
        });
    });
  });

  describe('PUT to /api/resources', () => {
    it('should get status 200 update succesfull', async () => {
      const reqQuant = [
        {
          _id: '5add94bc58f904e8aa8b9028',
          quantity: 12,
        },
      ];
      const expectedBody = clone(data[0]);
      expectedBody.quantity -= 12;

      await request(app)
        .put('/api/resources')
        .send(reqQuant)
        .expect((res) => {
          expect(res.status).toEqual(200);
          expect(res.body).toEqual([expectedBody]);
        });
    });

    it('should get status 500 and error message if dont have enough resources', async () => {
      const reqQuant = [
        {
          _id: '5add94bc58f904e8aa8b9028',
          quantity: 8000,
        },
      ];

      await request(app)
        .put('/api/resources')
        .send(reqQuant)
        .expect((res) => {
          expect(res.status).toEqual(500);
          expect(res.text).toEqual('Dont have enought resources.');
        });
    });
  });
});
