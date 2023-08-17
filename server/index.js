const express = require('express');
const cors = require('cors');
const usersRouter = require('./routes/routes');
const db = require('./src/db_config/db');
const server = express();

const port = process.env.PORT || 8080;

server.use(express.json());
server.use(cors());

server.get('/', (req, res) => {
  res.send('Server is running');
});

server.use('/api', usersRouter);

server.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
