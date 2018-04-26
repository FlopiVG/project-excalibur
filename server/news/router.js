const { getNews, getNew } = require('./controller');

module.exports = (app) => {
  app.get('/api/news', getNews);
  app.get('/api/news/:id', getNew);
};
