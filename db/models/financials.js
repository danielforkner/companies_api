const { pool } = require('../client');

const getAllFinancials = async () => {
  console.log('querying the database');
  try {
    const { rows } = await pool.query('SELECT * FROM financials');
    return rows;
  } catch (error) {
    throw new Error(error);
  }
};

const getFinancialsById = async (id) => {
  console.log('querying the database');
  try {
    const { rows } = await pool.query(
      'SELECT * FROM financials WHERE company_id=$1',
      [id]
    );
    return rows;
  } catch (error) {
    throw new Error(error);
  }
};

module.exports = {
  getAllFinancials,
  getFinancialsById,
};
