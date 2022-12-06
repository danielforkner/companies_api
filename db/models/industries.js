const client = require('../client');

const getIndustries = async () => {
  try {
    const { rows } = await client.query(`SELECT industry FROM companies`);
    return rows;
  } catch (error) {
    throw new Error(error);
  }
};

module.exports = {
  getIndustries,
};
