const { pool } = require('../client');

const getAllCompanies = async () => {
  console.log('querying the database');
  try {
    const { rows } = await pool.query(
      'SELECT * FROM companies ORDER BY company_name ASC'
    );
    return rows;
  } catch (error) {
    throw new Error(error);
  }
};

const getRandomCompany = async () => {
  console.log('querying the database for random company');
  try {
    const {
      rows: [company],
    } = await pool.query(`SELECT * FROM companies ORDER BY RANDOM() LIMIT 1`);
    return company;
  } catch (error) {
    throw new Error(error);
  }
};

const getCompanyById = async (id) => {
  console.log('querying the database');
  try {
    const {
      rows: [company],
    } = await pool.query(`SELECT * FROM companies WHERE id=$1`, [id]);
    return company;
  } catch (error) {
    throw new Error(error);
  }
};

const getAllCompanyIds = async () => {
  console.log('querying the database');
  try {
    const { rows } = await pool.query(`SELECT id FROM companies`);
    return rows;
  } catch (error) {
    throw new Error(error);
  }
};

module.exports = {
  getAllCompanies,
  getRandomCompany,
  getCompanyById,
  getAllCompanyIds,
};
