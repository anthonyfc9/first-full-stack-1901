const Pokemon = require('../../models/pokemon');
const controller = {};
controller.create = (req, res) => {
  const name = req.body.name,
        description = req.body.description,
        image = req.body.image,
        type = req.body.type;
  Pokemon
    .create(name, description, image, type)
    .then(data => res.json(data))
    .catch(err => console.log('BACKEND ERROR:', err));
};

controller.update = (req, res) => {
  const name = req.body.name,
        description = req.body.description,
        image = req.body.image,
        type = req.body.type,
        id = req.body.id;
  Pokemon
    .update(name, description, image, type, id)
    .then(data => res.json(data))
    .catch(err => console.log('Update error: ', err));
};

module.exports = controller;