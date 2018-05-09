const Village = require('./villages_model');
const {
  getVillageFromId,
  createNewUserVillage,
  removeUserVillage,
} = require('./villages_service')(Village);

const getVillage = (req, res) => {
  getVillageFromId(req.params.id)
    .then(data => res.status(200).send(data))
    .catch(error => res.status(500).send(error.message));
};

const createVillage = (req, res) => {
  createNewUserVillage(req.body, req.user._id)
    .then(data => res.status(200).send(data))
    .catch(error => res.status(500).send(error.message));
};

const deleteVillage = (req, res) => {
  removeUserVillage(req.params.id, req.user._id)
    .then(data => res.status(200).send(data))
    .catch(error => res.status(500).send(error.message));
};

module.exports = {
  getVillage,
  createVillage,
  deleteVillage,
};
