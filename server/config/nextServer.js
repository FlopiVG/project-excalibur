const next = require('next');

const dev = process.env.NODE_ENV !== 'production';
const port = process.env.PORT || 3000;

const nextApp = next({ dev });
const nextHandler = nextApp.getRequestHandler();

module.exports = (app, server) => {
  nextApp.prepare().then(() => {
    app.get('*', (req, res) => nextHandler(req, res));

    server.listen(port, (err) => {
      if (err) throw err;
      // eslint-disable-next-line no-console
      console.log(`Ready on port ${port}`);
    });
  });
};
