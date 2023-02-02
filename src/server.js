const express = require('express');
const cookieParser = require('cookie-parser');

const server = express();
const home = require('../routes/home');
const signUp = require('../routes/sign-up');
const logIn = require('../routes/log-in');
const logOut = require('../routes/log-out');
const posts = require('../routes/posts');

const staticHandler = express.static('public');
const cookies = cookieParser(process.env.COOKIE_SECRET);
const body = express.urlencoded({ extended: false });

server.use(staticHandler);
server.use(cookies);

server.get('/', home.get);
server.post('/', body, home.post);
server.get('/sign-up', signUp.get);
server.get('/log-in', logIn.get);
server.post('/log-in', body, logIn.post);
server.post('/sign-up', body, signUp.post);
server.post('/log-out', body, logOut.post);
server.get('/posts', posts.get);

module.exports = server;
