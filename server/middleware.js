const authorization = (req, res, next) => {
  const { user } = req;

  if (!user) res.status(401).end();
  else next();
};

module.exports = {
  authorization,
};
