import { getNews, getNew } from './api_news';

describe('news api test', () => {
  it('should getNews return a promise', () => {
    expect(getNews()).toBeInstanceOf(Promise);
  });

  it('should getNew retorun a promise', () => {
    expect(getNew()).toBeInstanceOf(Promise);
  });
});
