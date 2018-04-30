const { getNews, getNew } = require('./news_controller');

module.exports = (app) => {
  app.get('/api/news', getNews);
  app.get('/api/news/:id', getNew);
};
