const { getServerNews, getServerNew } = require('../news_service');
const data = require('../__mocks__/news_data');

jest.mock('../news_model');

describe('news services with mock data', () => {
  it('should get all news in model', () =>
    getServerNews()
      .then((news) => {
        expect(news).toEqual(data);
      })
      // eslint-disable-next-line no-console
      .catch(console.log));

  it('should get one news with given id', () =>
    getServerNew(data[0]._id)
      .then((news) => {
        expect(news).toEqual(data[0]);
      })
      // eslint-disable-next-line no-console
      .catch(console.log));
});
