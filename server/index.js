const express = require('express');
const cors = require('cors');
const db = require('../server/src/db_config/db');

const server = express();

const port = 8080;

server.use(express.json());
server.use(cors());

server.get('/', (req, res) => {
  res.send('server is running');
});

const usersRouter = require('../server/routes/routes');
server.use('/api', usersRouter);

server.listen(port, () => {
  console.log(`server is running portu ${port}`);
});
