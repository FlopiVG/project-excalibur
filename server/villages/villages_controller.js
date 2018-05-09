const Village = require('./villages_model');
const { getVillageFromId } = require('./villages_service')(Village);

const getVillage = (req, res) => {
  getVillageFromId(req.params.id)
    .then(data => res.status(200).send(data))
    .catch(error => res.status(500).send(error.message));
};

module.exports = {
  getVillage,
};
