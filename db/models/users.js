const { pool } = require('../client');

const create = async ({ username, password }) => {
  console.log('querying the database to register a user');
  try {
    const {
      rows: [user],
    } = await pool.query(
      `INSERT INTO users (username, password) VALUES ($1, $2) RETURNING *`,
      [username, password]
    );
    return user;
  } catch (error) {
    throw new Error(error);
  }
};

const getUserByUsername = async (username) => {
  console.log('querying the database to get a user by username');
  try {
    const {
      rows: [user],
    } = await pool.query(`SELECT * FROM users WHERE username = $1`, [username]);
    return user;
  } catch (error) {
    throw new Error(error);
  }
};

const updateLoginTimestamp = async (id) => {
  console.log('querying the database to update a user login timestamp');
  try {
    const {
      rows: [last_login],
    } = await pool.query(
      `UPDATE users SET last_login = CURRENT_TIMESTAMP WHERE id = $1 RETURNING last_login`,
      [id]
    );
    return last_login;
  } catch (error) {
    throw new Error(error);
  }
};

module.exports = {
  create,
  getUserByUsername,
  updateLoginTimestamp,
};
