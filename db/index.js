// db/index.js
const pgp = require("pg-promise")();

const db = pgp(
	process.env.DATABASE_URL
	// modify the following string with your user name:
  // || 'postgres://<username>@localhost:5432/<database name>');
	|| "postgres://anthony:1946@localhost:5432/pokemon_fullstack");


module.exports = db;