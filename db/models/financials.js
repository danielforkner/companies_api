const client = require('../client');

const getAllFinancials = async () => {
    try {
        const { rows } = await client.query('SELECT * FROM financials');
        return rows;
      } catch (error) {
        return error;
      }
}

module.exports = {
    getAllFinancials
  };