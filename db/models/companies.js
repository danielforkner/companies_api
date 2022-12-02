const client = require('../client');

const getAllCompanies = async () => {
  try {
    const { rows } = await client.query('SELECT * FROM companies');
    return rows;
  } catch (error) {
    return error;
  }
};

const getRandomCompany = async () => {
  try {
    const {
      rows: [company],
    } = await client.query(`SELECT * FROM companies ORDER BY RANDOM() LIMIT 1`);
    return company;
  } catch (error) {
    return error;
  }
};

const getCompanyById = async (id) => {
  try {
    const {
      rows: [company],
    } = await client.query(`SELECT * FROM companies WHERE id=$1`, [id]);
    return company;
  } catch (error) {
    return error;
  }
};

module.exports = {
  getAllCompanies,
  getRandomCompany,
  getCompanyById,
};
