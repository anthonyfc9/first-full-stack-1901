const db = require('../db');

const Pokemon = {};

Pokemon.findAll = () => {
  return db.manyOrNone('SELECT * FROM pokemon');
};

Pokemon.findById = (id) => {
    return db.one(
      'SELECT * FROM pokemon WHERE id=$1',
      [id]
    );
  };
  Pokemon.create = (name, description, image, type) => {
    return db.one(
      'INSERT INTO pokemon (name, description, image, type) VALUES ($1, $2, $3, $4) returning id',
      [name, description, image, type]
    );
  };

Pokemon.update = (name, description, image, type, id) => {
  return db.one(
    'UPDATe pokemon SET name = $1, description =$2, image = $3, type = $4, id = $5'
    [name, description, image, type, id]
  );
};



module.exports = Pokemon;