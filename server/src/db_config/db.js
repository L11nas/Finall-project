const mysql = require('mysql2/promise'); // Naudokite promisų versiją
require('dotenv').config();

const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
});

// Nebandykite jungtis prie duomenų bazės čia

module.exports = db;
