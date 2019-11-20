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

module.exports = Pokemon;