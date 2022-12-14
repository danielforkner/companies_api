const { Client } = require('pg');
const { DB_URL } = require('../connections');

const getIndustries = async () => {
  const client = new Client(DB_URL);
  console.log('querying the database');
  try {
    await client.connect();
    const { rows } = await client.query(
      `SELECT DISTINCT industry FROM companies ORDER BY industry ASC`
    );
    return rows;
  } catch (error) {
    throw new Error(error);
  } finally {
    console.log('closing the database connection');
    await client.end();
  }
};

module.exports = {
  getIndustries,
};
