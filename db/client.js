const { Client } = require('pg');

const DB_NAME = 'companies_API';

const DB_URL = process.env.DB_URL || `postgres://localhost:5432/${DB_NAME}`;

const client = new Client(DB_URL);

module.exports = client;
