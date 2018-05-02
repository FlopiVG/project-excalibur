const request = require('supertest');
const app = require('express')();
const router = require('../users_router');
const data = require('../__mocks__/users_data');
const bodyParser = require('body-parser');

jest.mock('../users_model');

describe('users controller test', () => {
  beforeAll(() => {
    app.use(bodyParser.urlencoded({ extended: false }));
    app.use(bodyParser.json());
    router(app);
  });

  it('should has a module', () => {
    expect(router).toBeDefined();
  });

  describe('GET to /api/users', () => {
    it('should get all users with status 200', async () => {
      await request(app)
        .get('/api/users')
        .expect((res) => {
          expect(res.status).toEqual(200);
          expect(res.body).toEqual(data);
        });
    });
  });
});
