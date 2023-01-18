const { Pool } = require('pg');
const config = process.env.DEVELOPMENT
  ? {
      host: 'localhost',
      user: process.env.DB_USER,
      database: process.env.DB_NAME,
      port: 5432,
      max: 20,
      idleTimeoutMillis: 30000,
      connectionTimeoutMillis: 2000,
    }
  : {
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      database: process.env.DB_NAME,
      password: process.env.DB_PASS,
      port: 5432,
      max: 20,
      ssl: true,
      idleTimeoutMillis: 30000,
      connectionTimeoutMillis: 2000,
    };
const pool = new Pool(config);
console.log(config);

module.exports = { pool };
