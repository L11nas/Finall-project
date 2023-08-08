const express = require('express');
const router = express.Router();
const db = require('../src/db_config/db'); // Duomenų bazės sąsaja

// Maršrutas gauti visus vartotojus
router.get('/users', async (req, res) => {
  try {
    const connection = await db;
    const [results, fields] = await connection.query('SELECT * FROM Users');
    res.json(results);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Maršrutas sukurti naują vartotoją
router.post('/users', async (req, res) => {
  const { first_name, last_name, email, age } = req.body;
  const query =
    'INSERT INTO Users (first_name, last_name, email, age) VALUES (?, ?, ?, ?)';
  try {
    const connection = await db;
    const [result] = await connection.query(query, [
      first_name,
      last_name,
      email,
      age,
    ]);
    res.json({ id: result.insertId });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Kitos CRUD operacijų maršrutai...

module.exports = router;
