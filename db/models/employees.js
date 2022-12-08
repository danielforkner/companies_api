const client = require('../client');

const getAllEmployees = async () => {
  try {
    const { rows } = await client.query('SELECT * FROM employees');
    return rows;
  } catch (error) {
    throw new Error(error);
  }
};

const getEmployeesByCompanyId = async (companyId) => {
  try {
    const { rows } = await client.query(
      `SELECT * FROM employees WHERE company_id = $1`,
      [companyId]
    );
    return rows;
  } catch (error) {
    throw new Error(error);
  }
};

module.exports = { getAllEmployees, getEmployeesByCompanyId };
