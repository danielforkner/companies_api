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
      connectionString: process.env.DB_URL,
    };
const pool = new Pool(config);

module.exports = { pool };
