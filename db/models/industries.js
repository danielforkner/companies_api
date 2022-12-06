const client = require('../client');

const getIndustries = async () => {
  try {
    const { rows } = await client.query(
      `SELECT DISTINCT industry FROM companies ORDER BY industry ASC`
    );
    return rows;
  } catch (error) {
    throw new Error(error);
  }
};

module.exports = {
  getIndustries,
};
