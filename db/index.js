const models = require('./models');
const client = require('./client');

module.exports = {
  client,
  ...models,
};
