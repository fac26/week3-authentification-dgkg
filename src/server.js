const express = require('express');
const cookieParser = require('cookie-parser');
const home = require('../routes/home');
const signUp = require('../routes/sign-up');
const logIn = require('../routes/log-in');

const server = express();

const staticHandler = express.static('public');
const cookies = cookieParser(process.env.COOKIE_SECRET);
const body = express.urlencoded({ extended: false });

server.use(staticHandler);
server.use(cookies);
server.use(body);

server.get('/', home.get);
server.get('/sign-up', signUp.get);
server.get('/log-in', logIn.get);
server.get('/log-in', logIn.post);

module.exports = server;
