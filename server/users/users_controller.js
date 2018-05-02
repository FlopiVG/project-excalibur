const User = require('./users_model');
const { getAllModelUsers } = require('./users_service')(User);

const getUsers = (req, res) => {
  getAllModelUsers()
    .then(data => res.status(200).send(data))
    .catch(error => res.status(500).send(error.message));
};

module.exports = {
  getUsers,
};
