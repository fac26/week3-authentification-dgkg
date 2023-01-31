const express = require('express');
const cookieParser = require('cookie-parser');
const home = require('../routes/home');

const server = express();

const staticHandler = express.static('public');
const cookies = cookieParser(process.env.COOKIE_SECRET);
const body = express.urlencoded({ extended: false });

server.use(staticHandler);
server.use(cookies);
server.use(body);

server.get('/', home.get);

module.exports = server;
