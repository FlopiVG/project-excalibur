const User = require('./users_model');
const {
  getAllModelUsers,
  deleteModelUser,
  createNewUser,
  checkLogingUser,
} = require('./users_service')(User);

const getUsers = (req, res) => {
  getAllModelUsers()
    .then(data => res.status(200).send(data))
    .catch(error => res.status(500).send(error.message));
};

const createUser = (req, res) => {
  createNewUser(req.body)
    .then(data => res.status(201).send(data))
    .catch(error => res.status(500).send(error.message));
};

const deleteUser = (req, res) => {
  deleteModelUser(req.params.id)
    .then(data => res.status(204).send(data))
    .catch(error => res.status(500).send(error.message));
};

const whoAmi = (req, res) => {
  const { user } = req;

  if (user) res.status(200).send(user);
  else res.status(401).end();
};

const loginUser = (req, res) => {
  checkLogingUser(req.user)
    .then(data => res.status(200).send(data))
    .catch(error => res.status(500).send(error.message));
};

module.exports = {
  getUsers,
  createUser,
  deleteUser,
  whoAmi,
  loginUser,
};
