const knexfile = require('../../knexfile');
const knex = require('knex')(knexfile ['development']);
console.log('database connection sucesso')
module.exports = knex;