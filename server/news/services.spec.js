const { getServerNews, getServerNew } = require('./service');
const data = require('./__mocks__/data');

jest.mock('./model');

describe('news services with mock data', () => {
  it('should get all news in model', () =>
    getServerNews().then((news) => {
      expect(news).toEqual(data);
    }));

  it('should get one news with given id', () =>
    getServerNew(data[0]._id).then((news) => {
      expect(news).toEqual(data[0]);
    }));
});
