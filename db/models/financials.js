const client = require('../client');

const getAllFinancials = async () => {
  try {
    const { rows } = await client.query('SELECT * FROM financials');
    return rows;
  } catch (error) {
    throw new Error(error);
  }
};

const getFinancialsById = async (id) => {
  try {
    const { rows } = await client.query(
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
