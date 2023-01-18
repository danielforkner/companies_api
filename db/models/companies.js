// const { client } = require('../client');

const getAllCompanies = async () => {
  console.log('querying the database');
  try {
    // await client.connect();
    const { rows } = await client.query(
      'SELECT * FROM companies ORDER BY company_name ASC'
    );
    return rows;
  } catch (error) {
    throw new Error(error);
  } finally {
    console.log('closing the database connection');
    // await client.end();
  }
};

const getRandomCompany = async () => {
  console.log('querying the database for random company');
  try {
    await client.connect();
    const {
      rows: [company],
    } = await client.query(`SELECT * FROM companies ORDER BY RANDOM() LIMIT 1`);
    console.log('GOT RESULTS');
    console.log(company);
    return company;
  } catch (error) {
    throw new Error(error);
  } finally {
    console.log('closing the database connection');
    await client.end();
  }
};

const getCompanyById = async (id) => {
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

const getAllCompanyIds = async () => {
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
