const { pool } = require('../client');

const getIndustries = async () => {
  console.log('querying the database');
  try {
    const { rows } = await pool.query(
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
