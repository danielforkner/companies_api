const client = require('../client');

const getAllCompanies = async () => {
  try {
    const { rows } = await client.query('SELECT * FROM companies');
    return rows;
  } catch (error) {
    throw new Error(error);
  }
};

const getRandomCompany = async () => {
  try {
    const {
      rows: [company],
    } = await client.query(`SELECT * FROM companies ORDER BY RANDOM() LIMIT 1`);
    return company;
  } catch (error) {
    throw new Error(error);
  }
};

const getCompanyById = async (id) => {
  try {
    const {
      rows: [company],
    } = await client.query(`SELECT * FROM companies WHERE id=$1`, [id]);
    return company;
  } catch (error) {
    throw new Error(error);
  }
};

const getAllCompanyIds = async () => {
  try {
    const { rows } = await client.query(`SELECT id FROM companies`);
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
