const { client } = require('../client');

const create = async ({ username, password }) => {
  console.log('querying the database to register a user');
  try {
    await client.connect();
    const { rows } = await client.query(
      `INSERT INTO users (username, password) VALUES ($1, $2) RETURNING username`,
      [username, password]
    );
    return rows;
  } catch (error) {
    throw new Error(error);
  } finally {
    console.log('closing the database connection');
    await client.end();
  }
};

const getUserByUsername = async (username) => {
  console.log('querying the database to get a user by username');
  try {
    await client.connect();
    const {
      rows: [user],
    } = await client.query(`SELECT * FROM users WHERE username = $1`, [
      username,
    ]);
    return user;
  } catch (error) {
    throw new Error(error);
  } finally {
    console.log('closing the database connection');
    await client.end();
  }
};

const updateLoginTimestamp = async (id) => {
  console.log('querying the database to update a user login timestamp');
  try {
    await client.connect();
    const {
      rows: [last_login],
    } = await client.query(
      `UPDATE users SET last_login = CURRENT_TIMESTAMP WHERE id = $1 RETURNING last_login`,
      [id]
    );
    return last_login;
  } catch (error) {
    throw new Error(error);
  } finally {
    console.log('closing the database connection');
    await client.end();
  }
};

module.exports = {
  create,
  getUserByUsername,
  updateLoginTimestamp,
};
