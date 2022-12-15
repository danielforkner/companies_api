const { Client } = require('pg');
const { DB_URL } = require('../connections');

const create = async ({ username, password }) => {
  const client = new Client(DB_URL);
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
  const client = new Client(DB_URL);
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

module.exports = {
  create,
  getUserByUsername,
};
