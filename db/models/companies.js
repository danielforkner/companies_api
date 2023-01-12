const { Client } = require('pg');
const { DB_URL } = require('../connections');

const getAllCompanies = async (Client) => {
  const client = new Client(DB_URL);
  console.log('querying the database');
  try {
    await client.connect();
    const { rows } = await client.query(
      'SELECT * FROM companies ORDER BY company_name ASC'
    );
    return rows;
  } catch (error) {
    throw new Error(error);
  } finally {
    console.log('closing the database connection');
    await client.end();
  }
};

const getRandomCompany = async (Client) => {
  const client = new Client(DB_URL);
  console.log('querying the database');
  try {
    await client.connect();
    const {
      rows: [company],
    } = await client.query(`SELECT * FROM companies ORDER BY RANDOM() LIMIT 1`);
    return company;
  } catch (error) {
    throw new Error(error);
  } finally {
    console.log('closing the database connection');
    await client.end();
  }
};

const getCompanyById = async (id) => {
  const client = new Client(DB_URL);
  console.log('querying the database');
  try {
    await client.connect();
    const {
      rows: [company],
    } = await client.query(`SELECT * FROM companies WHERE id=$1`, [id]);
    return company;
  } catch (error) {
    throw new Error(error);
  } finally {
    console.log('closing the database connection');
    await client.end();
  }
};

const getAllCompanyIds = async (Client) => {
  const client = new Client(DB_URL);
  console.log('querying the database');
  try {
    await client.connect();
    const { rows } = await client.query(`SELECT id FROM companies`);
    return rows;
  } catch (error) {
    throw new Error(error);
  } finally {
    console.log('closing the database connection');
    await client.end();
  }
};

module.exports = {
  getAllCompanies,
  getRandomCompany,
  getCompanyById,
  getAllCompanyIds,
};
