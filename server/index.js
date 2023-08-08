const express = require('express');
const server = express();
const port = 8080;
const cors = require('cors'); // Jei reikalingas CORS

server.use(express.json());
server.use(cors()); // Naudojame CORS, kad būtų leidžiama atlikti užklausas iš kitų domenų

const db = require('../server/src/db_config/db'); // Čia turėtų būti jūsų duomenų bazės sąsaja

// Maršrutai
server.get('/', (req, res) => {
  res.send('Serveris veikia'); // Testo maršrutas
});

const usersRouter = require('../server/routes/routes'); // Čia galite importuoti jūsų sukurtus maršrutus
server.use('/registration-service', usersRouter); // Naudojame "/api" prefiksą jūsų API maršrutams

// Paleidžiame serverį
server.listen(port, () => {
  console.log(`Serveris veikia portu ${port}`);
});
