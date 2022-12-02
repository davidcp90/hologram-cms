const { Pool } = require("pg");
require("dotenv").config();
// Create a connection pool using the connection information provided on bit.io.
const connection = {
  user: process.env.BIT_PG_USER,
  host: process.env.BIT_PG_HOST,
  database: process.env.BIT_PG_NAME, // public database
  password: process.env.BIT_PG_PSSWD, // key from bit.io database page connect menu
  port: 5432,
  ssl: true,
};
console.log(connection);
const pool = new Pool(connection);

pool.query(
  'SELECT * FROM "test" limit 10;',
  (err, res) => {
    console.table(res.rows); // you could also just console.log, but console.table is neat :)
  }
);
