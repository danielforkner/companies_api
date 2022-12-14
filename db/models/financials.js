const { Client } = require('pg');
const { DB_URL } = require('../connections');

const getAllFinancials = async () => {
  const client = new Client(DB_URL);
  console.log('querying the database');
  try {
    await client.connect();
    const { rows } = await client.query('SELECT * FROM financials');
    return rows;
  } catch (error) {
    throw new Error(error);
  } finally {
    console.log('closing the database connection');
    await client.end();
  }
};

const getFinancialsById = async (id) => {
  const client = new Client(DB_URL);
  console.log('querying the database');
  try {
    await client.connect();
    const { rows } = await client.query(
      'SELECT * FROM financials WHERE company_id=$1',
      [id]
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
  getAllFinancials,
  getFinancialsById,
};
