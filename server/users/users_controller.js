const User = require('./users_model');
const { getAllModelUsers, createNewUser } = require('./users_service')(User);

const getUsers = (req, res) => {
  getAllModelUsers()
    .then(data => res.status(200).send(data))
    .catch(error => res.status(500).send(error.message));
};

const createUser = (req, res) => {
  createNewUser(req.body)
    .then(data => res.status(201).send(data))
    .catch(error => res.status(500).send(error));
};

module.exports = {
  getUsers,
  createUser,
};
