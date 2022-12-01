const client = require('../client');

const getAllCompanies = async () => {
  try {
    const { rows } = await client.query('SELECT * FROM companies');
    return rows;
  } catch (error) {
    console.error(error);
  }
};

const getRandomCompany = async () => {
  try {
    const { rows } = await client.query(
      `SELECT * FROM companies ORDER BY RANDOM() LIMIT 1`
    );
    return rows;
  } catch (error) {
    console.error(error);
  }
};

module.exports = {
  getAllCompanies,
  getRandomCompany,
};
