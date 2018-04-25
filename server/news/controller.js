const { getServerNews, getServerNew } = require('./service');

function getNews(req, res) {
  getServerNews()
    .then(data => res.status(200).send(data))
    .catch(error => res.status(500).send(error.message));
}

function getNew(req, res) {
  getServerNew(req.params.id)
    .then(data => res.status(200).send(data))
    .catch(error => res.status(500).send(error.message));
}

module.exports = {
  getNews,
  getNew,
};
