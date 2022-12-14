const DB_NAME = 'companies_API';
const DB_URL = process.env.DB_URL || `postgres://localhost:5432/${DB_NAME}`;

module.exports = { DB_URL };
