const express = require('express');
const helmet = require('helmet');
const cors = require('cors');

const userRouter = require('../routers/users/userRouter.js');
const candidateRouter = require('../routers/candidates/candidateRouter.js');
// const mockRouter = require('../fakedata.js');

const server = express();

server.use(helmet());
server.use(express.json());
server.use(cors());

server.use('/users', userRouter);
server.use('/candidates', candidateRouter);
// server.use('/mock', mockRouter);

server.get('/', (req, res) => {
    res.status(200).json('API is running');
});

module.exports = server;