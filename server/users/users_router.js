require('./users_passport');
const passport = require('passport');
const {
  getUsers,
  createUser,
  deleteUser,
  whoAmi,
  loginUser,
} = require('./users_controller');

module.exports = (app) => {
  app.get('/api/users', getUsers);
  app.post('/api/user', createUser);
  app.delete('/api/user/:id', deleteUser);
  app.get('/api/whoami', whoAmi);
  app.post('/api/login', passport.authenticate('local'), loginUser);
};
