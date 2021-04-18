const { Client } = require("pg");
// const dbConfig = require("../config/db.config.js");

//LOCAL DATABASE
const knex = require('knex');
require('dotenv').config();

const client = knex({
    client: 'pg',
    connection: {
        host: process.env.DATABASE_HOST,
        user: process.env.DATABASE_USERNAME,
        password: process.env.DATABASE_PASSWORD,
        database: process.env.DATABASE,
    },
});

//HEROKU DATABASE
// const client = new Client({
//   connectionString: process.env.DATABASE_URL,
//   ssl: {
//     rejectUnauthorized: false
//   }
// });

module.exports = client;
