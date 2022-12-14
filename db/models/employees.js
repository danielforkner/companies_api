const { Client } = require('pg');
const { DB_URL } = require('../connections');

const getAllEmployees = async () => {
  const client = new Client(DB_URL);
  console.log('querying the database');
  try {
    await client.connect();
    const { rows } = await client.query('SELECT * FROM employees');
    return rows;
  } catch (error) {
    throw new Error(error);
  } finally {
    console.log('closing the database connection');
    await client.end();
  }
};

const getEmployeesByCompanyId = async (companyId) => {
  const client = new Client(DB_URL);
  console.log('querying the database');
  try {
    await client.connect();
    const { rows } = await client.query(
      `SELECT * FROM employees WHERE company_id = $1`,
      [companyId]
    );
    return rows;
  } catch (error) {
    throw new Error(error);
  } finally {
    console.log('closing the database connection');
    await client.end();
  }
};

module.exports = { getAllEmployees, getEmployeesByCompanyId };
