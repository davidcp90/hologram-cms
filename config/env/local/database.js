const path = require('path');

module.exports = ({ env }) => ({
  connection: {
    client: "postgres",
    connection: {
      host: env("BIT_PG_HOST"),
      port: env.int("BIT_PG_PORT"),
      database: env("BIT_PG_NAME"),
      user: env("BIT_PG_USER"),
      password: env("BIT_PG_PSSWD"),
      ssl: {
        rejectUnauthorized: env.bool("BIT_PG_SSL_SELF"), // For self-signed certificates
      },
    },
    debug: false,
  },
});

