const { pool } = require('../client');

const getAllEmployees = async () => {
  console.log('querying the database');
  try {
    const { rows } = await pool.query('SELECT * FROM employees');
    return rows;
  } catch (error) {
    throw new Error(error);
  }
};

const getEmployeesByCompanyId = async (companyId) => {
  console.log('querying the database');
  try {
    const { rows } = await pool.query(
      `SELECT * FROM employees WHERE company_id = $1`,
      [companyId]
    );
    return rows;
  } catch (error) {
    throw new Error(error);
  }
};

module.exports = { getAllEmployees, getEmployeesByCompanyId };
