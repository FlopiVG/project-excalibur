const request = require('supertest');
const app = require('express')();
const router = require('./news.router');
const mockData = require('./__mocks__/news.data');

jest.mock('./news.model');

describe('news controller with mock data', () => {
  beforeAll(() => {
    router(app);
  });

  it('should send 200 code and data in /api/news', (done) => {
    request(app)
      .get('/api/news')
      .expect(200, mockData, done);
  });

  it('should send 200 code and data in /api/news/:id', (done) => {
    const doc = mockData[0];
    request(app)
      .get(`/api/news/${doc._id}`)
      .expect(200, doc, done);
  });

  it('should send 500 code and error message if dont found doc in /api/news/:id', (done) => {
    request(app)
      .get('/api/news/foo')
      .expect(500, 'Dont found the resource.', done);
  });
});
